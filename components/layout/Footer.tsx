"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Linkedin,
  Instagram,
  Send,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
  ];

  const supportLinks = [
    { name: "Get started free", href: "/contact" },
    { name: "Talk to the Tese team", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms", href: "/terms" },
  ];

  return (
    <footer className="relative overflow-hidden border-t bg-independence text-neutral-300 border-neutral-800/50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-harvest-green/10 blur-[120px] rounded-full opacity-50" />

      <div className="relative px-4 pt-20 pb-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Section */}
          <motion.div
            className="space-y-8 lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/"
              className="inline-block transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Image
                src="/Tese-Light-Logo.png"
                alt="Tese Logo"
                width={180}
                height={45}
                className="object-contain w-auto h-10"
              />
            </Link>
            <p className="max-w-sm leading-relaxed text-neutral-400">
              The Platform Where Creators Get Paid What They're Worth.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" },
                {
                  icon: (
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  ),
                  href: "#",
                },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="p-3 transition-all duration-300 border shadow-lg rounded-xl bg-off-white/5 border-neutral-800/50 hover:border-harvest-green/50 hover:bg-harvest-green/10 hover:-translate-y-1 shadow-black/20"
                >
                  <div className="transition-colors text-neutral-400 hover:text-harvest-green">
                    {social.icon}
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Links Section - Center (Quick Links & Support) */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-4 lg:px-4">
            {/* Column 1: Quick Links */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-white/50">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 transition-all duration-300 group text-neutral-400 hover:text-off-white"
                    >
                      <ArrowRight className="w-4 h-4 transition-transform text-harvest-green group-hover:translate-x-1" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Support */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-white/50">
                Support
              </h3>
              <ul className="space-y-4">
                {supportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 transition-all duration-300 group text-neutral-400 hover:text-off-white"
                    >
                      <ArrowRight className="w-4 h-4 transition-transform text-harvest-green group-hover:translate-x-1" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            className="lg:col-span-4 space-y-6 p-8 rounded-3xl bg-gradient-to-b from-off-white/[0.04] to-transparent border border-neutral-800/50"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white">
                Join the movement
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">
                Get the latest updates on creator tools and ecosystem news.
              </p>
            </div>
            <form className="relative group">
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-4 transition-all border rounded-2xl bg-off-white/5 border-neutral-800/50 focus:outline-none focus:border-harvest-green/50 focus:bg-off-white/[0.08] placeholder:text-neutral-600"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute flex items-center gap-2 px-5 py-2 text-sm font-bold text-independence transition-colors rounded-xl right-2 top-2 bottom-2 bg-harvest-green hover:shadow-[0_0_20px_rgba(var(--harvest-green-rgb),0.3)]"
              >
                Join <Send size={14} strokeWidth={3} />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-neutral-800/50">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center text-[13px] gap-x-8 gap-y-4 text-neutral-500">
              <p className="italic font-medium tracking-tight">
                © {currentYear}{" "}
                <Link
                  href="https://smatechgroup.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Smatech Group
                </Link>
                .
              </p>
            </div>

            <div className="flex items-center gap-8">
              <div className="items-center hidden gap-2 text-xs font-medium tracking-widest uppercase sm:flex text-neutral-500">
                <Globe size={14} className="text-harvest-green/70" />
                <Link
                  href="/terms"
                  className="transition-colors hover:text-off-white"
                >
                  Terms and Conditions
                </Link>
                <span className="text-slate-600">|</span>
                <Link
                  href="/privacy-policy"
                  className="transition-colors hover:text-off-white"
                >
                  Privacy Policy
                </Link>
              </div>
              <button
                onClick={scrollToTop}
                className="p-3 transition-all border rounded-full border-neutral-800/50 hover:bg-off-white/5 hover:border-neutral-800/20 group bg-independence"
                aria-label="Scroll to top"
              >
                <ChevronUp
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 text-neutral-400 group-hover:text-off-white"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
