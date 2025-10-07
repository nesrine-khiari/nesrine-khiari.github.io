import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, Cloud, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "End-to-end software development solutions from concept to deployment, utilizing modern frameworks and best practices.",
      features: ["Web Applications", "Mobile Apps", "API Development", "Database Design"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Deployment & DevOps",
      description: "Scalable cloud infrastructure setup with automated deployment pipelines and monitoring for optimal performance.",
      features: ["AWS Solutions", "Docker Containers", "CI/CD Pipelines", "Performance Monitoring"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description: "Leveraging artificial intelligence and machine learning technologies to create intelligent solutions and data-driven applications.",
      features: ["Computer Vision", "Deep Learning Models", "Data Analysis", "Neural Networks"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Crafting intuitive and visually stunning mockups for web and mobile applications using industry-leading design tools.",
      features: ["Figma Prototypes", "Adobe Creative Suite", "Canva Designs", "User Experience Research"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-card/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-slide-up animate-delay-200">
            My <span className="hero-gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animate-delay-400">
            Comprehensive solutions combining technical expertise with creative design 
            to bring your digital vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-slide-up animate-delay-600">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card/80 backdrop-blur-sm border-primary/10 hover:border-primary/30 group hover-lift hover-glow animate-scale-in"
              style={{ animationDelay: `${700 + index * 150}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth w-fit hover-wiggle animate-bounce-in" style={{ animationDelay: `${800 + index * 150}ms` }}>
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold animate-fade-in" style={{ animationDelay: `${900 + index * 150}ms` }}>{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed animate-slide-up" style={{ animationDelay: `${1000 + index * 150}ms` }}>
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="text-xs text-primary/80 bg-primary/5 px-3 py-1 rounded-full border border-primary/20 hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition-smooth animate-fade-in"
                      style={{ animationDelay: `${1100 + index * 150 + featureIndex * 100}ms` }}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-scale-in animate-delay-1400">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-primary text-primary-foreground hover-lift animate-pulse-glow">
            <h3 className="text-2xl font-bold mb-4 animate-fade-in animate-delay-1500">Ready to Start Your Project?</h3>
            <p className="mb-6 opacity-90 animate-slide-up animate-delay-1600">
              Let's collaborate to transform your ideas into exceptional digital experiences.
            </p>
            <a 
              href="mailto:nesrine.khiari01@gmail.com"
              className="inline-block px-8 py-3 bg-background text-foreground rounded-lg font-semibold hover:scale-105 transition-spring hover-bounce animate-bounce-in animate-delay-1700"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;