import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold font-inter">Haizhijing IT Solutions</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Professional IT services, operations management, and development outsourcing 
              for modern businesses worldwide.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Haizhijing IT Solutions. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold font-inter mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Custom Development</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">IT Operations</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">System Maintenance</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold font-inter mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Our Services</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Built with modern web technologies
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-sm text-muted-foreground">
              haizhijingit.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;