import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Menu, X, Download } from "lucide-react";
import nesrineAvatar from "@/assets/nesrine-avatar.jpg";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'contact', label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId === 'home' ? 'hero' : sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section === 'hero' ? 'home' : section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-2 text-xl font-bold hero-gradient-text hover:scale-105 transition-spring"
          >
            <Avatar className="w-8 h-8">
              <AvatarImage src={nesrineAvatar} alt="Nesrine Khiari" />
              <AvatarFallback>NK</AvatarFallback>
            </Avatar>
            Nesrine Khiari
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-smooth hover:text-primary ${
                  activeSection === item.id 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/resume_Nesrine_Khiari.pdf"
              download="Nesrine_Khiari_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium hover:scale-105 transition-spring glow-primary"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-card transition-smooth"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 text-sm font-medium transition-smooth hover:text-primary ${
                    activeSection === item.id 
                      ? 'text-primary' 
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-border/50">
                <a
                  href="/resume_Nesrine_Khiari.pdf"
                  download="Nesrine_Khiari_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium glow-primary"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;