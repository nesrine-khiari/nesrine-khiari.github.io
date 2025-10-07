import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code, Database, Smartphone, Brain, Cloud, Download } from "lucide-react";
import ProjectImageSlider from "./ProjectImageSlider";
import angularLogo from "@/assets/tech-logos/angular.svg";
import nestjsLogo from "@/assets/tech-logos/nestjs.svg";
import typescriptLogo from "@/assets/tech-logos/typescript.svg";
import mysqlLogo from "@/assets/tech-logos/mysql.svg";
import bootstrapLogo from "@/assets/tech-logos/bootstrap.svg";
import flutterLogo from "@/assets/tech-logos/flutter.svg";
import dartLogo from "@/assets/tech-logos/dart.svg";
import firebaseLogo from "@/assets/tech-logos/firebase.svg";
import sqliteLogo from "@/assets/tech-logos/sqlite.svg";
import dotnetLogo from "@/assets/tech-logos/dotnet.svg";
import sqlserverLogo from "@/assets/tech-logos/sqlserver.svg";
import awsLogo from "@/assets/tech-logos/aws.svg";
import dockerLogo from "@/assets/tech-logos/docker.svg";
import nutrisolutionsWebHome from "@/assets/nutrisolutions-web-home.png";
import nutrisolutionsWebLogin from "@/assets/nutrisolutions-web-login.png";
import nutrisolutionsWebProfile from "@/assets/nutrisolutions-web-profile.png";
import nutrisolutionsWebDashboard from "@/assets/nutrisolutions-web-dashboard.png";
import nutrisolutionsWebDoctor from "@/assets/nutrisolutions-web-doctor.png";
import nutrisolutionsWebCalendar from "@/assets/nutrisolutions-web-calendar.png";
import nutrisolutionsAuth from "@/assets/nutrisolutions-auth.png";
import nutrisolutionsProfile from "@/assets/nutrisolutions-profile.png";
import nutrisolutionsAppointment from "@/assets/nutrisolutions-appointment.png";
import nutrisolutionsDashboard from "@/assets/nutrisolutions-dashboard.png";
import awsArchitecture from "@/assets/aws-architecture.png";
import awsMonitoring from "@/assets/aws-monitoring.png";
import nexgenErpUser from "@/assets/nexgen-erp-user.png";
import nexgenErpInvoices from "@/assets/nexgen-erp-invoices.png";
import nexgenErpInvoiceDetail from "@/assets/nexgen-erp-invoice-detail.png";
import nexgenErpProjects from "@/assets/nexgen-erp-projects.png";
import reidOutdoor from "@/assets/reid-outdoor.png";
import reidIndoor from "@/assets/reid-indoor.png";

const Portfolio = () => {
  const getTechnologyLogo = (tech: string) => {
    const techLogos: { [key: string]: string } = {
      "Angular": angularLogo,
      "NestJS": nestjsLogo,
      "TypeScript": typescriptLogo,
      "MySQL": mysqlLogo,
      "Bootstrap": bootstrapLogo,
      "Flutter": flutterLogo,
      "Dart": dartLogo,
      "Firebase": firebaseLogo,
      "SQLite": sqliteLogo,
      ".NET": dotnetLogo,
      "SQL Server": sqlserverLogo,
      "AWS": awsLogo,
      "Docker": dockerLogo
    };
    return techLogos[tech];
  };

  const getTechnologyIcon = (tech: string) => {
    const techIcons: { [key: string]: any } = {
      "REST APIs": Database,
      "YOLOv8": Brain,
      "Detectron2": Brain,
      "OSNet": Brain,
      "FastReID": Brain,
      "MEVA Dataset": Brain,
      "Monitoring Tools": Cloud
    };
    return techIcons[tech] || Code;
  };

  const projects = [
    {
      title: "NutriSolutions Web Platform",
      objective: "A comprehensive web-based nutrition management platform built with Angular and NestJS, featuring role-specific interfaces for clients, nutritionists, and administrators with advanced appointment scheduling and meal planning capabilities.",
      technologies: ["Angular", "NestJS", "TypeScript", "MySQL", "Bootstrap"],
      features: [
        "Multi-role authentication system (Client/Nutritionist/Admin)",
        "Interactive dashboard with personalized nutrition metrics",
        "Advanced appointment scheduling and calendar management",
        "Recipe database with filtering and search functionality",
        "Patient profile management and health tracking",
        "Real-time consultation booking system",
        "Admin panel for nutritionist verification and management",
        "Responsive web design for all devices"
      ],
      results: "Streamlined nutrition consultations with 40% improved scheduling efficiency and enhanced client-nutritionist communication",
      category: "Full-Stack",
      images: [
        nutrisolutionsWebHome,
        nutrisolutionsWebLogin,
        nutrisolutionsWebProfile,
        nutrisolutionsWebDashboard,
        nutrisolutionsWebDoctor,
        nutrisolutionsWebCalendar
      ]
    },
    {
      title: "NutriSolutions Mobile App",
      objective: "A cross-platform mobile application developed with Flutter, providing on-the-go access to nutrition services with intuitive mobile-first design, push notifications, and offline capabilities for seamless user experience.",
      technologies: ["Flutter", "Dart", "Firebase", "SQLite", "REST APIs"],
      features: [
        "Cross-platform mobile app (iOS & Android)",
        "Biometric authentication and secure login",
        "BMI calculator and health metrics tracking",
        "Recipe favorites and meal planning",
        "Push notifications for appointments and reminders",
        "Offline data synchronization",
        "Water intake tracking with visual progress",
        "Mobile-optimized appointment booking interface",
        "Client profile management with health data visualization"
      ],
      results: "Increased user engagement by 60% with mobile accessibility and improved client retention through personalized notifications",
      category: "Mobile",
      images: [
        nutrisolutionsAuth,
        nutrisolutionsProfile,
        nutrisolutionsAppointment,
        nutrisolutionsDashboard
      ]
    },
    {
      title: "Person Re-Identification Across Multi-Camera Surveillance",
      objective: "Developed a system capable of detecting individuals in video streams and recognizing when the same person appears across different environments using the MEVA dataset",
      technologies: ["YOLOv8", "Detectron2", "OSNet", "FastReID", "MEVA Dataset"],
      features: [
        "Data preparation",
        "Person detection using pre-trained models and custom training",
        "Re-identification with specialized architectures",
        "Cross-camera person tracking",
        "Advanced computer vision algorithms"
      ],
      results: "Successfully implemented three-stage pipeline for accurate person re-identification across multiple surveillance cameras",
      category: "AI/ML",
      images: [
        reidOutdoor,
        reidIndoor
      ]
    },
    {
      title: "NexgenERP - Enterprise Resource Planning System",
      objective: "Comprehensive ERP solution built with modern web technologies, featuring user management, project tracking, financial management, and invoicing capabilities with a clean, intuitive interface.",
      technologies: [".NET", "SQL Server", "Angular", "TypeScript"],
      features: [
        "User management and role-based access control",
        "Project lifecycle management and tracking",
        "Comprehensive invoicing system with PDF generation",
        "Financial dashboard and reporting",
        "Customer and employee management",
        "Real-time project status updates",
        "Intuitive purple-themed UI design",
        "Multi-module architecture for scalability"
      ],
      results: "Successfully delivered a complete ERP solution improving business process efficiency and financial management for enterprises",
      category: "Full-Stack",
      images: [
        nexgenErpUser,
        nexgenErpInvoices,
        nexgenErpInvoiceDetail,
        nexgenErpProjects
      ]
    },
    {
      title: "Resilient 3-Tier Web Application Architecture",
      objective: "Designed and implemented a resilient, scalable 3-tier web application architecture that handles fluctuating web traffic with efficiency, guarantees high availability, and protects sensitive resources",
      technologies: ["AWS", "Docker", "Monitoring Tools"],
      features: [
        "Load balancing for traffic distribution",
        "Auto-scaling infrastructure",
        "Cross-zone database reliability",
        "Real-time monitoring and alerting",
        "High availability guarantees",
        "Sensitive resource protection",
        "NutriSolutions platform deployment showcase"
      ],
      results: "Achieved resilient architecture with efficient traffic handling and high availability for real-world applications",
      category: "Cloud",
      images: [
        awsArchitecture,
        awsMonitoring
      ]
    }
  ];

  const categoryColors = {
    "Full-Stack": "bg-blue-500/10 text-blue-400 border-blue-400/20",
    "Mobile": "bg-green-500/10 text-green-400 border-green-400/20",
    "AI/ML": "bg-purple-500/10 text-purple-400 border-purple-400/20",
    "Cloud": "bg-orange-500/10 text-orange-400 border-orange-400/20"
  };

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-slide-up animate-delay-200">
            Featured <span className="hero-gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animate-delay-400">
            Showcase of innovative projects demonstrating technical expertise 
            across various domains and cutting-edge technologies.
          </p>
        </div>

        <div className="grid gap-12 animate-slide-up animate-delay-600">
          {projects.map((project, index) => (
            <Card
              key={index} 
              className="card-hover bg-card/60 backdrop-blur-sm border-primary/10 hover:border-primary/30 group overflow-hidden hover-lift animate-scale-in"
              style={{ animationDelay: `${700 + index * 200}ms` }}
            >
              <div className="grid lg:grid-cols-2 gap-8 p-8">
                {/* Project Images Section */}
                <div className="space-y-4">
                  <div className="flex items-start justify-between mb-4">
                    <Badge 
                      variant="outline" 
                      className={`${categoryColors[project.category as keyof typeof categoryColors]} font-medium`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  
                  {/* Auto-sliding Project Images */}
                  <ProjectImageSlider 
                    projectTitle={project.title} 
                    images={project.images || []}
                  />
                </div>

                {/* Project Details Section */}
                <div className="space-y-6">
                  <div>
                    <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-smooth mb-3">
                      {project.title}
                    </CardTitle>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.objective}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => {
                        const techLogo = getTechnologyLogo(tech);
                        const IconComponent = getTechnologyIcon(tech);
                        return (
                          <Badge 
                            key={techIndex}
                            variant="secondary"
                            className="bg-primary/5 text-primary/80 hover:bg-primary hover:text-primary-foreground transition-smooth text-xs flex items-center gap-1"
                          >
                            {techLogo ? (
                              <img 
                                src={techLogo} 
                                alt={tech} 
                                className="w-3 h-3 object-contain" 
                              />
                            ) : (
                              <IconComponent className="w-3 h-3" />
                            )}
                            {tech}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex}
                          className="text-sm text-muted-foreground flex items-start gap-2"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects CTA */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-primary/20">
            <h3 className="text-xl font-bold mb-2">Interested in More Projects?</h3>
            <p className="text-muted-foreground mb-4">
              Explore my complete portfolio and open-source contributions.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="https://github.com/nesrine-khiari/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-spring"
              >
                <Github className="w-4 h-4" />
                View GitHub
              </a>
              <a 
                href="/resume_Nesrine_Khiari.pdf"
                download="Nesrine_Khiari_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;