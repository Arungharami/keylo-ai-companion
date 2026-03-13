import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, CreditCard, Crown, ArrowLeft, LogOut } from "lucide-react";

const AccountPage = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-lg mx-auto">
        <Link to="/app/chat" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to chat
        </Link>

        <h1 className="text-2xl font-bold text-foreground mb-6">Account</h1>

        <div className="glass rounded-xl p-6 mb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full gradient-bg flex items-center justify-center">
              <User className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground">user@example.com</p>
              <p className="text-sm text-muted-foreground">Free Plan</p>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Display Name</span>
              <span className="text-foreground">—</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Messages Used</span>
              <span className="text-foreground">3 / 10</span>
            </div>
            <div className="flex justify-between py-2 border-b border-border">
              <span className="text-muted-foreground">Plan</span>
              <span className="text-foreground">Free</span>
            </div>
          </div>
        </div>

        <div className="glass rounded-xl p-6 mb-4">
          <h2 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <Crown className="h-4 w-4 text-primary" /> Subscription
          </h2>
          <p className="text-sm text-muted-foreground mb-4">Upgrade to premium for unlimited conversations.</p>
          <Link to="/pricing">
            <Button variant="hero" className="w-full">Upgrade to Premium</Button>
          </Link>
        </div>

        <div className="space-y-2">
          <Link to="/app/billing">
            <Button variant="ghost" className="w-full justify-start text-muted-foreground">
              <CreditCard className="h-4 w-4 mr-2" /> Manage Billing
            </Button>
          </Link>
          <Button variant="ghost" className="w-full justify-start text-muted-foreground">
            <LogOut className="h-4 w-4 mr-2" /> Log Out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
