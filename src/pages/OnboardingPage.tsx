import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageCircle, Heart, Lightbulb, Brain } from "lucide-react";

const styles = [
  { icon: MessageCircle, label: "Casual & Friendly", desc: "Relaxed, warm conversations" },
  { icon: Brain, label: "Thoughtful & Deep", desc: "Reflective, meaningful dialogue" },
  { icon: Lightbulb, label: "Creative & Playful", desc: "Imaginative, fun interactions" },
  { icon: Heart, label: "Supportive & Caring", desc: "Empathetic, understanding tone" },
];

const OnboardingPage = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [style, setStyle] = useState("");
  const navigate = useNavigate();

  const next = () => {
    if (step < 2) setStep(step + 1);
    else navigate("/app/chat");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute inset-0 glow-bg opacity-50" />
      <div className="relative z-10 w-full max-w-md">
        {/* Progress */}
        <div className="flex gap-2 mb-8 justify-center">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`h-1 w-12 rounded-full transition-all ${i <= step ? "gradient-bg" : "bg-secondary"}`} />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="s0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
              <div className="h-16 w-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
                <span className="text-primary-foreground font-bold text-2xl">K</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">Welcome to Keylo</h1>
              <p className="text-muted-foreground mb-8">Your intelligent companion for private, meaningful conversations.</p>
              <Button variant="hero" size="lg" onClick={next}>
                Let's get started <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-xl font-bold text-foreground text-center mb-2">What should we call you?</h2>
              <p className="text-sm text-muted-foreground text-center mb-6">This helps personalize your experience.</p>
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name (optional)" className="bg-secondary border-border mb-6" />
              <h2 className="text-xl font-bold text-foreground text-center mb-2">Choose your conversation style</h2>
              <p className="text-sm text-muted-foreground text-center mb-6">You can always change this later.</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {styles.map((s) => (
                  <button
                    key={s.label}
                    onClick={() => setStyle(s.label)}
                    className={`glass rounded-xl p-4 text-left transition-all ${style === s.label ? "border-primary/50 shadow-glow" : "hover:border-primary/20"}`}
                  >
                    <s.icon className="h-5 w-5 text-primary mb-2" />
                    <p className="text-sm font-medium text-foreground">{s.label}</p>
                    <p className="text-xs text-muted-foreground">{s.desc}</p>
                  </button>
                ))}
              </div>
              <Button variant="hero" className="w-full" onClick={next}>
                Continue <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h2 className="text-2xl font-bold text-foreground mb-2">You're all set{name ? `, ${name}` : ""}!</h2>
              <p className="text-muted-foreground mb-8">Keylo is ready to chat. Ask anything — reflect, explore, or just talk.</p>
              <Button variant="hero" size="lg" onClick={next}>
                Start your first conversation <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OnboardingPage;
