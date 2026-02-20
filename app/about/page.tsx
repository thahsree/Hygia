import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { Eye, Sparkles, Star, Target, Users } from "lucide-react";

export const metadata = {
  title: "About Us | Hygia Cleaning",
  description: "Learn about Hygia's mission, team, and commitment to exceptional cleaning services.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      {/* Hero Image Section */}
      <div className="relative pt-20 min-h-[480px] flex items-end overflow-hidden">
        {/* Gradient background acting as hero image */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-yellow-50 to-stone-200" />
        {/* Decorative orbs */}
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-64 rounded-full bg-amber-200/40 blur-3xl" />
        {/* Pattern dots */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, #d4af37 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Floating icons */}
        <div className="absolute top-24 right-20 max-md:hidden w-16 h-16 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
          <Sparkles className="w-8 h-8 text-primary" />
        </div>
        <div className="absolute top-40 right-52 max-md:hidden w-12 h-12 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
          <Star className="w-6 h-6 text-primary fill-primary" />
        </div>
        <div className="absolute top-28 left-20 max-md:hidden w-14 h-14 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
          <Users className="w-7 h-7 text-primary" />
        </div>

        {/* Hero text content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 pb-14 pt-24">
          <Section>
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-primary text-sm font-semibold px-4 py-1.5 rounded-full border border-primary/20 mb-4 tracking-wide">
              <Star className="w-3.5 h-3.5 fill-primary" />
              ABOUT HYGIA
            </div>
            <h1 className="text-6xl max-md:text-4xl max-sm:text-3xl font-heading font-bold text-gray-700 tracking-wide leading-tight">
              Hygia Team
            </h1>
            <p className="text-2xl max-md:text-xl text-gray-600 mt-3 tracking-wide font-medium">
              Ready to Revive Your Spaces
            </p>
          </Section>
        </div>
      </div>

      {/* About Text Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <Section delay={0.1}>
              <p className="text-lg max-md:text-base text-gray-500 leading-relaxed tracking-wide">
                At Hygia, we specialize in revitalizing homes and businesses with top-notch deep cleaning services.
                Our experienced team is dedicated to transforming your living and working spaces into pristine environments.
              </p>
            </Section>
            <Section delay={0.2}>
              <p className="text-lg max-md:text-base text-gray-500 leading-relaxed tracking-wide">
                Founded with a mission to provide exceptional cleaning services, we combine industry expertise with
                attention to detail to deliver results that exceed expectations. Our team undergoes rigorous training
                and uses only the best equipment and eco-friendly products.
              </p>
            </Section>
            <Section delay={0.3}>
              <p className="text-lg max-md:text-base text-gray-500 leading-relaxed tracking-wide">
                We believe that a clean environment contributes to better health, productivity, and overall well-being.
                That's why we're committed to delivering cleaning services that not only meet but exceed your expectations.
              </p>
            </Section>
          </div>
        </div>
      </div>

      {/* Mission & Vision Cards */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <Section>
            <div className="text-center mb-12">
              <h2 className="text-4xl max-md:text-3xl max-sm:text-2xl font-heading font-semibold text-gray-700 mb-4 relative py-2 after:content-[''] after:block after:w-24 after:h-1.5 after:bg-primary after:mx-auto after:mt-2 after:rounded-full tracking-wide">
                What Drives Us
              </h2>
            </div>
          </Section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission Card */}
            <Section delay={0.1} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full flex flex-col">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5 text-primary">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-2xl max-md:text-xl font-heading font-semibold text-gray-700 mb-4 tracking-wide">
                  Our Mission
                </h3>
                <p className="text-lg max-md:text-base text-gray-500 tracking-wide leading-relaxed flex-grow">
                  To provide exceptional deep cleaning services that transform spaces and enhance the quality of life
                  for our clients, using eco-friendly products and professional expertise.
                </p>
              </div>
            </Section>

            {/* Vision Card */}
            <Section delay={0.2} className="h-full">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all h-full flex flex-col">
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5 text-primary">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-2xl max-md:text-xl font-heading font-semibold text-gray-700 mb-4 tracking-wide">
                  Our Vision
                </h3>
                <p className="text-lg max-md:text-base text-gray-500 tracking-wide leading-relaxed flex-grow">
                  To become the most trusted and sought-after deep cleaning service provider, recognized for our
                  commitment to excellence, reliability, and customer satisfaction.
                </p>
              </div>
            </Section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
