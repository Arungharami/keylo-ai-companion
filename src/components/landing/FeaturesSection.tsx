import { motion } from "framer-motion";
import { MessageCircle, Shield, Clock, Brain, Smartphone, Sparkles } from "lucide-react";

const features = [
  { icon: MessageCircle, title: "Meaningful Conversations", description: "Deep, thoughtful responses that feel personal and genuinely helpful." },
  { icon: Clock, title: "Available 24/7", description: "Your AI companion is always ready — no scheduling, no waiting." },
  { icon: Shield, title: "Private & Secure", description: "Your conversations stay between you and Keylo. Always." },
  { icon: Brain, title: "Context-Aware", description: "Keylo remembers what you've discussed within each conversation." },
  { icon: Smartphone, title: "Mobile-First", description: "Optimized for on-the-go use with a beautiful mobile experience." },
  { icon: Sparkles, title: "Premium Experience", description: "Elegant interface with fast responses and smooth interactions." },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why people love <span className="gradient-text">Keylo</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Built for real conversations — not just another chatbot.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover:border-primary/30 transition-colors group"
            >
              <div className="h-10 w-10 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow">
                <f.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
