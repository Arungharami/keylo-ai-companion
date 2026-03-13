import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Check, Crown, Heart, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import KeyloAvatar from "./KeyloAvatar";

interface PaywallModalProps {
  open: boolean;
  onClose: () => void;
}

const PaywallModal = ({ open, onClose }: PaywallModalProps) => {
  const [yearly, setYearly] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-md p-0 overflow-hidden">
        <div className="gradient-hero-bg p-6 text-center">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="inline-block mb-3"
          >
            <KeyloAvatar size="lg" />
          </motion.div>
          <h2 className="text-xl font-bold text-foreground mb-1">Unlock the Full Keylo Experience 💛</h2>
          <p className="text-sm text-muted-foreground">Unlimited conversations, long-term memory, and premium creative tools.</p>
        </div>

        <div className="p-6">
          <div className="flex justify-center gap-2 mb-6">
            <button
              onClick={() => setYearly(false)}
              className={`text-sm px-4 py-1.5 rounded-full transition-all ${!yearly ? "gradient-bg text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`text-sm px-4 py-1.5 rounded-full transition-all ${yearly ? "gradient-bg text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
            >
              Yearly <span className="text-xs opacity-80">Save 40%</span>
            </button>
          </div>

          <div className="text-center mb-6">
            <div className="text-3xl font-bold text-foreground">
              {yearly ? "$5.83" : "$9.99"}
              <span className="text-sm font-normal text-muted-foreground">/mo</span>
            </div>
            {yearly && <p className="text-xs text-primary mt-1">$69.99 billed annually</p>}
          </div>

          <ul className="space-y-3 mb-6">
            {[
              { icon: MessageCircle, text: "Unlimited conversations" },
              { icon: Heart, text: "Keylo remembers everything about you" },
              { icon: Sparkles, text: "Premium Reflection & Creative modes" },
              { icon: Crown, text: "Priority responses & full history" },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-2 text-sm text-foreground">
                <Icon className="h-4 w-4 text-primary shrink-0" /> {text}
              </li>
            ))}
          </ul>

          <motion.div whileTap={{ scale: 0.97 }}>
            <Button variant="hero" className="w-full" size="lg">
              Let's Go Premium! 🚀
            </Button>
          </motion.div>
          <p className="text-xs text-muted-foreground text-center mt-3">Cancel anytime • Secure payment via Stripe</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaywallModal;
