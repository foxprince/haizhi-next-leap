import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Award, Globe } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8 text-accent" />, number: "50+", label: "Projects Delivered" },
    { icon: <Award className="w-8 h-8 text-accent" />, number: "5+", label: "Years Experience" },
    { icon: <Globe className="w-8 h-8 text-accent" />, number: "20+", label: "Global Clients" },
    { icon: <CheckCircle className="w-8 h-8 text-accent" />, number: "99.9%", label: "Uptime Guarantee" }
  ];

  const values = [
    {
      title: "Excellence",
      description: "We deliver high-quality solutions that exceed expectations"
    },
    {
      title: "Innovation", 
      description: "Leveraging cutting-edge technologies for competitive advantage"
    },
    {
      title: "Reliability",
      description: "24/7 support and guaranteed system availability"
    },
    {
      title: "Partnership",
      description: "Building long-term relationships based on trust and results"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-inter mb-6">
              About Haizhi IT
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are a leading IT services company specializing in modern technology solutions. 
              Our team of experienced professionals delivers comprehensive IT services, from 
              custom development to 24/7 operations management.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Founded on the principles of innovation and reliability, we help businesses 
              transform their operations through strategic technology partnerships and 
              world-class execution.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold font-inter mb-1">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold font-inter text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
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