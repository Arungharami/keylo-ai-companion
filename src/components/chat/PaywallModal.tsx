import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Check, Crown, X } from "lucide-react";

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
          <Crown className="h-10 w-10 text-primary mx-auto mb-3" />
          <h2 className="text-xl font-bold text-foreground mb-1">Unlock Keylo Premium</h2>
          <p className="text-sm text-muted-foreground">Unlimited conversations, priority access, and more.</p>
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
              Yearly <span className="text-xs opacity-80">-40%</span>
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
            {["Unlimited messages", "Priority AI responses", "Unlimited conversations", "Full chat history", "Premium companion experience"].map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                <Check className="h-4 w-4 text-primary shrink-0" /> {f}
              </li>
            ))}
          </ul>

          <Button variant="hero" className="w-full" size="lg">
            Upgrade Now
          </Button>
          <p className="text-xs text-muted-foreground text-center mt-3">Cancel anytime. Secure payment via Stripe.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaywallModal;
