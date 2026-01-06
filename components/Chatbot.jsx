'use client';
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Minimize2, Loader2 } from 'lucide-react';
import { portfolioData } from '../app/lib/data';

const DEFAULT_RESPONSE = "I'm not sure about that, but I can tell you about Harish's **skills**, **projects**, **education**, or share his **contact** info. He's always learning new things!";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi there! I'm Harish's AI Assistant. Ask me anything about his work, skills, or resume! 🤖" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    // Enhanced Search Logic
    const generateResponse = (input) => {
        const text = input.toLowerCase();

        // 1. Check for specific greetings/closings
        if (['hello', 'hi', 'hey', 'greetings', 'yo'].some(w => text.includes(w)) && text.length < 20) {
            return "Hello! 👋 I'm Harish's AI Assistant. I can tell you about his skills, projects, or how to contact him. What would you like to know?";
        }
        if (['bye', 'goodbye', 'see you'].some(w => text.includes(w))) {
            return "Goodbye! Thanks for visiting. Have a great day! 👋";
        }

        // 2. PRIORITY: Specific Project Lookup (Check titles first!)
        // This allows "Tell me about PolicyPal" to match PolicyPal BEFORE "about" matches the bio.
        const allProjects = [portfolioData.projects.spotlight, ...portfolioData.projects.featured];
        // We check if the input contains any project title
        const specificProject = allProjects.find(p => text.includes(p.title.toLowerCase()));

        if (specificProject) {
            return `**${specificProject.title}** (${specificProject.category}):\n${specificProject.desc}\n\nTech Stack: ${specificProject.tech}`;
        }

        // 3. Resume / Download
        if (['resume', 'cv', 'download', 'pdf'].some(w => text.includes(w))) {
            return `You can download Harish's resume directly from the Hero section, or [click here](${portfolioData.hero.resumeLink}) to view it.`;
        }

        // 4. Contact Info
        if (['contact', 'email', 'phone', 'reach', 'address', 'mail'].some(w => text.includes(w))) {
            return `You can reach Harish via:\n📧 Email: ${portfolioData.contact.email}\n📞 Phone: ${portfolioData.contact.phone}\n📍 Location: ${portfolioData.contact.location}\nOr connect on [LinkedIn](${portfolioData.hero.socials.linkedin}).`;
        }

        // 5. Skills Query
        if (['skill', 'stack', 'tech', 'tool', 'program', 'language'].some(w => text.includes(w))) {
            // Collect all skills
            const allSkills = portfolioData.skills.categories.flatMap(c => c.skills).slice(0, 10).join(', ');
            return `Harish is proficient in: **${allSkills}**, and more.\n\nKey areas: **Full-Stack Development**, **Data Analytics**, and **DevOps**.\nCheck the Skills section for the full visual breakdown!`;
        }

        // 6. Specific Skill Lookup (e.g., "Does he know Python?")
        const skillMatch = portfolioData.skills.marquee.find(s => text.includes(s.toLowerCase()));
        if (skillMatch) {
            return `Yes! Harish is experienced with **${skillMatch}**. It's one of his core skills used in his projects.`;
        }

        // 7. General Project Questions (if specific project wasn't found)
        if (['project', 'work', 'built', 'portfolio', 'app'].some(w => text.includes(w)) && !text.includes('skill')) {
            const projectNames = allProjects.map(p => `• **${p.title}**`).join('\n');
            return `Harish has built several impressive projects:\n${projectNames}\n\nAsk me about any specific one (e.g., "Tell me about PolicyPal")!`;
        }

        // 8. Education
        if (['education', 'degree', 'qualification', 'college', 'school'].some(w => text.includes(w))) {
            const degrees = portfolioData.education.degrees.map(d => `• **${d.degree}** from ${d.school}`).join('\n');
            return `Harish's educational background:\n${degrees}`;
        }

        // 9. About / Bio (Lowest Priority)
        if (['about', 'who', 'bio'].some(w => text.includes(w))) {
            return `${portfolioData.about.description[0]} ${portfolioData.about.description[1]}`;
        }

        return DEFAULT_RESPONSE;
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userText = inputValue;
        setInputValue("");
        setMessages(prev => [...prev, { type: 'user', text: userText }]);
        setIsTyping(true);

        // Simulate AI thinking time
        const thinkingTime = Math.random() * 500 + 500;

        setTimeout(() => {
            const responseText = generateResponse(userText);
            setMessages(prev => [...prev, { type: 'bot', text: responseText }]);
            setIsTyping(false);
        }, thinkingTime);
    };

    return (
        <>
            {/* Floating Action Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 ${isOpen ? 'bg-slate-700 text-slate-300' : 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white shadow-cyan-500/30'
                    }`}
            >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>

            {/* Chat Window */}
            <div
                className={`fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10 pointer-events-none'
                    }`}
            >
                {/* Header */}
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 border-b border-slate-700 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-tr from-cyan-500 to-violet-600 rounded-full">
                            <Bot size={18} className="text-white" />
                        </div>
                        <div>
                            <h3 className="font-bold text-white text-sm">Harish's AI Assistant</h3>
                            <div className="flex items-center gap-1.5 opacity-70">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-xs text-slate-300">Online</span>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                        <Minimize2 size={18} />
                    </button>
                </div>

                {/* Messages */}
                <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-950/50 custom-scrollbar">
                    {messages.map((msg, idx) => (
                        <div
                            key={idx}
                            className={`flex gap-3 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            {msg.type === 'bot' && (
                                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                                    <Bot size={14} className="text-cyan-400" />
                                </div>
                            )}
                            <div
                                className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap shadow-sm ${msg.type === 'user'
                                        ? 'bg-cyan-600 text-white rounded-br-none'
                                        : 'bg-slate-800 border border-slate-700 text-slate-200 rounded-bl-none'
                                    }`}
                            >
                                {/* Simple markdown parsing for bold and links */}
                                <div dangerouslySetInnerHTML={{
                                    __html: msg.text
                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                        .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" class="text-cyan-400 hover:underline font-medium">$1</a>')
                                        .replace(/\n/g, '<br/>')
                                }} />
                            </div>
                            {msg.type === 'user' && (
                                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                                    <User size={14} className="text-slate-400" />
                                </div>
                            )}
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex gap-3 justify-start animate-in fade-in duration-300">
                            <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                                <Bot size={14} className="text-cyan-400" />
                            </div>
                            <div className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-2xl rounded-bl-none flex gap-1 items-center shadow-sm">
                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <form onSubmit={handleSend} className="p-4 bg-slate-900 border-t border-slate-800 flex gap-2">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Ask about skills, projects..."
                        className="flex-1 bg-slate-950 text-slate-200 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-slate-800 placeholder-slate-500 transition-all font-medium"
                    />
                    <button
                        type="submit"
                        disabled={!inputValue.trim()}
                        className="p-2.5 rounded-full bg-cyan-600 text-white hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-cyan-500/20"
                    >
                        <Send size={18} />
                    </button>
                </form>
            </div>
        </>
    );
}
