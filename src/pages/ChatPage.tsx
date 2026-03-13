import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Plus, Menu, X, MessageCircle, User, CreditCard, LogOut, Crown, Trash2 } from "lucide-react";
import PaywallModal from "@/components/chat/PaywallModal";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
}

const FREE_LIMIT = 10;

const ChatPage = () => {
  const [conversations, setConversations] = useState<Conversation[]>([
    { id: "1", title: "Welcome Chat", messages: [] },
  ]);
  const [activeId, setActiveId] = useState("1");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messagesUsed, setMessagesUsed] = useState(0);
  const [showPaywall, setShowPaywall] = useState(false);
  const [isPremium] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const active = conversations.find((c) => c.id === activeId)!;

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [active?.messages.length, loading]);

  const sendMessage = () => {
    if (!input.trim() || loading) return;
    if (!isPremium && messagesUsed >= FREE_LIMIT) {
      setShowPaywall(true);
      return;
    }

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input.trim() };
    const updated = conversations.map((c) =>
      c.id === activeId ? { ...c, messages: [...c.messages, userMsg], title: c.messages.length === 0 ? input.trim().slice(0, 30) : c.title } : c
    );
    setConversations(updated);
    setInput("");
    setMessagesUsed((p) => p + 1);
    setLoading(true);

    // Simulated AI response — will be replaced with real AI backend
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "Thank you for sharing that. I'm here to help you explore your thoughts and ideas. What would you like to dive deeper into?",
      };
      setConversations((prev) =>
        prev.map((c) => (c.id === activeId ? { ...c, messages: [...c.messages, aiMsg] } : c))
      );
      setLoading(false);
    }, 1500);
  };

  const newChat = () => {
    const id = Date.now().toString();
    setConversations((p) => [...p, { id, title: "New Chat", messages: [] }]);
    setActiveId(id);
    setSidebarOpen(false);
  };

  const deleteChat = (id: string) => {
    const filtered = conversations.filter((c) => c.id !== id);
    if (filtered.length === 0) {
      const newId = Date.now().toString();
      setConversations([{ id: newId, title: "New Chat", messages: [] }]);
      setActiveId(newId);
    } else {
      setConversations(filtered);
      if (activeId === id) setActiveId(filtered[0].id);
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-72 bg-card border-r border-border transform transition-transform duration-300 md:relative md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xs">K</span>
              </div>
              <span className="font-semibold text-foreground text-sm">Keylo.ai</span>
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden text-muted-foreground">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-3">
            <Button variant="hero-outline" className="w-full justify-start" size="sm" onClick={newChat}>
              <Plus className="h-4 w-4 mr-2" /> New Chat
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto px-3 space-y-1">
            {conversations.map((c) => (
              <div
                key={c.id}
                className={`group flex items-center gap-2 rounded-lg px-3 py-2 text-sm cursor-pointer transition-colors ${c.id === activeId ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-secondary/50"}`}
                onClick={() => { setActiveId(c.id); setSidebarOpen(false); }}
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span className="truncate flex-1">{c.title}</span>
                <button onClick={(e) => { e.stopPropagation(); deleteChat(c.id); }} className="opacity-0 group-hover:opacity-100 text-muted-foreground hover:text-destructive transition-opacity">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Usage */}
          {!isPremium && (
            <div className="p-3 border-t border-border">
              <div className="glass rounded-lg p-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                  <span>Messages used</span>
                  <span>{messagesUsed}/{FREE_LIMIT}</span>
                </div>
                <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                  <div className="h-full gradient-bg transition-all" style={{ width: `${(messagesUsed / FREE_LIMIT) * 100}%` }} />
                </div>
                <Button variant="hero" size="sm" className="w-full mt-3 text-xs" onClick={() => setShowPaywall(true)}>
                  <Crown className="h-3 w-3 mr-1" /> Upgrade to Premium
                </Button>
              </div>
            </div>
          )}

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
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && <div className="fixed inset-0 z-30 bg-background/60 md:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main Chat */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="h-14 border-b border-border flex items-center px-4 gap-3 shrink-0">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden text-muted-foreground">
            <Menu className="h-5 w-5" />
          </button>
          <MessageCircle className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground truncate">{active.title}</span>
          {isPremium && (
            <span className="ml-auto text-xs gradient-bg text-primary-foreground px-2 py-0.5 rounded-full flex items-center gap-1">
              <Crown className="h-3 w-3" /> Premium
            </span>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {active.messages.length === 0 && (
            <div className="flex-1 flex items-center justify-center h-full">
              <div className="text-center max-w-sm">
                <div className="h-14 w-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4 animate-float">
                  <MessageCircle className="h-7 w-7 text-primary-foreground" />
                </div>
                <h2 className="text-lg font-semibold text-foreground mb-2">Start a conversation</h2>
                <p className="text-sm text-muted-foreground">Ask me anything — I'm here to chat, reflect, and explore ideas with you.</p>
              </div>
            </div>
          )}

          <AnimatePresence>
            {active.messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[80%] sm:max-w-[70%] rounded-2xl px-4 py-3 ${msg.role === "user" ? "gradient-bg text-primary-foreground rounded-br-md" : "bg-secondary text-secondary-foreground rounded-bl-md"}`}>
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <div className="flex justify-start">
              <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <div className="border-t border-border p-4">
          {!isPremium && messagesUsed >= FREE_LIMIT ? (
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-3">You've used all your free messages today.</p>
              <Button variant="hero" onClick={() => setShowPaywall(true)}>
                <Crown className="h-4 w-4 mr-1" /> Upgrade to Premium
              </Button>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
              className="flex items-center gap-2 max-w-3xl mx-auto"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="bg-secondary border-border flex-1"
                disabled={loading}
              />
              <Button variant="hero" size="icon" type="submit" disabled={!input.trim() || loading}>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          )}
        </div>
      </div>

      <PaywallModal open={showPaywall} onClose={() => setShowPaywall(false)} />
    </div>
  );
};

export default ChatPage;
