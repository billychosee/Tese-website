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
        "Empower African creators to build sustainable businesses through accessible, innovative technology.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Vision",
      description:
        "To be the leading creator platform in Africa, enabling millions to monetize their creativity.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Focus",
      description:
        "We meet creators where they are, providing tools that work in the African context.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Commitment",
      description:
        "Building long-term financial infrastructure for the African creator economy.",
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
              Creator Economy
            </span>
          </motion.h1>

          <motion.p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed md:text-xl text-slate-400">
            We're on a mission to empower African creators with the tools and
            infrastructure they need to turn their passion into sustainable
            businesses.
          </motion.p>

          <motion.div className="flex flex-col items-center justify-center gap-4 mb-16 sm:flex-row">
            <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-primary-green hover:bg-green-600">
              Join Our Mission
            </Button>
            <Link href="/features">
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
                  Tese was born from a simple observation: Africa has incredible
                  talent, but lacks the infrastructure to support creators in
                  building sustainable careers.
                </p>
                <p className="mb-6 text-lg leading-relaxed text-slate-400">
                  Founded by Smatech Group, we set out to bridge this gap by
                  creating a platform that understands the unique challenges and
                  opportunities of the African creator economy.
                </p>
                <p className="text-lg leading-relaxed text-slate-400">
                  We started in Zimbabwe and are rapidly expanding across the
                  continent, bringing world-class creator tools to where they're
                  needed most.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-primary-green hover:bg-green-600">
                  Our Team
                </Button>
                <Button
                  variant="secondary"
                  className="px-8 py-3.5 text-md rounded-full border-primary-green/50 text-primary-green hover:bg-primary-green/10 hover:border-primary-green transition-all"
                >
                  Careers
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden shadow-2xl rounded-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative overflow-hidden h-96 rounded-xl">
                <div className="grid h-full grid-cols-3 gap-4">
                  <div className="relative col-span-2">
                    <img
                      src="/Tese Animated Images_13.png"
                      alt="African creators working together"
                      className="absolute inset-0 object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-primary-green/30 mix-blend-overlay"></div>
                  </div>
                  <div className="space-y-4">
                    <div className="relative h-1/3">
                      <img
                        src="/Tese Animated Images_14.png"
                        alt="African technology and innovation"
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-primary-green/40 mix-blend-overlay"></div>
                    </div>
                    <div className="relative overflow-hidden border rounded-lg h-2/3 bg-gradient-to-br from-white/10 to-white/5 border-white/20">
                      <img
                        src="/Tese Animated Images_15.png"
                        alt="African creative economy"
                        className="absolute inset-0 object-cover w-full h-full"
                      />
                      <div className="absolute inset-0 bg-primary-green/20 mix-blend-overlay"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm">
                            <Sparkles className="w-8 h-8 text-primary-green" />
                          </div>
                          <p className="text-sm font-medium">Our Vision</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center h-16 pb-4 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-center text-white">
                    <div className="text-sm font-medium">
                      Building Africa's Creator Economy
                    </div>
                    <div className="text-xs text-white/80">
                      One creator at a time
                    </div>
                  </div>
                </div>
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
              These principles guide everything we do and build.
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

      {/* --- OUR JOURNEY --- */}
      <section className="relative py-24 overflow-hidden bg-black/40">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.h2
              className="mb-6 text-4xl font-bold md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Journey So Far
            </motion.h2>
            <motion.p
              className="text-lg text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Key milestones in our mission to empower African creators.
            </motion.p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-green/50 transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  className={`relative ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex items-center gap-8`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-1/2 top-8 w-4 h-4 bg-primary-green rounded-full transform -translate-x-1/2 -translate-y-1/2 lg:static lg:left-auto lg:top-auto lg:w-6 lg:h-6 lg:transform-none`}
                  ></div>

                  {/* Content */}
                  <div className="lg:w-1/2">
                    <GlassCard className="border-primary-green/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-slate-400">
                          {milestone.year}
                        </span>
                        <Rocket className="w-5 h-5 text-primary-green" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-400">{milestone.description}</p>
                    </GlassCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- IMPACT SECTION --- */}
      <section className="py-32 relative overflow-hidden bg-[#07070B]">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <motion.h2
              className="mb-6 text-4xl font-bold md:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Making an Impact
            </motion.h2>
            <motion.p
              className="text-lg text-slate-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The numbers that drive us forward.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <GlassCard className={`border-${stat.color}/20`}>
                  <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400">{stat.label}</div>
                </GlassCard>
              </motion.div>
            ))}
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
              Join Our Mission
            </h2>
            <p className="max-w-xl mx-auto mb-8 text-lg text-slate-400">
              Be part of the movement to empower African creators and build a
              more inclusive digital economy.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-primary-green hover:bg-green-600">
                Get Started
              </Button>
              <Button
                variant="secondary"
                className="px-8 py-3.5 text-md rounded-full border-primary-green/50 text-primary-green hover:bg-primary-green/10 hover:border-primary-green transition-all"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
