import { motion } from "framer-motion";
import { MessageCircle, BookOpen, Sparkles, Heart } from "lucide-react";

export type ChatMode = "chat" | "reflection" | "creative";

interface ModeSelectorProps {
  mode: ChatMode;
  onModeChange: (mode: ChatMode) => void;
}

const modes = [
  { id: "chat" as const, label: "Chat", icon: MessageCircle, desc: "Free conversation" },
  { id: "reflection" as const, label: "Reflect", icon: BookOpen, desc: "Guided journaling" },
  { id: "creative" as const, label: "Create", icon: Sparkles, desc: "Stories & ideas" },
];

export const getModeSystemPrompt = (mode: ChatMode): string => {
  switch (mode) {
    case "reflection":
      return "You are Keylo, a warm journaling companion. Ask thoughtful reflective questions, help the user explore their feelings, and gently guide them through self-discovery. Use prompts like 'What made you feel that way?' and 'How does that connect to what matters most to you?'";
    case "creative":
      return "You are Keylo, an enthusiastic creative partner. Help users brainstorm, write stories, poems, song lyrics, or explore wild ideas. Be playful, imaginative, and encouraging. Celebrate their creativity!";
    default:
      return "You are Keylo, a warm, empathetic, and slightly playful AI companion. You detect the user's emotional tone and respond accordingly — offering encouragement when they're down, gentle humor when they're playful, and calm support when they're stressed. You remember details they share and reference them naturally. If someone expresses crisis, gently suggest professional support resources.";
  }
};

const ModeSelector = ({ mode, onModeChange }: ModeSelectorProps) => {
  return (
    <div className="flex gap-1.5 p-1 bg-secondary/50 rounded-xl">
      {modes.map((m) => {
        const Icon = m.icon;
        const active = mode === m.id;
        return (
          <motion.button
            key={m.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => onModeChange(m.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              active
                ? "gradient-bg text-primary-foreground shadow-glow"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            <Icon className="h-3.5 w-3.5" />
            {m.label}
          </motion.button>
        );
      })}
    </div>
  );
};

export default ModeSelector;
