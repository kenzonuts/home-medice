import { motion } from "framer-motion";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

type WhatsAppButtonProps = {
  className?: string;
};

export function WhatsAppButton({ className }: WhatsAppButtonProps) {
  const isScrolled = useScrolled();
  const translateY = isScrolled ? "-10px" : "0";
  const scale = isScrolled ? 1.05 : 1;

  const handleClick = () => {
    window.location.href = "https://wa.me/1234567890";
  };

  return (
    <motion.div
      whileHover={{ scale: scale + 0.05 }}
      whileTap={{ scale: scale - 0.05 }}
      className={cn(
        "fixed bottom-10 right-10 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transform transition-all duration-300",
        className,
        "bg-primary text-white hover:bg-primary-hover active:bg-primary-active",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none"
      )}
      style={{ transform: `translateY(${translateY})` }}
      onClick={handleClick}
    >
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="p-2 rounded-full shadow-sm"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
}
