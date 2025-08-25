import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Server, Settings } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern IT workspace"
          className="w-full h-full object-cover opacity-5"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold font-inter mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Next-Level IT Solutions
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Empowering businesses with professional IT services, seamless operations, and cutting-edge development outsourcing
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="font-inter shadow-elegant">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="font-inter">
              Learn More
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Code className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold font-inter mb-2">Development</h3>
              <p className="text-sm text-muted-foreground text-center">Custom software solutions</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Server className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold font-inter mb-2">Operations</h3>
              <p className="text-sm text-muted-foreground text-center">24/7 system monitoring</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Settings className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-semibold font-inter mb-2">Maintenance</h3>
              <p className="text-sm text-muted-foreground text-center">Proactive system care</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;