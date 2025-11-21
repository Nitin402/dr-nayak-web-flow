import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Instagram, Calendar, MapPin, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) throw error;

      toast({
        title: "Form Submitted!",
        description: "We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Book Your Consultation
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards better health. Reach out to schedule your appointment.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <Card className="lg:col-span-2 shadow-xl border-border/50 animate-fade-in">
              <CardHeader>
                <CardTitle className="text-2xl font-serif">Send Us a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we'll respond within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Describe your concern or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all shadow-lg"
                    disabled={isSubmitting}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Card className="shadow-xl border-border/50 hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-serif flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    WhatsApp
                  </CardTitle>
                  <CardDescription>
                    Get instant responses to your queries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                    asChild
                  >
                    <a href="https://wa.me/918299834287" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-border/50 hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-serif flex items-center gap-2">
                    <Instagram className="w-5 h-5 text-primary" />
                    Instagram
                  </CardTitle>
                  <CardDescription>
                    Follow for updates and health tips
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white"
                    asChild
                  >
                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                      <Instagram className="w-5 h-5 mr-2" />
                      Follow on Instagram
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-border/50 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">Emergency?</p>
                    <p className="text-2xl font-bold text-primary">Available 24/7</p>
                    <p className="text-sm text-muted-foreground">
                      For urgent cases, contact us immediately
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Map Location */}
              <Card className="shadow-xl border-border/50 hover:shadow-2xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-serif flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Location
                  </CardTitle>
                  <CardDescription>
                    Chandra Hospital, Gorakhpur
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    className="w-full"
                    variant="outline"
                    asChild
                  >
                    <a 
                      href="https://maps.app.goo.gl/hBGTwGJKZY4gmQiB6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                  <Button 
                    className="w-full"
                    variant="outline"
                    asChild
                  >
                    <a 
                      href="https://maps.app.goo.gl/hBGTwGJKZY4gmQiB6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Star className="w-4 h-4 mr-2" />
                      Google Reviews
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
