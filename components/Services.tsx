import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";
import { ServiceCard } from "./ServiceCard";
import { Button } from "./ui/button";

export const Services = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <div id="services" className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-4xl max-md:text-3xl max-sm:text-2xl font-heading font-semibold text-gray-700 mb-4 relative py-2 after:content-[''] after:block after:w-24 after:h-1.5 after:bg-primary after:mx-auto after:mt-2 after:rounded-full tracking-wide">
              OUR SERVICES
            </h2>
            <p className="text-xl max-md:text-lg text-gray-500 max-w-2xl mx-auto tracking-wide">
              Choose from our wide range of professional cleaning solutions designed to meet every need.
            </p>
          </div>
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <Section key={service.slug} delay={index * 0.1} className="h-full">
              <ServiceCard
                title={service.title}
                description={service.description}
                slug={service.slug}
                iconName={service.icon}
              />
            </Section>
          ))}
        </div>

        <Section delay={0.4}>
          <div className="text-center mt-12">
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 text-lg border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all tracking-wide gap-2"
              >
                View All Services <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </Section>
      </div>
    </div>
  );
};
