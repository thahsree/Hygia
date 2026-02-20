import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { services } from "@/lib/data";
import { ArrowRight, Briefcase, HardHat, Home, Inspect, Sofa, Truck } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, any> = {
  "Home": Home,
  "Briefcase": Briefcase,
  "Sofa": Sofa,
  "Inspect": Inspect,
  "HardHat": HardHat,
  "Truck": Truck,
};

export const metadata = {
  title: "Our Services | Hygia Cleaning",
  description: "Browse all professional deep cleaning services offered by Hygia.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-primary text-primary-foreground pt-32 pb-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Section>
            <h1 className="text-5xl max-md:text-4xl max-sm:text-3xl font-heading font-bold tracking-wide mb-4">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto tracking-wide">
              Professional cleaning solutions for every space — delivered with care, precision, and eco-friendly products.
            </p>
          </Section>
        </div>
      </div>

      {/* All Services Grid */}
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Home;
            return (
              <Section key={service.slug} delay={index * 0.08} className="h-full">
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 flex flex-col h-full border border-gray-100 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <Icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-2xl max-md:text-xl font-heading font-semibold mb-4 text-gray-700 tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-lg max-md:text-base text-gray-500 mb-6 flex-grow tracking-wide leading-relaxed">
                    {service.description}
                  </p>
                  <Link href={`/services/${service.slug}`}>
                    <span className="inline-flex items-center gap-2 text-base text-gray-700 font-medium hover:text-primary transition-colors tracking-wide group-hover:translate-x-1 transition-transform">
                      LEARN MORE <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </Section>
            );
          })}
        </div>
      </div>

      <Footer />
    </main>
  );
}
