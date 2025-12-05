import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Smartphone, Zap, Code, Github, Linkedin, Mail, ChevronDown, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

import heroBg from "@assets/generated_images/sleek_dark_abstract_technology_background_with_subtle_blue_neon_lines.png";
import fintechMockup from "@assets/generated_images/modern_fintech_app_interface_mockup_floating_in_dark_space.png";
import fitnessMockup from "@assets/generated_images/minimalist_fitness_app_interface_mockup_floating_in_dark_space.png";
import socialMockup from "@assets/generated_images/vibrant_social_app_interface_mockup_floating_in_dark_space.png";

// Placeholder imports for blog images - will be replaced by generated images
import blog1 from "@assets/generated_images/abstract_code_visualization_in_dark_mode_with_neon_accents.png";
import blog2 from "@assets/generated_images/geometric_mobile_architecture_diagram_in_dark_mode.png";
import blog3 from "@assets/generated_images/futuristic_data_analytics_dashboard_on_dark_glass.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans overflow-x-hidden selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/5 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer">
            <div className="h-10 w-10 rounded-xl bg-linear-to-br from-primary to-purple-600 flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
              <span className="font-mono text-white font-bold text-lg">HM</span>
            </div>
            <LogoTyper />
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#blog" className="hover:text-primary transition-colors">Blog</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <Button variant="outline" className="border-primary/20 hover:bg-primary/10 hover:text-primary" asChild>
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-background z-10" />
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Mobile App Developer</h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-6 leading-tight">
              Solve problems <br />
              <span className="text-white">with ease.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Crafting high-performance mobile experiences at the tap of your fingers. 
              Transforming complex ideas into sleek, deployment-ready applications.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base rounded-full">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base rounded-full border-white/10 hover:bg-white/5">
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What I Do</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Full-cycle mobile development with a focus on performance and user experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Smartphone className="h-8 w-8 text-primary" />}
              title="Mobile Development"
              description="Native and cross-platform apps built with React Native and Swift. Smooth 60fps performance."
            />
            <ServiceCard 
              icon={<Code className="h-8 w-8 text-purple-500" />}
              title="Clean Architecture"
              description="Scalable codebases that are easy to maintain and extend. Built for growth from day one."
            />
            <ServiceCard 
              icon={<Zap className="h-8 w-8 text-yellow-500" />}
              title="Rapid Prototyping"
              description="From idea to clickable prototype in days. Validate your vision before committing to code."
            />
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Selected Work</h2>
              <p className="text-muted-foreground">Recent projects deployed to the App Store.</p>
            </div>
            <Button variant="link" className="text-primary p-0 h-auto">View all projects <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              image={fintechMockup}
              title="FinFlow"
              category="Fintech"
            />
            <ProjectCard 
              image={fitnessMockup}
              title="Pulse"
              category="Health & Fitness"
            />
            <ProjectCard 
              image={socialMockup}
              title="Connect"
              category="Social Network"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Latest Insights</h2>
              <p className="text-muted-foreground">Thoughts on mobile development, performance, and design.</p>
            </motion.div>
            <Button variant="link" className="text-primary p-0 h-auto">
              <a href="https://medium.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                Read on Medium <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard 
              image={blog1}
              title="Optimizing React Native Performance for 60fps"
              excerpt="Deep dive into rendering optimizations, memoization, and native driver animations for buttery smooth apps."
              date="Oct 12, 2024"
              readTime="5 min read"
              link="#"
            />
            <BlogCard 
              image={blog2}
              title="The Future of Mobile Architecture"
              excerpt="Exploring clean architecture patterns, modularization, and how to scale your codebase effectively."
              date="Sep 28, 2024"
              readTime="8 min read"
              link="#"
            />
            <BlogCard 
              image={blog3}
              title="Designing for Dark Mode First"
              excerpt="Why starting with dark mode leads to better contrast, accessibility, and overall visual hierarchy."
              date="Sep 15, 2024"
              readTime="4 min read"
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to build <br />
                <span className="text-gradient">something amazing?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                I'm currently available for freelance projects and open to new opportunities.
              </p>
              
              <div className="flex gap-4 mb-12">
                <SocialLink href="#" icon={<Github className="h-5 w-5" />} />
                <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} />
                <SocialLink href="#" icon={<Mail className="h-5 w-5" />} />
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Based in Mumbai, India</p>
                <p>© 2024 Husain Mukadam</p>
              </div>
            </div>

            <Card className="glass-panel bg-card/50 border-white/5 p-6 md:p-8">
              <CardContent className="p-0 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input placeholder="John Doe" className="bg-background/50 border-white/10 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input placeholder="john@example.com" type="email" className="bg-background/50 border-white/10 focus:border-primary/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-background/50 border-white/10 focus:border-primary/50" />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

function LogoTyper() {
  const [displayedText, setDisplayedText] = useState({
    line1: "",
    line2: "",
    completed: false
  });

  useEffect(() => {
    const text1 = "husainmukadam";
    const text2 = ".dev";
    let currentTick = 0;
    const totalLength = text1.length + text2.length;

    const interval = setInterval(() => {
      currentTick++;
      
      if (currentTick <= text1.length) {
        setDisplayedText(prev => ({ ...prev, line1: text1.slice(0, currentTick) }));
      } else {
        setDisplayedText(prev => ({ 
          ...prev, 
          line1: text1,
          line2: text2.slice(0, currentTick - text1.length) 
        }));
      }

      if (currentTick >= totalLength) {
        clearInterval(interval);
        setDisplayedText(prev => ({ ...prev, completed: true }));
      }
    }, 100); // 100ms per character

    return () => clearInterval(interval);
  }, []);

  // Helper to render line 1 with different styles for first/last name
  const renderLine1 = () => {
    const text = displayedText.line1;
    const firstName = "husain";
    
    if (text.length <= firstName.length) {
      return <span>{text}</span>;
    }
    
    return (
      <>
        <span>{firstName}</span>
        <span className="text-muted-foreground">{text.slice(firstName.length)}</span>
      </>
    );
  };

  return (
    <div className="flex flex-col leading-none justify-center">
      <span className="text-xl font-logo font-bold tracking-tight flex items-center min-h-[24px]">
        {renderLine1()}
        {/* Cursor for line 1: only show if we are typing line 1 and not done */}
        {!displayedText.line2 && !displayedText.completed && (
             <span className="animate-blink ml-[1px] -mb-1 text-primary">_</span>
        )}
      </span>
      <span className="text-xs font-mono text-primary tracking-widest font-bold uppercase flex items-center min-h-[16px]">
        {displayedText.line2}
        {/* Cursor for line 2: show if we are typing line 2 OR if completed */}
        {(displayedText.line2 || displayedText.completed) && (
             <span className="animate-blink ml-[1px]">_</span>
        )}
      </span>
    </div>
  );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 rounded-2xl bg-card border border-white/5 hover:border-primary/20 transition-colors group"
    >
      <div className="mb-6 p-3 bg-background rounded-lg w-fit group-hover:scale-110 transition-transform duration-300 border border-white/5">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 font-display">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}

function ProjectCard({ image, title, category }: { image: string, title: string, category: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-square rounded-2xl overflow-hidden mb-4 border border-white/5 bg-card">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-medium border border-white/20 px-4 py-2 rounded-full backdrop-blur-md">View Case Study</span>
        </div>
      </div>
      <h3 className="text-lg font-bold font-display">{title}</h3>
      <p className="text-sm text-muted-foreground">{category}</p>
    </motion.div>
  );
}

function BlogCard({ image, title, excerpt, date, readTime, link }: { image: string, title: string, excerpt: string, date: string, readTime: string, link: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group cursor-pointer flex flex-col h-full"
    >
      <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full">
        <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 border border-white/5 bg-card">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-black/50 backdrop-blur-md border-white/10 text-white hover:bg-black/70">
              {readTime}
            </Badge>
          </div>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="text-xs font-medium text-primary mb-2 uppercase tracking-wider">{date}</div>
          <h3 className="text-xl font-bold font-display mb-3 group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3 mb-4 flex-grow">
            {excerpt}
          </p>
          <div className="flex items-center text-sm font-medium text-foreground group-hover:translate-x-1 transition-transform duration-300 mt-auto">
            Read Article <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </a>
    </motion.div>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href}
      className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
    >
      {icon}
    </a>
  );
}
