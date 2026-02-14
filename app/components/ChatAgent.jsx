'use client';

import { useState, useEffect, useRef } from "react";
import { businesses } from "../lib/businesses";

export default function ChatAgent({ site }) {
  const business = businesses[site] || businesses.default;

  const CHAT_KEY = `chat_${site}`;

  const [messages, setMessages] = useState([
    { role: "assistant", content: `Hi 👋 I’m your virtual assistant for ${business.name}. How can I help you today?` },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [hideBooking, setHideBooking] = useState(false);
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    service: "",
    details: "",
    location: "",
    urgency: "Normal",
    preference: ""
  });
  const [faqOpen, setFaqOpen] = useState(false);

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); };

  // ---- Load chat from localStorage on mount ----
  useEffect(() => {
    const saved = localStorage.getItem(CHAT_KEY);
    if (saved) {
      try {
        const { messages: storedMessages, timestamp } = JSON.parse(saved);
        if (Date.now() - timestamp < 24 * 60 * 60 * 1000) { // 24h
          setMessages(storedMessages);
        } else {
          localStorage.removeItem(CHAT_KEY); // expired
        }
      } catch (e) {
        console.error("Failed to parse stored messages", e);
        localStorage.removeItem(CHAT_KEY);
      }
    }
  }, []);

  // ---- Save messages to localStorage on update ----
  useEffect(() => {
    localStorage.setItem(CHAT_KEY, JSON.stringify({ messages, timestamp: Date.now() }));
  }, [messages]);

  useEffect(() => { scrollToBottom(); }, [messages, showBooking, faqOpen]);

  // ---- Keyword / FAQ detection ----
  function detectFaqOrBooking(message, fromFaqButton = false) {
    const text = message.toLowerCase().trim();

    if (fromFaqButton) {
      const faq = business.faqs.find(f => f.q.toLowerCase() === text);
      if (faq) return { type: "faq", answer: faq.a, faqId: faq.id };
      return { type: "general" };
    }

    const bookingWords = ["booking", "appointment"];
    if (bookingWords.some(word => text.includes(word))) return { type: "booking" };

    const exactMatch = business.faqs.find(f => f.q.toLowerCase() === text);
    if (exactMatch) return { type: "faq", answer: exactMatch.a, faqId: exactMatch.id };

    for (const faq of business.faqs) {
      if (faq.keywords?.some(k => text.includes(k.toLowerCase()))) {
        return { type: "faq", answer: faq.a, faqId: faq.id };
      }
    }

    return { type: "general" };
  }

  // ---- Small Talk Detection ----
  function detectSmallTalk(message) {
    const cleaned = message.toLowerCase().replace(/[^\w\s]/gi, "").trim();

    const greetings = ["hi", "hello", "hey", "good morning", "good afternoon", "good evening"];
    const thanks = ["thanks", "thank you", "appreciate it"];
    const bye = ["bye", "goodbye", "see you", "talk later"];
    const howAreYou = ["how are you", "hows it going", "how are things"];

    if (greetings.includes(cleaned)) return `Hello 👋, I am the assistant of ${business.name}.How can I assist you with today 😊?`;
    if (howAreYou.some(q => cleaned.includes(q))) return `I'm doing great and ready to help! What can I assist you with today?`;
    if (thanks.some(t => cleaned.includes(t))) return `You're very welcome 😊 Let me know if you need anything else.`;
    if (bye.some(b => cleaned.includes(b))) return `Goodbye 👋 If you need anything later, I'm here to help.`;

    return null;
  }

  async function sendMessage(text, fromFaqButton = false) {
    if (!text || !text.trim()) return;

    setMessages(m => [...m, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    const detection = detectFaqOrBooking(text, fromFaqButton);
    const smallTalkResponse = detectSmallTalk(text);

    // Respond to small talk only if not a booking or FAQ
    if (smallTalkResponse && detection.type === "general") {
      setTimeout(() => {
        setMessages(m => [...m, { role: "assistant", content: smallTalkResponse }]);
        setLoading(false);
      }, 300);
      return;
    }

    if (detection.type === "faq") {
      setTimeout(() => {
        setMessages(m => [...m, { role: "assistant", content: detection.answer }]);
        setLoading(false);
      }, 400);
      return;
    }

    if (detection.type === "booking") {
      setMessages(m => [...m, { role: "assistant", content: "I see you want a service! Let’s quickly book it so we can reserve your spot." }]);
      setShowBooking(true);
      setLoading(false);
      return;
    }

    // fallback AI for general chat
    setMessages(m => [...m, { role: "assistant", content: "..." }]);
    setTimeout(() => {
      setMessages(m => {
        const msgs = [...m];
        msgs[msgs.length - 1].content = "I'm here to help! You can ask about services, prices, or book a service. Please be elaborate or check our FAQ above ☝️.";
        return msgs;
      });
      setLoading(false);
    }, 600);
  }

  async function submitBooking() {
    if (!booking.name || !booking.phone) return;

    setLoading(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...booking, site }),
      });
      const data = await res.json();

      if (data.success) {
        setMessages(m => [...m, { role: "assistant", content: "✅ Thanks. Your booking has been sent. The team will reach out to you soonest." }]);
        setHideBooking(true);
        setTimeout(() => {
          setShowBooking(false);
          setHideBooking(false);
          setBooking({ name: "", phone: "", service: "", details: "", location: "", urgency: "Normal", preference: "" });
        }, 300);
      } else throw new Error(data.error);
    } catch (err) {
      setMessages(m => [...m, { role: "assistant", content: "❌ Failed to send booking. Please try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.wrapper}>
      <div style={{ ...styles.header, background: business.themeColor }}>
        <div>
          <strong>{business.avatar} {business.name}</strong>
          <div style={styles.sub}>{business.tagline}</div>
          <div style={styles.sub}>{business.location}</div>
          <div style={styles.sub}>{business.hours}</div>
        </div>
        <span style={styles.badge}>Online 24/7</span>
      </div>

      <div style={styles.faqAndBookBar}>
        <button style={styles.faqToggle} onClick={() => setFaqOpen(!faqOpen)}>
          {faqOpen ? "Hide FAQ" : "Show FAQ"}
        </button>
        <button style={styles.bookNowBtn} onClick={() => setShowBooking(true)}>📌 Book Now</button>
      </div>

      {faqOpen && (
        <div style={styles.faqPanel}>
          {business.faqs.map(faq => (
            <button key={faq.id} style={styles.faqBtn} onClick={() => { sendMessage(faq.q, true); setFaqOpen(false); }}>
              ❓ {faq.q}
            </button>
          ))}
        </div>
      )}

      <div style={styles.messages}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              alignSelf: m.role === "user" ? "flex-end" : "flex-start",
              background: m.role === "user" ? "#DCF8C6" : "#fff",
            }}
          >
            {m.content}
          </div>
        ))}
        {loading && <div style={{ ...styles.message, fontStyle: "italic", color: "#555" }}>Agent is typing...</div>}
        <div ref={messagesEndRef} />
      </div>

      {!showBooking && (
        <div style={styles.inputBar}>
          <input
            style={styles.input}
            placeholder="Ask a question…"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && sendMessage(input)}
          />
          <button style={styles.sendBtn} onClick={() => sendMessage(input)}>Send</button>
        </div>
      )}

      {showBooking && (
        <div style={styles.modalOverlay}>
          <div style={{
            ...styles.modal,
            opacity: hideBooking ? 0 : 1,
            transform: hideBooking ? "translateY(-20px)" : "translateY(0)",
            transition: "opacity 0.3s, transform 0.3s"
          }}>
            <h3>Book a Service</h3>
            <select style={styles.modalInput} value={booking.service} onChange={e => setBooking({ ...booking, service: e.target.value })}>
              <option value="">Select Service</option>
              {business.services.map(s => <option key={s}>{s}</option>)}
            </select>
            <input style={styles.modalInput} placeholder="Your Name" value={booking.name} onChange={e => setBooking({ ...booking, name: e.target.value.toUpperCase() })} />
            <input style={styles.modalInput} placeholder="Phone / WhatsApp / email" value={booking.phone} onChange={e => setBooking({ ...booking, phone: e.target.value.toLowerCase() })} />
            <select style={styles.modalInput} value={booking.preference || ""} onChange={e => setBooking({ ...booking, preference: e.target.value })}>
              <option value="" disabled>Preferred Means of Contact</option>
              <option value="Call">Call</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Email">Email</option>
            </select>
            <input style={styles.modalInput} placeholder="Location" value={booking.location} onChange={e => setBooking({ ...booking, location: e.target.value.toUpperCase() })} />
            <select style={styles.modalInput} value={booking.urgency} onChange={e => setBooking({ ...booking, urgency: e.target.value })}>
              <option>Normal</option>
              <option>Urgent</option>
              <option>Emergency</option>
            </select>
            <textarea style={{ ...styles.modalInput, height: 80 }} placeholder="Describe your request" value={booking.details} onChange={e => setBooking({ ...booking, details: e.target.value })} />
            <div style={{ display: "flex", gap: 8 }}>
              <button style={styles.confirmBtn} onClick={submitBooking}>Send Booking</button>
              <button style={styles.cancelBtn} onClick={() => setShowBooking(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ---- Styles ----
const styles = {
  wrapper: { maxWidth: 480, height: "90vh", margin: "0 auto", display: "flex", flexDirection: "column", background: "#ECE5DD", borderRadius: 12, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.15)", fontFamily: "system-ui, sans-serif" },
  header: { background: "#075E54", color: "#fff", padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 16 },
  badge: { background: "#25D366", padding: "4px 8px", borderRadius: 12, fontSize: 12 },
  faqAndBookBar: { display: "flex", justifyContent: "space-between", padding: 8 },
  faqPanel: { maxHeight: 220, overflowY: "auto", padding: 8, background: "#fff", borderBottom: "1px solid #ddd", display: "flex", flexDirection: "column", gap: 6 },
  faqBtn: { padding: 8, borderRadius: 8, border: "1px solid #ccc", background: "#fff", textAlign: "left", cursor: "pointer", fontSize: 14 },
  bookNowBtn: { padding: 8, borderRadius: 8, border: "none", background: "#25D366", color: "#fff", cursor: "pointer", fontSize: 14, fontWeight: "bold" },
  messages: { flex: 1, padding: 12, display: "flex", flexDirection: "column", gap: 8, overflowY: "auto" },
  message: { maxWidth: "80%", padding: "10px 14px", borderRadius: 12, fontSize: 14, boxShadow: "0 1px 2px rgba(0,0,0,0.1)" },
  inputBar: { display: "flex", padding: 8, background: "#fff", borderTop: "1px solid #ddd" },
  input: { flex: 1, padding: 10, borderRadius: 20, border: "1px solid #ccc", outline: "none", fontSize: 14 },
  sendBtn: { marginLeft: 8, padding: "0 16px", borderRadius: 20, border: "none", background: "#25D366", color: "#fff", cursor: "pointer" },
  modalOverlay: { position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)", display: "flex", justifyContent: "center", alignItems: "center" },
  modal: { background: "#fff", padding: 20, borderRadius: 12, width: 360, display: "flex", flexDirection: "column", gap: 10 },
  modalInput: { padding: 10, borderRadius: 8, border: "1px solid #ccc", fontSize: 14 },
  confirmBtn: { flex: 1, padding: 12, borderRadius: 8, border: "none", background: "#25D366", color: "#fff", cursor: "pointer", fontWeight: "bold" },
  cancelBtn: { flex: 1, padding: 12, borderRadius: 8, border: "none", background: "#ccc", cursor: "pointer" },
};
