import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { ArrowLeft, ArrowRight, Check, Phone } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// This is correct for Next.js 15+ where params is a Promise
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      
      <div className="pt-20">
        <div className="relative py-20 overflow-hidden">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-yellow-50 to-stone-200" />
          {/* Decorative orbs */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-64 rounded-full bg-amber-200/40 blur-3xl" />
          {/* Dot pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, #d4af37 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 md:px-6">
            <Link href="/services" className="inline-flex items-center text-primary hover:text-primary/80 mb-6 transition-colors font-medium">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </Link>
            <Section>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 tracking-wide text-gray-700">{service.title}</h1>
              <p className="text-xl text-gray-500 max-w-2xl tracking-wide">{service.description}</p>
            </Section>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Section delay={0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <h2 className="text-2xl max-md:text-xl font-heading font-semibold mb-6 text-gray-700 tracking-wide">What We Do</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.details.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-lg max-md:text-base text-gray-500 tracking-wide">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Section>
              
              <Section delay={0.2}>
                <div className="bg-secondary/30 rounded-xl p-8 border border-primary/20">
                  <h2 className="text-2xl max-md:text-xl font-heading font-semibold mb-4 text-gray-700 tracking-wide">Ready to book?</h2>
                  <p className="text-lg max-md:text-base text-gray-500 mb-6 tracking-wide">
                    Get a sparkling clean space today. Contact us for a free quote tailored to your needs.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Book Now
                    </Button>
                    <Button size="lg" variant="outline" className="bg-white border-primary/20 text-primary hover:bg-secondary/50">
                      <Phone className="w-4 h-4 mr-2" /> Call Us
                    </Button>
                  </div>
                </div>
              </Section>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
                <h3 className="text-lg font-heading font-semibold mb-4 text-gray-700 tracking-wide">Other Services</h3>
                <div className="space-y-2">
                  {services.filter(s => s.slug !== slug).map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`}>
                      <div className="p-3 rounded-lg hover:bg-gray-50 flex items-center justify-between group transition-colors cursor-pointer border border-transparent hover:border-gray-100">
                        <span className="font-medium text-gray-700 group-hover:text-primary transition-colors">{s.title}</span>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
