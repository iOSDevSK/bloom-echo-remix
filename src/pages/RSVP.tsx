import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Check } from "lucide-react";

const RSVP = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "",
    dietary: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-20 md:py-28 px-6">
          <ScrollReveal>
            <div className="max-w-xl mx-auto text-center mb-12">
              <h1 className="font-serif text-5xl md:text-7xl font-light mb-4">RSVP</h1>
              <p className="font-sans text-sm text-muted-foreground">
                We can't wait to celebrate with you! Please let us know if you'll be joining us by September 1, 2025.
              </p>
            </div>
          </ScrollReveal>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="max-w-md mx-auto text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                >
                  <Check className="text-sage-dark" size={32} />
                </motion.div>
                <h2 className="font-serif text-3xl font-light mb-4">Thank you!</h2>
                <p className="font-sans text-sm text-muted-foreground">
                  We've received your RSVP. We're so excited to celebrate with you in Flagstaff!
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {[
                  { label: "Full Name *", name: "name", type: "text", placeholder: "Your full name", required: true },
                  { label: "Email *", name: "email", type: "email", placeholder: "your@email.com", required: true },
                ].map((field, i) => (
                  <ScrollReveal key={field.name} delay={i * 0.08}>
                    <div>
                      <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-sage/50 transition-shadow duration-200"
                        placeholder={field.placeholder}
                      />
                    </div>
                  </ScrollReveal>
                ))}

                <ScrollReveal delay={0.16}>
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">Will you be attending? *</label>
                    <div className="flex gap-4">
                      {["Joyfully accepts", "Regretfully declines"].map((option) => (
                        <label key={option} className="flex-1 cursor-pointer">
                          <input type="radio" name="attending" value={option} required onChange={handleChange} className="sr-only peer" />
                          <div className="border border-border bg-transparent px-4 py-3 text-center font-sans text-sm text-muted-foreground peer-checked:border-sage-dark peer-checked:text-foreground transition-all duration-200 hover:border-sage/50">
                            {option}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.24}>
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">Number of Guests</label>
                    <select
                      name="guests"
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-sage/50 transition-shadow duration-200"
                    >
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.32}>
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">Dietary Restrictions</label>
                    <input
                      type="text"
                      name="dietary"
                      value={form.dietary}
                      onChange={handleChange}
                      className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-sage/50 transition-shadow duration-200"
                      placeholder="Vegetarian, gluten-free, etc."
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div>
                    <label className="block font-sans text-xs uppercase tracking-wider text-muted-foreground mb-2">A Note for the Couple</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-sage/50 resize-none transition-shadow duration-200"
                      placeholder="Share a message with Soria & Antoine..."
                    />
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.48}>
                  <button
                    type="submit"
                    className="w-full bg-foreground text-background py-4 text-sm font-sans tracking-widest uppercase hover:bg-foreground/80 hover:scale-[1.02] transition-all duration-300"
                  >
                    Send RSVP
                  </button>
                </ScrollReveal>
              </motion.form>
            )}
          </AnimatePresence>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default RSVP;
