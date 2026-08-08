import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import ScrollReveal from "@/components/ScrollReveal";

const Cart = () => (
  <PageTransition>
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center px-6 pt-40 pb-28">
        <ScrollReveal>
          <div className="text-center max-w-lg">
            <ShoppingBag className="mx-auto mb-8 text-accent" size={40} strokeWidth={1} />
            <p className="eyebrow mb-5">Your Cart</p>
            <h1 className="font-display text-4xl md:text-5xl font-light mb-6">Nothing here yet</h1>
            <p className="lead mb-10">
              Have a look at the registry to add something for Soria &amp; Antoine.
            </p>
            <Link to="/registry" className="btn-fine">Go to the registry</Link>
          </div>
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  </PageTransition>
);

export default Cart;
