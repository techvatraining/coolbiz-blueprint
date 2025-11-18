import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Snowflake } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <Snowflake className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">IMCOOL AIRCON</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Fast & Reliable Air Conditioning Services. Your comfort is our priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>AC Installation</p>
              <p>AC Repair</p>
              <p>AC Cleaning</p>
              <p>Preventive Maintenance</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:09088152059" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                0908 815 2059
              </a>
              <a href="tel:09985716072" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                0998 571 6072
              </a>
              <a href="mailto:imcool.business@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4" />
                imcool.business@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Laguna, Philippines
              </div>
              <a href="https://www.facebook.com/imcoolph" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IMCOOL AIRCON. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
