import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, MapPin, Calendar, Code, Database, Cloud, TestTube, Palette } from "lucide-react";

const About = () => {


  const languages = [
    { name: "Arabic", level: "Native Speaker", proficiency: 100 },
    { name: "English", level: "TOEFL 102", proficiency: 95 },
    { name: "French", level: "C2 Proficient", proficiency: 90 }
  ];

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["C++", "Python", "Java", "JavaScript", "TypeScript", "PHP", "SQL"]
    },
    {
      title: "Frontend Development",
      icon: <Palette className="w-5 h-5" />,
      skills: ["Angular", "Flutter", "HTML5", "CSS", "JSON", "XML"]
    },
    {
      title: "Backend Frameworks",
      icon: <Database className="w-5 h-5" />,
      skills: ["Spring Boot", "NestJS", ".NET Core", "Node.js"]
    },
    {
      title: "Database Systems",
      icon: <Database className="w-5 h-5" />,
      skills: ["MySQL", "MongoDB", "JPA", "AWS RDS"]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["AWS", "Docker", "Git", "GitHub", "Jira", "CloudWatch"]
    },
    {
      title: "AI & Computer Vision",
      icon: <TestTube className="w-5 h-5" />,
      skills: ["OpenCV", "YOLO", "Detectron2", "PyTorch", "TorchReID", "ByteTrack"]
    },
    {
      title: "Development Tools",
      icon: <Code className="w-5 h-5" />,
      skills: ["Postman", "Spring Security", "JWT", "WebSocket", "VPC"]
    }
  ];

  const topSkills = [
    { name: "Problem-Solving & Troubleshooting", level: 95 },
    { name: "Project Management (Agile, Scrum)", level: 90 },
    { name: "Team Collaboration & Communication", level: 92 },
    { name: "Adaptability & Continuous Learning", level: 95 },
    { name: "Client Relationship Management", level: 88 }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-slide-up animate-delay-200">
            About <span className="hero-gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animate-delay-400">
            Passionate developer with a strong foundation in computer science and hands-on experience 
            in cutting-edge technologies, always eager to tackle new challenges.
          </p>
        </div>


        {/* Languages */}
        <div className="mb-16 animate-slide-up animate-delay-600">
          <h3 className="text-3xl font-bold text-center mb-8 animate-fade-in animate-delay-700">Languages</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <Card key={index} className="card-hover text-center hover-lift animate-scale-in" style={{ animationDelay: `${800 + index * 100}ms` }}>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">{lang.name}</h4>
                  <p className="text-sm text-primary font-medium mb-3">{lang.level}</p>
                  <Progress value={lang.proficiency} className="h-2 hover-glow" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Overview */}
        <div className="mb-16 animate-slide-left animate-delay-1000">
          <h3 className="text-3xl font-bold text-center mb-8 animate-fade-in animate-delay-1100">Core Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {topSkills.map((skill, index) => (
              <Card key={index} className="card-hover text-center hover-lift hover-glow animate-bounce-in" style={{ animationDelay: `${1200 + index * 150}ms` }}>
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-4">{skill.name}</h4>
                  <div className="space-y-2">
                    <Progress value={skill.level} className="h-2 animate-pulse-glow" />
                    <p className="text-sm text-primary font-medium hover-scale">{skill.level}%</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div className="animate-slide-right animate-delay-1600">
          <h3 className="text-3xl font-bold text-center mb-8 animate-fade-in animate-delay-1700">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-hover hover-lift animate-scale-in" style={{ animationDelay: `${1800 + index * 100}ms` }}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-primary hover-wiggle animate-float" style={{ animationDelay: `${2000 + index * 100}ms` }}>{category.icon}</span>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary hover:border-primary/40 transition-smooth animate-fade-in"
                        style={{ animationDelay: `${2200 + index * 100 + skillIndex * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;