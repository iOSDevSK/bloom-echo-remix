import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const NotFound = () => (
  <PageTransition>
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6 pt-40 pb-28 text-center">
        <div>
          <p className="eyebrow mb-5">Page Not Found</p>
          <h1 className="font-display text-6xl md:text-7xl font-light mb-6">404</h1>
          <p className="lead mb-10">This page has wandered off into the pines.</p>
          <Link to="/" className="btn-fine">Back to the beginning</Link>
        </div>
      </main>
      <Footer />
    </div>
  </PageTransition>
);

export default NotFound;
