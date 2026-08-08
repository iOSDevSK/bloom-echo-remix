import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import scheduleHero from "@/assets/ceremony-couple.jpg";

const days = [
  {
    date: "Monday, October 13",
    title: "Welcome Evening",
    events: [
      { time: "6:00 PM", name: "Drinks at the Pinewood Inn", detail: "789 Forest Drive · Come as you are" },
      { time: "8:00 PM", name: "Late supper", detail: "Family style, no speeches, we promise" },
    ],
  },
  {
    date: "Tuesday, October 14",
    title: "The Wedding Day",
    events: [
      { time: "3:30 PM", name: "Guests arrive", detail: "Grace Chapel, 123 Pinewood Lane" },
      { time: "4:00 PM", name: "Ceremony", detail: "Thirty minutes, one very happy pair" },
      { time: "4:30 PM", name: "Cocktail hour", detail: "The Copper Barrel terrace" },
      { time: "6:00 PM", name: "Dinner", detail: "Long tables under the string lights" },
      { time: "8:00 PM", name: "Dancing", detail: "Until 10:00 PM, then onwards" },
    ],
  },
  {
    date: "Wednesday, October 15",
    title: "Farewell Brunch",
    events: [{ time: "10:00 AM", name: "Brunch", detail: "The Copper Barrel · Drop in any time before noon" }],
  },
];

const Schedule = () => (
  <PageTransition>
    <div className="min-h-screen bg-background">
      <Header transparent />
      <PageHero
        image={scheduleHero}
        alt="The chapel at golden hour"
        eyebrow="Three Days"
        title="Schedule"
        subtitle="Everything happens within ten minutes of the inn. Dress code: autumn formal, comfortable shoes."
      />

      <section className="section-y">
        <div className="rail space-y-20">
          {days.map((day, di) => (
            <ScrollReveal key={day.date} delay={di * 0.08}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-4">
                  <p className="eyebrow mb-4">{day.date}</p>
                  <h2 className="font-display text-3xl md:text-4xl font-light">{day.title}</h2>
                </div>
                <div className="md:col-span-8 divide-y divide-border border-t border-border">
                  {day.events.map((e) => (
                    <div key={e.name} className="py-6 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                      <span className="font-sans text-[0.7rem] uppercase tracking-[0.24em] text-accent w-28 shrink-0">
                        {e.time}
                      </span>
                      <div>
                        <p className="font-display text-2xl">{e.name}</p>
                        <p className="text-sm text-muted-foreground">{e.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="section-y bg-surface text-center">
        <ScrollReveal className="rail max-w-xl">
          <h2 className="font-display text-4xl font-light mb-6">Let us know you're coming</h2>
          <p className="lead mb-9">Kindly reply by September 1 so we can set your place at the table.</p>
          <Link to="/rsvp" className="btn-fine">RSVP</Link>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  </PageTransition>
);

export default Schedule;
