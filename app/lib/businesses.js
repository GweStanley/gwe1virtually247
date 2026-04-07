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
  a: "Using the 'Book Now' above ☝️ will auto reach us. You can also message us directly on WhatsApp: or Email.",
  links: [
    {
      label: "WhatsApp",
      url: "https://wa.me/237690533474"
    },
    {
      label: "Email",
      url: "mailto:pathfinderlabs1@gmail.com"
    }
  ],
  keywords: ["contact", "email", "call", "reach"]
},

    {
      id: 10,
      q: "Do you offer project consultation?",
      a: "Yes, we offer consultations to understand your project goals and recommend solutions.",
      keywords: ["consultation", "advice", "project guidance", "consult"]
    },
{
  id: 11,
  q: "Where are you located?",
  a: "We are an LLC in Houston, Texas but we mostly operate remotely with over 50 highly qualified agents worldwide. You can get directions to our office using the link below.",
  keywords: ["office", "located", "operation", "location", "headquarters"],
  links: [
    {
      label: "Get Directions",
      url: "https://www.google.com/maps/dir/?api=1&destination=Houston+TX+77002"
    }
  ]
}

  ],
  ownerEmail: "gwestanleyayungha@gmail.com"
},

//Real Estate//
"lone-star-realty": {
  name: "Lone Star Realty Agent",
  tagline: "Smart Property Solutions Across Texas",
  location: "Houston, TX",
  hours: "Mon–Sat · 9am–7pm",
  themeColor: "#1E3A8A",
  avatar: "🏠",

  services: [
    "Home Sales",
    "Luxury Listings",
    "Rentals",
    "Valuations",
    "Investment Consulting"
  ],

  faqs: [
    { id: 1, q: "Which areas do you operate in?", a: "We serve Houston and surrounding metro areas.", keywords: ["areas","zones","coverage"] },
    { id: 2, q: "What is your commission structure?", a: "Commission ranges between 3%–6% depending on listing agreement.", keywords: ["commission","fees","percentage"] },
    { id: 3, q: "Do you assist first-time buyers?", a: "Yes, we guide first-time buyers from mortgage pre-approval to closing.", keywords: ["firsttime","buyers","newbie"] },
    { id: 4, q: "Can I schedule a property tour?", a: "You can book a physical or virtual tour directly here.", keywords: ["tour","viewing","visit"] },
    { id: 5, q: "Do you provide market analysis?", a: "Yes, we provide detailed comparative market analysis reports.", keywords: ["analysis","market","comparables"] },
    { id: 6, q: "How long does selling take?", a: "Average closing time ranges 30–60 days depending on demand.", keywords: ["timeline","duration","closing"] },
    { id: 7, q: "Do you handle negotiations?", a: "Yes, we negotiate offers to maximize your return.", keywords: ["negotiation","offers","bidding"] },
    { id: 8, q: "Do you assist investors?", a: "We provide ROI projections and rental yield estimates.", keywords: ["investors","roi","yield"] },
    { id: 9, q: "Are inspections included?", a: "We coordinate inspections with certified inspectors.", keywords: ["inspection","survey","assessment"] },
    { id: 10, q: "Do you help with financing?", a: "We connect clients with trusted mortgage lenders.", keywords: ["financing","mortgage","loan"] },
    { id: 11, q: "What documents are required?", a: "You will need ID, proof of funds, and property disclosures.", keywords: ["documents","paperwork","forms"] },
    { id: 12, q: "Are listings exclusive?", a: "Yes, we offer exclusive listing agreements for sellers.", keywords: ["exclusive","listing","contract"] },
    { id: 13, q: "Do you offer staging services?", a: "Yes, we provide professional staging consultations.", keywords: ["staging","presentation","decor"] },
    { id: 14, q: "Can I cancel a listing?", a: "Listing cancellation terms depend on your signed agreement.", keywords: ["cancel","terminate","withdraw"] },
    { id: 15, q: "Do you manage rentals?", a: "Yes, we offer tenant placement and property management.", keywords: ["management","tenants","leasing"] },
    { id: 16, q: "Are background checks done on tenants?", a: "Yes, we conduct screening and credit checks.", keywords: ["screening","credit","background"] },
    { id: 17, q: "Do you provide appraisals?", a: "We coordinate certified appraisal services.", keywords: ["appraisal","valuation","estimate"] },
    { id: 18, q: "Is there legal support?", a: "We collaborate with licensed real estate attorneys.", keywords: ["legal","attorney","compliance"] },
    { id: 19, q: "Do you handle relocations?", a: "Yes, we support interstate and corporate relocations.", keywords: ["relocation","transfer","corporate"] },
    { id: 20, q: "How do I get started?", a: "Simply share your goals and we’ll guide you step-by-step.", keywords: ["start","begin","process"] },
    { id: 21, q: "How much do you charge?", a: "We are a certifies real estate agency and we work on commissions basis.", keywords: ["Price","Fee","cost"] },
{  id: 22,
  q: "How can I contact you?",
  a: "Using the 'Book Now' above ☝️ will auto reach us. You can also message us directly on WhatsApp: or Email.",
  links: [
    {
      label: "WhatsApp",
      url: "https://wa.me/237690533474"
    },
    {
      label: "Email",
      url: "mailto:pathfinderlabs1@gmail.com"
    }
  ],
  keywords: ["contact", "email", "call", "reach"]
},

{
  id: 23,
  q: "Where are you located?",
  a: "We are an LLC in Houston, Texas but we mostly operate remotely with over 50 highly qualified agents worldwide. You can get directions to our office using the link below.",
  keywords: ["office", "located", "operation", "location", "headquarters"],
  links: [
    {
      label: "Get Directions",
      url: "https://www.google.com/maps/dir/?api=1&destination=Houston+TX+77002"
    }
  ]
}

  ],

  ownerEmail: "demo@lonestarrealty.com",
},
//Dental clinic//
"texas-smile-clinic": {
  name: "Texas Smile Dental",
  tagline: "Advanced Dental Care with Comfort",
  location: "Dallas, TX",
  hours: "Mon–Fri · 8am–5pm",
  themeColor: "#0EA5E9",
  avatar: "🦷",

  services: [
    "Cleanings",
    "Whitening",
    "Implants",
    "Orthodontics",
    "Emergency Care"
  ],

  faqs: [
    { id: 1, q: "Do you accept insurance plans?", a: "We accept most major PPO insurance providers and assist with claims processing.", keywords: ["insurance","coverage","provider"] },
    { id: 2, q: "How do I book an appointment?", a: "You can schedule directly through this assistant or request a callback.", keywords: ["appointment","schedule","booking"] },
    { id: 3, q: "Do you handle emergencies?", a: "Yes, we prioritize urgent dental emergencies during office hours.", keywords: ["emergency","urgent","pain"] },
    { id: 4, q: "What are consultation fees?", a: "Initial consultations start at $75 depending on evaluation complexity.", keywords: ["consultation","fees","pricing"] },
    { id: 5, q: "Do you treat children?", a: "Yes, we provide pediatric dentistry services.", keywords: ["children","pediatric","kids"] },
    { id: 6, q: "Is sedation available?", a: "We offer sedation options for anxious patients.", keywords: ["sedation","anxiety","comfort"] },
    { id: 7, q: "How long does whitening last?", a: "Professional whitening results typically last 1–2 years with proper care.", keywords: ["whitening","results","duration"] },
    { id: 8, q: "Are implants permanent?", a: "Dental implants are long-term restorative solutions when maintained properly.", keywords: ["implants","permanent","restoration"] },
    { id: 9, q: "Do you offer payment plans?", a: "Yes, flexible financing options are available.", keywords: ["financing","installments","plans"] },
    { id: 10, q: "What safety standards do you follow?", a: "We follow strict sterilization and infection-control protocols.", keywords: ["sterilization","hygiene","protocols"] },
    { id: 11, q: "How often should I visit?", a: "We recommend biannual checkups for preventive care.", keywords: ["checkup","frequency","visits"] },
    { id: 12, q: "Do you provide X-rays?", a: "Yes, digital radiography is available onsite.", keywords: ["xrays","radiography","imaging"] },
    { id: 13, q: "What happens during cleaning?", a: "Cleaning includes plaque removal, polishing, and oral examination.", keywords: ["cleaning","plaque","polishing"] },
    { id: 14, q: "Are braces available?", a: "We offer both traditional braces and clear aligners.", keywords: ["braces","aligners","orthodontics"] },
    { id: 15, q: "Do you handle root canals?", a: "Yes, we perform root canal therapy with modern equipment.", keywords: ["rootcanal","endodontics","treatment"] },
    { id: 16, q: "What materials are used for fillings?", a: "We use composite and porcelain restorative materials.", keywords: ["fillings","composite","porcelain"] },
    { id: 17, q: "Can I reschedule?", a: "Appointments can be rescheduled 24 hours in advance.", keywords: ["reschedule","change","modify"] },
    { id: 18, q: "Is cosmetic dentistry offered?", a: "Yes, we provide veneers and smile makeovers.", keywords: ["cosmetic","veneers","makeover"] },
    { id: 19, q: "Are procedures painful?", a: "We prioritize gentle techniques and pain management.", keywords: ["discomfort","sensitivity","numbing"] },
    { id: 20, q: "How do I contact support?", a: "You can message us here for assistance anytime.", keywords: ["contact","support","help"] },
    { id: 21, q: "How much do you charge?", a: "Our Prices range from $300 depending on your situation.", keywords: ["Price","Fee","cost"] },
{  id: 22,
  q: "How can I contact you?",
  a: "Using the 'Book Now' above ☝️ will auto reach us. You can also message us directly on WhatsApp: or Email.",
  links: [
    {
      label: "WhatsApp",
      url: "https://wa.me/237690533474"
    },
    {
      label: "Email",
      url: "mailto:pathfinderlabs1@gmail.com"
    }
  ],
  keywords: ["contact", "email", "call", "reach"]
},

{
  id: 23,
  q: "Where are you located?",
  a: "We are an LLC in Houston, Texas but we mostly operate remotely with over 50 highly qualified agents worldwide. You can get directions to our office using the link below.",
  keywords: ["office", "located", "operation", "location", "headquarters"],
  links: [
    {
      label: "Get Directions",
      url: "https://www.google.com/maps/dir/?api=1&destination=Houston+TX+77002"
    }
  ]
}
  ],

  ownerEmail: "demo@texassmile.com",
},
//Travel Agency//
"global-travel-texas": {
  name: "Global Travel Texas",
  tagline: "Your Gateway to Worldwide Adventures",
  location: "Austin, TX",
  hours: "Mon–Sat · 9am–6pm",
  themeColor: "#F59E0B",
  avatar: "✈️",

  services: [
    "Flights",
    "Hotels",
    "Packages",
    "Visas",
    "Insurance"
  ],

  faqs: [
    { id: 1, q: "Do you offer international flights?", a: "Yes, we book both domestic and international airfare.", keywords: ["flights","airfare","international"] },
    { id: 2, q: "Can I customize a package?", a: "Yes, we tailor itineraries to your preferences.", keywords: ["customize","itinerary","personalized"] },
    { id: 3, q: "Do you assist with visas?", a: "We guide clients through visa documentation requirements.", keywords: ["visa","documentation","embassy"] },
    { id: 4, q: "Is travel insurance mandatory?", a: "Some destinations require insurance; we provide coverage options.", keywords: ["insurance","coverage","policy"] },
    { id: 5, q: "How do cancellations work?", a: "Cancellation policies depend on airline or hotel terms.", keywords: ["cancellation","refund","penalty"] },
    { id: 6, q: "Can I reserve hotels only?", a: "Yes, standalone hotel bookings are available.", keywords: ["hotels","accommodation","rooms"] },
    { id: 7, q: "Do you arrange cruises?", a: "Yes, we offer international cruise packages.", keywords: ["cruise","voyage","ship"] },
    { id: 8, q: "What documents are required?", a: "Passport validity and entry permits are required.", keywords: ["passport","documents","entry"] },
    { id: 9, q: "Do you provide group discounts?", a: "Yes, discounted pricing applies to group travel.", keywords: ["group","discounts","bulk"] },
    { id: 10, q: "How far in advance should I book?", a: "We recommend booking 6–8 weeks prior to departure.", keywords: ["advance","booking","planning"] },
    { id: 11, q: "Are installment payments allowed?", a: "Installment plans are available for selected packages.", keywords: ["installments","payments","plans"] },
    { id: 12, q: "Do you assist with baggage policies?", a: "We clarify airline baggage allowances before departure.", keywords: ["baggage","luggage","allowance"] },
    { id: 13, q: "Can I modify my itinerary?", a: "Modifications depend on supplier rules.", keywords: ["modify","changes","adjustments"] },
    { id: 14, q: "Do you provide travel alerts?", a: "Yes, we inform clients of advisories and updates.", keywords: ["alerts","advisory","updates"] },
    { id: 15, q: "Are refunds guaranteed?", a: "Refund eligibility depends on fare conditions.", keywords: ["refunds","guarantee","eligibility"] },
    { id: 16, q: "Do you handle corporate travel?", a: "Yes, we manage corporate travel logistics.", keywords: ["corporate","business","enterprise"] },
    { id: 17, q: "Are tour guides included?", a: "Selected packages include professional guides.", keywords: ["guides","tour","escorted"] },
    { id: 18, q: "What destinations are popular?", a: "Europe, Asia, and Caribbean packages are highly requested.", keywords: ["destinations","popular","trending"] },
    { id: 19, q: "Do you offer honeymoon packages?", a: "Yes, romantic getaway packages are available.", keywords: ["honeymoon","romantic","couples"] },
    { id: 20, q: "How do I start planning?", a: "Share your travel dates and preferences to begin.", keywords: ["start","planning","begin"] },
{ id: 21, q: "How much do you charge?", a: "Our Prices range from $300 depending on your situation.", keywords: ["Price","Fee","cost"] },
{  id: 22,
  q: "How can I contact you?",
  a: "Using the 'Book Now' above ☝️ will auto reach us. You can also message us directly on WhatsApp: or Email.",
  links: [
    {
      label: "WhatsApp",
      url: "https://wa.me/237690533474"
    },
    {
      label: "Email",
      url: "mailto:pathfinderlabs1@gmail.com"
    }
  ],
  keywords: ["contact", "email", "call", "reach"]
},

{
  id: 23,
  q: "Where are you located?",
  a: "We are an LLC in Houston, Texas but we mostly operate remotely with over 50 highly qualified agents worldwide. You can get directions to our office using the link below.",
  keywords: ["office", "located", "operation", "location", "headquarters"],
  links: [
    {
      label: "Get Directions",
      url: "https://www.google.com/maps/dir/?api=1&destination=Houston+TX+77002"
    }
  ]
}

  ],

  ownerEmail: "demo@globaltraveltexas.com",
},

//Law firm//

"texas-immigration-law": {
  name: "Texas Immigration Law",
  tagline: "Trusted Legal Pathways to the U.S.",
  location: "Dallas, TX",
  hours: "Mon–Fri · 9am–6pm",
  themeColor: "#065F46",
  avatar: "⚖️",

  services: [
    "Green Cards",
    "Work Visas",
    "Citizenship",
    "Asylum",
    "Appeals"
  ],

  faqs: [
    { id: 1, q: "Do you handle family petitions?", a: "Yes, we assist with family-based immigration filings.", keywords: ["family","petition","sponsorship"] },
    { id: 2, q: "What types of work visas are supported?", a: "We process H1B, L1, O1 and employment categories.", keywords: ["work","employment","h1b"] },
    { id: 3, q: "How long does processing take?", a: "Timelines vary depending on USCIS workload.", keywords: ["processing","timeline","wait"] },
    { id: 4, q: "Are consultations confidential?", a: "All discussions are protected by attorney-client privilege.", keywords: ["confidential","privacy","privilege"] },
    { id: 5, q: "What are legal fees?", a: "Fees depend on case complexity and filing category.", keywords: ["fees","retainer","costs"] },
    { id: 6, q: "Do you represent clients in court?", a: "Yes, we provide representation in immigration court.", keywords: ["court","representation","hearing"] },
    { id: 7, q: "Can denied cases be appealed?", a: "Yes, appeals may be filed when applicable.", keywords: ["appeal","denial","reconsideration"] },
    { id: 8, q: "Do you offer document review?", a: "We carefully review and prepare immigration documents.", keywords: ["review","documents","forms"] },
    { id: 9, q: "Is deportation defense available?", a: "Yes, we defend removal proceedings.", keywords: ["deportation","removal","defense"] },
    { id: 10, q: "Do you assist students?", a: "We advise on F1 and student-related matters.", keywords: ["student","f1","education"] },
    { id: 11, q: "Are consultations virtual?", a: "Virtual consultations are available worldwide.", keywords: ["virtual","online","remote"] },
    { id: 12, q: "What evidence is required?", a: "Supporting documentation depends on petition type.", keywords: ["evidence","proof","supporting"] },
    { id: 13, q: "Do you handle asylum cases?", a: "Yes, we manage asylum applications and interviews.", keywords: ["asylum","refugee","protection"] },
    { id: 14, q: "Can status be adjusted?", a: "We assist with adjustment of status filings.", keywords: ["adjustment","status","residency"] },
    { id: 15, q: "Is expedited processing possible?", a: "Premium processing may be available for select petitions.", keywords: ["expedite","premium","fasttrack"] },
    { id: 16, q: "Are consultations paid?", a: "Initial consultations may require a booking fee.", keywords: ["consultation","booking","charge"] },
    { id: 17, q: "Do you provide translations?", a: "We assist with certified document translations.", keywords: ["translation","certified","language"] },
    { id: 18, q: "How are updates communicated?", a: "Clients receive email case updates.", keywords: ["updates","notifications","tracking"] },
    { id: 19, q: "Do you handle business immigration?", a: "Yes, we support corporate immigration filings.", keywords: ["business","corporate","company"] },
    { id: 20, q: "How do I begin my case?", a: "Share your immigration goals to start evaluation.", keywords: ["begin","evaluation","intake"] },
     { id: 21, q: "How much do you charge?", a: "Our Prices range from $300 depending on your situation.", keywords: ["Price","Fee","cost"] },
    {  id: 22,
  q: "How can I contact you?",
  a: "Using the 'Book Now' above ☝️ will auto reach us. You can also message us directly on WhatsApp: or Email.",
  links: [
    {
      label: "WhatsApp",
      url: "https://wa.me/237690533474"
    },
    {
      label: "Email",
      url: "mailto:pathfinderlabs1@gmail.com"
    }
  ],
  keywords: ["contact", "email", "call", "reach"]
},

{
  id: 23,
  q: "Where are you located?",
  a: "We are an LLC in Houston, Texas but we mostly operate remotely with over 50 highly qualified agents worldwide. You can get directions to our office using the link below.",
  keywords: ["office", "located", "operation", "location", "headquarters"],
  links: [
    {
      label: "Get Directions",
      url: "https://www.google.com/maps/dir/?api=1&destination=Houston+TX+77002"
    }
  ]
}
  ],

  ownerEmail: "demo@tximmigrationlaw.com",
},

//fitness Gym//
"elite-fitness-houston": {
  name: "Elite Fitness Studio",
  tagline: "Stronger Every Day",
  location: "Houston, TX",
  hours: "Mon–Sat · 6am–9pm",
  themeColor: "#DC2626",
  avatar: "💪",

  services: [
    "Personal Training",
    "Group Classes",
    "Weight Loss Programs",
    "Nutrition Coaching",
    "Body Assessments"
  ],

  faqs: [
    { id: 1, q: "Do you offer trial sessions?", a: "Yes, first-time visitors can book a trial workout.", keywords: ["trial","intro","demo"] },
    { id: 2, q: "What memberships are available?", a: "We offer monthly, quarterly, and annual memberships.", keywords: ["membership","plans","subscription"] },
    { id: 3, q: "Are trainers certified?", a: "All trainers hold nationally recognized certifications.", keywords: ["certified","credentials","qualified"] },
    { id: 4, q: "Is there a cancellation policy?", a: "Membership cancellations require 30-day notice.", keywords: ["cancellation","terminate","notice"] },
    { id: 5, q: "Do you provide diet plans?", a: "Yes, customized nutrition programs are available.", keywords: ["diet","nutrition","mealplan"] },
    { id: 6, q: "Are group classes included?", a: "Group sessions are included in premium packages.", keywords: ["group","classes","sessions"] },
    { id: 7, q: "What equipment is available?", a: "We provide modern strength and cardio equipment.", keywords: ["equipment","machines","weights"] },
    { id: 8, q: "Do you track progress?", a: "Yes, we conduct periodic fitness assessments.", keywords: ["progress","tracking","assessment"] },
    { id: 9, q: "Is personal training one-on-one?", a: "Yes, private sessions are fully personalized.", keywords: ["personal","private","oneonone"] },
    { id: 10, q: "Are there locker facilities?", a: "Secure locker and shower facilities are available.", keywords: ["locker","showers","facilities"] },
    { id: 11, q: "Do you offer strength training?", a: "Yes, structured strength programs are provided.", keywords: ["strength","lifting","resistance"] },
    { id: 12, q: "Is cardio training available?", a: "We provide guided cardio routines.", keywords: ["cardio","endurance","aerobic"] },
    { id: 13, q: "Are refunds possible?", a: "Refund eligibility depends on membership terms.", keywords: ["refund","eligibility","policy"] },
    { id: 14, q: "Is there an age restriction?", a: "Members must be 16+ with guardian consent if under 18.", keywords: ["age","restriction","minimum"] },
    { id: 15, q: "Do you offer online coaching?", a: "Virtual coaching programs are available.", keywords: ["online","virtual","remote"] },
    { id: 16, q: "Are classes overcrowded?", a: "We limit class sizes for quality coaching.", keywords: ["capacity","limit","crowded"] },
    { id: 17, q: "What safety measures exist?", a: "We enforce strict safety and hygiene standards.", keywords: ["safety","standards","hygiene"] },
    { id: 18, q: "Do you provide injury support?", a: "We modify workouts for rehabilitation needs.", keywords: ["injury","rehab","recovery"] },
    { id: 19, q: "Are supplements sold?", a: "Yes, approved fitness supplements are available.", keywords: ["supplements","protein","vitamins"] },
    { id: 20, q: "How do I enroll?", a: "Share your fitness goals to begin enrollment.", keywords: ["enroll","signup","join"] },
    { id: 21, q: "How much do you charge?", a: "Our Prices range from $300 depending on your situation.", keywords: ["Price","Fee","cost"] },
    {  id: 22,
  q: "How can I contact you?",
  a: "Using the 'Book Now' above ☝️ will auto reach us. You can also message us directly on WhatsApp: or Email.",
  links: [
    {
      label: "WhatsApp",
      url: "https://wa.me/237690533474"
    },
    {
      label: "Email",
      url: "mailto:pathfinderlabs1@gmail.com"
    }
  ],
  keywords: ["contact", "email", "call", "reach"]
},

{
  id: 23,
  q: "Where are you located?",
  a: "We are an LLC in Houston, Texas but we mostly operate remotely with over 50 highly qualified agents worldwide. You can get directions to our office using the link below.",
  keywords: ["office", "located", "operation", "location", "headquarters"],
  links: [
    {
      label: "Get Directions",
      url: "https://www.google.com/maps/dir/?api=1&destination=Houston+TX+77002"
    }
  ]
}
  ],

  ownerEmail: "demo@elitefitnesshouston.com",
},

//Restaurant//
"texas-grill-house": {
  name: "Texas Grill House ",
  tagline: "Authentic Flavors, Fresh Ingredients",
  location: "Austin, TX",
  hours: "Daily · 11am–10pm",
  themeColor: "#7C2D12",
  avatar: "🍽️",

  services: [
    "Dine-In",
    "Takeout",
    "Catering",
    "Private Events",
    "Online Orders"
  ],

  faqs: [
    { id: 1, q: "Do you accept reservations?", a: "Yes, table reservations can be made through this assistant.", keywords: ["reservations","booking","table"] },
    { id: 2, q: "Is delivery available?", a: "Delivery is available via partner platforms.", keywords: ["delivery","courier","shipping"] },
    { id: 3, q: "Do you offer catering?", a: "Yes, catering packages are available for events.", keywords: ["catering","events","functions"] },
    { id: 4, q: "Are vegetarian options available?", a: "Yes, vegetarian and plant-based meals are offered.", keywords: ["vegetarian","vegan","plantbased"] },
    { id: 5, q: "Do you handle allergies?", a: "We accommodate allergy requests when informed in advance.", keywords: ["allergy","dietary","intolerance"] },
    { id: 6, q: "What are your signature dishes?", a: "Our smoked brisket and ribeye are customer favorites.", keywords: ["signature","specialty","popular"] },
    { id: 7, q: "Is there outdoor seating?", a: "Yes, patio seating is available.", keywords: ["outdoor","patio","seating"] },
    { id: 8, q: "Do you host private parties?", a: "Private dining rooms are available upon request.", keywords: ["private","party","banquet"] },
    { id: 9, q: "What payment methods are accepted?", a: "We accept cards, cash, and digital wallets.", keywords: ["payment","cards","cash"] },
    { id: 10, q: "Are refunds provided?", a: "Refunds are assessed case-by-case.", keywords: ["refund","complaint","issue"] },
    { id: 11, q: "Do you offer discounts?", a: "Seasonal promotions are announced regularly.", keywords: ["discount","promotion","offer"] },
    { id: 12, q: "Is parking available?", a: "Free parking is available onsite.", keywords: ["parking","garage","lot"] },
    { id: 13, q: "Are pets allowed?", a: "Pets are allowed in outdoor seating areas.", keywords: ["pets","animals","dogs"] },
    { id: 14, q: "Do you provide kids menus?", a: "Yes, special children’s menus are available.", keywords: ["kids","children","menu"] },
    { id: 15, q: "Is WiFi available?", a: "Complimentary WiFi is provided.", keywords: ["wifi","internet","connection"] },
    { id: 16, q: "What are peak hours?", a: "Evenings and weekends are typically busiest.", keywords: ["peak","busy","crowd"] },
    { id: 17, q: "Do you sell gift cards?", a: "Yes, digital and physical gift cards are available.", keywords: ["giftcards","voucher","coupon"] },
    { id: 18, q: "Are ingredients locally sourced?", a: "We prioritize fresh local suppliers.", keywords: ["ingredients","local","suppliers"] },
    { id: 19, q: "Is live music hosted?", a: "Live music events are scheduled monthly.", keywords: ["livemusic","entertainment","band"] },
    { id: 20, q: "How do I place an order?", a: "You can order directly through this assistant.", keywords: ["order","purchase","checkout"] },
    { id: 21, q: "How much do you charge?", a: "Our Prices range from $300 depending on your order.", keywords: ["Price","Fee","cost"] },
{  id: 22,
  q: "How can I contact you?",
  a: "Using the 'Book Now' above ☝️ will auto reach us. You can also message us directly on WhatsApp: or Email.",
  links: [
    {
      label: "WhatsApp",
      url: "https://wa.me/237690533474"
    },
    {
      label: "Email",
      url: "mailto:pathfinderlabs1@gmail.com"
    }
  ],
  keywords: ["contact", "email", "call", "reach"]
},

{
  id: 23,
  q: "Where are you located?",
  a: "We are an LLC in Houston, Texas but we mostly operate remotely with over 50 highly qualified agents worldwide. You can get directions to our restaurant using the link below.",
  keywords: ["office", "located", "operation", "location", "headquarters"],
  links: [
    {
      label: "Get Directions",
      url: "https://www.google.com/maps/dir/?api=1&destination=Houston+TX+77002"
    }
  ]
}
  ],

  ownerEmail: "demo@texasgrillhouse.com",
},

// cleaning agency//
"sparkle-clean-texas": {
  name: "Sparkle Clean Texas",
  tagline: "Professional Cleaning You Can Trust",
  location: "San Antonio, TX",
  hours: "Mon–Sat · 8am–6pm",
  themeColor: "#059669",
  avatar: "🧼",

  services: [
    "Residential Cleaning",
    "Commercial Cleaning",
    "Deep Cleaning",
    "Move-Out Cleaning",
    "Office Maintenance"
  ],

  faqs: [
    { id: 1, q: "Do you provide free estimates?", a: "Yes, we offer no-obligation estimates.", keywords: ["estimate","quote","pricing"] },
    { id: 2, q: "Are cleaners insured?", a: "All staff are insured and bonded.", keywords: ["insured","bonded","coverage"] },
    { id: 3, q: "Do you bring supplies?", a: "Yes, we bring professional-grade equipment.", keywords: ["supplies","equipment","materials"] },
    { id: 4, q: "How long does cleaning take?", a: "Duration depends on property size.", keywords: ["duration","timeframe","hours"] },
    { id: 5, q: "Do you offer deep cleaning?", a: "Yes, intensive deep cleaning packages are available.", keywords: ["deepclean","intensive","detailed"] },
    { id: 6, q: "Are eco products used?", a: "Eco-friendly cleaning solutions are available.", keywords: ["eco","green","organic"] },
    { id: 7, q: "Can I reschedule service?", a: "Rescheduling requires 24-hour notice.", keywords: ["reschedule","change","adjust"] },
    { id: 8, q: "Do you clean offices?", a: "Yes, commercial contracts are available.", keywords: ["office","commercial","workspace"] },
    { id: 9, q: "Are background checks done?", a: "All employees undergo screening.", keywords: ["background","screening","verification"] },
    { id: 10, q: "Do you offer recurring plans?", a: "Weekly and monthly maintenance plans are available.", keywords: ["recurring","weekly","monthly"] },
    { id: 11, q: "Is satisfaction guaranteed?", a: "We offer a satisfaction guarantee policy.", keywords: ["guarantee","satisfaction","assurance"] },
    { id: 12, q: "Do you clean carpets?", a: "Carpet shampoo services are available.", keywords: ["carpet","shampoo","upholstery"] },
    { id: 13, q: "Are windows included?", a: "Interior window cleaning is included upon request.", keywords: ["windows","glass","panes"] },
    { id: 14, q: "What areas are served?", a: "We serve San Antonio and nearby suburbs.", keywords: ["areas","zones","coverage"] },
    { id: 15, q: "Do you handle move-outs?", a: "Yes, move-in and move-out packages are offered.", keywords: ["moveout","movein","relocation"] },
    { id: 16, q: "Is payment upfront?", a: "Payment is due after service completion.", keywords: ["payment","invoice","billing"] },
    { id: 17, q: "Are pets safe?", a: "We use pet-safe cleaning solutions.", keywords: ["pets","animals","safe"] },
    { id: 18, q: "Do you disinfect?", a: "Yes, disinfecting services meet health standards.", keywords: ["disinfect","sanitize","germs"] },
    { id: 19, q: "Can I customize tasks?", a: "Custom checklists are available.", keywords: ["custom","checklist","tasks"] },
    { id: 20, q: "How do I book?", a: "You can request cleaning directly here.", keywords: ["book","request","schedule"] },
    { id: 21, q: "How much do you charge?", a: "Our Prices range from $300 depending on your order.", keywords: ["Price","Fee","cost"] },
{  id: 22,
  q: "How can I contact you?",
  a: "Using the 'Book Now' above ☝️ will auto reach us. You can also message us directly on WhatsApp: or Email.",
  links: [
    {
      label: "WhatsApp",
      url: "https://wa.me/237690533474"
    },
    {
      label: "Email",
      url: "mailto:pathfinderlabs1@gmail.com"
    }
  ],
  keywords: ["contact", "email", "call", "reach"]
},

{
  id: 23,
  q: "Where are you located?",
  a: "We are an LLC in Houston, Texas but we mostly operate remotely with over 50 highly qualified agents worldwide. You can get directions to our office using the link below.",
  keywords: ["office", "located", "operation", "location", "headquarters"],
  links: [
    {
      label: "Get Directions",
      url: "https://www.google.com/maps/dir/?api=1&destination=Houston+TX+77002"
    }
  ]
}
  ],

  ownerEmail: "demo@sparklecleantx.com",
},


"ipekosol": {
  name: "iPekoSol",
  tagline: "Smart IT & Renewable Energy Solutions",
  location: "Cameroon & Germany",
  hours: "Mon–Sat · 9am–7pm",
  themeColor: "#0ee969",
  avatar: "⚡",

  services: [
    "Solar Energy Installation",
    "Hybrid & Off-Grid Power Systems",
    "IT Infrastructure & Networking",
    "Business Process Automation",
    "Web & Mobile App Development",
    "Cloud Backup & Data Management",
    "CCTV & Smart Surveillance Systems",
    "Technical Support & Maintenance"
  ],

  faqs: [
    { id: 1, q: "What does iPekoSol specialize in?", a: "We provide integrated IT and renewable energy solutions for businesses and communities.", keywords: ["services","specialize","offer","solutions"] },

    { id: 2, q: "Do you install solar systems?", a: "Yes, we design and install solar, hybrid, and off-grid energy systems.", keywords: ["solar","energy","installation","power"] },

    { id: 3, q: "Do you offer IT services?", a: "Yes, we provide networking, cloud systems, automation, and technical support.", keywords: ["IT","network","support","cloud"] },

    { id: 4, q: "Can you build custom software?", a: "Yes, we develop tailored web and mobile applications for businesses.", keywords: ["software","app","development","custom"] },

    { id: 5, q: "Do you support businesses?", a: "Yes, we provide IT infrastructure and automation solutions for organizations.", keywords: ["business","enterprise","organization","company"] },

    { id: 6, q: "Do you provide maintenance services?", a: "Yes, we offer ongoing technical support and system maintenance.", keywords: ["maintenance","support","repair","service"] },

    { id: 7, q: "What industries do you serve?", a: "We serve SMEs, institutions, and community infrastructure projects.", keywords: ["industries","clients","sectors","customers"] },

    { id: 8, q: "Do you offer smart city solutions?", a: "Yes, we build integrated systems for smart infrastructure and digital transformation.", keywords: ["smart","city","infrastructure","digital"] },

    { id: 9, q: "Can you automate workflows?", a: "Yes, we design automation systems to improve efficiency and reduce manual processes.", keywords: ["automation","workflow","efficiency","process"] },

    { id: 10, q: "Do you install CCTV systems?", a: "Yes, we install surveillance and security monitoring systems.", keywords: ["cctv","security","camera","monitoring"] },

    { id: 11, q: "Do you provide cloud solutions?", a: "Yes, we offer cloud storage, backups, and remote system management.", keywords: ["cloud","backup","storage","remote"] },

    { id: 12, q: "Do you work internationally?", a: "Yes, we operate in Cameroon and collaborate with partners in Germany.", keywords: ["international","global","countries","location"] },

    { id: 13, q: "Can you handle large projects?", a: "Yes, we manage both small-scale and large infrastructure projects.", keywords: ["projects","large","scale","capacity"] },

    { id: 14, q: "Do you provide consultations?", a: "Yes, we offer expert consultation for IT and energy solutions.", keywords: ["consult","advice","assessment","planning"] },

    { id: 15, q: "Do you offer customized solutions?", a: "Yes, all solutions are tailored to client needs and project requirements.", keywords: ["custom","tailored","specific","needs"] },

    { id: 16, q: "What makes iPekoSol unique?", a: "We combine IT systems with renewable energy to deliver complete smart solutions.", keywords: ["unique","difference","advantage","why"] },

    { id: 17, q: "Do you support remote systems?", a: "Yes, we provide remote monitoring and management for deployed systems.", keywords: ["remote","monitoring","access","control"] },

    { id: 18, q: "How long do projects take?", a: "Project timelines depend on scope, complexity, and client requirements.", keywords: ["time","duration","timeline","delivery"] },

    { id: 19, q: "Do you offer training?", a: "Yes, we train clients and staff on system usage and maintenance.", keywords: ["training","support","learning","users"] },

    { id: 20, q: "How do I get started?", a: "You can request a consultation or project assessment directly here.", keywords: ["start","request","begin","process"] },

    { id: 21, q: "How much do your services cost?", a: "Pricing varies depending on project scope and requirements. Contact us for a quote. Or book a service Above ", keywords: ["price","cost","budget","fee"] },
    { id: 22, q: "How do I book a service?", a: "Book a service here Above ☝️", keywords: ["book","Booking","Appointment",] },

    {
      id: 23,
      q: "How can I contact iPekoSol?",
      a: "You can reach us via our website, email, or WhatsApp for inquiries and project discussions.",
      links: [
        {
          label: "Website",
          url: "https://ipekosol.com"
        },
           {
      label: "WhatsApp",
      url: "https://wa.me/237680650195"
    },
        {
          label: "Email",
          url: "mailto:info@ipekosol.com"
        }
      ],
      keywords: ["contact","email","reach","call"]
    },

    {
      id: 24,
      q: "Where are you located?",
      a: "We operate in Cameroon with international collaboration in Germany. CMR= iti garage, Rue Lycée Bilingue Yaoundé Essos. Germany = Merowingerstr. 37A, 91301 Forchheim",
      keywords: ["location","office","address","where"],
      links: [
        {
          label: "View Location",
          url: "https://www.google.com/maps/search/?api=1&query=iPekoSol+Cameroon"
        }
      ]
    }
  ],

  ownerEmail: "info@ipekosol.com",
},

  default: {
    name: "Default Business",
    services: [],
    faqs: [],
    ownerEmail: "admin@example.com",
  },
};
