"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "../ui/Button";

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/50 bg-independence/80 backdrop-blur-xl">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/Tese-Light-Logo.png"
                alt="Tese Logo"
                width={200}
                height={50}
                className="w-auto h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-all duration-200 ${
                    isActive
                      ? "text-off-white"
                      : "text-neutral-300 hover:text-off-white"
                  } group`}
                >
                  {item.name}
                  <div
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                      isActive
                        ? "w-full bg-harvest-green"
                        : "w-0 group-hover:w-full bg-harvest-green"
                    }`}
                  ></div>
                </Link>
              );
            })}
            <Link href="/contact">
              <Button className="px-6 py-2.5 text-sm font-bold text-black border-none rounded-full shadow-lg shadow-primary-green/20 bg-primary-green hover:bg-green-600">
                Get Started Free
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="p-2 transition-all rounded-lg text-neutral-300 hover:text-off-white hover:bg-off-white/10 focus:outline-none focus:ring-2 focus:ring-harvest-green"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="border-t border-neutral-800/50"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="py-6 space-y-2">
                {navigationItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 font-medium transition-all duration-200 rounded-lg ${
                          isActive
                            ? "text-off-white bg-off-white/5"
                            : "text-neutral-300 hover:text-off-white hover:bg-off-white/5"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          {isActive && (
                            <motion.div
                              className="w-2 h-2 rounded-full bg-harvest-green"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                              }}
                            />
                          )}
                        </div>
                        {isActive && (
                          <motion.div
                            className="mt-2 h-0.5 w-full bg-harvest-green"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="px-4 pt-4 border-t border-neutral-800/50"
                >
                  <Link href="/contact">
                    <Button
                      className="w-full px-6 py-3 text-sm font-bold border-none rounded-full shadow-lg text-independence shadow-harvest-green/20 bg-harvest-green hover:bg-primary-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started Free
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
