import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 animate-fade-in">
      {/* WhatsApp Button */}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-2xl hover:scale-110 transition-all duration-300"
        asChild
      >
        <a 
          href="https://wa.me/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Contact via WhatsApp"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </Button>

      {/* Call Button */}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-2xl hover:scale-110 transition-all duration-300"
        asChild
      >
        <a 
          href="tel:+91" 
          aria-label="Call Dr. Satish Nayak"
        >
          <Phone className="w-6 h-6" />
        </a>
      </Button>
    </div>
  );
};

export default FloatingContactButtons;
