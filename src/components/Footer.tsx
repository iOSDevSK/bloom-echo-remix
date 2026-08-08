import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-10 px-6 md:px-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
      <div>
        <p className="text-xs uppercase tracking-wider font-sans text-muted-foreground mb-2">Questions?</p>
        <a href="mailto:hello@soriaandantoine.com" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          Email Us
        </a>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider font-sans text-muted-foreground mb-2">Quick Links</p>
        <div className="space-y-1.5">
          <Link to="/" className="block text-xs text-muted-foreground hover:text-foreground transition-colors">Ceremony & Reception</Link>
          <Link to="/travel" className="block text-xs text-muted-foreground hover:text-foreground transition-colors">Travel & Stay</Link>
          <Link to="/registry" className="block text-xs text-muted-foreground hover:text-foreground transition-colors">Registry</Link>
          <Link to="/rsvp" className="block text-xs text-muted-foreground hover:text-foreground transition-colors">RSVP</Link>
        </div>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider font-sans text-muted-foreground mb-2">Share</p>
        <p className="text-xs text-muted-foreground">#SA2025</p>
      </div>
    </div>
    <div className="text-center mt-8">
      <p className="text-[10px] text-muted-foreground/60">Made with love</p>
    </div>
  </footer>
);

export default Footer;
