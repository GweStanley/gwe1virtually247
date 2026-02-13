export function extractLead(message = "") {
const text = message.toLowerCase();


const phoneMatch = message.match(/(\+?\d[\d\s-]{6,14}\d)/);
const nameMatch = message.match(/my name is ([a-zA-Z]+)/i);


const bookingKeywords = ["book", "appointment", "schedule", "come today", "need a plumber", "fix", "repair"];
const pricingKeywords = ["price", "cost", "how much", "charges", "fee"];
const urgencyKeywords = ["urgent", "asap", "emergency", "now", "today"];


const isBooking = bookingKeywords.some(k => text.includes(k));
const isPricing = pricingKeywords.some(k => text.includes(k));


let intent = "general";
if (isBooking) intent = "booking";
else if (isPricing) intent = "pricing";


let urgency = "normal";
if (urgencyKeywords.some(k => text.includes(k))) urgency = "urgent";


let confidence = 0;
if (phoneMatch) confidence += 0.4;
if (isBooking) confidence += 0.3;
if (urgency === "urgent") confidence += 0.2;
if (nameMatch) confidence += 0.1;


return {
name: nameMatch ? nameMatch[1] : null,
phone: phoneMatch ? phoneMatch[1].replace(/\s|-/g, "") : null,
intent,
urgency,
confidence: Math.min(confidence, 1),
inquiry: message,
actionable: confidence >= 0.5,
};
}