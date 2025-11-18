import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About{" "}
              <span className="text-primary">
                IMCOOL AIRCON
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Your trusted partner for all air conditioning needs since 2008
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide fast, reliable, and affordable air conditioning services to homes and businesses 
                across Laguna and Metro Manila. We strive to ensure every customer enjoys optimal comfort 
                through professional installation, repair, and maintenance services.
              </p>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the most trusted and recommended air conditioning service provider in the Philippines, 
                known for our exceptional customer service, technical expertise, and commitment to quality.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Licensed & Certified</h3>
                <p className="text-sm text-muted-foreground">
                  All our technicians are licensed and certified professionals
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">5000+ Satisfied Customers</h3>
                <p className="text-sm text-muted-foreground">
                  Trusted by thousands of homes and businesses
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">24/7 Emergency Service</h3>
                <p className="text-sm text-muted-foreground">
                  We're always ready to help when you need us most
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
                <p className="text-sm text-muted-foreground">
                  100% satisfaction guarantee on all our services
                </p>
              </div>
            </div>
          </div>

          {/* Our Story */}
          <div className="max-w-4xl mx-auto bg-secondary/30 rounded-2xl p-8 md:p-12 border border-border">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                IMCOOL AIRCON was founded in 2008 with a simple goal: to provide reliable and affordable 
                air conditioning services to the people of Laguna and Metro Manila. What started as a 
                small team of two dedicated technicians has grown into a trusted company serving thousands 
                of satisfied customers.
              </p>
              <p>
                Over the years, we've expanded our services to include not just repairs, but professional 
                installation, thorough cleaning, and preventive maintenance programs. We work with all 
                major AC brands and stay updated with the latest industry standards and technologies.
              </p>
              <p>
                Our commitment to quality, integrity, and customer satisfaction has earned us a reputation 
                as one of the most trusted aircon service providers in the region. Every member of our team 
                is carefully selected, trained, and certified to ensure you receive the best service possible.
              </p>
              <p>
                Today, we continue to serve our community with the same dedication and passion that we 
                started with, ensuring that every home and business we serve enjoys the comfort of properly 
                functioning air conditioning systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
