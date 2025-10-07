import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [lastSubmission, setLastSubmission] = useState(0);

  // Initialize EmailJS
  emailjs.init('3ZN9k5u76x7Yc50iM');

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "nesrine.khiari01@gmail.com",
      href: "mailto:nesrine.khiari01@gmail.com"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Tunis, Tunisia",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/nesrine-khiari/",
      color: "hover:bg-gray-600"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn", 
      href: "https://www.linkedin.com/in/nesrine-khiari-776bb4227/",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      href: "mailto:nesrine.khiari01@gmail.com",
      color: "hover:bg-primary"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting - prevent spam (30 seconds between submissions)
    const now = Date.now();
    if (now - lastSubmission < 30000) {
      toast({
        title: "Please wait",
        description: "Please wait at least 30 seconds between submissions.",
        variant: "destructive"
      });
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        subject: formData.subject || 'Portfolio Contact',
        from_message: formData.message,
        user_message: formData.message,
        reply_to: formData.email,
        to_name: 'Nesrine Khiari',
        to_email: 'nesrine.khiari01@gmail.com'
      };

      await emailjs.send(
        'service_ppypyhi',
        'template_hn00bmg', 
        templateParams
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });

      // Reset form and update last submission time
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLastSubmission(now);

    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Message Failed to Send",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-card/20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-slide-up animate-delay-200">
            Get In <span className="hero-gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up animate-delay-400">
            Ready to collaborate on your next project? Let's discuss how we can 
            bring your vision to life with innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 animate-slide-up animate-delay-600">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-left animate-delay-700">
            <div>
              <h3 className="text-2xl font-bold mb-6 animate-fade-in animate-delay-800">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed animate-slide-up animate-delay-900">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I'll do my best to get back to you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 animate-slide-up animate-delay-1000">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-lg bg-card/60 hover:bg-card transition-smooth group hover-lift animate-scale-in"
                  style={{ animationDelay: `${1100 + index * 100}ms` }}
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth hover-wiggle">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <p className="font-semibold text-foreground">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="animate-slide-up animate-delay-1300">
              <h4 className="font-semibold mb-4 animate-fade-in animate-delay-1400">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-full bg-card hover:scale-110 transition-spring ${social.color} text-card-foreground hover-bounce animate-bounce-in`}
                    style={{ animationDelay: `${1500 + index * 100}ms` }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-hover bg-card/80 backdrop-blur-sm hover-lift animate-slide-right animate-delay-800">
            <CardHeader>
              <CardTitle className="text-2xl">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project inquiry, collaboration, etc."
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    required
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full glow-primary transition-spring hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  size="lg"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-primary text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Something Amazing?</h3>
            <p className="mb-6 opacity-90">
              From initial concept to final deployment, I'm here to help you create 
              exceptional digital experiences that make an impact.
            </p>
            <a 
              href="mailto:nesrine.khiari01@gmail.com"
              className="inline-block px-8 py-3 bg-background text-foreground rounded-lg font-semibold hover:scale-105 transition-spring"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;