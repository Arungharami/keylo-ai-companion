import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const LegalPage = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-28 pb-24 container max-w-2xl">
      <h1 className="text-3xl font-bold text-foreground mb-8">{title}</h1>
      <div className="prose prose-invert prose-sm max-w-none text-muted-foreground space-y-4">
        {children}
      </div>
    </div>
    <Footer />
  </div>
);

export const PrivacyPage = () => (
  <LegalPage title="Privacy Policy">
    <p>Last updated: March 2026</p>
    <p>At Keylo.ai, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.</p>
    <h2 className="text-lg font-semibold text-foreground mt-6">Information We Collect</h2>
    <p>We collect information you provide directly, such as your email address, display name, and conversation data. We also collect usage data to improve our services.</p>
    <h2 className="text-lg font-semibold text-foreground mt-6">How We Use Your Information</h2>
    <p>We use your information to provide and improve our AI companion service, process payments, and communicate with you about your account.</p>
    <h2 className="text-lg font-semibold text-foreground mt-6">Data Security</h2>
    <p>We implement industry-standard security measures to protect your data. Your conversations are encrypted and stored securely.</p>
    <h2 className="text-lg font-semibold text-foreground mt-6">Contact Us</h2>
    <p>If you have questions about this policy, contact us at privacy@keylo.ai.</p>
  </LegalPage>
);

export const TermsPage = () => (
  <LegalPage title="Terms of Service">
    <p>Last updated: March 2026</p>
    <p>By using Keylo.ai, you agree to these Terms of Service. Please read them carefully.</p>
    <h2 className="text-lg font-semibold text-foreground mt-6">Use of Service</h2>
    <p>Keylo.ai provides an AI companion chat service. You must be at least 18 years old to use our service. You are responsible for maintaining the confidentiality of your account.</p>
    <h2 className="text-lg font-semibold text-foreground mt-6">Subscriptions</h2>
    <p>Premium subscriptions are billed monthly or annually. You may cancel at any time. Refunds are handled according to our Refund Policy.</p>
    <h2 className="text-lg font-semibold text-foreground mt-6">Limitations</h2>
    <p>Keylo.ai is an AI service and should not be used as a substitute for professional advice. We do not guarantee the accuracy of AI-generated responses.</p>
  </LegalPage>
);

export const RefundPage = () => (
  <LegalPage title="Refund Policy">
    <p>Last updated: March 2026</p>
    <p>We want you to be satisfied with Keylo Premium. If you're not happy with your subscription, here's our refund policy:</p>
    <h2 className="text-lg font-semibold text-foreground mt-6">Cancellation</h2>
    <p>You can cancel your subscription at any time from your account settings. Your premium access will continue until the end of your current billing period.</p>
    <h2 className="text-lg font-semibold text-foreground mt-6">Refund Requests</h2>
    <p>Refund requests made within 7 days of purchase may be eligible for a full refund. Contact support@keylo.ai with your request.</p>
  </LegalPage>
);

export const ContactPage = () => (
  <LegalPage title="Contact Us">
    <p>We'd love to hear from you. Reach out using any of the methods below.</p>
    <h2 className="text-lg font-semibold text-foreground mt-6">Email</h2>
    <p>support@keylo.ai</p>
    <h2 className="text-lg font-semibold text-foreground mt-6">Response Time</h2>
    <p>We typically respond within 24–48 hours on business days.</p>
  </LegalPage>
);
