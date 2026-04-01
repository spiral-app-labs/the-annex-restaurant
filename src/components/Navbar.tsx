"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { RESTAURANT } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events & Private Dining" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl md:text-3xl font-bold text-white tracking-wide group-hover:text-gold-400 transition-colors">
              The <span className="gold-text">ANNEX</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream-100 hover:text-gold-400 transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={RESTAURANT.openTable}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-6 py-2.5 rounded text-sm font-bold tracking-wider uppercase transition-all hover:shadow-lg hover:shadow-gold-500/25 hover:-translate-y-0.5"
            >
              Reserve a Table
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-950/98 backdrop-blur-md border-t border-gold-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-cream-100 hover:text-gold-400 transition-colors text-lg font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={RESTAURANT.openTable}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gold-500 hover:bg-gold-600 text-navy-950 px-6 py-3 rounded text-sm font-bold tracking-wider uppercase"
              >
                Reserve a Table
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
