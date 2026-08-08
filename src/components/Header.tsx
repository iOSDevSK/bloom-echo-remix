import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  transparent?: boolean;
}

const links = [
  { to: "/story", label: "Our Story" },
  { to: "/schedule", label: "Schedule" },
  { to: "/gallery", label: "Gallery" },
  { to: "/travel", label: "Travel & Stay" },
  { to: "/registry", label: "Registry" },
  { to: "/faq", label: "FAQ" },
];

const Header = ({ transparent = false }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDark = transparent && !scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        onDark ? "bg-transparent" : "bg-background/95 backdrop-blur-sm border-b border-border"
      }`}
    >
      <div className="rail py-5 flex items-center justify-between gap-6">
        <Link
          to="/"
          className={`font-display text-lg md:text-xl tracking-[0.18em] ${onDark ? "text-primary-foreground" : "text-foreground"}`}
        >
          Soria &amp; Antoine
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-sans uppercase text-[0.68rem] tracking-[0.26em] transition-opacity duration-300 hover:opacity-60 ${
                onDark ? "text-primary-foreground" : "text-foreground"
              } ${location.pathname === link.to ? "opacity-100 border-b border-current pb-1" : "opacity-80"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/rsvp" className={onDark ? "btn-ondark" : "btn-fine"}>
            RSVP
          </Link>
        </div>

        <button
          className={`lg:hidden ${onDark ? "text-primary-foreground" : "text-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-background border-t border-border overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <div className="rail py-8 flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-sans uppercase text-xs tracking-[0.26em] text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/rsvp" onClick={() => setMobileOpen(false)} className="btn-fine self-start mt-2">
                RSVP
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
