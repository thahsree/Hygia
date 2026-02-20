import { ArrowRight, Briefcase, HardHat, Home, Inspect, Sofa, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const iconMap: Record<string, any> = {
  "Home": Home,
  "Briefcase": Briefcase,
  "Sofa": Sofa,
  "Inspect": Inspect,
  "HardHat": HardHat,
  "Truck": Truck
};

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  iconName: string;
}

export const ServiceCard = ({ title, description, slug, iconName }: ServiceCardProps) => {
  const Icon = iconMap[iconName] || Home;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col h-full border border-gray-100 group">
      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
        <Icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
      </div>
        <h3 className="text-2xl max-md:text-xl font-heading font-semibold mb-4 max-md:mb-2 text-gray-700 tracking-wide">{title}</h3>
      <p className="text-lg max-md:text-base text-gray-500 mb-6 flex-grow tracking-wide leading-[1.5]">{description}</p>
      <Link href={`/services/${slug}`}>
        <Button variant="ghost" className="text-base max-md:text-sm text-gray-700 p-0 hover:bg-transparent hover:text-primary gap-2 group-hover:translate-x-1 transition-transform tracking-wide">
          LEARN MORE <ArrowRight className="w-4 h-4" />
        </Button>
      </Link>
    </div>
  );
};
