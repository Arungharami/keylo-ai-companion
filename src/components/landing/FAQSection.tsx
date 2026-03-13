import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is my data private?", a: "Absolutely. Your conversations with Keylo are private and encrypted. We never share your data with third parties." },
  { q: "Can I use Keylo on mobile?", a: "Yes! Keylo is designed mobile-first and works beautifully on any device — phone, tablet, or desktop." },
  { q: "What do I get for free?", a: "Free users get 10 messages per day and 1 active conversation. It's enough to experience how Keylo works." },
  { q: "What happens after my free messages?", a: "You'll be prompted to upgrade to Premium for unlimited conversations. No pressure — your free messages reset daily." },
  { q: "Can I cancel my subscription?", a: "Yes, you can cancel anytime from your account settings. No questions asked, no hidden fees." },
];

const FAQSection = () => (
  <section id="faq" className="py-24">
    <div className="container max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Frequently asked questions</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="glass rounded-xl px-6 border-none">
            <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-4">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
