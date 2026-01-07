"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Sparkles,
  Smartphone,
  Video,
  ShoppingBag,
  CheckCircle2,
  Share2,
  Wallet,
  UserPlus,
  Link as LinkIcon,
  LayoutDashboard,
  Rocket,
  ChevronRight,
  Music,
  Camera,
  Palette,
  Gamepad2,
  Mic,
  Trophy,
  Briefcase,
  Smile,
} from "lucide-react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";

// --- DATA STRUCTURES ---

const HERO_ITEMS = [
  { src: "/Tese Animated Images_14.png", category: "Music", description: "Afrobeats rising stars streaming live.", icon: Music },
  { src: "/Tese Animated Images_28.jpeg", category: "Photography", description: "Capturing the streets of Harare.", icon: Camera },
  { src: "/Tese Animated Images_30.jpeg", category: "Digital Art", description: "NFT collections taking over.", icon: Palette },
  { src: "/Tese Animated Images_31.jpeg", category: "Gaming", description: "Zim's top eSports contenders.", icon: Gamepad2 },
  { src: "/Tese Animated Images_33.jpeg", category: "Podcasts", description: "Real conversations, uncensored.", icon: Mic },
  { src: "/Tese Animated Images_35.png", category: "Sports", description: "Athletes monetizing their journey.", icon: Trophy },
  { src: "/Tese Animated Images_37.png", category: "Business", description: "Entrepreneurs sharing the blueprint.", icon: Briefcase },
  { src: "/Tese Animated Images_43.png", category: "Fashion", description: "Local designers going global.", icon: ShoppingBag },
  { src: "/Tese Animated Images_46.png", category: "Comedy", description: "The new wave of stand-up specials.", icon: Smile },
  { src: "/Tese Animated Images_49.png", category: "Filmmaking", description: "Independent cinema finds a home.", icon: Video },
];

const PAYMENT_METHODS = [
  { name: "Ecocash", src: "/Ecocash.svg" },
  { name: "Omari", src: "/omari.svg" },
  { name: "Mastercard", src: "/mastercard.svg" },
  { name: "Zimswitch", src: "/zimswitch.svg" },
  { name: "Visa", src: "/visa.svg" },
  { name: "Innbucks", src: "/innbucks.svg" },
];

// --- REUSABLE COMPONENTS ---

const GlassCard = ({ className, children }: { className?: string; children: React.ReactNode }) => (
  <div className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0D0D12]/80 backdrop-blur-xl p-8 ${className}`}>
    <div className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-primary-green/10 blur-[100px]" />
    <div className="relative z-10 h-full">{children}</div>
  </div>
);

const ImageOverlay = ({ item, isCenter = false }: { item: any; isCenter?: boolean }) => {
  const Icon = item.icon;
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 flex items-start gap-4 p-6">
        <div className={`flex items-center justify-center w-10 h-10 rounded-full shrink-0 ${isCenter ? 'bg-primary-green text-black' : 'bg-white/10 text-white'}`}>
          <Icon size={20} />
        </div>
        <div className="text-left">
          <h3 className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isCenter ? 'text-primary-green' : 'text-slate-300'}`}>
            {item.category}
          </h3>
          <p className={`text-sm font-medium leading-tight line-clamp-2 ${isCenter ? 'text-white' : 'text-slate-400'}`}>
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- MAIN PAGE ---

const HomePage: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_ITEMS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const getItem = (offset: number) => {
    return HERO_ITEMS[(index + offset + HERO_ITEMS.length) % HERO_ITEMS.length];
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-primary-green/40 overflow-x-hidden">
      <Navigation />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 pb-24 overflow-hidden min-h-[85vh] flex items-center flex-col">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/Tese Animated Images_1.png')] bg-cover bg-center opacity-25 grayscale mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#050508] via-[#050508]/80 to-[#050508]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary-green/20 blur-[120px] rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center px-4 py-1.5 mb-6 space-x-3 text-xs border rounded-full bg-white/5 border-white/10 backdrop-blur-md"
        >
          <span className="flex w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
          <span className="font-medium tracking-wide uppercase text-slate-300">
            Zimbabwe's Definitive Creative Hub
          </span>
          <Zap className="w-3.5 h-3.5 text-primary-green" />
          <Sparkles className="w-3.5 h-3.5 text-primary-green" />
        </motion.div>

        {/* --- CAROUSEL --- */}
        <div className="container relative z-10 px-6 mx-auto">
          <div className="relative w-full max-w-[1600px] h-[400px] md:h-[550px] flex items-center justify-center">
            <AnimatePresence mode="popLayout">
              {/* FAR LEFT */}
              <motion.div
                key={`far-left-${index}`}
                initial={{ opacity: 0, x: -150 }}
                animate={{
                  opacity: 0.1,
                  x: -550,
                  scale: 0.65,
                  filter: "blur(10px)",
                  zIndex: 10,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute hidden 2xl:block w-[320px] h-[400px] rounded-[2rem] overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <img
                    src={getItem(-2).src}
                    className="object-cover w-full h-full grayscale"
                    alt=""
                  />
                  <ImageOverlay item={getItem(-2)} />
                </div>
              </motion.div>

              {/* NEAR LEFT */}
              <motion.div
                key={`near-left-${index}`}
                initial={{ opacity: 0, x: -80 }}
                animate={{
                  opacity: 0.35,
                  x: -300,
                  scale: 0.8,
                  filter: "blur(4px)",
                  zIndex: 20,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute hidden lg:block w-[380px] h-[480px] rounded-[2.5rem] overflow-hidden border border-white/10"
              >
                <div className="relative w-full h-full">
                  <img
                    src={getItem(-1).src}
                    className="object-cover w-full h-full grayscale"
                    alt=""
                  />
                  <ImageOverlay item={getItem(-1)} />
                </div>
              </motion.div>

              {/* CENTER ACTIVE */}
              <motion.div
                key={`center-${index}`}
                initial={{ opacity: 0, scale: 0.9, zIndex: 30 }}
                animate={{ opacity: 1, scale: 1, x: 0, zIndex: 30 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="relative w-[300px] md:w-[420px] h-[320px] md:h-[450px] rounded-[3rem] p-1 bg-gradient-to-b from-white/20 via-transparent to-primary-green/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="w-full h-full rounded-[2.9rem] overflow-hidden border-x border-t border-white/10 border-b-[6px] border-b-primary-green relative bg-black">
                  <img
                    src={getItem(0).src}
                    className="object-cover w-full h-full"
                    alt="Featured Creator"
                  />
                  <ImageOverlay item={getItem(0)} isCenter={true} />
                </div>
              </motion.div>

              {/* NEAR RIGHT */}
              <motion.div
                key={`near-right-${index}`}
                initial={{ opacity: 0, x: 80 }}
                animate={{
                  opacity: 0.35,
                  x: 300,
                  scale: 0.8,
                  filter: "blur(4px)",
                  zIndex: 20,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute hidden lg:block w-[380px] h-[480px] rounded-[2.5rem] overflow-hidden border border-white/10"
              >
                <div className="relative w-full h-full">
                  <img
                    src={getItem(1).src}
                    className="object-cover w-full h-full grayscale"
                    alt=""
                  />
                  <ImageOverlay item={getItem(1)} />
                </div>
              </motion.div>

              {/* FAR RIGHT */}
              <motion.div
                key={`far-right-${index}`}
                initial={{ opacity: 0, x: 150 }}
                animate={{
                  opacity: 0.1,
                  x: 550,
                  scale: 0.65,
                  filter: "blur(10px)",
                  zIndex: 10,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="absolute hidden 2xl:block w-[320px] h-[400px] rounded-[2rem] overflow-hidden"
              >
                <div className="relative w-full h-full">
                  <img
                    src={getItem(2).src}
                    className="object-cover w-full h-full grayscale"
                    alt=""
                  />
                  <ImageOverlay item={getItem(2)} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* --- HERO TEXT --- */}
        <div className="container relative z-10 px-6 mx-auto mt-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto mb-6 text-4xl font-extrabold leading-tight md:text-6xl"
          >
            You focus on your craft. <br />{" "}
            <span className="font-bold text-primary-green">
              We power your business.
            </span>
          </motion.h1>
          <motion.p className="max-w-xl mx-auto mb-8 text-base md:text-lg text-slate-400">
            Tese is the integrated creator platform built for Africa. We combine
            creation tools and monetization into one seamless experience.
          </motion.p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button className="px-8 py-3 text-sm font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-primary-green hover:bg-green-600">
              Start Earning Now
            </Button>
            <Button
              variant="secondary"
              className="px-8 py-3 text-sm rounded-full border-primary-green/50 text-primary-green"
            >
              Explore Features
            </Button>
          </div>
        </div>
      </section>

      {/* --- THE GAP --- */}
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
                that supports monetization.
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

      {/* --- PREMIUM VIDEO HUB --- */}
      <section className="py-32 relative overflow-hidden bg-[#07070B]">
        <div className="container px-6 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
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
                Launch your own streaming empire with secure hosting, premium
                series support, and cinematic-quality delivery.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-2xl bg-white/5 border-white/10">
                  <Video className="w-4 h-4 mb-2 text-primary-green" />
                  <p className="text-sm font-medium">Secure Hosting</p>
                </div>
                <div className="p-4 border rounded-2xl bg-white/5 border-white/10">
                  <Zap className="w-4 h-4 mb-2 text-yellow-500" />
                  <p className="text-sm font-medium">Cinematic Quality</p>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full bg-primary-green">
                  Get Started Free
                </Button>
                <Button
                  variant="secondary"
                  className="px-8 py-3.5 text-md rounded-full border-primary-green/50 text-primary-green"
                >
                  Request Demo
                </Button>
              </div>
            </div>
            <motion.div
              className="relative z-20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/Tese Animated Images_14.png"
                alt="Video Hub"
                className="w-full h-auto border shadow-2xl rounded-3xl border-white/10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- JOURNEY --- */}
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
                className="relative flex flex-col items-center text-center group"
              >
                <div className="relative z-10 flex items-center justify-center w-16 h-16 mb-6 transition-all border rounded-full bg-white/5 border-white/10 text-primary-green group-hover:border-primary-green/50 group-hover:bg-primary-green/5">
                  {item.icon}
                </div>
                <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
                <p className="px-4 text-xs leading-relaxed text-slate-500">
                  {item.desc}
                </p>
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

      {/* --- PAYMENT METHODS SECTION --- */}
      <section className="py-24 bg-[#0A0A12]">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 text-4xl font-bold">
              Available Payment Methods
            </h2>
            <p className="mb-16 text-lg text-slate-400">
              We support all major payment methods in Zimbabwe, making it easy
              for your audience to support your creativity.
            </p>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
              {PAYMENT_METHODS.map((method) => (
                <motion.div
                  key={method.name}
                  className="flex items-center justify-center transition-all group"
                >
                  <img
                    src={method.src}
                    alt={method.name}
                    className="w-full h-full max-w-[150px] md:max-w-[200px] object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- MOBILE APP --- */}
      <section className="relative bg-[#050508] py-12">
        <div className="container relative z-20 px-6 mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 text-sm border rounded-full bg-white/5 border-white/10">
                <Smartphone className="w-4 h-4 mr-2 text-primary-green" />{" "}
                Mobile App
              </div>
              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                Download the Tese App
              </h2>
              <p className="max-w-md text-slate-400">
                Get the full Tese experience on your mobile device. Create,
                monetize, and grow anywhere.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#"
                  className="flex items-center justify-center px-6 py-3 space-x-3 transition-all bg-white border rounded-full shadow-lg hover:bg-white/90 border-white/20 hover:scale-[1.02] min-w-[180px]"
                >
                  <img
                    src="/playstore.svg"
                    alt="Google Play"
                    className="w-5 h-5"
                  />
                  <div className="text-left">
                    <div className="text-[10px] font-semibold tracking-wide uppercase text-slate-600 leading-none">
                      Get it on
                    </div>
                    <div className="text-base font-bold text-black">
                      Google Play
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center px-6 py-3 space-x-3 transition-all bg-white border rounded-full shadow-lg hover:bg-white/90 border-white/20 hover:scale-[1.02] min-w-[180px]"
                >
                  <img src="/apple.svg" alt="App Store" className="w-5 h-5" />
                  <div className="text-left">
                    <div className="text-[10px] font-semibold tracking-wide uppercase text-slate-600 leading-none">
                      Download on
                    </div>
                    <div className="text-base font-bold text-black">
                      App Store
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-30"
              >
                <img
                  src="/mobile-app.png"
                  alt="App"
                  className="w-full max-w-[400px] h-auto drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="relative py-32 overflow-hidden text-center">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-primary-green/10 blur-[120px] rounded-full z-0" />
        <div className="container relative z-10 px-6 mx-auto">
          <h2 className="mb-8 text-4xl font-extrabold md:text-6xl">
            Authentic Stories. <br /> Sustainable Careers.
          </h2>
          <Button
            variant="secondary"
            className="px-8 py-3 text-sm font-bold text-black transition-all border-none rounded-full shadow-xl shadow-white/10 hover:bg-primary-green hover:text-white"
          >
            Go Live in 5 Minutes
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;