"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Booking", href: "/booking" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHeroTop = pathname === "/" && !isScrolled;

  const showSolidNav = isOpen || !isHeroTop;

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showSolidNav
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary z-10">
            Hygia
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-base font-bold relative group py-2 transition-colors",
                  isActive(link.href)
                    ? "text-primary"
                    : isHeroTop
                    ? "text-white hover:text-white"
                    : "text-gray-600 hover:text-primary"
                )}
              >
                {link.name}

                <span
                  className={cn(
                    "absolute bottom-0 left-0 h-0.5 transition-all duration-300",
                    isActive(link.href)
                      ? "w-full bg-primary"
                      : "w-0 group-hover:w-full",
                    isHeroTop ? "bg-white" : "bg-primary"
                  )}
                />
              </Link>
            ))}

            <a href="tel:+919633702776">
              <Button
                className={cn(
                  "font-bold gap-2 transition hover:scale-105",
                  isHeroTop
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-primary/90"
                )}
              >
                <Phone className="w-4 h-4" />
                Book Now
              </Button>
            </a>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "md:hidden relative w-8 h-8 flex flex-col justify-center items-center z-10",
              isHeroTop && !isOpen ? "text-white" : "text-gray-800"
            )}
            aria-label="Toggle Menu"
          >
            {/* Top line */}
            <span
              className={cn(
                "absolute h-0.5 w-6 bg-current transition-all duration-300",
                isOpen ? "rotate-45" : "-translate-y-2"
              )}
            />

            {/* Middle line */}
            <span
              className={cn(
                "absolute h-0.5 w-6 bg-current transition-all duration-300",
                isOpen ? "opacity-0" : "opacity-100"
              )}
            />

            {/* Bottom line */}
            <span
              className={cn(
                "absolute h-0.5 w-6 bg-current transition-all duration-300",
                isOpen ? "-rotate-45" : "translate-y-2"
              )}
            />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 pt-24 pb-10 bg-white shadow-lg md:hidden"
          >
            <nav className="flex flex-col gap-6 px-6">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-xl font-medium border-b pb-3",
                    isActive(link.href)
                      ? "text-primary"
                      : "text-gray-700 hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              <a href="tel:+919633702776">
                <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
                  Book Now
                </Button>
              </a>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};