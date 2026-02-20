import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Hygia<span className="text-primary">Cleaning</span></h3>
            <p className="text-base text-gray-400">
              Professional cleaning services for your home and office. We make your space shine.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-base text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-base text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-base text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/booking" className="text-base text-gray-400 hover:text-white transition-colors">Booking</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-base text-gray-400">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919633702776" className="hover:text-white transition-colors">+91 9633702776</a>
              </li>
              <li className="flex items-center gap-2 text-base text-gray-400">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@hygia.com" className="hover:text-white transition-colors">info@hygia.com</a>
              </li>
              <li className="flex items-center gap-2 text-base text-gray-400">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Kerala, India</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Hygia Cleaning. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
