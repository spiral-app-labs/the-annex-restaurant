"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { RESTAURANT, MENU_CATEGORIES, STATS, REVIEWS } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import ReviewCarousel from "@/components/ReviewCarousel";
import AnimatedCounter from "@/components/AnimatedCounter";

/* ─── animation presets ─── */
const easeOut = [0.22, 1, 0.36, 1] as const;

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.7, ease: easeOut as unknown as [number, number, number, number] },
};

const staggerChild = (i: number) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay: i * 0.12, ease: easeOut as unknown as [number, number, number, number] },
});

const scaleIn = {
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: easeOut as unknown as [number, number, number, number] },
};

/* ─── data ─── */
const SIGNATURE_COCKTAILS = [
  {
    name: "The ANNEX Old Fashioned",
    description: "Premium bourbon, Demerara sugar, aromatic bitters, smoked orange peel",
    price: "$16",
    color: "from-amber-800/40 to-amber-950/60",
  },
  {
    name: "Mediterranean Mule",
    description: "Vodka, fresh lime, house ginger-rosemary syrup, sparkling ginger beer",
    price: "$15",
    color: "from-emerald-800/40 to-emerald-950/60",
  },
  {
    name: "Greek Sunset Martini",
    description: "Citrus vodka, blood orange, honey lavender, topped with a gold shimmer",
    price: "$18",
    color: "from-rose-800/40 to-rose-950/60",
  },
];

const ATMOSPHERE_FEATURES = [
  { icon: "🥩", title: "Prime Cuts", desc: "Hand-selected steaks & chops grilled to perfection" },
  { icon: "🍝", title: "Scratch Kitchen", desc: "Every dish made fresh daily — nothing pre-made, ever" },
  { icon: "🍸", title: "Craft Bar", desc: "Mixologist-crafted cocktails with premium spirits" },
  { icon: "🎶", title: "Live Vibes", desc: "Curated atmosphere with music for every occasion" },
  { icon: "🏛️", title: "Greek Roots", desc: "Authentic Mediterranean flavors meet American craft" },
  { icon: "🍷", title: "Wine Cellar", desc: "Curated reds, whites & rosés from around the world" },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const featuredCategories = MENU_CATEGORIES.filter((c) =>
    ["Small Plates & Appetizers", "Steaks & Chops", "Pasta", "Signature Cocktails & Drinks"].includes(c.name)
  );

  return (
    <>
      {/* ═══════════════════════════════════════════════════
          HERO — Parallax with gradient overlays
      ═══════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 scale-110 parallax-bg"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80)",
            }}
          />
        </motion.div>
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/40 to-navy-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/50 via-transparent to-navy-950/50" />
        <div className="absolute inset-0 grain-overlay" />

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="text-gold-400 text-sm md:text-base tracking-[0.3em] uppercase font-medium">
              Upscale American · Greek · Mediterranean
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
            Prime steaks, handmade pasta, flaming Saganaki & signature cocktails — upscale casual dining in the heart of Lake in the Hills.
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
            className="mt-12 inline-flex items-center gap-3 bg-navy-950/60 backdrop-blur-sm border border-gold-500/20 rounded-full px-6 py-3 glow-pulse"
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
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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

      {/* ═══════════════════════════════════════════════════
          MENU CTA STRIP — quick access
      ═══════════════════════════════════════════════════ */}
      <section className="relative py-6 bg-gold-500/10 border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
          <span className="text-cream-100 font-medium text-sm uppercase tracking-wider">
            Explore our scratch-made menu
          </span>
          <Link
            href="/menu"
            className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-6 py-2.5 rounded text-xs font-bold tracking-wider uppercase transition-all hover:shadow-lg hover:shadow-gold-500/25 hover:-translate-y-0.5"
          >
            Full Menu →
          </Link>
          <a
            href="https://annexrestaurant.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-400 hover:text-gold-300 text-xs font-medium tracking-wider uppercase transition-colors"
          >
            Order Pickup & Delivery
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT / OWNER SPOTLIGHT
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 px-4 bg-navy-900 relative overflow-hidden">
        {/* Decorative bg element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}>
            <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6">
              A Hidden Gem in<br />Lake in the Hills
            </h2>
            <p className="text-cream-200/70 leading-relaxed mb-6">
              Established in 2024, The ANNEX is an owner-operated restaurant born from a passion for
              bringing world-class dining to the Northwest Suburbs. Every dish is made from scratch
              using the freshest ingredients — from our flaming tableside Saganaki to our hand-cut
              ribeyes and chef-crafted pasta.
            </p>
            <p className="text-cream-200/70 leading-relaxed mb-6">
              Our owners bring a deep love of Greek tradition and American hospitality to every plate.
              The result? A restaurant where the kitchen takes pride in every single dish, the bar
              crafts cocktails with precision, and every guest is treated like family.
            </p>
            <div className="flex items-center gap-4 mb-8 p-4 bg-navy-950/50 rounded-lg border border-gold-500/10">
              <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center text-2xl flex-shrink-0">
                👨‍🍳
              </div>
              <div>
                <p className="text-cream-100 font-medium text-sm">Owner-Operated Kitchen</p>
                <p className="text-cream-200/60 text-xs mt-0.5">
                  &quot;We take pride in every single dish. If it&apos;s not perfect, it doesn&apos;t leave the kitchen.&quot;
                </p>
              </div>
            </div>
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

          <motion.div {...scaleIn} className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Elegant dining at The ANNEX"
                width={800}
                height={600}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
            </div>
            {/* Accent decoration */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold-500/30 rounded-lg" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold-500/30 rounded-lg" />
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-navy-950 border border-gold-500/30 rounded-lg p-4 shadow-xl animate-float hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="text-gold-400 font-serif text-2xl font-bold">Est. 2024</div>
              <div className="text-cream-200/60 text-xs">Lake in the Hills, IL</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          STATS — Animated counters
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-navy-950 border-y border-gold-500/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(229,175,67,0.05)_0%,transparent_70%)]" />
        <div className="relative max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10">
          {STATS.map((stat, i) => (
            <motion.div key={stat.label} {...staggerChild(i)}>
              <AnimatedCounter
                end={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                decimals={stat.label === "OpenTable Rating" ? 1 : 0}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ATMOSPHERE — The ANNEX Experience
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 px-4 bg-navy-900 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px]" />
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="The ANNEX Experience"
            subtitle="Upscale American dining where every detail is intentional"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {ATMOSPHERE_FEATURES.map((feat, i) => (
              <motion.div
                key={feat.title}
                {...staggerChild(i)}
                className="text-center p-6 rounded-xl bg-navy-950/40 border border-gold-500/10 hover:border-gold-500/30 transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feat.icon}</div>
                <h3 className="text-cream-100 font-serif text-lg font-bold mb-2">{feat.title}</h3>
                <p className="text-cream-200/60 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          FEATURED MENU — 3D Tilt Cards
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 px-4 bg-navy-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(229,175,67,0.04)_0%,transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto">
          <SectionHeading
            title="From Our Kitchen"
            subtitle="A celebration of Greek, Mediterranean & American flavors — all made from scratch"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, i) => (
              <motion.div
                key={category.name}
                {...staggerChild(i)}
              >
                <Link href="/menu" className="group block tilt-card">
                  <div className="tilt-card-inner relative rounded-lg overflow-hidden mb-4 shadow-lg">
                    <div className="tilt-card-shine rounded-lg" />
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={400}
                      height={300}
                      className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-serif text-xl font-bold text-white">{category.name}</h3>
                      <p className="text-cream-200/70 text-sm mt-1">{category.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeInUp} className="text-center mt-14">
            <Link
              href="/menu"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-950 px-10 py-4 rounded text-sm font-bold tracking-wider uppercase transition-all hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-1"
            >
              View Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SIGNATURE COCKTAILS
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg opacity-15"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-navy-950/95" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading
            title="Signature Cocktails"
            subtitle="Mixologist-crafted creations by our bar team — each one a work of art"
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SIGNATURE_COCKTAILS.map((cocktail, i) => (
              <motion.div
                key={cocktail.name}
                {...staggerChild(i)}
                className="relative rounded-xl overflow-hidden border border-gold-500/20 bg-navy-900/60 backdrop-blur-sm hover:border-gold-500/40 transition-all group"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${cocktail.color} opacity-40`} />
                <div className="relative p-8 text-center">
                  <div className="text-5xl mb-4">🍸</div>
                  <h3 className="font-serif text-xl font-bold text-white mb-3">{cocktail.name}</h3>
                  <p className="text-cream-200/60 text-sm leading-relaxed mb-4">{cocktail.description}</p>
                  <span className="text-gold-400 font-bold text-lg">{cocktail.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p {...fadeInUp} className="text-center text-cream-200/50 text-sm mt-10">
            Ask your server for tonight&apos;s featured cocktail specials & happy hour offerings
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          REVIEWS — Expanded
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 px-4 relative">
        <div
          className="absolute inset-0 parallax-bg opacity-15"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-navy-950/92" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <SectionHeading
            title="What Our Guests Say"
            subtitle="OpenTable Diners' Choice — rated for Best Service, Best Value & American Cuisine"
          />

          {/* Featured review carousel */}
          <ReviewCarousel />

          {/* Review grid — additional reviews */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {REVIEWS.slice(0, 6).map((review, i) => (
              <motion.div
                key={review.author}
                {...staggerChild(i)}
                className="bg-navy-900/60 backdrop-blur-sm border border-gold-500/10 rounded-xl p-6 hover:border-gold-500/25 transition-all"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-cream-200/80 text-sm leading-relaxed italic mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gold-400 font-medium text-sm">{review.author}</span>
                  <span className="text-cream-200/40 text-xs">{review.source}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Review CTAs */}
          <motion.div {...fadeInUp} className="flex flex-wrap gap-4 justify-center mt-12">
            <a
              href={RESTAURANT.openTable}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors underline underline-offset-4"
            >
              Read all 129+ reviews on OpenTable →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          EVENTS & SPECIALS
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 px-4 bg-navy-900 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <p className="text-gold-400 text-sm tracking-[0.25em] uppercase font-semibold mb-3">On the Calendar</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Events &amp; <span className="gold-text">Specials</span></h2>
            <p className="text-cream-200/60 text-base max-w-xl mx-auto">From happy hour to live music — there&apos;s always a reason to visit The ANNEX.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { day: "Mon–Wed", title: "Happy Hour", desc: "5–7 PM daily. Half-price appetizers and $2 off all cocktails. The best-kept weeknight secret.", emoji: "🍹" },
              { day: "Thursday", title: "Date Night Special", desc: "3-course prix fixe for two with a bottle of wine. Reservation recommended.", emoji: "🕯️" },
              { day: "Friday", title: "Live Music", desc: "Local artists perform live from 7–10 PM. Jazz, acoustic, and everything in between.", emoji: "🎶" },
              { day: "Seasonal", title: "Chef&apos;s Tasting Menu", desc: "Monthly rotating Greek & Mediterranean tasting experience. Limited seatings — book early.", emoji: "🫒" },
            ].map((e, i) => (
              <motion.div key={e.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-navy-950/60 rounded-xl p-6 border border-gold-500/15 hover:border-gold-500/35 transition-all">
                <div className="text-3xl mb-3">{e.emoji}</div>
                <div className="text-gold-400 text-xs font-bold uppercase tracking-widest mb-2">{e.day}</div>
                <h3 className="text-white font-bold text-lg mb-2">{e.title}</h3>
                <p className="text-cream-200/55 text-sm leading-relaxed">{e.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          RESERVATION CTA
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-navy-950/80" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.div {...fadeInUp}>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Ready to Experience<br /><span className="gold-text">The ANNEX?</span>
            </h2>
            <p className="text-cream-200/70 text-lg mb-10">
              Reserve your table today and discover why guests call us the best-kept secret in the Northwest Suburbs.
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

      {/* ═══════════════════════════════════════════════════
          SOCIAL MEDIA
      ═══════════════════════════════════════════════════ */}
      <section className="py-20 px-4 bg-navy-900 border-y border-gold-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
              Follow The <span className="gold-text">ANNEX</span>
            </h3>
            <p className="text-cream-200/60 text-sm mb-8">
              Stay connected for daily specials, events, and behind-the-scenes from our kitchen
            </p>
            <div className="flex justify-center gap-6">
              <a
                href={RESTAURANT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-navy-950/60 border border-gold-500/20 rounded-lg hover:border-gold-500/40 transition-all group"
              >
                <svg className="w-6 h-6 text-cream-200/60 group-hover:text-gold-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-cream-100 font-medium text-sm group-hover:text-gold-400 transition-colors">Facebook</span>
              </a>
              <a
                href={RESTAURANT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-navy-950/60 border border-gold-500/20 rounded-lg hover:border-gold-500/40 transition-all group"
              >
                <svg className="w-6 h-6 text-cream-200/60 group-hover:text-gold-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                <span className="text-cream-100 font-medium text-sm group-hover:text-gold-400 transition-colors">@annexrestaurant</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          HOURS & LOCATION — With map
      ═══════════════════════════════════════════════════ */}
      <section className="py-28 px-4 bg-navy-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(229,175,67,0.04)_0%,transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto">
          <SectionHeading title="Visit Us" subtitle="We look forward to welcoming you" />

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div {...fadeInUp}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">
                    Hours
                  </h3>
                  {RESTAURANT.hours.map((h) => (
                    <div key={h.days} className="flex justify-between py-2.5 border-b border-gold-500/10">
                      <span className="text-cream-100 font-medium">{h.days}</span>
                      <span className="text-cream-200/70">{h.time}</span>
                    </div>
                  ))}
                  <p className="text-cream-200/50 text-xs mt-3">Kitchen opens daily at 11:00 AM</p>
                </div>

                <div>
                  <h3 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">
                    Location
                  </h3>
                  <p className="text-cream-200/70">{RESTAURANT.address}</p>
                  <p className="text-cream-200/50 text-sm mt-1">Private parking lot available</p>
                  <a
                    href={RESTAURANT.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 text-sm mt-2 transition-colors"
                  >
                    Get Directions →
                  </a>
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

                {/* Order online CTAs */}
                <div>
                  <h3 className="text-gold-400 font-semibold uppercase tracking-wider text-sm mb-3">
                    Order Online
                  </h3>
                  <a
                    href="https://annexrestaurant.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-navy-900 border border-gold-500/20 hover:border-gold-500/40 text-cream-100 px-5 py-2.5 rounded text-sm font-medium transition-all"
                  >
                    🛒 Pickup & Delivery via The ANNEX
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...scaleIn}
              className="rounded-lg overflow-hidden shadow-2xl h-[450px] border border-gold-500/10"
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
