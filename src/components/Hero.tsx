import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-card"></div>
      
      {/* Enhanced background effects */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-primary-glow/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-l from-primary/15 to-accent/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce delay-200"></div>
      <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-primary-glow/40 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-primary/25 rounded-full animate-bounce delay-1200"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Content */}
        <div className="text-center space-y-10 max-w-4xl mx-auto">
          {/* Glass card container */}
          <div className="relative backdrop-blur-sm bg-card/30 rounded-3xl p-8 border border-primary/10 shadow-2xl animate-slide-right hover-lift">
            <div className="space-y-6">
              <div className="relative">
                <p className="text-base text-muted-foreground font-medium tracking-wider uppercase mb-2 animate-fade-in animate-delay-200">Hi, I'm</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight animate-slide-up animate-delay-300">
                  <span className="hero-gradient-text drop-shadow-lg">Nesrine Khiari</span>
                </h1>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-ping"></div>
              </div>
              
              <div className="relative animate-slide-left animate-delay-500">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground/95 tracking-wide">
                  Developer & <span className="hero-gradient-text">Innovator</span>
                </h2>
                <div className="mt-2 h-1 w-24 bg-gradient-to-r from-primary to-primary-glow rounded-full animate-scale-in animate-delay-600"></div>
              </div>
            </div>
            
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mt-6 font-medium animate-fade-in animate-delay-700">
              Thriving on crafting cutting-edge solutions, combining strong design sensibility 
              with contemporary development methodologies to build efficient and visually 
              appealing applications. Passionate about emerging technologies and open-source collaboration.
            </p>
          </div>
          
          {/* Modern button group */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-800">
            <Button 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="relative group bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl glow-primary px-8 py-6 text-base font-semibold rounded-2xl overflow-hidden animate-pulse-glow hover-bounce"
            >
              <span className="relative z-10">View Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-glow to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="relative group border-2 border-primary/50 bg-card/50 backdrop-blur-sm text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-xl px-8 py-6 text-base font-semibold rounded-2xl hover:border-primary hover-wiggle"
            >
              <span className="relative z-10">Contact Me</span>
            </Button>
          </div>
          
          {/* Enhanced social links */}
          <div className="flex gap-3 justify-center pt-4 animate-bounce-in animate-delay-1000">
            <a 
              href="mailto:nesrine.khiari01@gmail.com"
              className="group relative p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-xl glow-primary hover-wiggle animate-bounce-in animate-delay-100"
            >
              <Mail className="w-5 h-5 transition-colors duration-300 group-hover:text-primary-foreground" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="tel:+21653920649"
              className="group relative p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-xl hover-wiggle animate-bounce-in animate-delay-200"
            >
              <Phone className="w-5 h-5 transition-colors duration-300 group-hover:text-primary-foreground" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="https://www.linkedin.com/in/nesrine-khiari-776bb4227/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-xl hover-wiggle animate-bounce-in animate-delay-300"
            >
              <Linkedin className="w-5 h-5 transition-colors duration-300 group-hover:text-primary-foreground" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a 
              href="https://github.com/nesrine-khiari/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:bg-primary transition-all duration-300 hover:scale-110 hover:shadow-xl hover-wiggle animate-bounce-in animate-delay-400"
            >
              <Github className="w-5 h-5 transition-colors duration-300 group-hover:text-primary-foreground" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;