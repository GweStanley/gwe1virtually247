// app/api/chat/route.js
import { NextResponse } from "next/server";
import { businesses } from "../../lib/businesses";
import { extractLead } from "../../lib/leadLogic";

export async function POST(req) {
  try {
    const { message, site } = await req.json();
    const business = businesses[site] || businesses.default;
    const text = message.toLowerCase().trim();

    // ---- 1. Strict FAQ keyword match ----
    for (const faq of business.faqs) {
      if (faq.keywords?.some(k => text.includes(k.toLowerCase()))) {
        return NextResponse.json({ reply: faq.a, faqId: faq.id });
      }
    }

    // ---- 2. Strict booking detection ----
    const bookingKeywords = ["booking", "appointment"];
    if (bookingKeywords.some(k => text.includes(k))) {
      return NextResponse.json({ reply: "booking" });
    }

    // ---- 3. Fallback for unrecognized questions ----
    const lead = extractLead(message);
    return NextResponse.json({
      reply: "Sorry, Your question is not very clear. Please rephrase or select from the FAQ above.",
      lead,
    });

  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { reply: "Sorry, something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
