import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-mocha text-mocha-foreground">
    <div className="rail py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <p className="font-display text-3xl tracking-[0.06em] mb-3">Soria &amp; Antoine</p>
        <p className="eyebrow !text-mocha-foreground/60">10 . 14 . 25 &nbsp;·&nbsp; Flagstaff, Arizona</p>
      </div>

      <div>
        <p className="eyebrow !text-mocha-foreground/60 mb-4">The Day</p>
        <div className="space-y-2 text-sm">
          <Link to="/story" className="block hover:opacity-60 transition-opacity">Our Story</Link>
          <Link to="/schedule" className="block hover:opacity-60 transition-opacity">Schedule</Link>
          <Link to="/gallery" className="block hover:opacity-60 transition-opacity">Gallery</Link>
        </div>
      </div>

      <div>
        <p className="eyebrow !text-mocha-foreground/60 mb-4">Guests</p>
        <div className="space-y-2 text-sm">
          <Link to="/travel" className="block hover:opacity-60 transition-opacity">Travel &amp; Stay</Link>
          <Link to="/registry" className="block hover:opacity-60 transition-opacity">Registry</Link>
          <Link to="/faq" className="block hover:opacity-60 transition-opacity">FAQ</Link>
          <Link to="/rsvp" className="block hover:opacity-60 transition-opacity">RSVP</Link>
        </div>
      </div>
    </div>

    <div className="rail pb-10 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.68rem] uppercase tracking-[0.24em] font-sans text-mocha-foreground/50">
      <span>#SA2025</span>
      <a href="mailto:hello@soriaandantoine.com" className="hover:opacity-80 transition-opacity">hello@soriaandantoine.com</a>
    </div>
  </footer>
);

export default Footer;
