import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50">
      <CardHeader>
        <div className="mb-4 w-14 h-14 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-7 w-7 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Link to="/contact">Book Now</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
