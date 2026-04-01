"use client";

import { motion } from "framer-motion";
import { RESTAURANT } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 to-navy-900" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white mt-4 mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cream-200/70 text-lg"
          >
            We&apos;d love to hear from you. Reach out for reservations, events, catering, or any questions.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-24 px-4 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info Cards */}
            <motion.div {...fadeInUp} className="space-y-8">
              {/* Address */}
              <div className="bg-navy-800/50 rounded-lg p-8 border border-gold-500/10 hover:border-gold-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-gold-400 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2">Location</h3>
                    <p className="text-cream-200/70">{RESTAURANT.address}</p>
                    <p className="text-cream-200/50 text-sm mt-1">Private parking lot available</p>
                    <a
                      href={RESTAURANT.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 text-sm font-medium mt-3 transition-colors"
                    >
                      Get Directions
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-navy-800/50 rounded-lg p-8 border border-gold-500/10 hover:border-gold-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-gold-400 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2">Phone</h3>
                    <a href={RESTAURANT.phoneHref} className="text-cream-200/70 hover:text-gold-400 transition-colors text-lg">
                      {RESTAURANT.phone}
                    </a>
                    <p className="text-cream-200/50 text-sm mt-1">Call for reservations, takeout, or inquiries</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-navy-800/50 rounded-lg p-8 border border-gold-500/10 hover:border-gold-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-gold-400 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-2">Email</h3>
                    <a href={`mailto:${RESTAURANT.email}`} className="text-cream-200/70 hover:text-gold-400 transition-colors">
                      {RESTAURANT.email}
                    </a>
                    <p className="text-cream-200/50 text-sm mt-1">For events, catering, and general inquiries</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-navy-800/50 rounded-lg p-8 border border-gold-500/10 hover:border-gold-500/30 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-gold-400 mt-1">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white mb-3">Hours</h3>
                    {RESTAURANT.hours.map((h) => (
                      <div key={h.days} className="flex justify-between py-1.5 border-b border-gold-500/10 last:border-0">
                        <span className="text-cream-100 font-medium text-sm">{h.days}</span>
                        <span className="text-cream-200/70 text-sm ml-4">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4">
                <a
                  href={RESTAURANT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-navy-800/50 rounded-lg px-6 py-4 border border-gold-500/10 hover:border-gold-500/30 transition-all flex-1"
                >
                  <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span className="text-cream-200/70 text-sm font-medium">Facebook</span>
                </a>
                <a
                  href={RESTAURANT.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-navy-800/50 rounded-lg px-6 py-4 border border-gold-500/10 hover:border-gold-500/30 transition-all flex-1"
                >
                  <svg className="w-5 h-5 text-gold-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  <span className="text-cream-200/70 text-sm font-medium">@annexrestaurant</span>
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-lg overflow-hidden shadow-2xl h-[600px] lg:h-full lg:min-h-[700px]"
            >
              <iframe
                src={RESTAURANT.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="The ANNEX Restaurant & Lounge Location"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 px-4 bg-navy-950 border-t border-gold-500/10">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Make a Reservation"
            subtitle="Book your table through OpenTable for the best experience"
          />
          <a
            href={RESTAURANT.openTable}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-4 rounded text-sm font-bold tracking-wider uppercase transition-all hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-1"
          >
            Reserve on OpenTable
          </a>
        </div>
      </section>
    </>
  );
}
