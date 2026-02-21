import { Check, Star } from "lucide-react";
import { Section } from "./Section";
import { Button } from "./ui/button";

export const Assurance = () => {
  return (
    <div id="assurance" className="py-16 bg-[#edebe6] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 -m-12 w-64 h-64 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 left-0 -m-12 w-64 h-64 rounded-full bg-white blur-3xl" />
        </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Section>
            <div className="space-y-6">
              <h3 className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-gray-700 text-base font-medium border border-white/20">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 tracking-wide" /> 
                PREMIUM HOME DEEP CLEANING
              </h3>
              <h2 className="text-2xl md:text-4xl font-heading font-bold leading-tight tracking-wide">
                <span className="text-gray-700">Transform Your Living Space</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed max-w-xl tracking-wide">
                Our comprehensive home deep cleaning service is designed to revitalize every corner of your home. 
                From kitchens to bathrooms, living areas to bedrooms, we leave no surface untouched.
              </p>
              
              <a href="tel:+919633702776">
                <Button size="default" className="bg-white text-primary text-base hover:bg-gray-100 border-none shadow-xl mt-4">
                  Book This Service
                </Button>
              </a>
            </div>
          </Section>

          <Section delay={0.2}>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-base font-semibold mb-5 text-gray-700 border-b border-white/20 pb-3 tracking-wide">What's Included:</h3>
              <ul className="space-y-4">
                {[
                  "Comprehensive cleaning of all rooms and surfaces",
                  "Kitchen deep cleaning including appliances",
                  "Bathroom sanitization and grout cleaning",
                  "Floor and carpet deep cleaning",
                  "Dusting and wiping of all surfaces and fixtures",
                  "Window sills and door frames cleaning"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-base text-gray-600 tracking-wide">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};
