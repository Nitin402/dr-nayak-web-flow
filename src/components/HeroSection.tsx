import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import doctorImage from "@/assets/dr-satish-nayak.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/85" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-left space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-sm font-medium tracking-wider uppercase text-primary bg-primary/10 px-4 py-2 rounded-full">
                MBBS, MS, MCh
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Dr. Satish Nayak
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-medium text-primary">
              Leading Neurosurgeon & Spine Specialist
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              With over 10,000 successful surgeries, Dr. Nayak combines vast experience with cutting-edge techniques for optimal patient outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={scrollToServices}
                className="border-2 hover:bg-primary/5"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="relative animate-fade-in">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={doctorImage} 
                alt="Dr. Satish Nayak - Senior Neurosurgeon" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
