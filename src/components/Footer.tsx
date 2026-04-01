"use client";

import Link from "next/link";
import { RESTAURANT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              The <span className="gold-text">ANNEX</span>
            </h3>
            <p className="text-cream-200/70 text-sm leading-relaxed">
              American, Greek & Mediterranean cuisine — upscale casual dining in Lake in the Hills, Illinois.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={RESTAURANT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-200/50 hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href={RESTAURANT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-200/50 hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-4">Quick Links</h4>
            <div className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/about", label: "Our Story" },
                { href: "/events", label: "Events & Private Dining" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-cream-200/70 hover:text-gold-400 transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-4">Hours</h4>
            <div className="space-y-2">
              {RESTAURANT.hours.map((h) => (
                <div key={h.days} className="text-sm">
                  <span className="text-cream-100 font-medium">{h.days}</span>
                  <br />
                  <span className="text-cream-200/70">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-cream-200/70">
              <p>{RESTAURANT.address}</p>
              <a href={RESTAURANT.phoneHref} className="block hover:text-gold-400 transition-colors">
                {RESTAURANT.phone}
              </a>
              <a href={`mailto:${RESTAURANT.email}`} className="block hover:text-gold-400 transition-colors">
                {RESTAURANT.email}
              </a>
            </div>
            <a
              href={RESTAURANT.openTable}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-gold-500 hover:bg-gold-600 text-navy-950 px-5 py-2 rounded text-xs font-bold tracking-wider uppercase transition-all hover:shadow-lg hover:shadow-gold-500/25"
            >
              Reserve Now
            </a>
          </div>
        </div>

        <div className="border-t border-gold-500/10 mt-12 pt-8 text-center">
          <p className="text-cream-200/40 text-xs">
            © {new Date().getFullYear()} The ANNEX Restaurant & Lounge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
