"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Link as LinkIcon,
  Users,
  Calendar,
  Video,
  BookOpen,
  ShoppingBag,
  BarChart3,
  DollarSign,
  Smartphone,
  Sparkles,
  Zap,
  Shield,
  TrendingUp,
  ArrowRight,
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

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: <LinkIcon className="w-8 h-8" />,
      title: "Payment Links",
      description:
        "Share a simple link and get paid in seconds. Turn any video, live session, service or shout-out into income, without needing a website or a foreign account.",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Multi-rail Payments",
      description:
        "Let fans pay the way that works for them: cards or mobile money. Designed for African wallets and everyday realities, so no supporter is left out.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Subscriptions",
      description:
        "Build reliable, recurring income. Offer monthly support tiers with exclusive access so your biggest fans can back you every single month.",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "VOD Hosting",
      description:
        "Turn your videos into a library that pays you. Host shows, specials, classes or replays and put a price on the content you've worked hard to create.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Courses",
      description:
        "Package your knowledge into paid courses. Share your skills with your community and earn every time someone learns from you.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Membership Communities",
      description:
        "Build a home for your people. Create paid communities where your supporters get closer access, and you get stable, community-driven income.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Creator Storefronts",
      description:
        "Launch your creator shop in minutes. Sell digital drops, merch, tickets and services from one link that feels like your brand.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Creator Dashboard",
      description:
        "See what's working at a glance. Track earnings, top supporters and content performance so you can make better creative and business decisions.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-primary-green/40 overflow-x-hidden">
      <Navigation />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 pb-24 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/Tese Animated Images_10.png')] bg-cover bg-center opacity-20 grayscale mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#050508] via-[#050508]/80 to-[#050508]" />
          <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-primary-green/15 blur-[80px] rounded-full" />
          <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] bg-yellow-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="container relative z-10 px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 mb-6 space-x-3 text-sm border rounded-full bg-white/5 border-white/10 backdrop-blur-md"
          >
            <span className="flex w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            <span className="text-slate-300">
              The platform where creators get paid what they're worth
            </span>
            <Sparkles className="w-4 h-4 text-primary-green" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-7xl"
          >
            The platform where creators get paid what <br />
            <span className="font-bold text-primary-green">they're worth</span>
          </motion.h1>

          <motion.p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed md:text-xl text-slate-400">
            Tese is the creator monetization platform built for Africa. Turn
            your content, community and creativity into real income with tools
            designed for how Africans actually earn and get paid.
          </motion.p>

          <motion.div className="flex flex-col items-center justify-center gap-4 mb-16 sm:flex-row">
            <Link href="/contact">
              <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-primary-green hover:bg-green-600">
                Start getting paid today
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* --- CREATIVE DIVIDER --- */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-yellow-500/50"></div>
        <div className="absolute -bottom-1 left-1/4 w-3 h-3 rounded-full bg-primary-green blur-[3px] animate-pulse"></div>
        <div className="absolute -bottom-1 right-1/4 w-3 h-3 rounded-full bg-yellow-500 blur-[3px] animate-pulse"></div>
      </section>

      {/* --- FEATURES GRID --- */}
      <section className="relative py-24 overflow-hidden bg-black/40">
        <div className="container px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <GlassCard className="transition-all duration-300 border-primary-green/20 hover:border-primary-green/50">
                  <div className="flex items-center justify-center w-12 h-12 mb-6 transition-all rounded-2xl bg-primary-green/10 text-primary-green group-hover:bg-primary-green/20">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                  <p className="leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FEATURE HIGHLIGHTS --- */}
      <section className="py-32 relative overflow-hidden bg-[#07070B]">
        <div className="container px-6 mx-auto">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div>
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Built for African Creators
                </h2>
                <p className="text-lg leading-relaxed text-slate-400">
                  Tese is made for the African creator economy, not adapted to
                  it. Mobile-first, local payment rails and tools that respect
                  the realities of creating, earning and getting paid on the
                  continent.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="font-medium text-slate-300">
                    Mobile-optimized experience
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="font-medium text-slate-300">
                    Local payment integration
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="font-medium text-slate-300">
                    Cross-border capabilities
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="font-medium text-slate-300">
                    No technical expertise required
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-primary-green hover:bg-green-600">
                    Start Creating Now
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden shadow-2xl rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative overflow-hidden h-96 rounded-xl">
                <img
                  src="/Tese Animated Images_11.png"
                  alt="African creators using Tese platform"
                  className="absolute inset-0 object-cover w-full h-full"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-primary-green/20 mix-blend-overlay"></div>
              </div>
            </motion.div>
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
              Ready to get paid what you're worth?
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-lg text-slate-400">
              Join African creators who are turning followers into supporters
              and supporters into sustainable income on Tese.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-primary-green hover:bg-green-600">
                  Start Creating Now
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

export default FeaturesPage;
