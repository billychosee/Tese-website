"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Rocket,
  Cog,
  Users,
  Shield,
  Zap,
  Video,
  ShoppingBag,
  Radio,
  Coins,
  CheckCircle2,
  ChevronRight,
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

const RoadmapPage: React.FC = () => {
  const roadmapPhases = [
    {
      phase: "Phase 1",
      title: "Foundations",
      time: "Now",
      status: "Live",
      color: "primary-green",
      features: [
        "Payments & Payouts",
        "Payment Links",
        "Multi-rail Payments",
        "Basic Analytics",
        "Mobile App",
      ],
      description: "Core payment infrastructure and basic monetization tools.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-primary-green/40 overflow-x-hidden">
      <Navigation />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 pb-24 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516110833967-1d83c66e0183?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-screen" />
          <div className="absolute inset-0 bg-gradient-to-tl from-[#050508] via-[#050508]/80 to-[#050508]" />
          <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-yellow-500/15 blur-[90px] rounded-full" />
          <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-primary-green/10 blur-[110px] rounded-full" />
        </div>

        <div className="container relative z-10 px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-2 mb-6 space-x-3 text-sm border rounded-full bg-white/5 border-white/10 backdrop-blur-md"
          >
            <span className="flex w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
            <span className="text-slate-300">Our Journey</span>
            <Rocket className="w-4 h-4 text-primary-green" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-7xl"
          >
            Building the Future of <br />
            <span className="text-transparent bg-gradient-to-r from-primary-green via-yellow-500 to-primary-green bg-clip-text">
              African Creativity
            </span>
          </motion.h1>

          <motion.p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed md:text-xl text-slate-400">
            Our roadmap shows our commitment to empowering African creators with
            world-class tools and infrastructure.
          </motion.p>

          <motion.div className="flex flex-col items-center justify-center gap-4 mb-16 sm:flex-row">
            <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-gradient-to-r from-primary-green to-yellow-500">
              Join the Journey
            </Button>
            <Link href="/features">
              <Button
                variant="secondary"
                className="px-8 py-3.5 text-md rounded-full border-primary-green/50 text-primary-green hover:bg-primary-green/10 hover:border-primary-green transition-all"
              >
                Request Feature
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* --- CREATIVE DIVIDER --- */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-green/50 to-transparent"></div>
        <div className="absolute -bottom-1 left-1/3 w-3 h-3 rounded-full bg-yellow-500 blur-[3px] animate-pulse"></div>
        <div className="absolute -bottom-1 right-1/3 w-3 h-3 rounded-full bg-primary-green blur-[3px] animate-pulse"></div>
      </section>

      {/* --- ROADMAP TIMELINE --- */}
      <section className="relative py-24 overflow-hidden bg-black/40">
        <div className="container px-6 mx-auto">
          <div className="space-y-12">
            {roadmapPhases.map((phase, index) => (
              <motion.div
                key={index}
                className={`relative ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex items-center gap-8`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline Connector */}
                {index < roadmapPhases.length - 1 && (
                  <div className="hidden lg:block absolute left-1/2 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary-green/50 to-yellow-500/50 transform -translate-x-1/2"></div>
                )}

                {/* Phase Card */}
                <div className="lg:w-1/2">
                  <GlassCard className={`border-${phase.color}/20`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full bg-${phase.color}`}
                        ></div>
                        <span className="text-sm font-medium text-slate-400">
                          {phase.time}
                        </span>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium bg-${phase.color}/20 text-${phase.color}`}
                      >
                        {phase.status}
                      </span>
                    </div>
                    <h3 className="mb-2 text-2xl font-bold">{phase.title}</h3>
                    <p className="mb-6 text-slate-400">{phase.description}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {phase.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 text-${phase.color}`}
                          />
                          <span className="text-sm text-slate-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>

                {/* Phase Image */}
                <div className="lg:w-1/2">
                  <motion.div
                                className="relative overflow-hidden shadow-2xl rounded-2xl"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                              >
                                <div className="relative overflow-hidden h-96 rounded-xl">
                                  <img
                                    src="/Tese Animated Images_21.png"
                                    alt="African creators using Tese platform"
                                    className="absolute inset-0 object-cover w-full h-full"
                                    width={800}
                                    height={600}
                                  />
                                  <div className="absolute inset-0 bg-primary-green/20 mix-blend-overlay"></div>
                                </div>
                              </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VALUES SECTION --- */}
      <section className="py-32 relative overflow-hidden bg-[#07070B]">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.h2
              className="mb-6 text-4xl font-bold md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Commitment to Creators
            </motion.h2>
            <motion.p
              className="text-lg text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              We're building more than just a platform—we're building a
              movement.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <GlassCard className="border-primary-green/20">
                <div className="flex items-center justify-center w-12 h-12 mb-6 transition-all rounded-2xl bg-primary-green/10 text-primary-green group-hover:bg-primary-green/20">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Security First</h3>
                <p className="leading-relaxed text-slate-400">
                  Your earnings and data are protected with enterprise-grade
                  security.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="border-yellow-500/20">
                <div className="flex items-center justify-center w-12 h-12 mb-6 text-yellow-500 transition-all rounded-2xl bg-yellow-500/10 group-hover:bg-yellow-500/20">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Lightning Fast</h3>
                <p className="leading-relaxed text-slate-400">
                  Instant payments and real-time analytics keep you moving
                  forward.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GlassCard className="border-yellow-500/20">
                <div className="flex items-center justify-center w-12 h-12 mb-6 text-yellow-500 transition-all rounded-2xl bg-yellow-500/10 group-hover:bg-yellow-500/20">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Community Driven</h3>
                <p className="leading-relaxed text-slate-400">
                  Built by creators, for creators. Your feedback shapes our
                  future.
                </p>
              </GlassCard>
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
              Ready to Build the Future?
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-lg text-slate-400">
              Join us on this journey to empower African creators and build
              something truly revolutionary.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-gradient-to-r bg-primary-green">
                Get Started Today
              </Button>
              <Button
                variant="secondary"
                className="px-8 py-3.5 text-md rounded-full border-primary-green/50 text-primary-green hover:bg-primary-green/10 hover:border-primary-green transition-all"
              >
                Contact Our Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoadmapPage;
