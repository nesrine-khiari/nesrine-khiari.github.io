import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <About />
        <Services />
        <section id="projects">
          <Portfolio />
        </section>
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-card/20 py-8 border-t border-border/50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="font-bold hero-gradient-text">Nesrine Khiari</p>
              <p className="text-sm text-muted-foreground">Developer & Innovator</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Nesrine Khiari. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Built with passion and modern technologies
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioPage;