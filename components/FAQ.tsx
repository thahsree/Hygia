"use client";

import { faqs } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Section } from "./Section";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <Section>
          <div className="text-center mb-16">
            <h2 className="text-4xl max-md:text-3xl max-sm:text-2xl font-heading font-semibold text-gray-700 mb-4 relative py-2 after:content-[''] after:block after:w-24 after:h-1.5 after:bg-primary after:mx-auto after:mt-2 after:rounded-full tracking-wide">
              Frequently Asked Questions</h2>
            <p className="text-xl max-md:text-lg text-gray-500 max-w-2xl mx-auto tracking-wide">
              Find answers to common questions about our cleaning services.
            </p>
          </div>
        </Section>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Section key={index} delay={index * 0.1} className="py-0">
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-700 tracking-wide">{faq.question}</span>
                  <ChevronDown
                    className={`w-7 h-7 text-primary transition-transform duration-300 flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 py-2 text-lg text-gray-500 bg-white border-t border-gray-100 tracking-wide">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Section>
          ))}
        </div>
      </div>
    </div>
  );
};
