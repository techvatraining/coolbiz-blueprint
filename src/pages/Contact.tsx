import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Facebook, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Quote Request Received!",
      description: "We'll contact you within 24 hours. Thank you!",
    });
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in{" "}
              <span className="text-primary">
                Touch
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to experience professional aircon service? Contact us today for a free quote!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Request a Free Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Juan Dela Cruz"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+63 912 345 6789"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service">Service Needed *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="installation">AC Installation</SelectItem>
                      <SelectItem value="repair">AC Repair</SelectItem>
                      <SelectItem value="cleaning">AC Cleaning</SelectItem>
                      <SelectItem value="maintenance">Preventive Maintenance</SelectItem>
                      <SelectItem value="emergency">Emergency Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your AC issue or requirements..."
                    rows={4}
                  />
                </div>
                
                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Request
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href="tel:09088152059" className="block opacity-90 hover:opacity-100">0908 815 2059</a>
                      <a href="tel:09985716072" className="block opacity-90 hover:opacity-100">0998 571 6072</a>
                      <p className="text-sm opacity-75 mt-1">Available 24/7</p>
                    </div>
                  </div>
                  
                  <a href="mailto:imcool.business@gmail.com" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <p className="opacity-90">imcool.business@gmail.com</p>
                      <p className="text-sm opacity-75">Response within 24 hours</p>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Service Areas</p>
                      <p className="opacity-90">Laguna, Metro Manila, Cavite</p>
                      <p className="text-sm opacity-75">And surrounding areas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Business Hours</p>
                      <p className="opacity-90">Mon-Sat: 8:00 AM - 6:00 PM</p>
                      <p className="opacity-90">Sun: 9:00 AM - 5:00 PM</p>
                      <p className="text-sm opacity-75 mt-1">Emergency service 24/7</p>
                    </div>
                  </div>
                  
                  <a 
                    href="https://www.facebook.com/imcoolph" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 hover:opacity-80 transition-opacity"
                  >
                    <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Facebook className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Facebook</p>
                      <p className="opacity-90">Follow us for updates and promos</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
                <h3 className="font-bold text-lg mb-4">Quick Tips Before Calling</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Have your AC brand and model ready</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Note any specific issues or error codes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Know your preferred service date and time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>For emergencies, call our 24/7 hotline</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
