import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import registryHero from "@/assets/registry-hero.jpg";
import guideImage from "@/assets/couple-ring.jpg";

const funds = [
  { title: "The Home Fund", text: "A kitchen table long enough for everyone who visits, and the chairs to go around it." },
  { title: "The Honeymoon", text: "Two weeks in Portugal — slow mornings, cold water, and far too much bread." },
  { title: "The Registry", text: "A small, considered list of things we'll use for years. No gravy boats, we promise." },
];

const Registry = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Header transparent />
      <PageHero
        image={registryHero}
        alt="Soria and Antoine together"
        eyebrow="Gifts"
        title="Registry"
        subtitle="Your presence is the whole point — but if you'd like to mark the day, here's how."
      />

      <section className="section-y">
        <div className="rail max-w-2xl text-center">
          <ScrollReveal>
            <p className="lead mb-10">
              Many of you are travelling a very long way to stand in a chapel with us, and that is already
              more than we could ask. If you'd still like to give something, we've kept it simple.
            </p>
            <a href="#" className="btn-fine">Open our registry</a>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="rail grid grid-cols-1 md:grid-cols-3 gap-10">
          {funds.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.1}>
              <div className="border-t border-border pt-7">
                <h3 className="font-display text-2xl mb-4">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-mocha text-mocha-foreground">
        <div className="rail grid grid-cols-1 md:grid-cols-2 items-center">
          <ScrollReveal>
            <img src={guideImage} alt="The wedding rings" loading="lazy" className="w-full h-full min-h-[320px] object-cover" />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="py-16 md:py-24 md:pl-16">
              <p className="eyebrow !text-mocha-foreground/60 mb-6">One More Thing</p>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-6">Have you replied yet?</h2>
              <p className="text-mocha-foreground/80 mb-9 max-w-md leading-relaxed">
                Gifts are optional. Your seat at the table is not — let us know you're coming by September 1.
              </p>
              <Link to="/rsvp" className="btn-ondark">RSVP now</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  </PageTransition>
);

export default Registry;
