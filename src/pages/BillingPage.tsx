import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CreditCard } from "lucide-react";

const BillingPage = () => (
  <div className="min-h-screen bg-background p-4">
    <div className="max-w-lg mx-auto">
      <Link to="/app/account" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ArrowLeft className="h-4 w-4" /> Back to account
      </Link>

      <h1 className="text-2xl font-bold text-foreground mb-6">Billing</h1>

      <div className="glass rounded-xl p-6 mb-4">
        <h2 className="font-semibold text-foreground mb-2 flex items-center gap-2">
          <CreditCard className="h-4 w-4 text-primary" /> Payment Method
        </h2>
        <p className="text-sm text-muted-foreground mb-4">No payment method on file.</p>
        <Button variant="hero-outline" size="sm">Add Payment Method</Button>
      </div>

      <div className="glass rounded-xl p-6">
        <h2 className="font-semibold text-foreground mb-2">Billing History</h2>
        <p className="text-sm text-muted-foreground">No billing history yet.</p>
      </div>
    </div>
  </div>
);

export default BillingPage;
