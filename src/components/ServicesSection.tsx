import { Brain, Microscope, Video, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import brainSpineSurgery from "@/assets/brain-spine-surgery.jpg";
import microscopyAssistedSurgery from "@/assets/microscopy-assisted-surgery.jpg";
import endoscopicSurgery from "@/assets/endoscopic-surgery.jpg";
import minimallyInvasiveSurgery from "@/assets/minimally-invasive-surgery.jpg";

const services = [
  {
    icon: Brain,
    title: "Brain and Spine Surgery",
    description: "Comprehensive care for complex neurological conditions with advanced surgical techniques.",
    image: brainSpineSurgery,
  },
  {
    icon: Microscope,
    title: "Microscopy-Assisted Surgery",
    description: "Precision and enhanced visualization for delicate procedures ensuring optimal outcomes.",
    image: microscopyAssistedSurgery,
  },
  {
    icon: Video,
    title: "Endoscopic Procedures",
    description: "Minimally invasive techniques for faster recovery and reduced hospital stay.",
    image: endoscopicSurgery,
  },
  {
    icon: Zap,
    title: "MIS (Minimal Invasive Surgery)",
    description: "Advanced techniques reducing discomfort and accelerating patient recovery.",
    image: minimallyInvasiveSurgery,
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
              className="group hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 animate-fade-in-up bg-card/50 backdrop-blur overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <CardHeader>
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
