import { Heart, MapPin, Phone, Mail, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">Dr. Satish Nayak</h3>
            <p className="text-sm opacity-90">
              MBBS, MS, MCh - Senior Neurosurgeon & Spine Specialist
            </p>
            <p className="text-sm opacity-75">
              With over 10,000 successful surgeries, providing expert neurosurgical care with compassion and precision.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p className="opacity-90">
                  Apollo Hospitals<br />
                  Indore, Madhya Pradesh<br />
                  India
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+917388204488" className="opacity-90 hover:opacity-100 transition-opacity">
                  +91 7388 204 488
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:neurosurgeonsatishnayak@gmail.com" className="opacity-90 hover:opacity-100 transition-opacity break-all">
                  neurosurgeonsatishnayak@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Facebook className="w-4 h-4 flex-shrink-0" />
                <a href="https://www.facebook.com/share/1JCzmvbU1L/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 transition-opacity">
                  Follow on Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Dr. Nayak
                </a>
              </li>
              <li>
                <a href="#testimonials" className="opacity-90 hover:opacity-100 transition-opacity">
                  Patient Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Book Consultation
                </a>
              </li>
              <li>
                <button className="opacity-90 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="opacity-90 hover:opacity-100 transition-opacity">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 text-center space-y-2">
          <p className="text-sm flex items-center justify-center gap-2 opacity-75">
            Made with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> for better healthcare
          </p>
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Dr. Satish Nayak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
