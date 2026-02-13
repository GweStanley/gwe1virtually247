import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { businesses } from "../../lib/businesses";


export async function POST(req) {
try {
const { name, phone, service, details, location, urgency, preference, site } = await req.json();
const business = businesses[site] || businesses.default;


const subject = `New Booking: ${service}`;

const text = `New booking for ${business.name}

Name: ${name}
contact: ${phone}
Preferred Contact: ${preference}
Service: ${service}
Location: ${location}
Urgency: ${urgency}
Details: ${details}`;


const transporter = nodemailer.createTransport({
service: "Gmail",
auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});


await transporter.sendMail({
from: `"Virtual Assistant" <${process.env.SMTP_USER}>`,
to: business.ownerEmail,
subject,
text,
});


return NextResponse.json({ success: true, message: "Booking sent to owner" });
} catch (err) {
console.error(err);
return NextResponse.json({ success: false, error: err.message }, { status: 500 });
}
}