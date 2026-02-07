import { useState, useRef, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { 
  X, 
  Send, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  Minimize2,
  Sparkles,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import originXLogoDark from "@/assets/originx-icon-dark.png";
import originXLogoLight from "@/assets/originx-icon-light.png";

// Female agent names pool
const agentNames = [
  "Aria", "Maya", "Sophia", "Ava", "Emma", "Zara", "Luna", "Iris", 
  "Nova", "Cleo", "Mira", "Ada", "Eve", "Lila", "Nina", "Priya",
  "Ananya", "Riya", "Diya", "Sanya", "Kavya", "Naina", "Aisha", "Sara"
];

// OriginX knowledge base
const knowledgeBase = {
  products: {
    cognix: {
      name: "COGNIX",
      description: "AI Backend as a Service - Our flagship platform for building intelligent, scalable AI-powered backends.",
      features: ["Auto-scaling infrastructure", "Real-time ML inference", "API-first architecture", "99.99% uptime SLA"],
      useCases: ["Enterprise applications", "SaaS platforms", "Real-time analytics", "Intelligent automation"]
    },
    qualyx: {
      name: "QUALYX", 
      description: "AI Quality & Validation Platform - Autonomous testing with zero false positives.",
      features: ["100% test coverage", "Zero false positives", "Self-healing tests", "Continuous validation"],
      useCases: ["CI/CD pipelines", "Regression testing", "Quality assurance", "Release automation"]
    },
    traceflow: {
      name: "TRACEFLOW",
      description: "Digital Cognition & Experience Infrastructure - Real-time user behavior intelligence.",
      features: ["Session replay", "Heatmaps", "User journey mapping", "Anomaly detection"],
      useCases: ["Product optimization", "UX research", "Conversion optimization", "Error tracking"]
    },
    opzenix: {
      name: "OPZENIX",
      description: "Autonomous MLOps, LLMOps & DevSecOps - Self-healing operations platform.",
      features: ["Auto-remediation", "Model drift detection", "Security scanning", "Continuous deployment"],
      useCases: ["ML pipelines", "Model serving", "Security compliance", "Infrastructure automation"]
    },
    aeon: {
      name: "AEON",
      description: "The pinnacle of autonomous intelligence - A supreme AI system with embedded ethics.",
      features: ["Autonomous decision-making", "Ethical AI framework", "Multi-domain expertise", "Continuous learning"],
      useCases: ["Strategic planning", "Complex problem solving", "Autonomous operations", "Research acceleration"]
    }
  },
  company: {
    name: "OriginX Labs Pvt. Ltd.",
    description: "An AI and Agentic Systems company building the future of autonomous intelligence.",
    headquarters: "Dubai (Corporate HQ)",
    offices: ["Bangalore, India", "USA", "Odisha, India (Founding office)"],
    founders: [
      { name: "Abhishek Panda", role: "Founder & CEO", site: "www.abhishekpanda.com" },
      { name: "Namrata Sahoo", role: "Co-Founder & MD" }
    ],
    mission: "Engineering autonomous intelligence that serves humanity with ethics at its core."
  }
};

// Generate contextual responses
const generateResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  // Product queries
  if (lowerQuery.includes("cognix")) {
    const p = knowledgeBase.products.cognix;
    return `${p.name} is ${p.description}\n\nKey features include:\n• ${p.features.join("\n• ")}\n\nPerfect for: ${p.useCases.join(", ")}.`;
  }
  if (lowerQuery.includes("qualyx")) {
    const p = knowledgeBase.products.qualyx;
    return `${p.name} is ${p.description}\n\nKey features include:\n• ${p.features.join("\n• ")}\n\nIdeal for: ${p.useCases.join(", ")}.`;
  }
  if (lowerQuery.includes("traceflow")) {
    const p = knowledgeBase.products.traceflow;
    return `${p.name} is ${p.description}\n\nFeatures:\n• ${p.features.join("\n• ")}\n\nGreat for: ${p.useCases.join(", ")}.`;
  }
  if (lowerQuery.includes("opzenix")) {
    const p = knowledgeBase.products.opzenix;
    return `${p.name} is ${p.description}\n\nCapabilities:\n• ${p.features.join("\n• ")}\n\nUsed for: ${p.useCases.join(", ")}.`;
  }
  if (lowerQuery.includes("aeon")) {
    const p = knowledgeBase.products.aeon;
    return `${p.name} is ${p.description}\n\nPowered by:\n• ${p.features.join("\n• ")}\n\nApplications: ${p.useCases.join(", ")}.`;
  }
  
  // Company queries
  if (lowerQuery.includes("company") || lowerQuery.includes("originx") || lowerQuery.includes("about")) {
    const c = knowledgeBase.company;
    return `${c.name} is ${c.description}\n\nHeadquarters: ${c.headquarters}\nGlobal offices: ${c.offices.join(", ")}\n\nOur mission: ${c.mission}`;
  }
  if (lowerQuery.includes("founder") || lowerQuery.includes("ceo") || lowerQuery.includes("team") || lowerQuery.includes("leadership")) {
    const c = knowledgeBase.company;
    return `Our leadership team:\n\n${c.founders.map(f => `• ${f.name} - ${f.role}${f.site ? ` (${f.site})` : ""}`).join("\n")}\n\nTogether they're building the future of autonomous intelligence.`;
  }
  if (lowerQuery.includes("product") || lowerQuery.includes("offer") || lowerQuery.includes("service")) {
    return `OriginX Labs offers a comprehensive suite of AI platforms:\n\n• COGNIX - AI Backend as a Service\n• QUALYX - AI Quality & Validation Platform\n• TRACEFLOW - Digital Cognition & Experience Infrastructure\n• OPZENIX - Autonomous MLOps & DevSecOps\n• AEON - Supreme Autonomous Intelligence\n\nWould you like to know more about any specific product?`;
  }
  if (lowerQuery.includes("location") || lowerQuery.includes("office") || lowerQuery.includes("where")) {
    const c = knowledgeBase.company;
    return `OriginX Labs has a global presence:\n\nCorporate HQ: ${c.headquarters}\nOffices: ${c.offices.join(", ")}\n\nWe're expanding globally to serve enterprises worldwide!`;
  }
  if (lowerQuery.includes("contact") || lowerQuery.includes("reach") || lowerQuery.includes("talk")) {
    return `You can reach OriginX Labs through:\n\n• Our website contact form\n• Click "Talk to OriginX" in the navigation\n• Connect with us on LinkedIn\n\nOur team typically responds within 24 hours!`;
  }
  if (lowerQuery.includes("hello") || lowerQuery.includes("hi") || lowerQuery.includes("hey")) {
    return `Hello! Welcome to OriginX Labs!\n\nI'm here to help you learn about our AI platforms and autonomous systems. Feel free to ask about:\n\n• Our products (COGNIX, QUALYX, TRACEFLOW, OPZENIX, AEON)\n• Company information\n• Our leadership team\n• How we can help your organization\n\nWhat would you like to know?`;
  }
  if (lowerQuery.includes("thank")) {
    return `You're welcome! It was my pleasure helping you.\n\nIf you have any more questions about OriginX Labs or our AI platforms, feel free to ask anytime. Have a wonderful day!`;
  }
  if (lowerQuery.includes("help")) {
    return `I'm here to help! You can ask me about:\n\nProducts - COGNIX, QUALYX, TRACEFLOW, OPZENIX, AEON\nCompany - About OriginX Labs, our mission\nTeam - Our founders and leadership\nLocations - Our global offices\nContact - How to reach us\n\nJust type your question and I'll do my best to assist!`;
  }
  
  // Default response
  return `Thank you for your interest in OriginX Labs! I'd be happy to help you with information about our AI platforms and services.\n\nYou can ask me about:\n• Our products (COGNIX, QUALYX, TRACEFLOW, OPZENIX, AEON)\n• Company details\n• Our leadership team\n• Global presence\n\nWhat would you like to explore?`;
};

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  agentName?: string;
  timestamp: Date;
}

const OriginXChatbot = () => {
  const { resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [showEndDialog, setShowEndDialog] = useState(false);
  const [currentAgent, setCurrentAgent] = useState(() => 
    agentNames[Math.floor(Math.random() * agentNames.length)]
  );
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Initialize speech recognition
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if ('SpeechRecognition' in win || 'webkitSpeechRecognition' in win) {
      const SpeechRecognitionAPI = win.SpeechRecognition || win.webkitSpeechRecognition;
      if (SpeechRecognitionAPI) {
        recognitionRef.current = new SpeechRecognitionAPI();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';
        
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          handleSendMessage(transcript);
          setIsListening(false);
        };
        
        recognitionRef.current.onerror = () => {
          setIsListening(false);
        };
        
        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }
  }, []);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeAgent = agentNames[Math.floor(Math.random() * agentNames.length)];
      setCurrentAgent(welcomeAgent);
      setMessages([{
        id: '1',
        text: `Hi there! I'm ${welcomeAgent}, your OriginX AI assistant. 👋\n\nHow can I help you today? Feel free to ask about our products, company, or anything else!`,
        isBot: true,
        agentName: welcomeAgent,
        timestamp: new Date()
      }]);
    }
  }, [isOpen]);

  // Speak message using Web Speech API
  const speakMessage = useCallback((text: string) => {
    if (!voiceEnabled || typeof window === 'undefined') return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    
    // Try to get a female voice
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice => 
      voice.name.toLowerCase().includes('female') ||
      voice.name.toLowerCase().includes('samantha') ||
      voice.name.toLowerCase().includes('victoria') ||
      voice.name.toLowerCase().includes('karen') ||
      voice.name.toLowerCase().includes('moira') ||
      voice.name.toLowerCase().includes('tessa') ||
      voice.name.includes('Google UK English Female') ||
      voice.name.includes('Microsoft Zira')
    ) || voices.find(v => v.lang.startsWith('en'));
    
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    synthRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  }, [voiceEnabled]);

  // Handle sending message
  const handleSendMessage = useCallback((text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate typing delay and generate response
    setTimeout(() => {
      // Pick a new agent name for variety
      const newAgent = agentNames[Math.floor(Math.random() * agentNames.length)];
      setCurrentAgent(newAgent);
      
      const response = generateResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        agentName: newAgent,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      
      // Speak the response
      speakMessage(response.replace(/[•📍🏢👋😊🤖👥📞]/g, ''));
    }, 800 + Math.random() * 700);
  }, [input, speakMessage]);

  // Toggle voice recognition
  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Voice recognition is not supported in your browser. Please try Chrome or Edge.");
      return;
    }
    
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch {
        setIsListening(false);
      }
    }
  };

  // Stop speaking
  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  // Handle end chat
  const handleEndChat = () => {
    setShowEndDialog(false);
    setIsOpen(false);
    setMessages([]);
    setInput("");
    window.speechSynthesis.cancel();
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 group"
        aria-label="Open chat"
      >
        <div className={`
          relative w-14 h-14 rounded-full flex items-center justify-center
          transition-all duration-500 shadow-xl
          ${resolvedTheme === 'dark' 
            ? 'bg-gradient-to-br from-primary via-primary/90 to-accent shadow-primary/30' 
            : 'bg-gradient-to-br from-primary to-primary/80 shadow-primary/20'
          }
          hover:scale-110 hover:shadow-primary/40
        `}>
          {/* Agent avatar */}
          <div className="absolute inset-1 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
            <div className="w-full h-full flex items-center justify-center">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>
          </div>
          
          {/* Sparkle effect */}
          <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-primary animate-bounce" />
          
          {/* Notification dot */}
          <span className="absolute top-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse" />
        </div>
        
        {/* Tooltip */}
        <span className={`
          absolute bottom-full right-0 mb-2 px-2 py-1 rounded-md text-xs font-medium
          whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300
          ${resolvedTheme === 'dark' ? 'bg-card text-foreground' : 'bg-foreground text-background'}
        `}>
          Chat with {currentAgent}
        </span>
      </button>
    );
  }

  return (
    <>
      {/* End Chat Confirmation Dialog */}
      <AlertDialog open={showEndDialog} onOpenChange={setShowEndDialog}>
        <AlertDialogContent className="max-w-sm">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">End Chat Session?</AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Are you sure you want to end this conversation? Your chat history will be cleared.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-row gap-2 sm:justify-center">
            <AlertDialogCancel className="mt-0">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleEndChat}>Yes, End Chat</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <div className={`
        fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50 
        ${isMinimized ? 'w-56 sm:w-64' : 'w-[calc(100vw-1.5rem)] sm:w-80 max-w-[340px]'}
        transition-all duration-300
      `}>
        <div className={`
          rounded-xl overflow-hidden shadow-xl
          ${resolvedTheme === 'dark' 
            ? 'bg-card/95 border border-white/10' 
            : 'bg-card border border-foreground/10'
          }
          backdrop-blur-xl
        `}>
          {/* Compact Header */}
          <div className="bg-gradient-to-r from-primary via-primary/90 to-accent p-2.5 sm:p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Agent Icon */}
                <div className="w-8 h-8 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground text-xs">OriginX Assistant</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-[9px] text-primary-foreground/80">
                      {isTyping ? 'Typing...' : currentAgent}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-0.5">
                <button
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  className="p-1 rounded-md hover:bg-primary-foreground/10 transition-colors"
                  title={voiceEnabled ? "Mute voice" : "Enable voice"}
                >
                  {voiceEnabled ? (
                    <Volume2 className="w-3.5 h-3.5 text-primary-foreground" />
                  ) : (
                    <VolumeX className="w-3.5 h-3.5 text-primary-foreground/50" />
                  )}
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 rounded-md hover:bg-primary-foreground/10 transition-colors"
                >
                  <Minimize2 className="w-3.5 h-3.5 text-primary-foreground" />
                </button>
                <button
                  onClick={() => setShowEndDialog(true)}
                  className="p-1 rounded-md hover:bg-primary-foreground/10 transition-colors"
                >
                  <X className="w-3.5 h-3.5 text-primary-foreground" />
                </button>
              </div>
            </div>
          </div>

          {/* Messages */}
          {!isMinimized && (
            <>
              <ScrollArea className="h-52 sm:h-64 p-2.5 sm:p-3" ref={scrollRef}>
                <div className="space-y-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`
                        max-w-[90%] rounded-xl px-2.5 py-1.5 sm:px-3 sm:py-2
                        ${message.isBot 
                          ? resolvedTheme === 'dark'
                            ? 'bg-muted/50 text-foreground'
                            : 'bg-muted text-foreground'
                          : 'bg-primary text-primary-foreground'
                        }
                      `}>
                        {message.isBot && message.agentName && (
                          <p className="text-[9px] font-medium text-primary mb-0.5">
                            {message.agentName}
                          </p>
                        )}
                        <p className="text-[11px] sm:text-xs whitespace-pre-line leading-relaxed">{message.text}</p>
                        <p className={`text-[9px] mt-0.5 ${
                          message.isBot ? 'text-muted-foreground' : 'text-primary-foreground/70'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className={`
                        rounded-xl px-3 py-2
                        ${resolvedTheme === 'dark' ? 'bg-muted/50' : 'bg-muted'}
                      `}>
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              {/* Suggested Questions - Compact */}
              {messages.length <= 1 && (
                <div className="px-2.5 py-1.5 border-t border-border/20">
                  <p className="text-[9px] text-muted-foreground mb-1 uppercase tracking-wider font-medium">Quick Questions</p>
                  <div className="flex flex-wrap gap-1">
                    {[
                      "What is COGNIX?",
                      "About QUALYX",
                      "TRACEFLOW",
                      "OPZENIX",
                      "OriginX Labs",
                      "Founders"
                    ].map((question, i) => (
                      <button
                        key={i}
                        onClick={() => handleSendMessage(question)}
                        className="px-1.5 py-0.5 text-[9px] rounded-md bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input - Compact */}
              <div className="p-2.5 border-t border-border/20">
                {isSpeaking && (
                  <button
                    onClick={stopSpeaking}
                    className="w-full mb-1.5 px-2 py-1 text-[10px] bg-accent/10 hover:bg-accent/20 rounded-md transition-colors flex items-center justify-center gap-1"
                  >
                    <Volume2 className="w-3 h-3 animate-pulse" />
                    Speaking... Click to stop
                  </button>
                )}
                
                <div className="flex gap-1.5">
                  <button
                    onClick={toggleListening}
                    className={`
                      p-1.5 sm:p-2 rounded-lg transition-all duration-300 shrink-0
                      ${isListening 
                        ? 'bg-red-500 text-white animate-pulse' 
                        : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                      }
                    `}
                    title={isListening ? "Stop listening" : "Start voice input"}
                  >
                    {isListening ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                  </button>
                  
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={isListening ? "Listening..." : "Type message..."}
                    className="flex-1 h-8 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-primary text-xs"
                    disabled={isListening}
                  />
                  
                  <Button
                    onClick={() => handleSendMessage()}
                    disabled={!input.trim()}
                    size="icon"
                    className="rounded-lg h-8 w-8 shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </Button>
                </div>
                
                {/* Footer */}
                <p className="text-[9px] text-center text-muted-foreground mt-1.5">
                  Powered by OriginX AI
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default OriginXChatbot;
