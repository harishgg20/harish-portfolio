'use client';
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Bot, User, Minimize2 } from 'lucide-react';

const DEFAULT_RESPONSE = "I'm not sure about that! You can ask me about Harish's **projects**, **skills**, **experience**, **certifications**, **education**, or **contact** info. I know everything about his portfolio! 😊";

// ── Inline knowledge base (all portfolio data) ────────────────────────────────
const kb = {
    projects: [
        {
            title: "Loan Portfolio Risk Analysis",
            keywords: ["loan", "risk", "default", "portfolio", "borrower", "credit", "lending"],
            tech: "Python, Pandas, NumPy, Matplotlib, Seaborn",
            desc: "Comprehensive loan portfolio risk assessment using EDA to identify default patterns and risk segments.",
            problem: "Financial institutions need to identify high-risk loan segments to minimize defaults.",
            solution: "End-to-end EDA on loan data — cleaning duplicates, engineering risk features, and building visualizations that surface default probability by borrower profile & loan type.",
            achievements: [
                "Identified top 3 high-risk borrower segments driving 68% of defaults",
                "Automated feature engineering with Pandas",
                "Visualizations adopted for quarterly risk reporting"
            ],
            github: "https://github.com/harishgg20/Loan-Portfolio-Risk-Analysis"
        },
        {
            title: "Inventory & Sales Analytics",
            keywords: ["inventory", "sales", "stock", "retail", "supply chain", "demand", "revenue", "stockout"],
            tech: "Python, SQL, Pandas, Power BI, Excel",
            desc: "End-to-end inventory and sales analytics pipeline surfacing stock trends, demand forecasting, and revenue insights.",
            problem: "Retail businesses suffer from stockouts or overstocking due to poor visibility into sales velocity.",
            solution: "Built a data pipeline that ingests raw inventory/sales data and generates Power BI dashboards tracking stock turnover rate, sell-through %, and revenue by category.",
            achievements: [
                "Power BI dashboard tracking 8 inventory KPIs in real-time",
                "Reduced data prep time by 60%",
                "Uncovered $50K+ in slow-moving stock"
            ],
            github: "https://github.com/harishgg20/Inventory-Sales-Analytics"
        },
        {
            title: "Alteryx Retail Sales Analysis",
            keywords: ["alteryx", "etl", "data blending", "workflow", "automation", "cleansing", "blending"],
            tech: "Alteryx, Excel, Data Blending, ETL",
            desc: "Retail sales analysis workflow in Alteryx automating data blending, cleansing, and KPI reporting from raw transactional data.",
            problem: "Large retail datasets from multiple stores require complex blending and transformation, causing delays.",
            solution: "Designed an Alteryx workflow that auto-ingests multi-source retail data, applies deduplication, date parsing, and category mapping, outputting clean datasets for dashboards.",
            achievements: [
                "Automated ETL for 5+ store data sources",
                "Cut prep time from hours to minutes",
                "Standardized KPI definitions across regions"
            ],
            github: "https://github.com/harishgg20/Alteryx_Retail_Sales_Analysis"
        },
        {
            title: "KYC Customer Risk Analysis",
            keywords: ["kyc", "compliance", "fatf", "ofac", "customer", "validation", "aml", "risk score", "duplicate", "watchlist"],
            tech: "Python, Jupyter, Pandas, Matplotlib, Seaborn",
            desc: "Python pipeline for validating customer KYC data, detecting duplicates, and visualizing risk scores based on FATF/OFAC compliance.",
            problem: "Compliance teams struggle to manually verify customer records meet FATF/OFAC standards with large duplicate-laden datasets.",
            solution: "Jupyter-based pipeline that validates fields, flags FATF/OFAC entities, removes duplicates, and generates risk heatmaps segmented by country, transaction size, and customer type.",
            achievements: [
                "Flagged 120+ high-risk records against FATF/OFAC watchlists",
                "Achieved 95%+ data quality score post-deduplication",
                "Delivered risk heatmaps for compliance review"
            ],
            github: "https://github.com/harishgg20/Customer-Data-Validation-KYC-Risk-Analysis"
        },
        {
            title: "UPI Transaction Analysis",
            keywords: ["upi", "payment", "transaction", "digital payment", "failure rate", "dax", "fintech"],
            tech: "Power BI, Excel, DAX, Data Modeling",
            desc: "Power BI dashboard analyzing UPI transactions to uncover payment trends, peak usage times, and failure rate patterns.",
            problem: "Digital payment platforms need to monitor transaction volumes and failure rates in real-time to ensure reliability.",
            solution: "Interactive Power BI report with a star-schema data model, DAX measures for failure rate, peak hours, and merchant category breakdown, with drill-through capability.",
            achievements: [
                "Identified peak transaction hours enabling proactive server scaling",
                "Drill-through merchant breakdowns reduced investigation time",
                "Built a reusable DAX library of 12+ measures"
            ],
            github: "https://github.com/harishgg20/UPI-Transaction-Analysis"
        }
    ],
    experience: [
        {
            role: "Data Analyst Intern",
            company: "UptoSkills",
            period: "Feb 2025 – May 2025",
            highlights: [
                "Analyzed structured datasets using Python & Excel to identify key trends",
                "Built comprehensive dashboards and reports for business insights",
                "Transformed analytics requirements into actionable data solutions"
            ]
        },
        {
            role: "Data Analytics Intern",
            company: "Deloitte Australia",
            period: "Jan 2025",
            highlights: [
                "Built interactive Tableau dashboards for telemetry data visualization",
                "Modeled complex data for business intelligence and reporting",
                "Collaborated with cross-functional teams to define data KPIs"
            ]
        },
        {
            role: "Data Analytics Intern",
            company: "360DigiTMG",
            period: "Nov 2024 – Jan 2025",
            highlights: [
                "Optimized machine downtime using advanced statistical analysis",
                "Delivered visualizations that improved operational performance",
                "Performed EDA on industrial datasets to predict failure points"
            ]
        }
    ],
    certifications: [
        "Alteryx Designer Core Certification",
        "IBM (IT & Customer Engagement)",
        "Microsoft (Power BI)",
        "Cisco (Python & Analytics)",
        "HackerRank (SQL)",
        "freeCodeCamp (Python)",
        "Tata Imagination Challenge 2024",
        "Accenture Innovation Badge"
    ],
    skills: {
        "Data Analytics": ["Python", "Pandas", "NumPy", "SQL", "EDA", "Statistics"],
        "Machine Learning": ["Scikit-Learn", "Regression", "Classification", "Clustering", "Feature Engineering"],
        "Visualization": ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Excel Dashboards"],
        "Data Tools": ["PostgreSQL", "MySQL", "Jupyter", "Git", "Google Colab", "VS Code", "Alteryx"]
    },
    education: [
        { degree: "MCA (Master of Computer Applications)", school: "Sir M Visvesvaraya Institute of Technology, Bengaluru" },
        { degree: "BSc Computer Science", school: "KCS Dr. A.V. Baliga Arts & Science College" }
    ],
    contact: {
        email: "harishgouda52001@gmail.com",
        phone: "+91 91410 74129",
        location: "Bengaluru, India",
        linkedin: "https://linkedin.com/in/harishgouda20",
        github: "https://github.com/harishgg20",
        resume: "https://drive.google.com/file/d/1QOoxO2aY59rP3ljYl_kErTTkHdVfI2nc/view?usp=sharing"
    }
};

const generateResponse = (input) => {
    const text = input.toLowerCase();

    // 1. Greetings
    if (['hello', 'hi', 'hey', 'greetings', 'yo', 'sup'].some(w => text.includes(w)) && text.length < 20) {
        return "Hello! 👋 I'm Harish's AI Assistant. I know everything about his portfolio!\n\nYou can ask me about:\n• **Projects** (Loan Risk, KYC, UPI, Inventory, Alteryx)\n• **Skills** (Python, Power BI, SQL, Tableau…)\n• **Experience** (Deloitte, UptoSkills, 360DigiTMG)\n• **Certifications** & **Education**\n• **Contact** info & Resume\n\nWhat would you like to know? 🚀";
    }
    if (['bye', 'goodbye', 'see you', 'thanks', 'thank you'].some(w => text.includes(w))) {
        return "Thanks for visiting Harish's portfolio! Feel free to reach out at **harishgouda52001@gmail.com** or connect on [LinkedIn](https://linkedin.com/in/harishgouda20). Have a great day! 👋";
    }

    // 2. Resume
    if (['resume', 'cv', 'download', 'pdf'].some(w => text.includes(w))) {
        return `You can view Harish's resume here:\n📄 [Click to Open Resume](${kb.contact.resume})\n\nIt covers his experience at Deloitte, UptoSkills & 360DigiTMG, all his data analytics projects, and certifications like **Alteryx Designer Core**.`;
    }

    // 3. Contact / Hire
    if (['contact', 'email', 'phone', 'reach', 'hire', 'available', 'opportunity', 'mail', 'location', 'city'].some(w => text.includes(w))) {
        return `Here's how you can reach Harish:\n\n📧 **Email:** ${kb.contact.email}\n📞 **Phone:** ${kb.contact.phone}\n📍 **Location:** ${kb.contact.location}\n\n🔗 [LinkedIn](${kb.contact.linkedin}) | [GitHub](${kb.contact.github})\n\nHe's open to **Data Analyst** roles and freelance analytics projects!`;
    }

    // 4. LinkedIn
    if (text.includes('linkedin')) {
        return `Connect with Harish on LinkedIn:\n🔗 [linkedin.com/in/harishgouda20](${kb.contact.linkedin})\n\nHis profile has all his certifications, experience at Deloitte & UptoSkills, and endorsements.`;
    }

    // 5. GitHub
    if (['github', 'repository', 'repo'].some(w => text.includes(w)) && !text.includes('project')) {
        return `Check out Harish's GitHub:\n🐙 [github.com/harishgg20](${kb.contact.github})\n\nIt has all his data analytics projects including Loan Risk Analysis, KYC Risk, UPI Transaction Analysis, and more!`;
    }

    // 6. Specific project by keywords
    for (const project of kb.projects) {
        const titleMatch = text.includes(project.title.toLowerCase());
        const keywordMatch = project.keywords.some(kw => text.includes(kw));
        if (titleMatch || keywordMatch) {
            return `**${project.title}**\n\n📋 **Overview:**\n${project.desc}\n\n❓ **The Problem:**\n${project.problem}\n\n✅ **The Solution:**\n${project.solution}\n\n🏆 **Key Achievements:**\n${project.achievements.map(a => `• ${a}`).join('\n')}\n\n🛠 **Tech:** ${project.tech}\n\n[View on GitHub](${project.github})`;
        }
    }

    // 7. All projects overview
    if (['project', 'work', 'built', 'portfolio', 'what have'].some(w => text.includes(w))) {
        const list = kb.projects.map(p => `• **${p.title}** — ${p.tech}`).join('\n');
        return `Harish has built **5 data analytics projects**:\n\n${list}\n\nAsk me about any specific one for details (problem, solution, achievements & GitHub link)!`;
    }

    // 8. Experience / Internship
    if (['experience', 'internship', 'intern', 'deloitte', 'uptoskills', '360digi', 'job', 'company', 'worked'].some(w => text.includes(w))) {
        const expList = kb.experience.map(e =>
            `**${e.role} @ ${e.company}** (${e.period})\n${e.highlights.map(h => `  • ${h}`).join('\n')}`
        ).join('\n\n');
        return `Harish has **3 internships** in data analytics:\n\n${expList}`;
    }

    // 9. Certifications
    if (['certif', 'badge', 'credential', 'alteryx', 'ibm', 'microsoft', 'cisco', 'hackerrank', 'freecodecamp', 'tata', 'accenture'].some(w => text.includes(w))) {
        const certList = kb.certifications.map(c => `• ${c}`).join('\n');
        return `Harish holds **${kb.certifications.length} certifications**:\n\n${certList}\n\nView all on [LinkedIn](${kb.contact.linkedin})`;
    }

    // 10. Specific skill lookup
    const allSkillsList = Object.values(kb.skills).flat();
    const matchedSkill = allSkillsList.find(s => text.includes(s.toLowerCase()));
    if (matchedSkill) {
        const category = Object.entries(kb.skills).find(([, skills]) => skills.includes(matchedSkill))?.[0];
        return `Yes! Harish is experienced with **${matchedSkill}**${category ? ` (${category})` : ''}. He actively uses it in his projects and internships.\n\nCheck the **Skills** section of the portfolio for the full visual breakdown!`;
    }

    // 11. Skills overview
    if (['skill', 'stack', 'tech', 'tool', 'language', 'know', 'proficient', 'expertise'].some(w => text.includes(w))) {
        const breakdown = Object.entries(kb.skills).map(([cat, skills]) => `**${cat}:** ${skills.join(', ')}`).join('\n');
        return `Harish's skill set covers 4 key areas:\n\n${breakdown}\n\nHe's strongest in **Python, Power BI, SQL, Tableau, and Alteryx**.`;
    }

    // 12. Education
    if (['education', 'degree', 'qualification', 'college', 'university', 'school', 'mca', 'bsc', 'student'].some(w => text.includes(w))) {
        const degList = kb.education.map(d => `• **${d.degree}**\n  ${d.school}`).join('\n');
        return `Harish's educational background:\n\n${degList}\n\nHe's currently pursuing his **MCA** at Sir M Visvesvaraya Institute of Technology, Bengaluru.`;
    }

    // 13. About / Bio / Introduction
    if (['about', 'who', 'bio', 'introduce', 'yourself', 'harish'].some(w => text.includes(w))) {
        return `**Harish Gouda** is a Data Analyst and MCA student at **Sir M Visvesvaraya Institute of Technology**, Bengaluru.\n\nHe specializes in:\n• Exploratory Data Analysis (EDA)\n• Power BI & Tableau dashboards\n• Python data pipelines\n• SQL & database analytics\n• Alteryx ETL workflows\n\nHe has worked as a Data Analytics Intern at **Deloitte Australia**, **UptoSkills**, and **360DigiTMG**, and holds the **Alteryx Designer Core Certification**.\n\n📧 ${kb.contact.email} | [LinkedIn](${kb.contact.linkedin})`;
    }

    // 14. Help / what can you do
    if (['what can', 'help', 'question', 'tell me', 'know about'].some(w => text.includes(w))) {
        return "I can tell you all about Harish's portfolio! Try asking:\n\n• *\"Tell me about the KYC project\"*\n• *\"What are his skills?\"*\n• *\"Where has he worked?\"*\n• *\"What certifications does he have?\"*\n• *\"How can I contact him?\"*\n• *\"Show me his resume\"*";
    }

    return DEFAULT_RESPONSE;
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi there! 👋 I'm Harish's AI Assistant. I know everything about his portfolio — projects, skills, experience, certifications and more. Ask me anything! 🤖" }
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

    const handleSend = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userText = inputValue;
        setInputValue("");
        setMessages(prev => [...prev, { type: 'user', text: userText }]);
        setIsTyping(true);

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
                                <div dangerouslySetInnerHTML={{
                                    __html: msg.text
                                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                        .replace(/\*(.*?)\*/g, '<em>$1</em>')
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
