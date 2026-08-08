import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import heroImage from "@/assets/hero-cover.jpg";
import detailImage from "@/assets/couple-hand-kiss.jpg";
import storyPortrait from "@/assets/story-portrait.jpg";
import ceremonyImage from "@/assets/ceremony-couple.jpg";
import receptionImage from "@/assets/reception-portrait.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import proposal from "@/assets/couple-proposal.jpg";
import ring from "@/assets/couple-ring.jpg";
import ctaImage from "@/assets/cta-background.jpg";

const galleryStrip = [gallery1, proposal, gallery2, ring, ceremonyImage];

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header transparent />

        {/* Hero */}
        <section className="relative h-[92vh] min-h-[560px] flex items-center justify-center overflow-hidden">
          <motion.img
            src={heroImage}
            alt="Soria and Antoine embracing at golden hour"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 16, ease: "linear" }}
          />
          <div className="absolute inset-0 bg-foreground/25" />
          <div className="relative z-10 text-center text-primary-foreground px-6">
            <motion.h1
              className="font-display text-6xl md:text-8xl lg:text-[7rem] font-light mb-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
            >
              Soria &amp; Antoine
            </motion.h1>
            <motion.p
              className="eyebrow !text-primary-foreground/85"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              October 14, 2025 &nbsp;·&nbsp; Flagstaff, Arizona
            </motion.p>
          </div>
        </section>

        {/* Statement */}
        <section className="section-y">
          <div className="rail grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
            <ScrollReveal className="md:col-span-5">
              <div className="frame overflow-hidden">
                <img src={detailImage} alt="Wedding day detail" className="w-full aspect-[3/4] object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12} className="md:col-span-7">
              <p className="eyebrow mb-6">The Invitation</p>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-7 max-w-xl">
                Every love story deserves to be celebrated, not rehearsed.
              </h2>
              <p className="lead max-w-lg mb-9">
                We are gathering the people we love most in the pines of northern Arizona for one unhurried
                autumn day — a quiet ceremony, a long table, and dancing until the candles burn low.
              </p>
              <Link to="/story" className="link-underline">Read our story</Link>
            </ScrollReveal>
          </div>
        </section>

        {/* Ceremony & Reception */}
        <section className="section-y bg-surface">
          <div className="rail">
            <ScrollReveal className="text-center mb-16">
              <p className="eyebrow mb-5">The Day</p>
              <h2 className="font-display text-4xl md:text-5xl font-light">Ceremony &amp; Reception</h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
              {[
                {
                  img: ceremonyImage,
                  title: "Ceremony",
                  time: "4:00 PM",
                  lines: ["Grace Chapel", "123 Pinewood Lane", "Flagstaff, AZ 86001"],
                  map: "https://maps.google.com/?q=123+Pinewood+Lane+Flagstaff+AZ+86001",
                },
                {
                  img: receptionImage,
                  title: "Reception",
                  time: "4:30 – 10:00 PM",
                  lines: ["The Copper Barrel", "456 Mountain View Drive", "Flagstaff, AZ 86001"],
                  map: "https://maps.google.com/?q=456+Mountain+View+Drive+Flagstaff+AZ+86001",
                },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 0.12}>
                  <div className="frame overflow-hidden mb-8">
                    <img src={item.img} alt={`${item.title} venue`} className="w-full aspect-[4/5] object-cover" />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl font-light mb-3">{item.title}</h3>
                  <p className="script text-2xl mb-4">{item.time}</p>
                  <div className="text-sm text-muted-foreground space-y-1 mb-6">
                    {item.lines.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                  <a href={item.map} target="_blank" rel="noopener noreferrer" className="link-underline">
                    View map
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About the couple */}
        <section className="section-y">
          <div className="rail grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center">
            <ScrollReveal className="md:col-span-6 md:order-last">
              <div className="frame overflow-hidden">
                <img src={storyPortrait} alt="Portrait of Soria and Antoine" className="w-full aspect-[4/5] object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} className="md:col-span-6">
              <p className="eyebrow mb-6">Hello From Us</p>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-7">Nine years, one very long yes.</h2>
              <p className="lead mb-5">
                We met over burnt coffee in a bookshop on a rainy Tuesday and have been comparing notes ever
                since. Between us there are three continents, one stubborn dog, and a running list of the
                best pastries in every city we've slept in.
              </p>
              <p className="lead mb-9">
                We can't wait to see your faces in one room. Thank you for travelling to be part of it.
              </p>
              <p className="script text-3xl">Soria &amp; Antoine</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Registry band */}
        <section className="bg-mocha text-mocha-foreground">
          <div className="rail grid grid-cols-1 md:grid-cols-2">
            <ScrollReveal>
              <div className="h-full">
                <img src={proposal} alt="The proposal" className="w-full h-full min-h-[320px] object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <div className="py-16 md:py-24 md:pl-16">
                <p className="eyebrow !text-mocha-foreground/60 mb-6">Gifts</p>
                <h2 className="font-display text-4xl md:text-5xl font-light mb-6">The Registry</h2>
                <p className="text-mocha-foreground/80 mb-9 max-w-md leading-relaxed">
                  Your presence is the whole point. If you'd still like to mark the day with something,
                  we've put together a small registry and a honeymoon fund.
                </p>
                <Link to="/registry" className="btn-ondark">Visit the registry</Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Gallery strip */}
        <section className="section-y">
          <div className="rail text-center mb-14">
            <ScrollReveal>
              <p className="eyebrow mb-5">Us, Lately</p>
              <h2 className="font-display text-4xl md:text-5xl font-light">A few of the days that led here</h2>
            </ScrollReveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 px-2">
            {galleryStrip.map((src, i) => (
              <ScrollReveal key={i} delay={i * 0.06} direction="none">
                <div className="frame overflow-hidden">
                  <img src={src} alt="Soria and Antoine together" className="w-full aspect-[3/4] object-cover" />
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/gallery" className="link-underline">See the full gallery</Link>
          </div>
        </section>

        {/* Quote */}
        <section className="section-y bg-surface">
          <ScrollReveal className="rail max-w-2xl text-center">
            <p className="script text-3xl md:text-4xl leading-snug mb-8">
              "Come as you are, stay as long as you can, and dance like the neighbours are far away."
            </p>
            <p className="eyebrow">Soria &amp; Antoine</p>
          </ScrollReveal>
        </section>

        {/* RSVP CTA */}
        <section className="relative">
          <img src={ctaImage} alt="Couple walking at dusk" className="w-full h-[60vh] object-cover" />
          <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
            <ScrollReveal className="text-center text-primary-foreground px-6">
              <p className="eyebrow !text-primary-foreground/80 mb-5">Kindly Reply</p>
              <h2 className="font-display text-4xl md:text-6xl font-light mb-9">Will you be there?</h2>
              <Link to="/rsvp" className="btn-ondark">RSVP by September 1</Link>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
