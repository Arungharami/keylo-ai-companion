import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Create your account", desc: "Sign up in seconds with email or Google." },
  { num: "02", title: "Start chatting instantly", desc: "Jump into a conversation with Keylo right away." },
  { num: "03", title: "Unlock unlimited access", desc: "Upgrade to premium for unlimited conversations." },
];

const HowItWorksSection = () => (
  <section className="py-24 gradient-hero-bg">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">How it works</h2>
        <p className="text-muted-foreground">Three simple steps to get started.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center"
          >
            <div className="text-4xl font-bold gradient-text mb-3">{s.num}</div>
            <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
