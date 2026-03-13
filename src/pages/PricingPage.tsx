import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Crown } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const PricingPage = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-28 pb-24 container max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Choose your plan</h1>
          <p className="text-muted-foreground mb-8">Start free. Upgrade when you need more.</p>
          <div className="inline-flex items-center gap-3 glass rounded-full px-1 py-1">
            <button onClick={() => setYearly(false)} className={`text-sm px-4 py-1.5 rounded-full transition-all ${!yearly ? "gradient-bg text-primary-foreground" : "text-muted-foreground"}`}>Monthly</button>
            <button onClick={() => setYearly(true)} className={`text-sm px-4 py-1.5 rounded-full transition-all ${yearly ? "gradient-bg text-primary-foreground" : "text-muted-foreground"}`}>Yearly <span className="text-xs opacity-80">Save 40%</span></button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-xl p-6">
            <h3 className="font-semibold text-foreground mb-1">Free</h3>
            <p className="text-sm text-muted-foreground mb-4">Try Keylo with limited messages</p>
            <div className="text-3xl font-bold text-foreground mb-6">$0</div>
            <ul className="space-y-3 mb-6">
              {["10 messages per day", "Basic AI responses", "1 active conversation"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-primary" /> {f}</li>
              ))}
            </ul>
            <Link to="/signup"><Button variant="hero-outline" className="w-full">Get Started</Button></Link>
          </div>

          <div className="glass rounded-xl p-6 border-primary/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 gradient-bg text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg flex items-center gap-1"><Crown className="h-3 w-3" /> Popular</div>
            <h3 className="font-semibold text-foreground mb-1">Premium</h3>
            <p className="text-sm text-muted-foreground mb-4">Unlimited conversations</p>
            <div className="text-3xl font-bold text-foreground mb-1">{yearly ? "$5.83" : "$9.99"}<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
            {yearly && <p className="text-xs text-primary mb-4">$69.99 billed annually</p>}
            {!yearly && <div className="mb-4" />}
            <ul className="space-y-3 mb-6">
              {["Unlimited messages", "Priority AI responses", "Unlimited conversations", "Full chat history", "Premium companion experience"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground"><Check className="h-4 w-4 text-primary" /> {f}</li>
              ))}
            </ul>
            <Button variant="hero" className="w-full">Upgrade to Premium</Button>
            <p className="text-xs text-muted-foreground text-center mt-3">Cancel anytime.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PricingPage;
