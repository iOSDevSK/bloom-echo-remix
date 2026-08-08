import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import travelHero from "@/assets/hero-cover.jpg";

const lodgingCards = [
  {
    type: "Bed & Breakfast",
    content: (
      <>
        <p className="font-sans text-sm text-muted-foreground mb-6">
          Please let us know if you are looking for accommodations. Here are our recommendations:
        </p>
        <a
          href="#"
          className="inline-block bg-foreground text-background px-8 py-3 text-xs tracking-widest uppercase font-sans hover:bg-foreground/80 hover:scale-105 transition-all duration-300 w-full"
        >
          View Listings
        </a>
      </>
    ),
  },
  {
    type: "Hotel",
    content: (
      <>
        <a href="#" className="font-serif text-xl font-semibold text-foreground hover:underline block mb-3">
          The Pinewood Inn
        </a>
        <div className="font-sans text-sm text-muted-foreground space-y-1">
          <p>789 Forest Drive</p>
          <p>Flagstaff, AZ 86001</p>
          <a href="tel:+15555555500" className="text-foreground hover:underline block mt-2">(555) 555-5500</a>
        </div>
      </>
    ),
  },
  {
    type: "Cabin",
    content: (
      <>
        <a href="#" className="font-serif text-xl font-semibold text-foreground hover:underline block mb-3">
          Mountain View Cottage
        </a>
        <div className="font-sans text-sm text-muted-foreground space-y-1">
          <p>321 Riverside Road</p>
          <p>Flagstaff, AZ 86001</p>
          <a href="tel:+15555555501" className="text-foreground hover:underline block mt-2">(555) 555-5501</a>
        </div>
      </>
    ),
  },
];

const Travel = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header transparent />

        {/* Hero */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <motion.img
            src={travelHero}
            alt="Black and white photo of couple embracing outdoors"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white">
            <motion.h1
              className="font-serif text-5xl md:text-7xl font-light mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Travel & Stay
            </motion.h1>
            <motion.p
              className="font-sans text-lg md:text-xl font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Most events will be taking place nearby.
            </motion.p>
          </div>
        </section>

        {/* Lodging */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-center mb-16">Lodging Recommendations</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lodgingCards.map((card, i) => (
                <ScrollReveal key={card.type} delay={i * 0.12}>
                  <div className="bg-transparent border border-border p-6 text-center hover:-translate-y-1 transition-all duration-300">
                    <p className="text-sm uppercase tracking-wider text-sage-dark font-semibold mb-4">{card.type}</p>
                    {card.content}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Travel;
