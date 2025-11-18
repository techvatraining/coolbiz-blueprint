import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Wind, Wrench, Sparkles, Shield, Settings, Zap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Wind,
      title: "Air Conditioning Installation",
      description: "Professional installation of all major AC brands with warranty coverage",
      features: [
        "Site inspection and consultation",
        "Professional installation by certified technicians",
        "Proper sizing and placement recommendations",
        "Installation warranty coverage",
        "Post-installation testing and calibration",
      ],
    },
    {
      icon: Wrench,
      title: "Air Conditioning Repair",
      description: "Fast and reliable repair services for all AC models. 24/7 emergency support available",
      features: [
        "Comprehensive diagnostic assessment",
        "Same-day repair service available",
        "All major brands serviced",
        "Genuine replacement parts",
        "90-day service warranty",
      ],
    },
    {
      icon: Sparkles,
      title: "Air Conditioning Cleaning",
      description: "Thorough cleaning and sanitization for optimal performance and air quality",
      features: [
        "Deep cleaning of filters and coils",
        "Condensate drain clearing",
        "Anti-bacterial treatment",
        "Improved air quality and efficiency",
        "Reduces energy consumption",
      ],
    },
    {
      icon: Shield,
      title: "Preventive Maintenance",
      description: "Regular maintenance plans to keep your AC running efficiently year-round",
      features: [
        "Scheduled maintenance visits",
        "Complete system inspection",
        "Filter replacement",
        "Refrigerant level check",
        "Priority emergency service",
      ],
    },
    {
      icon: Settings,
      title: "Parts Replacement",
      description: "Genuine replacement parts for all major AC brands",
      features: [
        "Genuine OEM parts available",
        "Compressor replacement",
        "Thermostat and control boards",
        "Capacitors and contactors",
        "Parts warranty included",
      ],
    },
    {
      icon: Zap,
      title: "Emergency Service",
      description: "24/7 emergency aircon repair service when you need it most",
      features: [
        "Available 24 hours a day",
        "Rapid response time",
        "Fully equipped service vehicles",
        "Emergency diagnostic service",
        "Weekend and holiday service",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="text-primary">
                Services
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive air conditioning solutions for residential and commercial properties
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full">
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Service Areas */}
          <div className="max-w-4xl mx-auto bg-secondary/30 rounded-2xl p-8 md:p-12 border border-border text-center">
            <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
            <p className="text-muted-foreground mb-6">
              We proudly serve customers across Laguna, Metro Manila, and surrounding areas
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="space-y-2">
                <p className="font-semibold">Laguna</p>
                <p className="text-muted-foreground">San Pablo, Calamba, Los Baños, Sta. Rosa, Biñan</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Metro Manila</p>
                <p className="text-muted-foreground">Makati, BGC, Quezon City, Manila, Pasig</p>
              </div>
              <div className="space-y-2">
                <p className="font-semibold">Cavite</p>
                <p className="text-muted-foreground">Bacoor, Dasmariñas, Imus, General Trias</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
