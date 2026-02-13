// lib/businesses.js

export const businesses = {
  "acme-plumbing": {
    name: "Acme Plumbing Agent",
    tagline: "Fast, Reliable Plumbing Services",
    location: "Bamenda",
    hours: "Mon–Sat · 8am–6pm",
    themeColor: "#075E54",
    avatar: "🛠️",

    services: [
      "Emergency Repairs",
      "Leak Fixing",
      "Pipe Installation",
      "Bathroom Plumbing",
      "Water Heater Service",
    ],

    faqs: [
      {
        id: 1,
        q: "What are your business hours?",
        a: "We are open Monday–Saturday from 8am to 6pm.",
        keywords: ["business hours", "opening hours", "working hours"]
      },
      {
        id: 2,
        q: "Do you offer emergency services?",
        a: "Yes! Our emergency plumbing services are available 24/7.",
        keywords: ["emergency service", "plumbing emergency"]
      },
      {
        id: 3,
        q: "How long does a typical service take?",
        a: "Most services are completed within 2–3 hours, depending on complexity.",
        keywords: ["service duration", "how long does it take"]
      },
      {
        id: 4,
        q: "What payment methods do you accept?",
        a: "We accept cash, card, and bank transfers.",
        keywords: ["payment methods", "how to pay"]
      },
      {
        id: 5,
        q: "Do you provide guarantees?",
        a: "Yes, we offer a 30-day service guarantee on most repairs.",
        keywords: ["service guarantee", "repair warranty"]
      },
      {
        id: 6,
        q: "Can I book a service online?",
        a: "Yes, you can request a service directly through this assistant.",
        keywords: ["online service request"]
      },
      {
        id: 7,
        q: "Do you offer free estimates?",
        a: "Yes, we provide free estimates before any work begins.",
        keywords: ["free estimate", "price estimate"]
      },
      {
        id: 8,
        q: "Are your technicians certified?",
        a: "All our technicians are fully certified and insured.",
        keywords: ["certified technicians", "licensed plumbers"]
      },
      {
        id: 9,
        q: "Which areas do you serve?",
        a: "We serve Bamenda and surrounding areas.",
        keywords: ["service area", "areas served",'location','office', 'head office']
      },
      {
        id: 10,
        q: "How much do your services cost?",
        a: `
💧 Emergency Repairs: $80–$150
🚰 Leak Fixing: $50–$120
🔧 Pipe Installation: $100–$300
🛁 Bathroom Plumbing: $150–$400
🔥 Water Heater Service: $100–$250
(Prices depend on complexity and parts required)
`,
        keywords: ["service pricing", "plumbing prices",'price']
      },
      {
        id: 11,
        q: "Do you offer discounts for repeat customers?",
        a: "Yes! We offer loyalty discounts for returning customers.",
        keywords: ["loyalty discount", 'discount']
      },
      {
        id: 12,
        q: "Can I cancel a service request?",
        a: "You can cancel a service request up to 24 hours in advance.",
        keywords: ["cancel"]
      },
      {
        id: 13,
        q: "Do you offer same-day service?",
        a: "Same-day service may be available depending on workload.",
        keywords: ["same day service"]
      },
      {
        id: 14,
        q: "Are your staff background-checked?",
        a: "Yes, all staff undergo background checks before hiring.",
        keywords: ["background check"]
      },
      {
        id: 15,
        q: "How do I explain my plumbing problem?",
        a: "You can describe your issue here and we’ll guide you.",
        keywords: ["describe problem"]
      },
      {
        id: 16,
        q: "Can I request a specific technician?",
        a: "Yes, you can request a preferred technician during service request.",
        keywords: ["preferred technician"]
      },
      {
        id: 17,
        q: "What safety measures do you follow?",
        a: "We follow strict safety and hygiene protocols on every job.",
        keywords: ["safety measures"]
      },
      {
        id: 18,
        q: "Do you offer after-service support?",
        a: "Yes, we provide after-service support if needed.",
        keywords: ["after service", 'follow-up']
      },
      {
        id: 19,
        q: "Can I leave feedback?",
        a: "Yes, you can leave feedback through our official channels.",
        keywords: ["leave feedback"]
      },
      {
        id: 20,
        q: "How do I contact you?",
        a: "You can contact us through this assistant for any inquiries. Call during working hrs ",
        keywords: ["contact business"]
      }
    ],

    ownerEmail: "gwestanley1@gmail.com",
  },

  //pathfinderlabs// 
  "gs-pathfinder-labs": {
  name: "GS Pathfinder Labs",
  tagline: "Innovating Digital Solutions for the Modern World",
  location: "Mainly Remote",
  hours: "Mon–Fri · 9am–6pm",
  themeColor: "#311454",
  avatar: "💻🚀🧠",
  services: [
    "Front-End Development",
    "Back-End Development",
    "UI/UX Design",
    "Graphic Design",
    "Accounting & Management Solutions",
    "AI Agents"
  ],
  faqs: [
    {
      id: 1,
      q: "What services do you offer?",
      a: "We offer front-end & back-end development, AI Agents, UI/UX design, graphic design, accounting solutions, and digital marketing support.",
      keywords: ["services", "offer", "what can you do", "solutions"]
    },
    {
      id: 2,
      q: "How much do your services cost?",
      a: "Costs depend on project scope and complexity. Typical web or app projects start around $800–$10,000, while advanced solutions can go higher. Contact us with your project details for a personalized quote.",
      keywords: ["price", "cost", "fee", "quote","quotation", "pricing"]
    },
    {
      id: 3,
      q: "How long does a project take?",
      a: "Project timelines vary. Small projects usually take 1–3 weeks, medium projects 1–2 months, and larger projects longer.",
      keywords: ["duration", "timeline", "how long", "project time"]
    },
    {
      id: 4,
      q: "Can you handle remote projects?",
      a: "Yes, we work with clients remotely worldwide using collaborative tools and communication platforms.",
      keywords: ["remote", "online", "virtual", "distant work"]
    },
    {
      id: 5,
      q: "Do you provide revisions or guarantees?",
      a: "We provide revisions within agreed project scope and ensure quality delivery for every project. And we use eternal services like Fiver for trust and transparency   ",
      keywords: ["revision", "guarantee", "assurance", "quality"]
    },
    {
      id: 6,
      q: "How do I start a project with you?",
      a: "You can start by sending us a booking request through this assistant above or contacting us directly with your project idea.",
      keywords: ["start project", "begin", "how to work with you", "hire", 'book']
    },
    {
      id: 7,
      q: "Do you work with startups?",
      a: "Absolutely! We specialize in helping startups and growing businesses bring their digital ideas to life.",
      keywords: ["startup", "new business", "early stage"]
    },
    {
      id: 8,
      q: "What payment methods do you accept?",
      a: "We accept bank transfer, PayPal, and card payments.",
      keywords: ["payment", "how to pay", "pay"]
    },
    {
      id: 9,
      q: "How can I contact you for questions?",
      a: "Booking a service will auto-contact our team. You can also message us directly on WhatsApp: +237690533474 or email pathfinderlabs1@gmail.com.",      keywords: ["contact", "email", "call", "reach"]
    },
    {
      id: 10,
      q: "Do you offer project consultation?",
      a: "Yes, we offer consultations to understand your project goals and recommend solutions.",
      keywords: ["consultation", "advice", "project guidance", "consult"]
    },
      {
      id: 11,
      q: "where are you Located?",
      a: "We are an LLC in Houston Texas but we mostly operate remotely with over 50 highly qualified agents worldwide",
      keywords: ["office", "time zone", "operation zone", "location", 'head quarters']
    }

  ],
  ownerEmail: "gwestanleyayungha@gmail.com"
},

  

  default: {
    name: "Default Business",
    services: [],
    faqs: [],
    ownerEmail: "admin@example.com",
  },
};
