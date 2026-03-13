import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, X, MessageCircle, User, CreditCard, LogOut, Crown, Trash2 } from "lucide-react";
import KeyloAvatar from "./KeyloAvatar";

interface Conversation {
  id: string;
  title: string;
  messages: { id: string; role: "user" | "assistant"; content: string }[];
}

interface ChatSidebarProps {
  conversations: Conversation[];
  activeId: string;
  isGuest: boolean;
  isPremium: boolean;
  messagesUsed: number;
  freeLimit: number;
  sidebarOpen: boolean;
  onClose: () => void;
  onNewChat: () => void;
  onSelectChat: (id: string) => void;
  onDeleteChat: (id: string) => void;
  onShowPaywall: () => void;
}

const ChatSidebar = ({
  conversations, activeId, isGuest, isPremium,
  messagesUsed, freeLimit, sidebarOpen,
  onClose, onNewChat, onSelectChat, onDeleteChat, onShowPaywall,
}: ChatSidebarProps) => {
  return (
    <div className={`fixed inset-y-0 left-0 z-40 w-72 bg-card border-r border-border transform transition-transform duration-300 md:relative md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <div className="flex flex-col h-full">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <KeyloAvatar size="sm" />
            <span className="font-semibold text-foreground text-sm">Keylo.ai</span>
          </Link>
          <button onClick={onClose} className="md:hidden text-muted-foreground">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-3">
          <Button variant="hero-outline" className="w-full justify-start" size="sm" onClick={onNewChat}>
            <Plus className="h-4 w-4 mr-2" /> New Chat
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto px-3 space-y-1">
          {conversations.map((c) => (
            <div
              key={c.id}
              className={`group flex items-center gap-2 rounded-lg px-3 py-2 text-sm cursor-pointer transition-colors ${c.id === activeId ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/50"}`}
              onClick={() => onSelectChat(c.id)}
            >
              <MessageCircle className="h-4 w-4 shrink-0" />
              <span className="truncate flex-1">{c.title}</span>
              <button onClick={(e) => { e.stopPropagation(); onDeleteChat(c.id); }} className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-opacity">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Usage indicator */}
        {!isPremium && (
          <div className="p-3 border-t border-border">
            <div className="glass rounded-lg p-3">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                <span>{isGuest ? "Guest messages" : "Messages used"}</span>
                <span>{messagesUsed}/{freeLimit}</span>
              </div>
              <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full gradient-bg transition-all" style={{ width: `${(messagesUsed / freeLimit) * 100}%` }} />
              </div>
              {isGuest ? (
                <Link to="/signup">
                  <Button variant="hero" size="sm" className="w-full mt-3 text-xs">
                    Sign Up for More ✨
                  </Button>
                </Link>
              ) : (
                <Button variant="hero" size="sm" className="w-full mt-3 text-xs" onClick={onShowPaywall}>
                  <Crown className="h-3 w-3 mr-1" /> Unlock Unlimited
                </Button>
              )}
            </div>
          </div>
        )}

        {!isGuest && (
          <div className="p-3 border-t border-border space-y-1">
            <Link to="/app/account" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors">
              <User className="h-4 w-4" /> Account
            </Link>
            <Link to="/app/billing" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors">
              <CreditCard className="h-4 w-4" /> Billing
            </Link>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors w-full">
              <LogOut className="h-4 w-4" /> Log out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatSidebar;
