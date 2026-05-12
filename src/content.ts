// ============================================================
// BUTTERFLY CHILDREN'S CLINIC — CENTRAL CONTENT FILE
// Edit all visible website text right here!
// ============================================================

export const SITE = {
  name: "Butterfly Children's Clinic",
  tagline: "Pediatric Care",
  slogan: "Caring Little Hearts With Big Love",
  description:
    "From first sniffles to scraped knees and growing‑up worries — our team of gentle pediatricians turns every visit into a brave little adventure.",
  copyright: `© ${new Date().getFullYear()} Butterfly Children's Clinic. Made with care.`,
};

// ── NAVBAR ──────────────────────────────────────────────────
export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blogs", label: "Blogs" },
] as const;

export const NAV_CTA = "Book an Appointment";

// ── HERO SECTION ─────────────────────────────────────────────
export const HERO = {
  badge: "Welcoming new little parents 🦋",
  heading1: "Butterfly",
  heading2: "Children's Clinic",
  italic: "Caring Little Hearts With Big Love",
  body: "From first sniffles to scraped knees and growing‑up worries — our team of gentle pediatricians turns every visit into a brave little adventure.",
  cta1: "Book an Appointment",
  cta2: "Enquiry",
};

// ── STATS SECTION ─────────────────────────────────────────────
export const STATS_SECTION = {
  eyebrow: "Our Story",
  heading: "Decades of Care,",
  headingLine2: "Thousands of Families.",
};

export const STATS = [
  { value: "25+", label: "Years of Service" },
  { value: "1,20,000+", label: "Happy Families" },
  { value: "24/7", label: "Emergency Care" },
];

// ── DOCTOR SECTION ────────────────────────────────────────────
export const DOCTOR_SECTION = {
  eyebrow: "Meet our Doctor",
  name: "Dr. Gayatri Reddy",
  credentials: "MD Pediatrics · Fellowship in Neonatology · 15 yrs experience",
  bio: "Dr. Gayatri believes every child deserves a doctor who listens not just to their lungs, but to their stories. Trained at top children's hospitals, she leads our team with patience, warmth, and a pocket full of stickers.",
  badgeLabel: "Patients seen",
  badgeValue: "12k+ smiles",
  cta: "Know More",
  specialties: [
    "Newborn & Infant Care",
    "Childhood Vaccinations",
    "Allergy & Asthma",
    "Developmental Pediatrics",
    "Adolescent Health",
  ],
};

// ── REVIEWS SECTION ───────────────────────────────────────────
export const REVIEWS_SECTION = {
  eyebrow: "Kind Words",
  heading: "What Parents Say About Us",
};

export const REVIEWS = [
  {
    name: "Aisha & baby Noor",
    rating: 5,
    text: "From the moment we walked in, the butterfly murals had Noor giggling. Dr. Maya explained every step in a way that made me feel calm and informed.",
    color: "bg-[oklch(0.94_0.05_165)]",
  },
  {
    name: "The Khan Family",
    rating: 5,
    text: "We've been bringing all three of our kids here for years. The nurses know them by name and the waiting area is more fun than the playground!",
    color: "bg-[oklch(0.94_0.06_40)]",
  },
  {
    name: "Priya R.",
    rating: 5,
    text: "Late‑night fever, scared mama — they answered on the first ring and saw us within 20 minutes. True 24/7 care, with kindness.",
    color: "bg-[oklch(0.93_0.05_300)]",
  },
  {
    name: "Daniel & Sam",
    rating: 5,
    text: "Sam used to cry at the doctor. Now he asks if we can 'go see the butterflies'. That tells you everything.",
    color: "bg-[oklch(0.95_0.07_95)]",
  },
];

// ── BLOGS SECTION ─────────────────────────────────────────────
export const BLOGS_SECTION = {
  eyebrow: "From our journal",
  heading: "Latest Health Tips &",
  headingLine2: "Parenting Guides",
};

export const BLOGS = [
  {
    title: "5 Soothing Bedtime Routines for Toddlers",
    desc: "Tiny rituals that turn fussy nights into peaceful, predictable rest.",
    tag: "Sleep",
    read: "4 min",
    emoji: "🌙",
    grad: "from-[oklch(0.92_0.07_165)] to-[oklch(0.95_0.05_200)]",
  },
  {
    title: "When a Fever Means 'Wait' vs 'Call Now'",
    desc: "A pediatrician's clear, parent‑friendly cheat sheet for fever season.",
    tag: "Health",
    read: "6 min",
    emoji: "🌡️",
    grad: "from-[oklch(0.92_0.08_40)] to-[oklch(0.94_0.07_70)]",
  },
  {
    title: "Lunchbox Ideas Picky Eaters Actually Eat",
    desc: "Colourful, balanced and a little playful — without the dinner battles.",
    tag: "Nutrition",
    read: "5 min",
    emoji: "🥗",
    grad: "from-[oklch(0.93_0.06_300)] to-[oklch(0.95_0.05_260)]",
  },
  {
    title: "Building Brave: Helping Kids Through Vaccine Day",
    desc: "Words, distractions, and tiny rewards that work, from our nursing team.",
    tag: "Wellness",
    read: "3 min",
    emoji: "💛",
    grad: "from-[oklch(0.95_0.08_95)] to-[oklch(0.93_0.07_55)]",
  },
  {
    title: "Screen Time, Re‑imagined",
    desc: "Healthier rhythms with screens for kids 2–10, without the guilt spiral.",
    tag: "Parenting",
    read: "7 min",
    emoji: "📱",
    grad: "from-[oklch(0.92_0.06_200)] to-[oklch(0.94_0.05_240)]",
  },
];

// ── CONTACT SECTION ───────────────────────────────────────────
export const CONTACT_SECTION = {
  eyebrow: "Get in touch",
  heading: "Let's plan your",
  headingLine2: "little one's first visit.",
  body: "Tell us a little about your child and a friendly nurse will reach out within an hour during clinic hours. For emergencies, call us anytime.",
  phone: "87909 46767",
  email: "butterflychildrensclinic@gmail.com",
  address: "H. No: 9, A/1, 1/257, beside Lanco Hills Residential Towers Road, Manikonda Hyderabad, Telangana 500104",
  formFields: [
    { id: "parent", label: "Parent Name", type: "text", placeholder: "Aisha Rahman" },
    { id: "child", label: "Child Name", type: "text", placeholder: "Noor, age 4" },
    { id: "phone", label: "Phone Number", type: "tel", placeholder: "87909 46767" },
    { id: "email", label: "Email", type: "email", placeholder: "you@email.com" },
  ],
  messagePlaceholder: "Tell us what brings you in…",
  sendBtn: "Send message",
  sentMsg: "Thank you — we'll be in touch ✨",
};

// ── REACH US SECTION ──────────────────────────────────────────
export const REACH_US_SECTION = {
  eyebrow: "Reach Us",
  heading: "Find Your Way to Butterfly Children's Clinic",
  mapLabel: "📍 Butterfly Children's Clinic",
  mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61722.08508729325!2d78.40665081111452!3d17.361501081241222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95003cefe13b%3A0x78795e4ad133e673!2sButterfly%20Children%E2%80%99s%20Clinic!5e1!3m2!1sen!2sin!4v1778591873221!5m2!1sen!2sin",
  items: [
    { label: "Location", val: "beside Lanco Hills Residential Towers Road" },
    { label: "Address", val: "H. No: 9, A/1, 1/257, Manikonda Hyderabad, Telangana 500104" },
    { label: "Front desk", val: "87909 46767" },
    { label: "Working hours", val: "Mon – Sat · 8 am – 8 pm" },
    { label: "Emergency", val: "Open 24 / 7 · 365 days" },
  ],
};

// ── FOOTER ────────────────────────────────────────────────────
export const FOOTER = {
  tagline: "Caring for little hearts with big love. A safe, joyful place where every child blooms.",
  quickLinks: [
    ["/", "Home"],
    ["/about", "About"],
    ["/services", "Services"],
    ["/gallery", "Gallery"],
    ["/blogs", "Blogs"],
    ["/appointment", "Book Visit"],
  ] as [string, string][],
  phone: "87909 46767",
  email: "butterflychildrensclinic@gmail.com",
  address: "H. No: 9, A/1, 1/257, beside Lanco Hills Residential Towers Road, Manikonda Hyderabad",
  hours: "Open 24/7 for emergencies.\nMon–Sat 8am – 8pm regular hours.",
  privacy: "Privacy · Terms · Patient Rights",
};

// ── ABOUT PAGE ────────────────────────────────────────────────
export const ABOUT_PAGE = {
  eyebrow: "About us",
  title: "A safe, sunny place to grow up well.",
  subtitle:
    "Founded in 1999, Butterfly Children's Clinic has cared for three generations of kids in our neighbourhood. We blend evidence‑based pediatrics with a child‑centred design that lets little ones feel braver, calmer and very much at home.",
  values: [
    {
      title: "Gentle, always",
      body: "Every appointment is paced for the smallest patient in the room.",
    },
    {
      title: "Quietly excellent",
      body: "Board‑certified specialists, world‑class equipment, no white‑coat fear.",
    },
    {
      title: "A little bit magical",
      body: "Butterfly murals, story corners and brave‑kid stickers — because joy heals too.",
    },
  ],
};

// ── SERVICES PAGE ─────────────────────────────────────────────
export const SERVICES_PAGE = {
  eyebrow: "What we offer",
  title: "Gentle Care at Every Stage",
  subtitle: "From newborn check‑ups to adolescent health — our full range of pediatric services, all under one butterfly‑bright roof.",
};

// ── GALLERY PAGE ─────────────────────────────────────────────
export const GALLERY_PAGE = {
  eyebrow: "Our Space",
  title: "Where Little Ones Feel at Home",
  subtitle: "Peek inside our butterfly‑bright halls and playful treatment rooms.",
};

// ── BLOGS PAGE ────────────────────────────────────────────────
export const BLOGS_PAGE = {
  eyebrow: "From our journal",
  title: "Health Tips & Parenting Guides",
  subtitle: "Practical advice from our pediatric team — written just for parents.",
};
