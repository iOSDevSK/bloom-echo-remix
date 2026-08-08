import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent = false }: HeaderProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/story", label: "Our Story" },
    { to: "/travel", label: "Travel & Stay" },
    { to: "/registry", label: "Registry" },
  ];

  return (
    <header className={`${transparent ? "absolute" : "sticky"} top-0 left-0 right-0 z-50 ${transparent ? "bg-transparent" : "bg-card/95 backdrop-blur-sm border-b border-border"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <nav className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm tracking-wide font-sans transition-colors duration-200 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-[-2px] after:left-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                transparent
                  ? `hover:text-white/80 after:bg-white ${location.pathname === link.to ? "text-white after:scale-x-100 after:origin-bottom-left" : "text-white/70"}`
                  : `hover:text-foreground after:bg-foreground ${location.pathname === link.to ? "text-foreground after:scale-x-100 after:origin-bottom-left" : "text-muted-foreground"}`
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link to="/" className={`font-serif text-xl md:text-2xl tracking-wider ${transparent ? "text-white" : "text-foreground"}`}>
          S&A 10.14.25
        </Link>

        <div className="hidden md:block">
          <Link
            to="/rsvp"
            className={`px-6 py-2 text-sm tracking-widest uppercase font-sans hover:scale-105 transition-all duration-200 ${
              transparent ? "bg-white text-foreground hover:bg-white/90" : "bg-foreground text-card hover:bg-foreground/80"
            }`}
          >
            RSVP
          </Link>
        </div>

        <button
          className={`md:hidden ${transparent ? "text-white" : "text-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-card border-t border-border px-6 py-6 space-y-4 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {links.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
              >
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm tracking-wide font-sans text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: links.length * 0.08, duration: 0.3 }}
            >
              <Link
                to="/rsvp"
                onClick={() => setMobileOpen(false)}
                className="block bg-foreground text-card px-6 py-2 text-sm tracking-widest uppercase font-sans text-center"
              >
                RSVP
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
