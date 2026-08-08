import { ReactNode } from "react";
import { motion } from "framer-motion";

interface PageHeroProps {
  image: string;
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  alt: string;
}

const PageHero = ({ image, eyebrow, title, subtitle, alt }: PageHeroProps) => (
  <section className="relative h-[62vh] min-h-[420px] flex items-center justify-center overflow-hidden">
    <motion.img
      src={image}
      alt={alt}
      className="absolute inset-0 w-full h-full object-cover"
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 14, ease: "linear" }}
    />
    <div className="absolute inset-0 bg-foreground/35" />
    <div className="relative z-10 text-center text-primary-foreground px-6">
      {eyebrow && <p className="eyebrow !text-primary-foreground/80 mb-5">{eyebrow}</p>}
      <h1 className="font-display text-5xl md:text-7xl font-light">{title}</h1>
      {subtitle && <p className="mt-5 text-primary-foreground/85 max-w-xl mx-auto">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
