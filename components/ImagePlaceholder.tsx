"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  className?: string;
  text?: string;
  delay?: number;
  iconSize?: "sm" | "md" | "lg";
}

export const ImagePlaceholder = ({
  className,
  text = "Image Placeholder",
  delay = 0,
  iconSize = "md",
}: ImagePlaceholderProps) => {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay }}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 via-secondary/30 to-primary/10",
        "flex flex-col items-center justify-center p-6 text-center shadow-inner border border-white/50",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent",
        className
      )}
    >
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="rounded-full bg-white/50 p-4 shadow-sm backdrop-blur-sm">
          <ImageIcon className={cn("text-primary/70", iconSizes[iconSize])} />
        </div>
        <p className="text-base md:text-lg font-medium text-gray-600 max-w-[80%]">
          {text}
        </p>
      </div>

      {/* Subtle animated background shapes */}
      <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary/20 blur-2xl flex-shrink-0 animate-pulse" />
      <div className="absolute -top-12 -left-12 w-40 h-40 rounded-full bg-secondary/40 blur-3xl flex-shrink-0 animate-pulse delay-700" />
    </motion.div>
  );
};
