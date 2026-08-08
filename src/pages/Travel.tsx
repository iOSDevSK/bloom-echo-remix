import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import travelHero from "@/assets/travel-hero.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const lodging = [
  {
    type: "Room block",
    name: "The Pinewood Inn",
    lines: ["789 Forest Drive", "Flagstaff, AZ 86001", "(555) 555-5500"],
    note: "Ask for the Soria & Antoine block before September 1 for the reduced rate. Shuttle to the reception every 30 minutes.",
  },
  {
    type: "Boutique",
    name: "Mountain View Cottage",
    lines: ["321 Riverside Road", "Flagstaff, AZ 86001", "(555) 555-5501"],
    note: "Six rooms, five minutes from the chapel, and the best breakfast in town. Book directly by phone.",
  },
  {
    type: "Cabins",
    name: "Ponderosa Cabins",
    lines: ["Coconino Forest Road", "Flagstaff, AZ 86001", "(555) 555-5502"],
    note: "Perfect for families or groups travelling together. Two-night minimum over the wedding weekend.",
  },
];

const gettingHere = [
  { title: "By air", text: "Flagstaff Pulliam (FLG) is 15 minutes from the venues. Phoenix Sky Harbor (PHX) is a scenic two-hour drive north." },
  { title: "By car", text: "I-17 north from Phoenix, then I-40. Both venues have free on-site parking." },
  { title: "Getting around", text: "A shuttle runs between the Pinewood Inn, the chapel and The Copper Barrel all evening. Rideshare is available but slow after 10 PM." },
];

const Travel = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Header transparent />
      <PageHero
        image={travelHero}
        alt="Northern Arizona landscape"
        eyebrow="Flagstaff, Arizona"
        title="Travel & Stay"
        subtitle="Everything happens within ten minutes of the inn."
      />

      <section className="section-y">
        <div className="rail">
          <ScrollReveal className="max-w-xl mb-16">
            <p className="eyebrow mb-5">Where To Sleep</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6">Places we love</h2>
            <p className="lead">
              A handful of rooms are held under our names. Book early — October is high season in the pines.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {lodging.map((l, i) => (
              <ScrollReveal key={l.name} delay={i * 0.1}>
                <div className="border-t border-border pt-7 h-full">
                  <p className="eyebrow mb-4">{l.type}</p>
                  <h3 className="font-display text-2xl mb-4">{l.name}</h3>
                  <div className="text-sm text-muted-foreground space-y-1 mb-5">
                    {l.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{l.note}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="rail grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <ScrollReveal className="md:col-span-5">
            <div className="frame overflow-hidden">
              <img src={gallery2} alt="Flagstaff in autumn" loading="lazy" className="w-full aspect-[4/5] object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="md:col-span-7">
            <p className="eyebrow mb-5">Getting Here</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-10">The way in</h2>
            <div className="divide-y divide-border border-t border-border">
              {gettingHere.map((g) => (
                <div key={g.title} className="py-6">
                  <h3 className="font-display text-2xl mb-2">{g.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{g.text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  </PageTransition>
);

export default Travel;
