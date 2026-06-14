import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlinePaperAirplane,
  HiSparkles,
  HiXMark,
} from "react-icons/hi2";
import { SiWhatsapp } from "react-icons/si";

import { projectsByCategory } from "../constants/data";

const WHATSAPP_URL =
  "https://wa.me/923166844292?text=Hi%20Muzamil%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";
const CHAT_API_URL = import.meta.env.VITE_CHAT_API_URL || "/.netlify/functions/chat";

const quickQuestions = [
  "Tell me about Muzamil",
  "What projects has he built?",
  "Estimate my project",
];

const allProjects = Object.values(projectsByCategory).flat();

const welcomeMessage = {
  role: "assistant",
  content:
    "Hi, I am Muzamil's portfolio assistant. Ask me about his experience, skills, projects, or describe an idea and I will give you an honest build plan, timeline, and ballpark cost.",
};

const getProjectEstimate = (question) => {
  const text = question.toLowerCase();
  let type = "custom web application";
  let cost = "$2,500-$8,000";
  let timeline = "4-10 weeks";
  let stack = "React or Next.js, a suitable API layer, database, authentication, testing, and cloud deployment";

  if (/ai|chatbot|automation|recommendation/.test(text)) {
    type = "AI-enabled product";
    cost = "$6,000-$25,000+";
    timeline = "8-18 weeks";
    stack = "Next.js or React, a secure backend, an AI model API, retrieval or business data, evaluation, guardrails, analytics, and cloud deployment";
  } else if (/ecommerce|e-commerce|shop|store|marketplace/.test(text)) {
    type = "e-commerce platform";
    cost = "$4,000-$15,000+";
    timeline = "6-14 weeks";
    stack = "Next.js or React, product and order APIs, payments, inventory, an admin area, testing, and deployment";
  } else if (/mobile|android|ios|app/.test(text)) {
    type = "mobile application";
    cost = "$8,000-$30,000+";
    timeline = "10-22 weeks";
    stack = "React Native or a responsive PWA, secure APIs, database, authentication, notifications, testing, and app-store deployment where needed";
  } else if (/saas|dashboard|portal|management|hospital|erp|crm/.test(text)) {
    type = "SaaS or management platform";
    cost = "$6,000-$25,000+";
    timeline = "8-20 weeks";
    stack = "React or Next.js, ASP.NET Core or Node.js APIs, SQL, role-based access, dashboards, testing, and cloud deployment";
  } else if (/landing|portfolio|brochure|company website/.test(text)) {
    type = "marketing or portfolio website";
    cost = "$700-$2,500";
    timeline = "2-5 weeks";
    stack = "React or Next.js, responsive UI, animation where useful, SEO, analytics, forms, and deployment";
  }

  return `A sensible first estimate for a ${type} is ${cost} and ${timeline}.\n\nHow it would be built: discovery and scope, UX/UI, architecture, implementation with ${stack}, quality assurance, then launch.\n\nThis is a planning range, not a quote. Final cost depends on screens, roles, integrations, content, design readiness, data migration, and support. Hosting, third-party services, payment fees, and AI usage are normally separate.`;
};

const getLocalReply = (question) => {
  const text = question.toLowerCase();
  const project = allProjects.find((item) => {
    const words = item.title.toLowerCase().split(/\W+/).filter((word) => word.length > 3);
    return words.some((word) => text.includes(word));
  });

  if (project) {
    return `${project.title}\n\n${project.description}\n\nTechnology: ${project.tags.join(", ")}.\n\nI can also explain how a similar product could be built today and provide a ballpark estimate.`;
  }

  if (/cost|price|budget|estimate|build|create|develop|idea|project/.test(text)) {
    return getProjectEstimate(question);
  }

  if (/about|who|muzamil|yourself|experience|background/.test(text)) {
    return "Muzamil Niaz is a software engineer focused on React, Next.js, ASP.NET, REST APIs, SQL Server, and scalable product interfaces. His experience includes hospital management software, recruitment and talent platforms, e-commerce, dashboards, PWAs, and UI/UX work. He values direct communication, reusable architecture, and practical delivery.";
  }

  if (/skill|technology|stack|language|framework/.test(text)) {
    return "Muzamil works with JavaScript, TypeScript, React, Next.js, Redux, Tailwind CSS, Node.js, ASP.NET, ASP.NET MVC, Web API, SQL Server, MongoDB, Three.js, Git, Docker, and Figma.";
  }

  if (/portfolio|projects|work|built/.test(text)) {
    return `The portfolio includes ${allProjects.length} featured projects across web development, landing pages, UI/UX, and e-commerce. Examples include Placed.today, TechScope, AtCommerce, WynShop, VERO, Pakistani Brands Hub, and NopCommerce stores. Ask about a project by name for details.`;
  }

  if (/contact|email|phone|whatsapp|hire|available/.test(text)) {
    return "You can contact Muzamil at muzamilniaz.pro@gmail.com or on WhatsApp at +92 316 6844292. Use the green WhatsApp button beside this chat for a direct message.";
  }

  return "I can answer questions about Muzamil's skills, experience, and portfolio, or help scope a website, app, dashboard, e-commerce store, SaaS platform, or AI feature. For a useful estimate, describe the users, main features, integrations, and preferred launch date.";
};

const requestAiReply = async (messages) => {
  const response = await fetch(CHAT_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  if (!response.ok) throw new Error("AI service unavailable");

  const data = await response.json();
  if (!data.reply) throw new Error("Empty AI response");
  return data.reply;
};

const PortfolioChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isThinking]);

  const sendMessage = async (value) => {
    const question = value.trim();
    if (!question || isThinking) return;

    const nextMessages = [...messages, { role: "user", content: question }];
    setMessages(nextMessages);
    setInput("");
    setIsThinking(true);

    let reply;
    try {
      reply = await requestAiReply(nextMessages);
    } catch {
      reply = getLocalReply(question);
    }

    setMessages((current) => [...current, { role: "assistant", content: reply }]);
    setIsThinking(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(input);
  };

  return (
    <div className='fixed bottom-4 right-4 z-[10000] flex flex-col items-end gap-3 sm:bottom-6 sm:right-6'>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className='flex h-[min(640px,75vh)] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl border border-white/15 bg-[#080b1d]/95 shadow-2xl shadow-black/60 backdrop-blur-2xl sm:w-[400px]'
            aria-label='Muzamil portfolio assistant'
          >
            <header className='flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-[#915EFF]/25 to-[#c946e6]/10 px-5 py-4'>
              <div className='flex items-center gap-3'>
                <span className='grid h-11 w-11 place-items-center rounded-2xl bg-[#915EFF] text-2xl text-white shadow-lg shadow-[#915EFF]/30'>
                  <HiSparkles />
                </span>
                <div>
                  <h2 className='text-sm font-bold text-white'>Ask about Muzamil</h2>
                  <p className='flex items-center gap-2 text-[11px] text-secondary'>
                    <span className='h-2 w-2 rounded-full bg-emerald-400' />
                    Portfolio and project assistant
                  </p>
                </div>
              </div>
              <button
                type='button'
                onClick={() => setIsOpen(false)}
                className='grid h-9 w-9 place-items-center rounded-full text-xl text-secondary transition hover:bg-white/10 hover:text-white'
                aria-label='Close chat'
              >
                <HiXMark />
              </button>
            </header>

            <div className='flex-1 space-y-4 overflow-y-auto px-4 py-5'>
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[86%] whitespace-pre-line rounded-2xl px-4 py-3 text-[13px] leading-6 ${
                      message.role === "user"
                        ? "rounded-br-md bg-[#915EFF] text-white"
                        : "rounded-bl-md border border-white/10 bg-white/[0.06] text-white-100"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}

              {messages.length === 1 && (
                <div className='flex flex-wrap gap-2'>
                  {quickQuestions.map((question) => (
                    <button
                      key={question}
                      type='button'
                      onClick={() => sendMessage(question)}
                      className='rounded-full border border-[#915EFF]/35 bg-[#915EFF]/10 px-3 py-2 text-[11px] text-[#d8caff] transition hover:border-[#915EFF]/70 hover:bg-[#915EFF]/20'
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}

              {isThinking && (
                <div className='flex justify-start'>
                  <div className='flex gap-1 rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06] px-4 py-4'>
                    {[0, 1, 2].map((item) => (
                      <motion.span
                        key={item}
                        className='h-2 w-2 rounded-full bg-[#a987ff]'
                        animate={{ y: [0, -5, 0], opacity: [0.45, 1, 0.45] }}
                        transition={{ duration: 0.8, repeat: Infinity, delay: item * 0.12 }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} className='border-t border-white/10 bg-black/20 p-3'>
              <div className='flex items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.05] p-2 focus-within:border-[#915EFF]/60'>
                <textarea
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      sendMessage(input);
                    }
                  }}
                  rows={1}
                  maxLength={1200}
                  placeholder='Ask about experience or describe your project...'
                  className='max-h-28 min-h-[42px] flex-1 resize-none bg-transparent px-2 py-2 text-[13px] text-white outline-none placeholder:text-secondary/60'
                />
                <button
                  type='submit'
                  disabled={!input.trim() || isThinking}
                  className='grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-[#915EFF] text-lg text-white transition hover:bg-[#a987ff] disabled:cursor-not-allowed disabled:opacity-40'
                  aria-label='Send message'
                >
                  <HiOutlinePaperAirplane />
                </button>
              </div>
              <p className='mt-2 text-center text-[10px] text-secondary/60'>
                Estimates are ballpark ranges, not final quotations.
              </p>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <div className='flex flex-col items-center gap-3'>
        <motion.a
          href={WHATSAPP_URL}
          target='_blank'
          rel='noopener noreferrer'
          whileHover={{ y: -3, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className='grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-[#25D366] text-2xl text-white shadow-xl shadow-black/35'
          aria-label='Chat with Muzamil on WhatsApp'
          title='Chat on WhatsApp'
        >
          <SiWhatsapp />
        </motion.a>
        <motion.button
          type='button'
          onClick={() => setIsOpen((current) => !current)}
          whileHover={{ y: -3, scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className='relative grid h-16 w-16 place-items-center rounded-full border border-white/15 bg-gradient-to-br from-[#915EFF] to-[#c946e6] text-3xl text-white shadow-2xl shadow-[#915EFF]/35'
          aria-label={isOpen ? "Close portfolio chat" : "Open portfolio chat"}
          aria-expanded={isOpen}
          title='Ask about Muzamil'
        >
          {isOpen ? <HiXMark /> : <HiOutlineChatBubbleOvalLeftEllipsis />}
          {!isOpen && (
            <span className='absolute right-0 top-0 h-4 w-4 rounded-full border-2 border-primary bg-emerald-400' />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default PortfolioChat;
