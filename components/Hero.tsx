import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section } from "./Section";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      {/* <Image 
        src="/premium home deep cleaning.jpg"
        alt="Premium Home Deep Cleaning"
        fill
        className="object-cover object-center z-0"
        priority
      /> */}
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Section delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold tracking-normal text-white mb-6">
              Experience the <span className="text-primary">Purest</span> Clean
            </h1>
          </Section>

          <Section delay={0.2}>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
              Professional house cleaning services tailored to your needs.
              We transform your living space into a sanctuary of cleanliness and peace.
            </p>
          </Section>

          <Section delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/services">
                <Button size="lg" className="h-12 px-8 text-base lg:text-lg font-semibold bg-primary hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20 tracking-wide">
                  Explore Services
                </Button>
              </Link>
              <Link href="/booking">
                <Button size="lg" variant="outline" className="h-12 px-8 text-white text-base lg:text-lg font-semibold border-white/40 hover:bg-white hover:text-primary hover:border-white transition-all bg-white/10 backdrop-blur-sm tracking-wide">
                  Get a Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};
