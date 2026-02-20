import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary/20 to-white overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] rounded-full bg-accent/20 blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <Section delay={0.1}>
          <h1 className="text-7xl max-md:text-5xl max-sm:text-4xl font-heading font-bold tracking-normal text-gray-700 mb-6">
            Experience the <span className="text-primary">Purest</span> Clean
          </h1>
        </Section>

        <Section delay={0.2}>
          <p className="text-2xl max-md:text-xl max-sm:text-lg text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed tracking-wide">
            Professional house cleaning services tailored to your needs.
            We transform your living space into a sanctuary of cleanliness and peace.
          </p>
        </Section>

        <Section delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/services">
              <Button size="lg" className="h-12 px-8 text-lg max-sm:text-base bg-primary hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20 tracking-wide">
                Explore Services
              </Button>
            </Link>
            <Link href="/booking">
              <Button size="lg" variant="outline" className="h-12 px-8 text-gray-700 text-lg max-sm:text-base border-primary/20 hover:bg-secondary/50 hover:text-primary hover:border-primary transition-all bg-white/50 backdrop-blur-sm tracking-wide">
                Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </Section>
      </div>
    </div>
  );
};
