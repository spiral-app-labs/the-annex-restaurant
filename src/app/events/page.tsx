"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { RESTAURANT } from "@/lib/constants";
import SectionHeading from "@/components/SectionHeading";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4">
        <div
          className="absolute inset-0 parallax-bg opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-950/95 to-navy-900" />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium"
          >
            Events & Private Dining
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white mt-4 mb-6"
          >
            Celebrate With Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-cream-200/70 text-lg"
          >
            From intimate dinners to grand celebrations, The ANNEX is the perfect venue for your next event.
          </motion.p>
        </div>
      </section>

      {/* Private Dining */}
      <section className="py-24 px-4 bg-navy-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div {...fadeInUp}>
              <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Private Dining</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Your Own Corner of The ANNEX
              </h2>
              <div className="space-y-4 text-cream-200/70 leading-relaxed">
                <p>
                  Whether it&apos;s a birthday celebration, anniversary dinner, corporate gathering,
                  or rehearsal dinner, our private dining options create the perfect setting for
                  your special occasion.
                </p>
                <p>
                  Work with our team to create a customized menu featuring your favorite dishes,
                  paired with cocktails and wines selected to complement every course. We handle
                  the details so you can focus on your guests.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  "Customized menus tailored to your preferences",
                  "Private or semi-private dining areas",
                  "Full bar and cocktail service",
                  "Accommodations for dietary restrictions",
                  "Audio/visual setup available",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-cream-200/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&q=80"
                alt="Private dining setup at The ANNEX"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>

          {/* Gaming Lounge */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1511882150382-421056c89033?w=800&q=80"
                alt="Private gaming lounge"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>

            <motion.div {...fadeInUp} className="lg:order-2">
              <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Exclusive</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Private Gaming Lounge
              </h2>
              <div className="space-y-4 text-cream-200/70 leading-relaxed">
                <p>
                  Something you won&apos;t find at any other restaurant — our private gaming lounge
                  offers a unique entertainment experience for your group. Perfect for team
                  building, bachelor parties, or just a memorable night out.
                </p>
                <p>
                  Enjoy full food and drink service right in the lounge. It&apos;s the ultimate
                  combination of great food, craft cocktails, and entertainment.
                </p>
              </div>
              <a
                href={RESTAURANT.phoneHref}
                className="inline-block mt-8 bg-gold-500 hover:bg-gold-600 text-navy-950 px-6 py-3 rounded text-sm font-bold tracking-wider uppercase transition-all hover:shadow-lg hover:shadow-gold-500/25 hover:-translate-y-0.5"
              >
                Call to Book: {RESTAURANT.phone}
              </a>
            </motion.div>
          </div>

          {/* Catering */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="text-gold-400 text-sm tracking-[0.3em] uppercase font-medium">Off-Site</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
                Full-Service Catering
              </h2>
              <div className="space-y-4 text-cream-200/70 leading-relaxed">
                <p>
                  Bring the ANNEX experience to your location. Our catering team can create a
                  customized menu for any event — from corporate lunches and office parties to
                  weddings and family celebrations.
                </p>
                <p>
                  We offer everything from buffet-style service to plated dinners, with the same
                  quality and attention to detail that defines our restaurant experience.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  "Corporate Events",
                  "Weddings",
                  "Family Celebrations",
                  "Holiday Parties",
                  "Office Lunches",
                  "Special Occasions",
                ].map((type) => (
                  <div key={type} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                    <span className="text-cream-200/70 text-sm">{type}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80"
                alt="Catering spread by The ANNEX"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 relative">
        <div
          className="absolute inset-0 parallax-bg opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-navy-950/90" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <SectionHeading
            title="Let's Plan Your Event"
            subtitle="Contact us to discuss your upcoming event. We'll help create an unforgettable experience."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={RESTAURANT.phoneHref}
              className="bg-gold-500 hover:bg-gold-600 text-navy-950 px-8 py-4 rounded text-sm font-bold tracking-wider uppercase transition-all hover:shadow-xl hover:shadow-gold-500/30 hover:-translate-y-1"
            >
              Call Us: {RESTAURANT.phone}
            </a>
            <a
              href={`mailto:${RESTAURANT.email}`}
              className="border border-cream-200/30 hover:border-gold-400 text-cream-100 hover:text-gold-400 px-8 py-4 rounded text-sm font-bold tracking-wider uppercase transition-all hover:-translate-y-1"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
