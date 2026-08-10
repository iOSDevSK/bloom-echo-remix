import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";
import { Check } from "lucide-react";
import rsvpHero from "@/assets/couple-ring.jpg";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const inputClass =
  "w-full border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent transition-colors duration-300";

const RSVP = () => {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    guests: "1",
    attending: "",
    dietary: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const { error } = await supabase.functions.invoke("send-rsvp", { body: form });
      if (error) throw error;
      setSubmitted(true);
    } catch (err) {
      console.error("send-rsvp failed:", err);
      toast({
        title: "Something went wrong",
        description: "We couldn't send your RSVP. Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header transparent />
        <PageHero
          image={rsvpHero}
          alt="The wedding rings"
          eyebrow="Kindly Reply"
          title="RSVP"
          subtitle="Please let us know by September 1, 2025."
        />

        <section className="section-y">
          <div className="rail max-w-xl">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  className="text-center py-10"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 border border-accent flex items-center justify-center mx-auto mb-8">
                    <Check className="text-accent" size={28} strokeWidth={1.2} />
                  </div>
                  <h2 className="font-display text-4xl font-light mb-5">Thank you</h2>
                  <p className="lead">
                    Your reply is safely with us. We can't wait to see you in Flagstaff.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-7"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4 }}
                >
                  {[
                    { label: "Full name", name: "name", type: "text", placeholder: "Your full name" },
                    { label: "Email", name: "email", type: "email", placeholder: "your@email.com" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="eyebrow block mb-3">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        required
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="eyebrow block mb-3">Will you be attending?</label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {["Joyfully accepts", "Regretfully declines"].map((option) => (
                        <label key={option} className="flex-1 cursor-pointer">
                          <input
                            type="radio"
                            name="attending"
                            value={option}
                            required
                            onChange={handleChange}
                            className="sr-only peer"
                          />
                          <div className="border border-border px-4 py-3 text-center font-sans text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground peer-checked:bg-mocha peer-checked:text-mocha-foreground peer-checked:border-mocha transition-all duration-300">
                            {option}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="eyebrow block mb-3">Number of guests</label>
                    <select name="guests" value={form.guests} onChange={handleChange} className={inputClass}>
                      {[1, 2, 3, 4].map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="eyebrow block mb-3">Dietary notes</label>
                    <input
                      type="text"
                      name="dietary"
                      value={form.dietary}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Vegetarian, gluten-free, etc."
                    />
                  </div>

                  <div>
                    <label className="eyebrow block mb-3">A note for us</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className={`${inputClass} resize-none`}
                      placeholder="Share a message with Soria & Antoine…"
                    />
                  </div>

                  <button type="submit" className="btn-fine w-full">Send RSVP</button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default RSVP;
