"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MENU_CATEGORIES, RESTAURANT } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div
          className="absolute inset-0 parallax-bg opacity-30"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium"
          >
            Our Menu
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white mt-4 mb-6"
          >
            A Culinary Journey
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cream-200/70 text-lg"
          >
            Every dish is made from scratch with the freshest ingredients — American classics infused with
            Greek and Mediterranean soul.
          </motion.p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="pb-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4">
          {MENU_CATEGORIES.map((category, catIdx) => (
            <div key={category.name} className="mb-24 last:mb-0">
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${catIdx % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: catIdx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative rounded-lg overflow-hidden shadow-2xl ${catIdx % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={800}
                    height={500}
                    className="w-full h-72 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h2 className="font-serif text-3xl font-bold text-white">{category.name}</h2>
                    <p className="text-cream-200/70 text-sm mt-1">{category.description}</p>
                  </div>
                </motion.div>

                {/* Items */}
                <div className={`space-y-1 ${catIdx % 2 === 1 ? "lg:order-1" : ""}`}>
                  {category.items.map((item, itemIdx) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: itemIdx * 0.08 }}
                      className="group p-4 rounded-lg hover:bg-navy-800/50 transition-all"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <h3 className="font-serif text-lg font-semibold text-cream-100 group-hover:text-gold-400 transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-cream-200/60 text-sm mt-1 leading-relaxed">{item.description}</p>
                        </div>
                        {item.price && (
                          <span className="text-gold-400 font-semibold whitespace-nowrap">{item.price}</span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-20 px-4 bg-navy-950 border-t border-gold-500/10">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Ready to Order?"
            subtitle="Call us to place a takeout order or reserve your table on OpenTable"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={RESTAURANT.openTable}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-4 rounded text-sm font-bold tracking-wider uppercase transition-all hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-1"
            >
              Reserve a Table
            </a>
            <a
              href={RESTAURANT.phoneHref}
              className="border border-cream-200/30 hover:border-gold-400 text-cream-100 hover:text-gold-400 px-8 py-4 rounded text-sm font-bold tracking-wider uppercase transition-all hover:-translate-y-1"
            >
              Call to Order: {RESTAURANT.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
