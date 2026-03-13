import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import KeyloAvatar from "@/components/chat/KeyloAvatar";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <KeyloAvatar size="sm" />
          <span className="font-bold text-lg text-foreground">Keylo.ai</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</a>
          <Link to="/login">
            <Button variant="ghost" size="sm">Log in</Button>
          </Link>
          <Link to="/app/chat?guest=true">
            <Button variant="hero" size="sm">Try as Guest ✨</Button>
          </Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border"
          >
            <div className="container py-4 flex flex-col gap-3">
              <a href="#features" onClick={() => setOpen(false)} className="text-sm text-muted-foreground py-2">Features</a>
              <a href="#pricing" onClick={() => setOpen(false)} className="text-sm text-muted-foreground py-2">Pricing</a>
              <a href="#faq" onClick={() => setOpen(false)} className="text-sm text-muted-foreground py-2">FAQ</a>
              <Link to="/login" onClick={() => setOpen(false)}>
                <Button variant="ghost" className="w-full">Log in</Button>
              </Link>
              <Link to="/app/chat?guest=true" onClick={() => setOpen(false)}>
                <Button variant="hero" className="w-full">Try as Guest ✨</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
