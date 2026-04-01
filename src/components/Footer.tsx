"use client";

import Link from "next/link";
import { RESTAURANT } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-500/20 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              The <span className="gold-text">ANNEX</span>
            </h3>
            <p className="text-cream-200/70 text-sm leading-relaxed mb-2">
              Upscale American, Greek & Mediterranean cuisine — made from scratch in Lake in the Hills, Illinois.
            </p>
            <p className="text-cream-200/50 text-xs leading-relaxed">
              Owner-operated. Every dish, every cocktail, every detail.
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
              <a
                href="https://www.google.com/maps/place/The+ANNEX+Restaurant+%26+Lounge/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-200/50 hover:text-gold-400 transition-colors"
                aria-label="Google"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
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
              <p className="text-cream-200/50 text-xs mt-2">Kitchen opens daily at 11:00 AM</p>
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
            <div className="flex flex-col gap-2 mt-4">
              <a
                href={RESTAURANT.openTable}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-950 px-5 py-2 rounded text-xs font-bold tracking-wider uppercase transition-all hover:shadow-lg hover:shadow-gold-500/25 text-center"
              >
                Reserve Now
              </a>
              <a
                href="https://annexrestaurant.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-gold-500/30 hover:border-gold-500/60 text-cream-100 px-5 py-2 rounded text-xs font-bold tracking-wider uppercase transition-all text-center"
              >
                Order Pickup / Delivery
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold-500/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream-200/40 text-xs">
            © {new Date().getFullYear()} The ANNEX Restaurant & Lounge. All rights reserved.
          </p>
          <p className="text-cream-200/30 text-xs">
            2104 W Algonquin Rd, Lake in the Hills, IL 60156
          </p>
        </div>
      </div>
    </footer>
  );
}
