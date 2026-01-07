"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ChevronRight } from "lucide-react";
import Image from "next/image";
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

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050508] text-white selection:bg-primary-green/40 overflow-x-hidden">
      <Navigation />

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 pt-32 pb-24 overflow-hidden min-h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516110833967-1d84e626564f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale mix-blend-screen" />
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
            <span className="flex w-2 h-2 rounded-full bg-primary-green animate-pulse" />
            <span className="text-slate-300">Get in Touch</span>
            <Send className="w-4 h-4 text-primary-green" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-7xl"
          >
            Let's Build Something
            <br />
            <span className="text-transparent bg-gradient-to-r from-primary-green via-yellow-500 to-primary-green bg-clip-text">
              Amazing
            </span>
          </motion.h1>

          <motion.p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed md:text-xl text-slate-400">
            Ready to transform your creative journey? We're here to help you
            every step of the way.
          </motion.p>

          <motion.div className="flex flex-col items-center justify-center gap-4 mb-16 sm:flex-row">
            <Button className="px-8 py-3.5 text-md font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-gradient-to-r bg-primary-green">
              Send Message
            </Button>
            <Link href="mailto:hello@tese.africa">
              <Button
                variant="secondary"
                className="px-8 py-3.5 text-md rounded-full border-primary-green/50 text-primary-green hover:bg-primary-green/10 hover:border-primary-green transition-all"
              >
                Email Us
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* --- CREATIVE DIVIDER --- */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-green/50 to-transparent"></div>
        <div className="absolute -bottom-1 left-1/3 w-3 h-3 rounded-full bg-yellow-500 blur-[3px] animate-pulse"></div>
        <div className="absolute -bottom-1 right-1/3 w-3 h-3 rounded-full bg-primary-green blur-[3px] animate-pulse"></div>
      </section>

      {/* --- CONTACT FORM SECTION --- */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary-green/10 blur-[120px] rounded-full z-0" />
        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-6 text-4xl font-extrabold md:text-6xl">
                Send Us a Message
              </h2>
              <p className="text-lg text-slate-400">
                Have questions or want to collaborate? We'd love to hear from
                you.
              </p>
            </motion.div>

            <GlassCard>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-slate-400"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 transition-all border rounded-xl bg-white/5 border-white/10 focus:outline-none focus:border-primary-green/50 focus:bg-white/[0.08] placeholder:text-slate-600"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-slate-400"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 transition-all border rounded-xl bg-white/5 border-white/10 focus:outline-none focus:border-primary-green/50 focus:bg-white/[0.08] placeholder:text-slate-600"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm font-medium text-slate-400"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 transition-all border rounded-xl bg-white/5 border-white/10 focus:outline-none focus:border-primary-green/50 focus:bg-white/[0.08] placeholder:text-slate-600"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-slate-400"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 transition-all border rounded-xl bg-white/5 border-white/10 focus:outline-none focus:border-primary-green/50 focus:bg-white/[0.08] placeholder:text-slate-600 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <Button className="px-12 py-4 font-bold text-black border-none rounded-full shadow-lg text-md shadow-primary-green/20 bg-gradient-to-r bg-primary-green hover:shadow-primary-green/30">
                    Send Message
                  </Button>
                </div>
              </form>
            </GlassCard>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
