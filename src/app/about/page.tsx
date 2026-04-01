"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RESTAURANT, STATS } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";
import AnimatedCounter from "@/components/AnimatedCounter";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div
          className="absolute inset-0 parallax-bg opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white mt-4 mb-6"
          >
            Where Passion Meets Plate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cream-200/70 text-lg"
          >
            The story of a neighborhood restaurant built on scratch cooking, Greek tradition, and genuine hospitality.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div {...fadeInUp}>
              <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Est. 2024</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                A Dream Made Real
              </h2>
              <div className="space-y-4 text-cream-200/70 leading-relaxed">
                <p>
                  The ANNEX Restaurant & Lounge was born from a simple belief: that every neighborhood
                  deserves a place where the food is made from scratch, the cocktails are crafted with care,
                  and every guest feels like family.
                </p>
                <p>
                  Established in 2024 in Lake in the Hills, Illinois, The ANNEX brings together the bold
                  flavors of Greek and Mediterranean cuisine with beloved American classics. Our kitchen
                  is led by passionate cooks who believe in the power of fresh ingredients, time-honored
                  recipes, and a touch of creative flair.
                </p>
                <p>
                  From our tableside-flamed Saganaki to our perfectly seared steaks, from our house-made
                  pasta to our mixologist-crafted cocktails — every detail is considered, every plate is
                  prepared with pride.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=800&q=80"
                alt="Beautifully plated steak at The ANNEX"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold-500/30 rounded-lg" />
            </motion.div>
          </div>

          {/* Philosophy */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative lg:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80"
                alt="Signature cocktails at The ANNEX Lounge"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-gold-500/30 rounded-lg" />
            </motion.div>

            <motion.div {...fadeInUp} className="lg:order-2">
              <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Our Philosophy</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Made From Scratch, Always
              </h2>
              <div className="space-y-4 text-cream-200/70 leading-relaxed">
                <p>
                  We don&apos;t take shortcuts. Every sauce is simmered, every dressing is whisked, every
                  dough is kneaded right here in our kitchen. That&apos;s not a marketing line — it&apos;s a
                  promise we make to every guest who walks through our doors.
                </p>
                <p>
                  Our menu celebrates the best of three culinary traditions: the bold spices and fresh
                  ingredients of Greek cooking, the sun-soaked flavors of the Mediterranean, and the
                  hearty satisfaction of American comfort food. The result is something uniquely ANNEX.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Features */}
      <section className="py-24 px-4 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="The ANNEX Experience"
            subtitle="More than a restaurant — it's your neighborhood destination"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🍸",
                title: "Craft Cocktail Lounge",
                description:
                  "Our mixologists create signature cocktails that are as creative and flavorful as our food. Pair with our curated wine list and local craft brews.",
              },
              {
                icon: "🎮",
                title: "Private Gaming Lounge",
                description:
                  "A unique space for private entertainment. Perfect for small groups, celebrations, or just a fun night out with friends.",
              },
              {
                icon: "🎉",
                title: "Private Events & Catering",
                description:
                  "From intimate dinners to large celebrations, we offer private dining experiences and full-service catering for any occasion.",
              },
              {
                icon: "🌿",
                title: "Dietary Friendly",
                description:
                  "We proudly offer gluten-free and vegan options across our menu. Just ask your server — we're happy to accommodate.",
              },
              {
                icon: "♿",
                title: "Fully Accessible",
                description:
                  "Our restaurant is wheelchair accessible with a private parking lot for convenient access.",
              },
              {
                icon: "⭐",
                title: "Award-Winning Service",
                description:
                  "OpenTable Diners' Choice for Best Service and Best Value. Our team is dedicated to making every visit exceptional.",
              },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-navy-800/50 rounded-lg p-8 border border-gold-500/10 hover:border-gold-500/30 transition-all group"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-cream-200/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-navy-950 border-t border-gold-500/10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div {...fadeInUp}>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
              Come See What Everyone&apos;s<br />Talking About
            </h2>
            <p className="text-cream-200/70 mb-8">
              Join us for dinner, cocktails, or a special celebration. We can&apos;t wait to welcome you.
            </p>
            <a
              href={RESTAURANT.openTable}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-4 rounded text-sm font-bold tracking-wider uppercase transition-all hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-1"
            >
              Make a Reservation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
