import { Brain, Microscope, Video, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Brain,
    title: "Brain and Spine Surgery",
    description: "Comprehensive care for complex neurological conditions with advanced surgical techniques.",
  },
  {
    icon: Microscope,
    title: "Microscopy-Assisted Surgery",
    description: "Precision and enhanced visualization for delicate procedures ensuring optimal outcomes.",
  },
  {
    icon: Video,
    title: "Endoscopic Procedures",
    description: "Minimally invasive techniques for faster recovery and reduced hospital stay.",
  },
  {
    icon: Zap,
    title: "MIS (Minimal Intrusive Surgery)",
    description: "Advanced techniques reducing discomfort and accelerating patient recovery.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Specialized Neurosurgical Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Offering world-class neurological care with cutting-edge technology and compassionate expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 animate-fade-in-up bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
