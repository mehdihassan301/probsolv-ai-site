"use client";

import React, { useMemo, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  Rocket,
  Zap,
  Globe,
  Gauge,
  Sparkles,
  Bot,
  Mail,
  Phone,
  ArrowRight,
  Calendar,
  Star,
  Shield,
  Wand2,
  Sun,
  Moon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

/**
 * Probsolv – Full page with Services + Trusted-by chips in Case Studies
 */

const BRAND = {
  name: "Probsolv",
  tagline: "AI-powered websites for businesses & startups",
  location: "Pakistan",
  email: "info@probsolv.online",
  phone: "+92-327-2583013",
  whatsapp: "923272583013",
  bookingUrl: "#contact",
  primaryCTA: "Book a Free Strategy Call",
  secondaryCTA: "Get Instant Quote",
};

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Case Studies", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const FEATURES = [
  { icon: Zap, title: "Fast & Scalable", desc: "Optimized for performance, low TTFB and CDN-first delivery." },
  { icon: Sparkles, title: "AI SEO", desc: "Automated content pipelines and programmatic SEO for discoverability." },
  { icon: Gauge, title: "Modern Stack", desc: "Next.js, edge functions and serverless infrastructure." },
  { icon: Shield, title: "Secure & Reliable", desc: "Best-practice security, backups & monitoring." },
];

const SERVICES = [
  {
    icon: Globe,
    title: "Websites for Businesses",
    bullets: [
      "SMBs, retail and communities",
      "Conversion-first landing pages",
      "Local SEO & GMB optimization",
    ],
  },
  {
    icon: Bot,
    title: "AI Integrations",
    bullets: [
      "Conversational assistants",
      "Process & customer automation",
      "Custom AI endpoints & workflows",
    ],
  },
  {
    icon: Wand2,
    title: "SEO & Growth",
    bullets: [
      "AI keyword & content strategy",
      "Programmatic landing pages",
      "Performance-driven CRO",
    ],
  },
];

const PLANS = [
  {
    name: "Starter",
    price: "$70",
    tagline: "For new businesses & startups",
    features: [
      "1–3 pages website",
      "Mobile-responsive design",
      "On-page SEO setup",
      "Contact form + WhatsApp CTA",
    ],
  },
  {
    name: "Growth",
    price: "$300",
    tagline: "For growing businesses",
    featured: true,
    features: [
      "Up to 8 pages with CMS",
      "Advanced SEO + schema",
      "Blog integration",
      "Analytics + heatmaps",
    ],
  },
  {
    name: "Custom",
    price: "$1000",
    tagline: "Tailored solutions",
    features: [
      "Custom UI & system",
      "Complex integrations",
      "AI assistants & automation",
      "Priority support",
    ],
  },
];

const CASESTUDIES = [
  {
    title: "AI SaaS Startup Platform",
    desc: "Built a scalable SaaS platform with AI automation, helping the startup onboard 500+ clients in 6 months.",
    img: "/images/case-studies/saas.png",
    trusted: ["TechNova", "CloudBase"],
  },
  {
    title: "Retail E-commerce Store",
    desc: "Launched a fast e-commerce site with AI SEO, increasing sales by 52% in 3 months.",
    img: "/images/case-studies/ecommerce.png",
    trusted: ["ShopEase", "Daraz"],
  },
  {
    title: "Community Fitness Hub",
    desc: "Created a local fitness platform with membership management and booking system.",
    img: "/images/case-studies/fitness.png",
    trusted: ["FitLife", "GymPro"],
  },
];

function useSchemaJSONLD() {
  return useMemo(() => {
    const org = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: BRAND.name,
      url: "https://probsolv.online",
      email: BRAND.email,
      telephone: BRAND.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: BRAND.location,
        addressCountry: "PK",
      },
    };
    return JSON.stringify(org);
  }, []);
}

const fadeUp = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 } };

export default function Page() {
  const schema = useSchemaJSONLD();
  const [email, setEmail] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  const handleQuote = () => {
    const subject = encodeURIComponent("Project Quote – " + BRAND.name);
    const body = encodeURIComponent(
      `Hi ${BRAND.name},\n\nI need a website for my business. Here are some details:\nIndustry: \nPages needed: \nTimeline: \nBudget: \n\nThanks!`
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hey! I'm interested in a website that loads fast and ranks.");
    window.open(`https://wa.me/${BRAND.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f1f5f9] to-white dark:from-[#071025] dark:to-[#071425] text-gray-900 dark:text-gray-100">
      <Head>
        <title>{BRAND.name} – Web Development & AI SEO</title>
        <meta
          name="description"
          content="Probsolv builds AI-powered, scalable websites for physical businesses, communities, and startups."
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      </Head>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-white/70 dark:bg-[#041022]/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Brand left */}
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-gradient-to-br from-[#06b6d4] to-[#7c3aed] p-2 text-white">
              <Rocket className="h-5 w-5" />
            </div>
            <span className="font-semibold text-lg">{BRAND.name}</span>
          </div>

          {/* Nav right */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition"
              >
                {n.label}
              </a>
            ))}
            <Button size="sm" className="ml-2 bg-[#0f172a] text-white" onClick={handleWhatsApp}>
              WhatsApp Us
            </Button>
            <Button variant="outline" onClick={() => setDarkMode(!darkMode)} className="ml-2">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left text */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#e0f2fe] to-[#eef2ff] px-3 py-1 text-sm font-medium text-[#0369a1]">
                <Star className="h-4 w-4" /> 30+ websites shipped globally
              </span>

              <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">{BRAND.tagline}</h1>

              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
                We build fast, SEO-ready websites and AI solutions for physical businesses, communities and startups —
                designed to convert and scale.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Button size="lg" className="bg-[#0f172a] text-white" onClick={handleWhatsApp}>
                  {BRAND.secondaryCTA} <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <a href={BRAND.bookingUrl}>
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-800">
                    {BRAND.primaryCTA} <Calendar className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>

              {/* quick stats */}
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <div className="text-2xl font-bold">30+</div>
                  <div className="text-sm text-gray-500">Sites delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm text-gray-500">Uptime guarantee</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-gray-500">Support</div>
                </div>
              </div>
            </motion.div>

            {/* Right image + trusted chips */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="relative rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
                    alt="Hero mockup"
                    width={1200}
                    height={800}
                    className="w-full h-64 object-cover rounded-xl"
                    priority
                  />
                </div>

                <div className="mt-4">
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Trusted by</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Perplexity", "Lovable", "Devsinc", "HuggingFace"].map((b) => (
                      <span
                        key={b}
                        className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-200"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="mx-auto max-w-6xl px-4 py-12">
          <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
            What we build
          </motion.h2>

          <div className="mt-8 grid md:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}>
                <Card className="rounded-2xl border bg-white dark:bg-gray-800 hover:shadow-lg transition">
                  <CardContent className="p-6">
                    <f.icon className="h-6 w-6 text-[#0f172a]" />
                    <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-6xl px-4 py-12">
          <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
            Services
          </motion.h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}>
                <Card className="rounded-2xl border hover:scale-[1.02] transition">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <s.icon className="h-6 w-6" />
                      <h3 className="text-lg font-semibold">{s.title}</h3>
                    </div>
                    <ul className="mt-3 ml-1 space-y-2 text-sm">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                          <Check className="mt-0.5 h-4 w-4" /> {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="work" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <h2 className="text-3xl font-bold text-center">Case Studies</h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {CASESTUDIES.map((c) => (
              <motion.div key={c.title} whileHover={{ scale: 1.03 }} className="transition-transform">
                <Card className="rounded-2xl bg-white dark:bg-gray-800">
                  <CardContent className="p-0">
                    <Image src={c.img} alt={c.title} width={720} height={400} className="rounded-t-2xl h-40 w-full object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{c.title}</h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{c.desc}</p>

                      {/* Trusted-by chips inside each case study */}
                      <div className="mt-4">
                        <div className="text-xs text-gray-500">Trusted by</div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {c.trusted?.map((t) => (
                            <span key={t} className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-200">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="mx-auto max-w-6xl px-4 py-12">
          <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
            Pricing
          </motion.h2>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {PLANS.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }}>
                <Card className={`rounded-2xl p-0 ${p.featured ? "border-2 border-[#2563eb]" : ""}`}>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{p.tagline}</div>
                    <ul className="mt-4 space-y-2 text-sm">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                          <Check className="mt-0.5 h-4 w-4" /> {f}
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-5 w-full bg-[#0f172a] text-white" onClick={handleQuote}>
                      Start with {p.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mx-auto max-w-6xl px-4 py-12">
          <motion.h2 {...fadeUp} className="text-3xl font-bold text-center">
            Contact Us
          </motion.h2>

          <div className="mx-auto mt-6 max-w-xl rounded-2xl border bg-white dark:bg-gray-800 p-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 flex-1 rounded-xl border px-3 text-sm outline-none dark:bg-gray-700"
              />
              <Button
                className="h-11 bg-[#0f172a] text-white"
                onClick={() => {
                  if (!email.includes("@")) return alert("Please enter a valid email");
                  window.location.href = `mailto:${BRAND.email}?subject=Project Inquiry&body=My email: ${email}`;
                }}
              >
                <Mail className="mr-2 h-4 w-4" /> Send
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-6 text-sm text-gray-600 dark:text-gray-300">
              <div className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" /> {BRAND.phone}
              </div>
              <div className="inline-flex items-center gap-2">
                <Shield className="h-4 w-4" /> Secure & Reliable Delivery
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t bg-white dark:bg-[#021021]">
          <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Rocket className="h-4 w-4" /> © {new Date().getFullYear()} {BRAND.name}
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <a href="#" className="hover:underline">
                Terms
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

