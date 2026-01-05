"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Users,
  Zap,
  TrendingUp,
  Shield,
  ArrowRight,
  Sparkles,
  Smartphone,
  Video,
  ShoppingBag,
  Radio,
  Coins,
  CheckCircle2,
  BarChart3,
  Share2,
  Wallet,
  UserPlus,
  Link as LinkIcon,
  LayoutDashboard,
  Rocket,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";

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

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-primary-green/40 overflow-x-hidden">
      <Navigation />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 pb-24 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-25 grayscale mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#050508]/80 to-[#050508]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-green/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-yellow-500/15 blur-[80px] rounded-full" />
          <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-primary-green/10 blur-[90px] rounded-full" />
        </div>

        <div className="container relative z-10 px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 mb-6 space-x-3 text-sm border rounded-full bg-white/5 border-white/10 backdrop-blur-md"
          >
            <span className="flex w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            <span className="text-slate-300">
              Zimbabwe's Definitive Creative Hub
            </span>
            <Sparkles className="w-4 h-4 text-primary-green" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-7xl"
          >
            You focus on your craft. <br />
            <span className="text-transparent bg-gradient-to-r from-primary-green via-yellow-500 to-primary-green bg-clip-text">
              We power your business.
            </span>
          </motion.h1>

          <motion.p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed md:text-xl text-slate-400">
            Tese is the integrated creator platform built for Africa. We combine
            creation tools and monetization into one seamless mobile-first
            experience.
          </motion.p>

          <motion.div className="flex flex-col items-center justify-center gap-4 mb-16 sm:flex-row">
            <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-gradient-to-r from-primary-green to-yellow-500">
              Start Earning Now
            </Button>
            <Link href="/features">
              <Button
                variant="secondary"
                className="px-8 py-3.5 text-md rounded-full border-primary-green/50 text-primary-green hover:bg-primary-green/10 hover:border-primary-green transition-all"
              >
                Explore Features
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* --- CREATIVE DIVIDER --- */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-green/50 to-transparent"></div>
        <div className="absolute -bottom-1 left-1/4 w-3 h-3 rounded-full bg-yellow-500 blur-[3px] animate-pulse"></div>
        <div className="absolute -bottom-1 right-1/4 w-3 h-3 rounded-full bg-primary-green blur-[3px] animate-pulse"></div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-500 blur-[4px] animate-pulse"></div>
      </section>

      {/* --- THE GAP SECTION --- */}
      <section className="relative py-24 overflow-hidden bg-black/40">
        <div className="container px-6 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <GlassCard className="border-yellow-500/20">
              <h3 className="mb-4 text-sm font-bold tracking-widest text-yellow-500 uppercase">
                The Critical Gap
              </h3>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Infrastructure, not Creativity.
              </h2>
              <p className="mb-6 leading-relaxed text-slate-400">
                Africa has talent that competes globally, but lacks the system
                that supports monetization. Creators fail because it’s difficult
                to get paid, distribute, and scale.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 text-center border rounded-2xl bg-white/5 border-white/10">
                  <p className="text-2xl font-bold text-white">73%</p>
                  <p className="text-xs uppercase text-slate-500">
                    Zim youth pursuing art
                  </p>
                </div>
                <div className="p-4 text-center border rounded-2xl bg-white/5 border-white/10">
                  <p className="text-2xl font-bold text-white">$40B+</p>
                  <p className="text-xs uppercase text-slate-500">
                    Africa Creator Economy
                  </p>
                </div>
              </div>
            </GlassCard>

            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Why Tese Wins</h2>
              <div className="space-y-4">
                {[
                  "Built for local payment realities (EcoCash, InnBucks)",
                  "Mobile-first experience for African audiences",
                  "Monetization-first, not just views",
                  "Integrated financial infrastructure",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 text-slate-300"
                  >
                    <CheckCircle2
                      className="flex-shrink-0 text-primary-green"
                      size={20}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- BEYOND PAYMENTS (Creative Layout) --- */}
      <section className="py-32 relative overflow-hidden bg-[#07070B]">
        <div className="container px-6 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 space-x-3 text-sm border rounded-full bg-white/5 border-white/10 backdrop-blur-md">
                <span className="flex w-2 h-2 rounded-full bg-primary-green animate-pulse" />
                <span className="text-slate-300">Coming Soon</span>
                <Sparkles className="w-4 h-4 text-primary-green" />
              </div>
              
              <h2 className="text-5xl font-bold leading-tight">
                Premium Video Hub
              </h2>
              
              <p className="text-lg leading-relaxed text-slate-400">
                Launch your own streaming empire with secure hosting, premium series support,
                and cinematic-quality delivery. This is where your content becomes your business.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-2xl bg-white/5 border-white/10">
                  <div className="flex items-center justify-center w-8 h-8 mb-2 text-primary-green bg-primary-green/10 rounded-xl">
                    <Video className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-medium">Secure Hosting</p>
                  <p className="text-xs text-slate-500">Enterprise-grade protection</p>
                </div>
                <div className="p-4 border rounded-2xl bg-white/5 border-white/10">
                  <div className="flex items-center justify-center w-8 h-8 mb-2 text-yellow-500 bg-yellow-500/10 rounded-xl">
                    <Zap className="w-4 h-4" />
                  </div>
                  <p className="text-sm font-medium">Cinematic Quality</p>
                  <p className="text-xs text-slate-500">HD streaming experience</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-gradient-to-r from-primary-green to-yellow-500">
                  Get Early Access
                </Button>
                <Button
                  variant="secondary"
                  className="px-8 py-3.5 text-md rounded-full border-primary-green/50 text-primary-green hover:bg-primary-green/10 hover:border-primary-green transition-all"
                >
                  Join Waitlist
                </Button>
              </div>
            </div>

            {/* Right Side - Visual Element */}
            <div className="relative">
              <div className="relative p-8 border rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border-white/20">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-green/20 to-yellow-500/20 rounded-3xl blur-xl"></div>
                <div className="relative z-10 bg-[#0D0D12] rounded-2xl p-8 border border-white/20">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-primary-green animate-pulse"></div>
                      <span className="text-sm text-slate-400">Live Preview</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-black border rounded-xl border-white/20">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="h-24 border rounded-lg bg-gradient-to-br from-primary-green/20 to-yellow-500/20 border-white/20"></div>
                      <div className="h-24 border rounded-lg bg-gradient-to-br from-primary-green/20 to-yellow-500/20 border-white/20"></div>
                      <div className="h-24 border rounded-lg bg-gradient-to-br from-primary-green/20 to-yellow-500/20 border-white/20"></div>
                    </div>
                    <div className="flex items-center justify-center h-48 border rounded-lg bg-gradient-to-br from-white/10 to-white/5 border-white/30">
                      <div className="text-center">
                        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary-green/20">
                          <Video className="w-8 h-8 text-primary-green" />
                        </div>
                        <p className="text-sm text-slate-400">Your Content Here</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6 text-xs text-slate-500">
                    <span>Secure • Fast • Reliable</span>
                    <span>Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CREATOR JOURNEY (With Progress Arrows) --- */}
      <section className="py-24 bg-[#0A0A12]">
        <div className="container px-6 mx-auto">
          <h2 className="mb-20 text-4xl font-bold text-center">
            Your Journey to Scale
          </h2>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-y-12 lg:gap-4">
            {[
              {
                icon: <UserPlus />,
                title: "Sign Up",
                desc: "Simple onboarding",
              },
              {
                icon: <LinkIcon />,
                title: "Create Link",
                desc: "For any service",
              },
              { icon: <Share2 />, title: "Share", desc: "On any platform" },
              { icon: <Wallet />, title: "Get Paid", desc: "Instantly" },
              {
                icon: <LayoutDashboard />,
                title: "Manage",
                desc: "Smart dashboard",
              },
              { icon: <Rocket />, title: "Scale", desc: "Add VOD & Subs" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative z-10 flex items-center justify-center w-16 h-16 mb-6 transition-all border rounded-full bg-white/5 border-white/10 text-primary-green group-hover:border-primary-green/50">
                  {item.icon}
                </div>
                <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                <p className="px-4 text-xs leading-relaxed text-slate-500">
                  {item.desc}
                </p>

                {/* Progress Arrow (Visible on Desktop) */}
                {i < 5 && (
                  <div className="absolute items-center hidden translate-x-1/2 lg:flex top-8 -right-4 text-white/10">
                    <ChevronRight size={20} className="text-primary-green/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary-green/10 blur-[120px] rounded-full z-0" />
        <div className="container relative z-10 px-6 mx-auto text-center">
          <h2 className="mb-8 text-4xl font-extrabold md:text-6xl">
            Authentic Stories. <br /> Sustainable Careers.
          </h2>
          <p className="max-w-xl mx-auto mb-8 text-lg text-slate-400">
            Mastering the unique financial landscape of Zimbabwe, so that the
            world sees the real Africa.
          </p>
          <Button className="px-6 py-2.5 text-sm font-bold border-none rounded-full bg-white hover:bg-primary-green transition-all shadow-xl shadow-white/10 !text-black">
            Go Live in 5 Minutes
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;

