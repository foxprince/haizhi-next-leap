import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Smartphone,
  Monitor,
  Wrench
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Custom Development",
      description: "Full-stack web and mobile application development tailored to your business needs.",
      features: ["React & Node.js", "Mobile Apps", "API Integration", "UI/UX Design"]
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "IT Operations",
      description: "Comprehensive IT operations management ensuring 99.9% uptime and performance.",
      features: ["24/7 Monitoring", "Performance Optimization", "Incident Response", "Capacity Planning"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "System Maintenance", 
      description: "Proactive maintenance and security updates to keep your systems running smoothly.",
      features: ["Security Patches", "System Updates", "Backup Management", "Vulnerability Scanning"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "Cloud Solutions",
      description: "Cloud migration, deployment, and management across AWS, Azure, and GCP.",
      features: ["Cloud Migration", "DevOps", "Scalability", "Cost Optimization"]
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Data Management",
      description: "Database design, optimization, and analytics solutions for better insights.",
      features: ["Database Design", "Data Analytics", "ETL Processes", "Real-time Dashboards"]
    },
    {
      icon: <Wrench className="w-8 h-8 text-primary" />,
      title: "Technical Consulting",
      description: "Strategic IT consulting to align technology with your business objectives.",
      features: ["Architecture Review", "Technology Strategy", "Performance Audit", "Best Practices"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-inter mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive IT solutions designed to accelerate your business growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  {service.icon}
                  <CardTitle className="font-inter text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;