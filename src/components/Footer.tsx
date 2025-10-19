import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <p className="text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> for better healthcare
          </p>
          <p className="text-xs opacity-75">
            © {new Date().getFullYear()} Dr. Satish Nayak. All rights reserved.
          </p>
          <p className="text-xs opacity-60">
            MBBS, MS, MCh - Senior Neurosurgeon & Spine Specialist
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
