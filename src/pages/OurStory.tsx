import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import storyHero from "@/assets/story-hero.jpg";
import storyPortrait from "@/assets/story-portrait.jpg";
import proposal from "@/assets/couple-proposal.jpg";
import handKiss from "@/assets/couple-hand-kiss.jpg";
import kiss from "@/assets/couple-kiss.jpg";

const chapters = [
  {
    year: "2016",
    title: "A bookshop, a rainy Tuesday",
    text: "Soria was reading the last copy of a novel Antoine had come in for. Neither of them bought it. They shared burnt coffee instead and talked until the shop closed.",
    img: storyPortrait,
  },
  {
    year: "2019",
    title: "Three continents, one suitcase",
    text: "Two years of trains, night flights and postcards. They learned to argue about maps and agree about pastries, and decided that anywhere with the other in it counted as home.",
    img: kiss,
  },
  {
    year: "2023",
    title: "The pines, the question",
    text: "On a cold morning above Flagstaff, with frost on the ferns and a ring warming in a coat pocket, Antoine asked. Soria said yes before he finished the sentence.",
    img: proposal,
  },
  {
    year: "2025",
    title: "The long yes",
    text: "This October we're saying it again, out loud, in front of everyone we love — in the same pines where it all became official.",
    img: handKiss,
  },
];

const OurStory = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Header transparent />
      <PageHero
        image={storyHero}
        alt="Soria and Antoine walking through the pines"
        eyebrow="How It Started"
        title="Our Story"
        subtitle="Nine years, told in four chapters."
      />

      <section className="section-y">
        <div className="rail space-y-24 md:space-y-32">
          {chapters.map((c, i) => (
            <div
              key={c.year}
              className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center"
            >
              <ScrollReveal
                direction={i % 2 === 0 ? "right" : "left"}
                className={`md:col-span-6 ${i % 2 === 1 ? "md:order-last" : ""}`}
              >
                <div className="frame overflow-hidden">
                  <img src={c.img} alt={c.title} loading="lazy" className="w-full aspect-[4/5] object-cover" />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1} className="md:col-span-6">
                <p className="eyebrow mb-5">{c.year}</p>
                <h2 className="font-display text-4xl md:text-5xl font-light mb-6">{c.title}</h2>
                <p className="lead max-w-md">{c.text}</p>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      <section className="section-y bg-surface text-center">
        <ScrollReveal className="rail max-w-xl">
          <p className="script text-3xl md:text-4xl leading-snug mb-9">
            "The best part of the story is the part you're in."
          </p>
          <Link to="/rsvp" className="btn-fine">Join us in October</Link>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  </PageTransition>
);

export default OurStory;
