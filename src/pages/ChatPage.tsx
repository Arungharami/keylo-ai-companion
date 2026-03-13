import { useState, useRef, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Menu, MessageCircle, Crown, BookOpen, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import PaywallModal from "@/components/chat/PaywallModal";
import GuestUpsellModal from "@/components/chat/GuestUpsellModal";
import ChatSidebar from "@/components/chat/ChatSidebar";
import KeyloAvatar from "@/components/chat/KeyloAvatar";
import ModeSelector, { type ChatMode, getModeSystemPrompt } from "@/components/chat/ModeSelector";

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
const GUEST_LIMIT = 3;

const modeWelcome: Record<ChatMode, { title: string; subtitle: string; icon: React.ReactNode }> = {
  chat: {
    title: "Hey there! I'm Keylo 👋",
    subtitle: "I'm your friendly AI companion. Ask me anything, vent, brainstorm, or just chat — I'm all ears!",
    icon: <MessageCircle className="h-7 w-7 text-primary-foreground" />,
  },
  reflection: {
    title: "Time to reflect 🌿",
    subtitle: "Let's slow down and explore what's on your mind. I'll ask gentle questions to help you think deeper.",
    icon: <BookOpen className="h-7 w-7 text-primary-foreground" />,
  },
  creative: {
    title: "Let's get creative! ✨",
    subtitle: "Stories, poems, wild ideas — let's make something fun together. What sparks your imagination?",
    icon: <Sparkles className="h-7 w-7 text-primary-foreground" />,
  },
};

const guestResponses = [
  "That's a really interesting thought! I love how you're thinking about this. Tell me more — what's behind that feeling?",
  "I hear you! 💛 Life has a way of throwing curveballs. If you could change one thing about that situation, what would it be?",
  "Wow, thanks for sharing that with me. You know what I think? You're handling this better than you realize. What would help you feel more at ease right now?",
];

const authedResponses = [
  "I really appreciate you sharing that with me! 💛 Let me think about this... What you're describing sounds like it matters a lot to you. Can you tell me more about what specifically resonates?",
  "That's such a thoughtful observation! I love how self-aware you are. Here's what I'm noticing — it sounds like there's a deeper pattern here. What do you think drives that?",
  "You've got great instincts on this! 🌟 I think the key insight here is about what truly energizes you. When was the last time you felt completely in your element?",
  "I hear the passion in what you're saying! Let me reflect that back — it sounds like this connects to something you really care about. How does that feel to acknowledge?",
  "What a wonderful question to explore together! 🎯 In my experience, the best answers come when we get curious. What would your ideal outcome look like?",
];

const reflectionPrompts = [
  "Let's start with a gentle check-in. How are you *really* feeling right now? Not the polite answer — the real one. 🌿",
  "That's beautifully honest. Thank you for trusting me with that. What do you think is at the root of that feeling? Take your time.",
  "I'm noticing something powerful in what you shared. It sounds like this connects to a deeper value. What matters most to you in this situation?",
];

const creativePrompts = [
  "Ooh, I love that idea! ✨ Let me riff on it — imagine this: what if we took that concept and turned it completely upside down? Where does your imagination go?",
  "You're onto something brilliant! 🎨 Let me add a twist — what if the main character discovers they've been looking at everything backwards? How would that change the story?",
  "That's giving me chills in the best way! 🌟 You have such a creative mind. Let's push even further — what's the most unexpected thing that could happen next?",
];

const ChatPage = () => {
  const [searchParams] = useSearchParams();
  const isGuest = searchParams.get("guest") === "true";
  const limit = isGuest ? GUEST_LIMIT : FREE_LIMIT;

  const [conversations, setConversations] = useState<Conversation[]>([
    { id: "1", title: "Welcome Chat", messages: [] },
  ]);
  const [activeId, setActiveId] = useState("1");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messagesUsed, setMessagesUsed] = useState(0);
  const [showPaywall, setShowPaywall] = useState(false);
  const [showGuestUpsell, setShowGuestUpsell] = useState(false);
  const [isPremium] = useState(false);
  const [chatMode, setChatMode] = useState<ChatMode>("chat");
  const endRef = useRef<HTMLDivElement>(null);

  const active = conversations.find((c) => c.id === activeId)!;
  const welcome = modeWelcome[chatMode];

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [active?.messages.length, loading]);

  const getResponse = (msgIndex: number): string => {
    if (chatMode === "reflection") return reflectionPrompts[msgIndex % reflectionPrompts.length];
    if (chatMode === "creative") return creativePrompts[msgIndex % creativePrompts.length];
    if (isGuest) return guestResponses[msgIndex % guestResponses.length];
    return authedResponses[msgIndex % authedResponses.length];
  };

  const sendMessage = () => {
    if (!input.trim() || loading) return;

    if (isGuest && messagesUsed >= GUEST_LIMIT) {
      setShowGuestUpsell(true);
      return;
    }
    if (!isPremium && !isGuest && messagesUsed >= FREE_LIMIT) {
      setShowPaywall(true);
      return;
    }

    const userMsg: Message = { id: Date.now().toString(), role: "user", content: input.trim() };
    const msgCount = active.messages.filter(m => m.role === "user").length;
    const updated = conversations.map((c) =>
      c.id === activeId
        ? { ...c, messages: [...c.messages, userMsg], title: c.messages.length === 0 ? input.trim().slice(0, 30) : c.title }
        : c
    );
    setConversations(updated);
    setInput("");
    setMessagesUsed((p) => p + 1);
    setLoading(true);

    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getResponse(msgCount),
      };
      setConversations((prev) =>
        prev.map((c) => (c.id === activeId ? { ...c, messages: [...c.messages, aiMsg] } : c))
      );
      setLoading(false);
    }, 1200 + Math.random() * 800);
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

  const limitReached = isGuest ? messagesUsed >= GUEST_LIMIT : (!isPremium && messagesUsed >= FREE_LIMIT);

  return (
    <div className="flex h-screen bg-background">
      <ChatSidebar
        conversations={conversations}
        activeId={activeId}
        isGuest={isGuest}
        isPremium={isPremium}
        messagesUsed={messagesUsed}
        freeLimit={limit}
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onNewChat={newChat}
        onSelectChat={(id) => { setActiveId(id); setSidebarOpen(false); }}
        onDeleteChat={deleteChat}
        onShowPaywall={() => setShowPaywall(true)}
      />

      {sidebarOpen && <div className="fixed inset-0 z-30 bg-background/60 md:hidden" onClick={() => setSidebarOpen(false)} />}

      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <div className="h-14 border-b border-border flex items-center px-4 gap-3 shrink-0">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden text-muted-foreground">
            <Menu className="h-5 w-5" />
          </button>
          <KeyloAvatar size="sm" />
          <span className="text-sm font-medium text-foreground truncate">{active.title}</span>
          <div className="ml-auto flex items-center gap-2">
            <ModeSelector mode={chatMode} onModeChange={setChatMode} />
            {isPremium && (
              <span className="text-xs gradient-bg text-primary-foreground px-2 py-0.5 rounded-full flex items-center gap-1">
                <Crown className="h-3 w-3" /> Premium
              </span>
            )}
            {isGuest && (
              <Link to="/signup">
                <Button variant="hero" size="sm" className="text-xs">
                  Sign Up Free
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {active.messages.length === 0 && (
            <div className="flex-1 flex items-center justify-center h-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-sm"
              >
                <KeyloAvatar size="lg" breathing />
                <h2 className="text-lg font-semibold text-foreground mb-2 mt-4">{welcome.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{welcome.subtitle}</p>
                {isGuest && (
                  <p className="text-xs text-primary mt-3 glass rounded-full px-4 py-1.5 inline-block">
                    ✨ {GUEST_LIMIT} free guest messages — no sign up needed!
                  </p>
                )}
              </motion.div>
            </div>
          )}

          <AnimatePresence>
            {active.messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && <KeyloAvatar size="sm" />}
                <div className={`max-w-[80%] sm:max-w-[70%] rounded-2xl px-4 py-3 ${
                  msg.role === "user"
                    ? "gradient-bg text-primary-foreground rounded-br-md"
                    : "bg-secondary text-secondary-foreground rounded-bl-md"
                }`}>
                  <div className="text-sm leading-relaxed prose prose-sm prose-invert max-w-none">
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {loading && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-2 justify-start"
            >
              <KeyloAvatar size="sm" breathing />
              <div className="bg-secondary rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex gap-1.5">
                  <motion.div className="h-2 w-2 rounded-full bg-primary/60" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} />
                  <motion.div className="h-2 w-2 rounded-full bg-primary/60" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.15 }} />
                  <motion.div className="h-2 w-2 rounded-full bg-primary/60" animate={{ y: [0, -6, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.3 }} />
                </div>
              </div>
            </motion.div>
          )}
          <div ref={endRef} />
        </div>

        {/* Input */}
        <div className="border-t border-border p-4">
          {limitReached ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <p className="text-sm text-muted-foreground mb-3">
                {isGuest
                  ? "You've used your free guest chats! Sign up to keep talking with Keylo 💛"
                  : "You've reached your free message limit for now."}
              </p>
              {isGuest ? (
                <Link to="/signup">
                  <Button variant="hero" size="lg">
                    Create Free Account ✨
                  </Button>
                </Link>
              ) : (
                <Button variant="hero" onClick={() => setShowPaywall(true)}>
                  <Crown className="h-4 w-4 mr-1" /> Unlock Unlimited
                </Button>
              )}
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
              className="flex items-center gap-2 max-w-3xl mx-auto"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  chatMode === "reflection" ? "Share what's on your mind..." :
                  chatMode === "creative" ? "Describe your creative idea..." :
                  "Say something to Keylo..."
                }
                className="bg-secondary border-border flex-1"
                disabled={loading}
              />
              <motion.div whileTap={{ scale: 0.9 }}>
                <Button variant="hero" size="icon" type="submit" disabled={!input.trim() || loading}>
                  <Send className="h-4 w-4" />
                </Button>
              </motion.div>
            </form>
          )}
        </div>
      </div>

      <PaywallModal open={showPaywall} onClose={() => setShowPaywall(false)} />
      <GuestUpsellModal open={showGuestUpsell} onClose={() => setShowGuestUpsell(false)} />
    </div>
  );
};

export default ChatPage;
