import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faqHero from "@/assets/couple-kiss.jpg";

const faqs = [
  { q: "What should I wear?", a: "Autumn formal. Think warm neutrals, long sleeves and shoes you can stand on grass in — the ceremony is partly outdoors and Flagstaff cools quickly after sunset." },
  { q: "Can I bring a plus one?", a: "Your invitation lists everyone we've saved a seat for. If you're unsure, reply to your RSVP with a note and we'll happily confirm." },
  { q: "Are children welcome?", a: "We love your little ones, but we're keeping the evening adults-only after 6:00 PM. Children are very welcome at the welcome evening and the farewell brunch." },
  { q: "Is there parking at the venues?", a: "Yes, both the chapel and The Copper Barrel have free on-site parking, and a shuttle runs between the Pinewood Inn and the reception every 30 minutes." },
  { q: "What time should I arrive?", a: "Please arrive by 3:30 PM. The ceremony starts promptly at 4:00 PM and the doors close as we begin." },
  { q: "Will the day be photographed?", a: "It will. We'd love you to put your phones away during the ceremony and let our photographer do the remembering." },
  { q: "What's the weather like in October?", a: "Crisp. Days around 18°C and evenings closer to 5°C — a coat or wrap is a very good idea." },
  { q: "Who do I contact with questions?", a: "Email us any time at hello@soriaandantoine.com and we'll get back to you within a day or two." },
];

const FAQ = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Header transparent />
      <PageHero
        image={faqHero}
        alt="Soria and Antoine sharing a quiet moment"
        eyebrow="Good To Know"
        title="Questions"
        subtitle="The details, the dress code and everything in between."
      />

      <section className="section-y">
        <div className="rail max-w-3xl">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="font-display text-2xl text-left hover:no-underline py-7">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="lead pb-8">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-y bg-mocha text-mocha-foreground text-center">
        <ScrollReveal className="rail max-w-xl">
          <p className="eyebrow !text-mocha-foreground/60 mb-5">Still Wondering?</p>
          <h2 className="font-display text-4xl font-light mb-8">Write to us</h2>
          <a href="mailto:hello@soriaandantoine.com" className="btn-ondark">hello@soriaandantoine.com</a>
          <div className="mt-10">
            <Link to="/rsvp" className="link-underline">Or head straight to the RSVP</Link>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  </PageTransition>
);

export default FAQ;
