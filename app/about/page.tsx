"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  Presentation,
  Users,
  Heart,
  Rocket,
  Sparkles,
  ArrowRight,
  Shield,
  TrendingUp,
  CheckCircle2,
  Share2,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Link2,
  Copy,
  Check,
} from "lucide-react";
import Link from "next/link";
import Navigation from "../../components/layout/Navigation";
import Footer from "../../components/layout/Footer";
import Button from "../../components/ui/Button";

// Reusable Glass Card
const GlassCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0D0D12]/80 backdrop-blur-xl p-8 ${className}`}
  >
    <div className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-primary-green/10 blur-[100px]" />
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Presentation className="w-8 h-8" />,
      title: "Mission",
      description:
        "Empower African creators to build sustainable, fairly‑paid businesses through simple, accessible tools and payment infrastructure built for Africa.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Vision",
      description:
        "To be the platform where millions of African creators get paid what they're worth, without leaving their communities or their craft.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Focus",
      description:
        "We meet creators where they already create – TikTok, YouTube, Instagram, WhatsApp and live stages – and plug monetisation into that reality instead of asking them to start over.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Commitment",
      description:
        "We're building long-term financial rails for the African creator economy so that today's and tomorrow's creators can rely on Tese for income that's consistent, transparent and local.",
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "Foundation",
      description:
        "Company established with focus on African fintech solutions",
    },
    {
      year: "2024",
      title: "Zimbabwe Launch",
      description: "First market launch with core payment infrastructure",
    },
    {
      year: "2024",
      title: "Product Expansion",
      description: "Launch of creator monetization tools and mobile app",
    },
    {
      year: "2025",
      title: "Regional Growth",
      description: "Expansion to neighboring markets across Southern Africa",
    },
    {
      year: "2025",
      title: "Series A",
      description: "Major funding round to accelerate growth and development",
    },
    {
      year: "2026",
      title: "Pan-African",
      description: "Presence in all major African markets",
    },
  ];

  const impactStats = [
    { label: "Creators Empowered", value: "10,000+", color: "primary-green" },
    { label: "Paid to Creators", value: "$2M+", color: "yellow-500" },
    { label: "Countries Served", value: "15+", color: "yellow-500" },
    { label: "Uptime", value: "99.9%", color: "primary-green" },
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-primary-green/40 overflow-x-hidden">
      <Navigation />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 pb-24 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/Tese Animated Images_12.png')] bg-cover bg-center opacity-20 grayscale mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#050508]/80 to-[#050508]" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-yellow-500/10 blur-[100px] rounded-full" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary-green/10 blur-[120px] rounded-full" />
        </div>

        <div className="container relative z-10 px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 mb-6 space-x-3 text-sm border rounded-full bg-white/5 border-white/10 backdrop-blur-md"
          >
            <span className="flex w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            <span className="text-slate-300">Our Story</span>
            <Building2 className="w-4 h-4 text-primary-green" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-7xl"
          >
            Building Africa's <br />
            <span className="font-bold text-primary-green">
              Creator Economy, One Creator at a Time
            </span>
          </motion.h1>

          <motion.p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed md:text-xl text-slate-400">
            Tese exists so African creators can get paid what they're worth. We're building
            the tools and payment rails that turn talent, culture and community into real,
            repeatable income.
          </motion.p>

          <motion.div className="flex flex-col items-center justify-center gap-4 mb-16 sm:flex-row">
            <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-primary-green hover:bg-green-600">
              Join Our Mission
            </Button>
            <Link href="/contact">
              <Button
                variant="secondary"
                className="px-8 py-3.5 text-md rounded-full border-primary-green/50 text-primary-green hover:bg-primary-green/10 hover:border-primary-green transition-all"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* --- CREATIVE DIVIDER --- */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-yellow-500/50"></div>
        <div className="absolute -bottom-1 left-1/3 w-3 h-3 rounded-full bg-yellow-500 blur-[3px] animate-pulse"></div>
        <div className="absolute -bottom-1 right-1/3 w-3 h-3 rounded-full bg-primary-green blur-[3px] animate-pulse"></div>
      </section>

      {/* --- OUR STORY --- */}
      <section className="relative py-24 overflow-hidden bg-black/40">
        <div className="container px-6 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Our Story
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-slate-400">
                  Tese was born from a simple reality: African creators move the culture,
                  but the money rarely reaches them. Africa has world-class talent, but not
                  the infrastructure for creators to earn consistently from their work.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-slate-400">
                  Founded by Smatech Group, we set out to bridge this gap by building a
                  creator-first monetisation platform that understands African bandwidth,
                  payment methods and audiences.
                </p>
                <p className="text-lg leading-relaxed text-slate-400">
                  We started in Zimbabwe, working side by side with local creators to prove
                  that audiences are willing to pay when you make it easy. Now we're taking
                  that same creator-first approach across the continent. Tiri Tese – together
                  we thrive.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden shadow-2xl rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative grid grid-cols-3 gap-4 h-96 rounded-xl">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/Tese Animated Images_15.png"
                    alt="African creators working together"
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-primary-green/20 mix-blend-overlay"></div>
                </div>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/Tese Animated Images_17.png"
                    alt="African creators working together"
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-primary-green/20 mix-blend-overlay"></div>
                </div>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/Tese Animated Images_16.png"
                    alt="African creators working together"
                    className="absolute inset-0 object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-primary-green/20 mix-blend-overlay"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PREMIUM VIDEO HUB --- */}
      <section className="relative py-24 overflow-hidden bg-black/40">
        <div className="container px-6 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              className="relative overflow-hidden shadow-2xl rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative overflow-hidden h-96 rounded-xl">
                <img
                  src="/Tese Animated Images_18.png"
                  alt="Premium Video Hub"
                  className="absolute inset-0 object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-primary-green/20 mix-blend-overlay"></div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Subscription Video on Demand on Tese
                </h2>
                <p className="mb-6 text-lg leading-relaxed text-slate-400">
                  Turn your videos into a real income stream with Tese's Subscription
                  Video on Demand feature.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-slate-400">
                  From high-quality streaming to clear earnings and audience analytics,
                  you get everything you need to build a sustainable video business on
                  your own terms.
                </p>
                <p className="text-lg leading-relaxed text-slate-400">
                  Monetise your videos with subscriptions and pay‑per‑view access, without
                  needing a foreign account or complex setup. Fans support you directly;
                  Tese handles the payments, payouts and protection.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-primary-green hover:bg-green-600">
                  Start Video Hub
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- OUR VALUES --- */}
      <section className="py-32 relative overflow-hidden bg-[#07070B]">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.h2
              className="mb-6 text-4xl font-bold md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Core Values
            </motion.h2>
            <motion.p
              className="text-lg text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              These are the promises we make to every creator who joins Tese.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <GlassCard className="border-primary-green/20">
                  <div className="flex items-center mb-4 space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 transition-all rounded-2xl bg-primary-green/10 text-primary-green group-hover:bg-primary-green/20">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                  </div>
                  <p className="leading-relaxed text-slate-400">
                    {value.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOCIAL SHARING SECTION --- */}
      <section className="py-32 relative overflow-hidden bg-[#0a0a0f]">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-green/5 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-yellow-500/5 blur-[100px] rounded-full opacity-30" />

        <div className="container relative z-10 px-6 mx-auto">
          <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-24">
            {/* LEFT SIDE: Content & Interactive Link Card */}
            <div className="flex-1 order-2 text-left lg:order-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
                  One Link. <br />
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-emerald-400"
                    style={{ WebkitTextFillColor: "transparent" }}
                  >
                    Infinite Reach.
                  </span>
                </h2>
                <p className="max-w-lg mb-10 text-lg leading-relaxed text-slate-400">
                  Your Tese link is your digital storefront. Paste it in your
                  bio, share it in a post, or send it via DM. We handle the
                  tracking while you focus on the storytelling.
                </p>

                {/* Premium Link Card */}
                <div className="relative max-w-md group">
                  <div className="absolute transition duration-1000 -inset-1 bg-gradient-to-r from-primary-green/50 to-emerald-500/50 rounded-2xl blur opacity-20 group-hover:opacity-40"></div>
                  <div className="relative flex items-center justify-between p-4 bg-[#12121a] border border-white/10 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary-green/20 text-primary-green">
                        <Link2 className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <span className="block text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em]">
                          Your Creator URL
                        </span>
                        <span className="block font-mono text-lg truncate text-emerald-400">
                          tese.io/creator_name
                        </span>
                      </div>
                    </div>
                    <button className="p-3 ml-2 transition-colors rounded-lg bg-white/5 hover:bg-white/10 group">
                      <Copy className="w-5 h-5 text-slate-400 group-hover:text-white" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-8 mt-12 border-t border-white/5">
                  <div>
                    <h4 className="mb-1 font-bold text-white">Real-time</h4>
                    <p className="text-sm text-slate-500">
                      Analytics on every click
                    </p>
                  </div>
                  <div>
                    <h4 className="mb-1 font-bold text-white">
                      Regional Ready
                    </h4>
                    <p className="text-sm text-slate-500">
                      Optimized for African markets
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Visual Phone Mockup & Orbiting Icons */}
            <div className="flex-1 relative flex justify-center items-center h-[500px] lg:h-[600px] order-1 lg:order-2">
              {/* Orbital Rings */}
              <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] border border-white/5 rounded-full" />
              <div className="absolute w-[250px] h-[250px] md:w-[320px] md:h-[320px] border border-white/10 rounded-full" />

              {/* Floating Platform Icons */}
              {[
                {
                  icon: (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6 md:w-8 md:h-8"
                      fill="currentColor"
                    >
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  ),
                  color: "#FFFFFF",
                  top: "10%",
                  right: "10%",
                  delay: 0,
                },
                {
                  icon: <Instagram className="w-6 h-6 md:w-8 md:h-8" />,
                  color: "#E4405F",
                  bottom: "15%",
                  left: "5%",
                  delay: 1,
                },
                {
                  icon: <Youtube className="w-6 h-6 md:w-8 md:h-8" />,
                  color: "#FF0000",
                  top: "40%",
                  right: "-5%",
                  delay: 2,
                },
                {
                  icon: <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />,
                  color: "#25D366",
                  bottom: "40%",
                  left: "-10%",
                  delay: 3,
                },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute z-20 p-3 border shadow-2xl md:p-4 rounded-2xl border-white/10 backdrop-blur-md bg-white/5"
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: p.delay,
                    ease: "easeInOut",
                  }}
                  style={{
                    top: p.top,
                    bottom: p.bottom,
                    left: p.left,
                    right: p.right,
                    color: p.color,
                  }}
                >
                  {p.icon}
                </motion.div>
              ))}

              {/* Mobile App Image with Phone Shape */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="relative z-10"
              >
                <img
                  src="/about-mobile-app.png"
                  alt="Tese Mobile App"
                  className="w-auto h-[500px] md:h-[950px] object-contain"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary-green/10 blur-[120px] rounded-full z-0" />
        <div className="container relative z-10 px-6 mx-auto text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 text-4xl font-extrabold md:text-6xl">
              Join the movement
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-lg text-slate-400">
              Be part of a new reality where African creators don't just go viral,
              they get paid.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-primary-green hover:bg-green-600">
                  Get started free
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  className="px-8 py-3.5 text-md rounded-full border-primary-green/50 text-primary-green hover:bg-primary-green/10 hover:border-primary-green transition-all"
                >
                  Talk to the Tese team
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
