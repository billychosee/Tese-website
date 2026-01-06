"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Users,
  Shield,
  ArrowRight,
  X,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "#" },
        { name: "Roadmap", href: "/roadmap" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "/about" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Privacy Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#050508] text-slate-300 border-t border-white/10">
      <div className="absolute inset-0 bg-primary-green/5"></div>
      <div className="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/Tese-Light-Logo.png"
                alt="Tese Logo"
                width={200}
                height={50}
                className="w-auto h-12"
              />
            </Link>
            <p className="max-w-xs mb-6 leading-relaxed text-slate-400">
              You focus on your craft. We power your business. Building Africa's
              creator economy.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-xl bg-white/5 hover:bg-primary-green/20 hover:scale-105"
              >
                <svg
                  className="w-5 h-5 text-primary-green"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-xl bg-white/5 hover:bg-primary-green/20 hover:scale-105"
              >
                <Linkedin className="w-5 h-5 text-primary-green" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 transition-all duration-300 rounded-xl bg-white/5 hover:bg-primary-green/20 hover:scale-105"
              >
                <Instagram className="w-5 h-5 text-primary-green" />
              </Link>
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="flex items-center space-x-2 transition-all duration-300 text-slate-400 hover:text-white hover:translate-x-1"
                    >
                      <ArrowRight className="w-4 h-4 text-primary-green" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col items-center justify-between pt-12 mt-12 border-t border-white/10 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-center space-x-6">
            <p className="text-sm text-slate-400">
              © {currentYear} Smatech Group. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-xs text-slate-500">
              <Shield className="w-4 h-4 text-primary-green" />
              <span>Secure & Trusted</span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 mt-4 md:mt-0 md:flex-row">
            <div className="flex space-x-6">
              <Link
                href="/terms"
                className="text-sm transition-colors duration-300 text-slate-400 hover:text-white"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy-policy"
                className="text-sm transition-colors duration-300 text-slate-400 hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex items-center space-x-2 text-xs text-slate-500">
              <Globe className="w-4 h-4 text-primary-green" />
              <span>Made for Africa</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
