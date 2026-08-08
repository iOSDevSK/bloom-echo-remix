import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import ceremony from "@/assets/ceremony-couple.jpg";
import handKiss from "@/assets/couple-hand-kiss.jpg";
import kiss from "@/assets/couple-kiss.jpg";
import proposal from "@/assets/couple-proposal.jpg";
import ring from "@/assets/couple-ring.jpg";
import reception from "@/assets/reception-portrait.jpg";
import storyPortrait from "@/assets/story-portrait.jpg";
import heroCouple from "@/assets/hero-couple.jpg";
import galleryHero from "@/assets/story-hero.jpg";

const images = [
  { src: proposal, alt: "The proposal", tall: true },
  { src: gallery1, alt: "Soria and Antoine laughing", tall: false },
  { src: ring, alt: "The ring", tall: false },
  { src: handKiss, alt: "A kiss on the hand", tall: true },
  { src: ceremony, alt: "Ceremony rehearsal", tall: false },
  { src: kiss, alt: "A quiet kiss", tall: true },
  { src: gallery2, alt: "Golden hour portrait", tall: false },
  { src: reception, alt: "Reception portrait", tall: false },
  { src: storyPortrait, alt: "Portrait of the couple", tall: true },
  { src: heroCouple, alt: "Walking together", tall: false },
];

const Gallery = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Header transparent />
      <PageHero
        image={galleryHero}
        alt="Soria and Antoine in the pines"
        eyebrow="The Collection"
        title="Gallery"
        subtitle="Nine years of ordinary Tuesdays and a few extraordinary ones."
      />

      <section className="section-y">
        <div className="rail columns-1 sm:columns-2 lg:columns-3 gap-3 [column-fill:_balance]">
          {images.map((img, i) => (
            <ScrollReveal key={i} direction="none" delay={(i % 3) * 0.08} className="mb-3 break-inside-avoid">
              <div className="frame overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className={`w-full object-cover ${img.tall ? "aspect-[3/4]" : "aspect-[4/5]"}`}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  </PageTransition>
);

export default Gallery;
