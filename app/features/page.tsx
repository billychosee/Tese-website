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
        "Create custom payment links for any product or service in seconds. Share them anywhere and start receiving payments immediately.",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Multi-rail Payments",
      description:
        "Accept payments through multiple channels including cards, mobile money, and bank transfers. No customer left behind.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Split Payments",
      description:
        "Automatically split earnings between collaborators, team members, or partners with our smart payment distribution system.",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Subscriptions",
      description:
        "Create recurring revenue streams with flexible subscription plans. Keep your audience engaged and your income predictable.",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "VOD Hosting",
      description:
        "Host and monetize your video content with our high-quality video-on-demand platform. Control access and pricing.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Courses",
      description:
        "Create and sell online courses with our comprehensive learning management system. Track progress and engagement.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Membership Communities",
      description:
        "Build exclusive communities around your content. Offer premium access and foster deeper connections with your audience.",
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Creator Storefronts",
      description:
        "Set up your own branded storefront to sell digital products, merchandise, and services directly to your fans.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description:
        "Access powerful analytics to understand your audience, track performance, and make data-driven decisions for growth.",
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
              Everything You Need to Succeed
            </span>
            <Sparkles className="w-4 h-4 text-primary-green" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-7xl"
          >
            Everything You Need to <br />
            <span className="font-bold text-primary-green">
              Succeed
            </span>
          </motion.h1>

          <motion.p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed md:text-xl text-slate-400">
            From simple payment links to comprehensive business management, Tese
            provides all the tools you need to build a sustainable creative
            career.
          </motion.p>

          <motion.div className="flex flex-col items-center justify-center gap-4 mb-16 sm:flex-row">
            <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-primary-green hover:bg-green-600">
              Start Creating Today
            </Button>
            <Link href="/roadmap">
              <Button
                variant="secondary"
                className="px-8 py-3.5 text-md rounded-full border-primary-green/50 text-primary-green hover:bg-primary-green/10 hover:border-primary-green transition-all"
              >
                View All Features
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
                  Every feature is designed with the unique challenges and
                  opportunities of the African creator economy in mind. From
                  mobile-first interfaces to local payment methods, we've got
                  you covered.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-primary-green"></div>
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
                  <div className="w-3 h-3 rounded-full bg-primary-green"></div>
                  <span className="font-medium text-slate-300">
                    No technical expertise required
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-primary-green hover:bg-green-600">
                    Get Started Free
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    className="px-8 py-3.5 text-md rounded-full border-primary-green/50 text-primary-green hover:bg-primary-green/10 hover:border-primary-green transition-all"
                  >
                    Request Demo
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
              Ready to Unlock Your Potential?
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-lg text-slate-400">
              Join thousands of African creators who are already building
              sustainable businesses with Tese.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-primary-green hover:bg-green-600">
                  Start Creating Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="secondary"
                  className="px-8 py-3.5 text-md rounded-full border-primary-green/50 text-primary-green hover:bg-primary-green/10 hover:border-primary-green transition-all"
                >
                  Contact Sales
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

