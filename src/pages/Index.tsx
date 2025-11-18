import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle, Wind, Wrench, Sparkles, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/hero-aircon.jpg";

const Index = () => {
  const services = [
    {
      icon: Wind,
      title: "AC Installation",
      description: "Professional installation of all major AC brands with warranty coverage.",
    },
    {
      icon: Wrench,
      title: "AC Repair",
      description: "Fast and reliable repair services for all AC models. 24/7 emergency support.",
    },
    {
      icon: Sparkles,
      title: "AC Cleaning",
      description: "Thorough cleaning and sanitization for optimal performance and air quality.",
    },
    {
      icon: Shield,
      title: "Maintenance",
      description: "Preventive maintenance plans to keep your AC running efficiently year-round.",
    },
  ];

  const testimonials = [
    {
      name: "Maria Santos",
      location: "Laguna",
      rating: 5,
      text: "Very professional service! They fixed my AC in less than an hour. Highly recommended!",
    },
    {
      name: "Juan Dela Cruz",
      location: "Manila",
      rating: 5,
      text: "Best aircon cleaning service I've experienced. My unit is running like brand new!",
    },
    {
      name: "Anna Reyes",
      location: "Cavite",
      rating: 5,
      text: "Affordable rates and excellent customer service. They really know what they're doing.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 bg-secondary/30">
        <div className="container mx-auto px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Fast & Reliable{" "}
                <span className="text-primary">
                  Aircon Service
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Professional installation, repair, and maintenance for all your air conditioning needs. 
                Trusted by thousands of homes and businesses across Laguna and Metro Manila.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <a href="tel:+1234567890">
                    <Phone className="h-4 w-4" />
                    Call Now
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">24/7 Emergency Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Licensed Technicians</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-sm">Warranty Coverage</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Professional aircon technician servicing AC unit" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive air conditioning solutions for residential and commercial properties
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose IMCOOL?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best aircon service experience
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">15+</span>
              </div>
              <h3 className="font-semibold text-xl">Years of Experience</h3>
              <p className="text-muted-foreground">Trusted expertise in AC services</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">5K+</span>
              </div>
              <h3 className="font-semibold text-xl">Happy Customers</h3>
              <p className="text-muted-foreground">Across Laguna and Metro Manila</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary-foreground">100%</span>
              </div>
              <h3 className="font-semibold text-xl">Satisfaction Guaranteed</h3>
              <p className="text-muted-foreground">Quality service every time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Cool Down?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Get a free quote today and experience professional aircon service you can trust
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link to="/contact">Request Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="tel:+1234567890">
                <Phone className="h-4 w-4" />
                Call +123 456 7890
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
