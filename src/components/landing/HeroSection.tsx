import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, MessageCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 glow-bg animate-pulse-glow" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 mb-8">
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-medium text-primary">Intelligent AI Companion</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
          >
            Private conversations that feel{" "}
            <span className="gradient-text">natural & personal</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Keylo helps you chat, reflect, and explore ideas through a premium AI experience — private, responsive, and always within reach.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Link to="/signup">
              <Button variant="hero" size="lg" className="text-base px-8 h-12">
                Start Chatting <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="hero-outline" size="lg" className="text-base px-8 h-12">
                View Pricing
              </Button>
            </Link>
          </motion.div>

          {/* Chat preview mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="glass rounded-2xl p-4 sm:p-6 max-w-lg mx-auto shadow-card"
          >
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
              <div className="h-8 w-8 rounded-full gradient-bg flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">Keylo AI</span>
              <span className="ml-auto text-xs text-muted-foreground">Online</span>
            </div>
            <div className="space-y-3 text-left">
              <div className="flex justify-end">
                <div className="gradient-bg rounded-2xl rounded-br-md px-4 py-2.5 max-w-[80%]">
                  <p className="text-sm text-primary-foreground">I've been feeling stressed about work lately. Any advice?</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-2.5 max-w-[80%]">
                  <p className="text-sm text-secondary-foreground">I understand that work stress can be overwhelming. Let's explore some strategies that might help — what aspect is weighing on you most?</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-10 text-muted-foreground"
          >
            <div className="flex items-center gap-2 text-xs">
              <Shield className="h-4 w-4 text-primary/70" />
              <span>Private & Encrypted</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Zap className="h-4 w-4 text-primary/70" />
              <span>Instant Responses</span>
            </div>
            <div className="text-xs">50,000+ conversations started</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
