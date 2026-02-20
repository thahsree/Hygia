import { Assurance } from "@/components/Assurance";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans antialiased text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Assurance />
      <FAQ />
      <Footer />
    </main>
  );
}
