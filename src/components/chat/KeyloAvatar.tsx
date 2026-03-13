import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface KeyloAvatarProps {
  size?: "sm" | "md" | "lg";
  breathing?: boolean;
}

const sizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-7 w-7",
};

const KeyloAvatar = ({ size = "sm", breathing = false }: KeyloAvatarProps) => {
  return (
    <motion.div
      className={`${sizes[size]} rounded-full gradient-bg flex items-center justify-center shrink-0 shadow-glow`}
      animate={breathing ? {
        scale: [1, 1.06, 1],
        boxShadow: [
          "0 0 20px hsl(258 70% 58% / 0.2)",
          "0 0 30px hsl(258 70% 58% / 0.35)",
          "0 0 20px hsl(258 70% 58% / 0.2)",
        ],
      } : undefined}
      transition={breathing ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : undefined}
    >
      <MessageCircle className={`${iconSizes[size]} text-primary-foreground`} />
    </motion.div>
  );
};

export default KeyloAvatar;
