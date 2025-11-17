import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Mail, Phone, Linkedin, Instagram, Sparkles, TrendingUp, Target } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-accent rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <Badge className="gradient-hero text-primary-foreground border-0 px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Available for New Projects
            </Badge>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                Hi — I'm{' '}
                <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Tejas Lashkare
                </span>
              </h1>
              <div className="flex flex-wrap gap-3 text-lg md:text-xl font-medium">
                <span className="px-4 py-2 bg-secondary rounded-full">MBA Candidate</span>
                <span className="px-4 py-2 bg-secondary rounded-full">Digital Marketer</span>
                <span className="px-4 py-2 bg-secondary rounded-full">FP&A</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              I help businesses grow with{' '}
              <span className="text-primary font-semibold">data-driven marketing</span>, CRM
              strategies and polished presentations.
            </p>

            {/* Value Props */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-semibold">Growth Focus</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm font-semibold">Data-Driven</p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-semibold">Results First</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gradient-hero group text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" asChild>
                <a href="#contact">Let's Talk</a>
              </Button>
            </div>

            {/* Contact Quick Links */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-border">
              <a
                href="tel:8767641585"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">8767641585</span>
              </a>
              <a
                href="mailto:tejaslashkare9512@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-medium">Email Me</span>
              </a>
              <div className="flex gap-3 ml-auto">
                <a
                  href="https://www.linkedin.com/in/tejas-lashkare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/teja_ane_nenu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Photo with Modern Design */}
          <div className="relative animate-slide-in-right lg:block hidden">
            {/* Decorative Background Card */}
            <div className="absolute inset-0 gradient-hero opacity-20 rounded-3xl blur-3xl transform rotate-6"></div>
            
            {/* Main Image Container */}
            <div className="relative">
              {/* Floating Card */}
              <div className="relative w-full max-w-lg mx-auto">
                {/* Glow Effect */}
                <div className="absolute -inset-4 gradient-hero rounded-full blur-3xl opacity-30 animate-float"></div>
                
                {/* Image */}
                <div className="relative overflow-hidden rounded-3xl border-4 border-background shadow-2xl">
                  <img
                    src={profilePhoto}
                    alt="Tejas Lashkare - Digital Marketing Professional"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  
                  {/* Stats Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-md rounded-2xl p-4 border border-border shadow-xl">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <p className="text-2xl font-bold text-primary">5+</p>
                        <p className="text-xs text-muted-foreground">Services</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-accent">CRM</p>
                        <p className="text-xs text-muted-foreground">Expert</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">MBA</p>
                        <p className="text-xs text-muted-foreground">Student</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                  <span className="text-sm font-bold">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
