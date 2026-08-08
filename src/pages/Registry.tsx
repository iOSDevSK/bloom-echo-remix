import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import registryHero from "@/assets/hero-cover.jpg";

const Registry = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header transparent />

        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <motion.img
            src={registryHero}
            alt="Couple smiling at each other in water"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <ScrollReveal className="relative z-10 max-w-2xl mx-auto text-center px-6">
            <div className="bg-background/80 backdrop-blur-sm p-10 md:p-14">
              <p className="font-sans text-base md:text-lg leading-relaxed text-foreground mb-8">
                Many of you are traveling across the globe to celebrate with us in Flagstaff, so your presence means the world to us and is all we ask for. If you'd still like to contribute to our registry or honeymoon funds, please use the link below.
              </p>
              <a
                href="#"
                className="inline-block bg-foreground text-background px-10 py-4 text-sm font-sans tracking-widest uppercase hover:bg-foreground/80 hover:scale-105 transition-all duration-300"
              >
                S&A Registry
              </a>
            </div>
          </ScrollReveal>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Registry;
