import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-cover.jpg";
import ceremonyImage from "@/assets/couple-hand-kiss.jpg";
import receptionImage from "@/assets/couple-kiss.jpg";
import ctaImage from "@/assets/couple-ring.jpg";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header transparent />

        {/* Hero */}
        <section className="relative h-screen flex items-start justify-center pt-[18vh] overflow-hidden">
          <motion.img
            src={heroImage}
            alt="Soria and Antoine embracing on mountain overlook during sunset"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 text-center text-white px-4">
            <motion.p
              className="font-sans text-sm md:text-base tracking-widest uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              We're Getting Married!
            </motion.p>
            <motion.h1
              className="font-serif text-6xl md:text-8xl lg:text-9xl font-light mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Soria & Antoine
            </motion.h1>
            <motion.p
              className="font-sans text-lg md:text-xl tracking-[0.3em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              10 . 14 . 25
            </motion.p>
          </div>
        </section>

        {/* Event Details */}
        <section className="bg-[#f0efed] py-32 md:py-44 px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Ceremony */}
            <ScrollReveal direction="left">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 overflow-hidden">
                  <img src={ceremonyImage} alt="Couple in formal attire in natural outdoor setting" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="text-center flex-1">
                  <h2 className="font-serif text-6xl md:text-7xl font-light mb-5">Ceremony</h2>
                  <p className="font-serif text-2xl md:text-3xl mb-5">4:00 PM</p>
                  <div className="font-sans text-sm text-muted-foreground space-y-1.5 mb-5">
                    <p>Grace Chapel</p>
                    <p>123 Pinewood Lane</p>
                    <p>Flagstaff, AZ 86001</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=123+Pinewood+Lane+Flagstaff+AZ+86001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm underline underline-offset-4 text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Map
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Reception */}
            <ScrollReveal direction="right" delay={0.15}>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="w-full md:w-1/2 overflow-hidden md:order-last">
                  <img src={receptionImage} alt="Woman in flowing dress in natural outdoor setting" className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="text-center flex-1">
                  <h2 className="font-serif text-6xl md:text-7xl font-light mb-5">Reception</h2>
                  <p className="font-serif text-2xl md:text-3xl mb-5">4:30 - 10:00 PM</p>
                  <div className="font-sans text-sm text-muted-foreground space-y-1.5 mb-5">
                    <p>The Copper Barrel</p>
                    <p>456 Mountain View Drive</p>
                    <p>Flagstaff, AZ 86001</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=456+Mountain+View+Drive+Flagstaff+AZ+86001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm underline underline-offset-4 text-foreground hover:text-muted-foreground transition-colors"
                  >
                    Map
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA - Our Story */}
        <ScrollReveal>
          <section className="py-20 md:py-28 text-center px-6">
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8">See how it all started</h2>
            <Link
              to="/story"
              className="inline-block bg-foreground text-background px-10 py-3 text-sm font-sans tracking-widest uppercase hover:bg-foreground/80 hover:scale-105 transition-all duration-300"
            >
              Our Story
            </Link>
          </section>
        </ScrollReveal>

        {/* Full-width CTA Image */}
        <ScrollReveal direction="none" duration={0.8}>
          <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
            <motion.img
              src={ctaImage}
              alt="Couple in outdoor setting with mountain landscape"
              className="absolute inset-0 w-full h-full object-cover"
              whileInView={{ scale: 1 }}
              initial={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </section>
        </ScrollReveal>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
