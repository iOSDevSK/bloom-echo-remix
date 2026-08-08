import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import storyHero from "@/assets/hero-cover.jpg";
import storyPortrait from "@/assets/couple-kiss.jpg";
import gallery1 from "@/assets/couple-proposal.jpg";
import gallery2 from "@/assets/couple-ring.jpg";

const OurStory = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header transparent />

        {/* Hero */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-start justify-center pt-[18vh] overflow-hidden">
          <motion.img
            src={storyHero}
            alt="Couple embracing outdoors with forest landscape"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <motion.h1
            className="relative z-10 font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            How it all began
          </motion.h1>
        </section>

        {/* Quote 1 */}
        <ScrollReveal>
          <section className="py-20 md:py-28 px-6">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-serif text-2xl md:text-4xl italic leading-relaxed text-foreground">
                <span className="text-gold text-4xl md:text-5xl">"</span>
                I saw her across the bar and I couldn't look away until I had the guts to talk to her.
              </p>
              <p className="font-serif text-lg mt-6 text-muted-foreground">— Antoine</p>
            </div>
          </section>
        </ScrollReveal>

        {/* Quote 2 */}
        <ScrollReveal>
          <section className="py-20 md:py-28 px-6 bg-cream">
            <div className="max-w-4xl mx-auto text-center">
              <p className="font-serif text-2xl md:text-4xl italic leading-relaxed text-foreground">
                <span className="text-gold text-4xl md:text-5xl">"</span>
                We caught eye contact at one point and I was mesmerized by that addicting smile of his.
              </p>
              <p className="font-serif text-lg mt-6 text-muted-foreground">— Soria</p>
            </div>
          </section>
        </ScrollReveal>

        {/* Story Narrative */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="overflow-hidden">
                <img src={storyPortrait} alt="Woman in warm golden hour lighting" className="w-full aspect-[3/4] object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <div className="max-w-xl">
                <h2 className="font-serif text-5xl md:text-6xl font-light mb-4">Soria & Antoine</h2>
                <div className="w-12 h-px bg-gold mx-0 mb-6" />
                <p className="font-sans text-base leading-relaxed text-muted-foreground">
                  Soria and Antoine met while both out with their groups of friends at a bar in Phoenix. After catching each other's eye across the room and spending the rest of the night finding out how much they have in common, they started dating. Two years later, we're best friends, true loves, and badass partners in life. We're finally ready to make it official!
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Conclusion */}
        <ScrollReveal>
          <section className="py-20 md:py-28 px-6 bg-cream text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">And the rest is history</h2>
              <p className="font-sans text-base leading-relaxed text-muted-foreground">
                From that first night in Phoenix to hiking Arizona's most beautiful trails together, exploring new cities, and building our dream life, every moment has been an adventure. We can't wait to start our next chapter surrounded by the people we love most.
              </p>
            </div>
          </section>
        </ScrollReveal>

        {/* Gallery */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal direction="left">
              <div className="overflow-hidden">
                <img src={gallery1} alt="Couple outdoors hiking in natural landscape" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.15}>
              <div className="overflow-hidden">
                <img src={gallery2} alt="Couple in intimate moment with warm lighting" className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default OurStory;
