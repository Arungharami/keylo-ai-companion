import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Heart, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import KeyloAvatar from "./KeyloAvatar";

interface GuestUpsellModalProps {
  open: boolean;
  onClose: () => void;
}

const GuestUpsellModal = ({ open, onClose }: GuestUpsellModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-sm p-0 overflow-hidden">
        <div className="gradient-hero-bg p-8 text-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-4"
          >
            <KeyloAvatar size="lg" />
          </motion.div>
          <h2 className="text-xl font-bold text-foreground mb-2">
            Enjoying our chat? 💛
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You've used your free guest messages! Sign up to keep the conversation going — Keylo would love to get to know you better.
          </p>
        </div>

        <div className="p-6 space-y-3">
          <div className="space-y-2 mb-4">
            {[
              { icon: MessageCircle, text: "10 free messages when you sign up" },
              { icon: Heart, text: "Keylo remembers your conversations" },
              { icon: Sparkles, text: "Unlock Reflection & Creative modes" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-foreground/80">
                <Icon className="h-4 w-4 text-primary shrink-0" />
                {text}
              </div>
            ))}
          </div>

          <Link to="/signup" className="block">
            <Button variant="hero" className="w-full" size="lg">
              Create Free Account <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
          <Link to="/login" className="block">
            <Button variant="hero-outline" className="w-full" size="sm">
              Already have an account? Sign in
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuestUpsellModal;
