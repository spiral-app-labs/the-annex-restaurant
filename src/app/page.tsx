"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { RESTAURANT, MENU_CATEGORIES, STATS } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import ReviewCarousel from "@/components/ReviewCarousel";
import AnimatedCounter from "@/components/AnimatedCounter";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function HomePage() {
  const featuredCategories = MENU_CATEGORIES.filter((c) =>
    ["Small Plates & Appetizers", "Steaks & Chops", "Pasta", "Signature Cocktails & Drinks"].includes(c.name)
  );

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/50 to-navy-950" />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-gold-400 text-sm md:text-base tracking-[0.3em] uppercase font-medium">
              American · Greek · Mediterranean
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
          >
            Made From Scratch.
            <br />
            <span className="gold-text">Crafted With Care.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-cream-200/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Upscale casual dining in the heart of Lake in the Hills. Where Greek tradition meets American craft.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={RESTAURANT.openTable}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-4 rounded text-sm font-bold tracking-wider uppercase transition-all hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-1"
            >
              Reserve a Table
            </a>
            <Link
              href="/menu"
              className="border border-cream-200/30 hover:border-gold-400 text-cream-100 hover:text-gold-400 px-8 py-4 rounded text-sm font-bold tracking-wider uppercase transition-all hover:-translate-y-1"
            >
              View Our Menu
            </Link>
          </motion.div>

          {/* Rating Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-12 inline-flex items-center gap-3 bg-navy-950/60 backdrop-blur-sm border border-gold-500/20 rounded-full px-6 py-3"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-cream-100 text-sm font-medium">
              4.8 on OpenTable · 129+ Reviews
            </span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-cream-200/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2 bg-gold-400 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-24 px-4 bg-navy-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              A Hidden Gem in<br />Lake in the Hills
            </h2>
            <p className="text-cream-200/70 leading-relaxed mb-6">
              Established in 2024, The ANNEX brings together the best of American, Greek, and Mediterranean
              cuisines under one roof. Every dish is made from scratch using the freshest ingredients,
              prepared with the passion and pride of an owner-operated establishment.
            </p>
            <p className="text-cream-200/70 leading-relaxed mb-8">
              From our flaming Saganaki to our perfectly grilled steaks, from our signature cocktails
              to our warm, clubby atmosphere — we invite you to discover why diners call us their
              favorite neighborhood gem.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors group"
            >
              Learn More About Us
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Elegant dining at The ANNEX"
                width={800}
                height={600}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold-500/30 rounded-lg" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold-500/30 rounded-lg" />
          </motion.div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 bg-navy-950 border-y border-gold-500/10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              end={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              decimals={stat.label === "OpenTable Rating" ? 1 : 0}
            />
          ))}
        </div>
      </section>

      {/* ===== FEATURED MENU ===== */}
      <section className="py-24 px-4 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="From Our Kitchen"
            subtitle="Explore our menu — a celebration of Greek, Mediterranean, and American flavors, all made from scratch"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, i) => (
              <motion.div
                key={category.name}
                {...stagger}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href="/menu" className="group block">
                  <div className="relative rounded-lg overflow-hidden mb-4">
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-xl font-bold text-white">{category.name}</h3>
                      <p className="text-cream-200/70 text-sm mt-1">{category.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-4 rounded text-sm font-bold tracking-wider uppercase transition-all hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-1"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-24 px-4 relative">
        <div
          className="absolute inset-0 parallax-bg opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-navy-950/90" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading
            title="What Our Guests Say"
            subtitle="OpenTable Diners' Choice — Best Service, Best Value, American Cuisine (Northwest Suburbs)"
          />
          <ReviewCarousel />
        </div>
      </section>

      {/* ===== RESERVATION CTA ===== */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Experience<br /><span className="gold-text">The ANNEX?</span>
            </h2>
            <p className="text-cream-200/70 text-lg mb-10">
              Reserve your table today and discover why we&apos;re one of the highest-rated restaurants in the Northwest Suburbs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={RESTAURANT.openTable}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-4 rounded text-sm font-bold tracking-wider uppercase transition-all hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-1"
              >
                Reserve on OpenTable
              </a>
              <a
                href={RESTAURANT.phoneHref}
                className="border border-cream-200/30 hover:border-gold-400 text-cream-100 hover:text-gold-400 px-8 py-4 rounded text-sm font-bold tracking-wider uppercase transition-all hover:-translate-y-1"
              >
                Call {RESTAURANT.phone}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== HOURS & LOCATION ===== */}
      <section className="py-24 px-4 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Visit Us" subtitle="We look forward to welcoming you" />

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">
                    Hours
                  </h3>
                  {RESTAURANT.hours.map((h) => (
                    <div key={h.days} className="flex justify-between py-2 border-b border-gold-500/10">
                      <span className="text-cream-100 font-medium">{h.days}</span>
                      <span className="text-cream-200/70">{h.time}</span>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">
                    Location
                  </h3>
                  <p className="text-cream-200/70">{RESTAURANT.address}</p>
                  <p className="text-cream-200/50 text-sm mt-1">Private parking lot available</p>
                </div>

                <div>
                  <h3 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">
                    Contact
                  </h3>
                  <a href={RESTAURANT.phoneHref} className="block text-cream-200/70 hover:text-gold-400 transition-colors">
                    {RESTAURANT.phone}
                  </a>
                  <a href={`mailto:${RESTAURANT.email}`} className="block text-cream-200/70 hover:text-gold-400 transition-colors mt-1">
                    {RESTAURANT.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-lg overflow-hidden shadow-2xl h-[400px]"
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
    </>
  );
}
