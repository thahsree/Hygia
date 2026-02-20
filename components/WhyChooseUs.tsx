import { features } from "@/lib/data";
import { Section } from "./Section";

export const WhyChooseUs = () => {
  return (
    <div id="why-us" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-4xl max-md:text-3xl max-sm:text-2xl font-heading font-semibold text-gray-700 mb-4 relative py-2 after:content-[''] after:block after:w-24 after:h-1.5 after:bg-primary after:mx-auto after:mt-2 after:rounded-full tracking-wide">Why Choose Hygia?</h2>
            {/* <p className="text-2xl max-md:text-xl max-sm:text-lg text-gray-600 max-w-2xl mx-auto tracking-wide">
              We don't just clean; we care. Here is what sets us apart from the rest.
            </p> */}
          </div>
        </Section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Section key={feature.title} delay={index * 0.1} className="h-full">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                  <feature.icon className="w-10 h-10" />
                </div>
              <h3 className="text-2xl max-md:text-xl font-heading font-semibold mb-4 max-md:mb-2 text-gray-700 tracking-wide">{feature.title}</h3>
               <p className="text-lg max-md:text-base text-gray-500 mb-6 flex-grow tracking-wide leading-[1.5]">{feature.description}</p>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
};
