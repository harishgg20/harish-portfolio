'use client';
import React, { useState, useEffect } from 'react';
import { Workflow, Loader2, Code2, ChevronRight, Eye, Github, ExternalLink, X, Lock } from 'lucide-react';

const policyPalData = {
    title: "PolicyPal",
    category: "Full Stack",
    tech: "Next.js, Tailwind CSS, Node.js, PostgreSQL",
    desc: "A web platform that helps Indian citizens instantly check eligibility for government schemes using a rule-based engine, multi-language support, reminders, and accessibility-compliant UX.",
    problem: "Citizens often struggle to navigate fragmented government portals to find schemes they are eligible for, facing challenges like complex criteria, language barriers, and lack of awareness about application deadlines.",
    solution: "PolicyPal aggregates schemes into a single platform with a rule-based eligibility engine. It features multi-language support, automated reminders, and a WCAG-compliant accessible UX, ensuring users are matched instantly and redirected to official portals for the final application.",
    github: null,
    demo: null
};

const projectsData = [
    {
        title: "Dataview AI",
        category: "Full Stack",
        tech: "Next.js, Tailwind, FastAPI, PostgreSQL, Gemini",
        desc: "Full-stack BI dashboard with real-time charts, filters, automated executive insights, and voice-narrated AI summaries.",
        problem: "Business data is often siloed in complex databases, making it difficult for non-technical stakeholders to extract immediate insights without waiting for analyst reports.",
        solution: "I built a Generative AI-powered dashboard that connects directly to PostgreSQL. It uses Gemini to interpret natural language queries (e.g., 'Show sales trend last month') and converts them into SQL, displaying real-time visualizations and voice-narrated summaries.",
        github: "https://github.com/harishgg20/Dataview-AI",
        demo: "#"
    },
    {
        title: "TalentID Career Platform",
        category: "Full Stack",
        tech: "Next.js, Tailwind, Node.js, Express, TS",
        desc: "Career platform for freshers with login, job listings, application workflows, and responsive UI.",
        problem: "Fresh graduates often struggle to track job applications across multiple disparate portals, leading to missed opportunities and lack of feedback.",
        solution: "TalentID is a centralized career portal featuring a unified application tracking system (ATS). I implemented secure authentication, a real-time status workflow, and a responsive dashboard that aggregates job listings relevant to entry-level candidates.",
        github: "https://github.com/harishgg20",
        demo: "#"
    },
    {
        title: "Documind AI",
        category: "Data & AI",
        tech: "Next.js, TypeScript, AI Integration",
        desc: "AI-powered document assistant that enables users to chat with their PDFs, extract insights, and generate summaries instantly.",
        problem: "Manual extraction of key information from lengthy legal and technical PDF documents is time-consuming and prone to human error.",
        solution: "I developed a RAG (Retrieval-Augmented Generation) pipeline using vector embeddings. Users can upload PDFs, and the system indexes the content, allowing them to ask context-aware questions and receive instant, accurate citations from the document.",
        github: "https://github.com/harishgg20/documind-ai",
        demo: "#"
    },
    {
        title: "Data Analyst Intelligence",
        category: "Data & AI",
        tech: "Python, AI/ML, Data Visualization",
        desc: "Advanced data intelligence platform designed to uncover actionable insights through automated analysis and predictive modeling.",
        problem: "Exploratory Data Analysis (EDA) involves repetitive coding tasks for every new dataset, slowing down the time-to-insight for data analysts.",
        solution: "This platform automates the EDA process. By simply uploading a dataset, the system runs statistical tests, detects anomalies, generates correlation heatmaps, and builds predictive models automatically, reducing initial analysis time by 70%.",
        github: "https://github.com/harishgg20/Data-Analyst-Intelligence-Platform",
        demo: "#"
    },
    {
        title: "AI-CAD Copilot",
        category: "Data & AI",
        tech: "Python, Computer Vision, AI",
        desc: "Intelligent assistant for CAD workflows that uses AI to automate design tasks, detect errors, and optimize geometry.",
        problem: "CAD designers spend hours manually checking for geometric errors and optimizing standard parts, which creates bottlenecks in the manufacturing workflow.",
        solution: "I integrated computer vision algorithms to analyze CAD schematics in real-time. The AI Copilot highlights geometric inconsistencies, suggests standard part replacements, and automates repetitive drafting tasks, streamlining the design-to-production pipeline.",
        github: "https://github.com/harishgg20/ai-cad-copilot",
        demo: "#"
    }
];

const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
            <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
                <div className="flex justify-between items-start p-6 border-b border-slate-800 bg-slate-900 sticky top-0 z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 text-xs font-semibold bg-cyan-900/30 text-cyan-400 rounded-full border border-cyan-800/50">{project.category}</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
                    </div>
                    <button onClick={onClose} className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"><X size={24} /></button>
                </div>
                <div className="overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
                    <div className="w-full h-64 md:h-80 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700/50 flex items-center justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                        <div className="text-center p-6">
                            <div className="mx-auto w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 border border-slate-700 shadow-lg group-hover:scale-110 transition-transform duration-500">
                                <Code2 className="text-cyan-400 w-8 h-8" />
                            </div>
                            <p className="text-slate-500 font-mono text-sm">Project Visual / Demo Placeholder</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2"><span className="w-1 h-6 bg-red-500 rounded-full" />The Problem</h3>
                            <p className="text-slate-300 leading-relaxed text-lg">{project.problem}</p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2"><span className="w-1 h-6 bg-emerald-500 rounded-full" />The Solution</h3>
                            <p className="text-slate-300 leading-relaxed text-lg">{project.solution}</p>
                        </div>
                    </div>
                    <div className="pt-6 border-t border-slate-800">
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Tech Stack & Tools</h3>
                        <div className="flex flex-wrap gap-2">
                            {project.tech.split(', ').map((tech, i) => (
                                <span key={i} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm border border-slate-700">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="p-6 border-t border-slate-800 bg-slate-900/50 flex flex-col sm:flex-row gap-4 justify-end">
                    {project.github ? (
                        <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium border border-slate-700">
                            <Github size={20} /> View Source Code
                        </a>
                    ) : (
                        <button disabled className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/50 text-slate-500 rounded-lg font-medium border border-slate-700/50 cursor-not-allowed">
                            <Lock size={20} /> Private / In Progress
                        </button>
                    )}
                    {project.demo && project.demo !== '#' && (
                        <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors font-medium shadow-lg shadow-cyan-900/20">
                            <ExternalLink size={20} /> Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({ project, onClick }) => (
    <div onClick={onClick} className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer relative">
        <div className="h-48 bg-gradient-to-br from-slate-800 to-violet-900/20 relative group-hover:from-slate-700 group-hover:to-cyan-900/20 transition-all duration-500 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
            <Code2 className="text-slate-600 group-hover:text-cyan-400/50 transition-colors w-16 h-16" />
            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-4 py-2 bg-cyan-600 text-white rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Eye size={16} /> View Case Study
                </span>
            </div>
        </div>
        <div className="p-6">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.desc}</p>
            <div className="text-xs text-violet-400 font-mono border-t border-slate-700/50 pt-4">{project.tech}</div>
        </div>
    </div>
);

export default function Projects() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = activeCategory === 'All'
        ? projectsData
        : projectsData.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        <span className="border-b-4 border-cyan-500 pb-1">Featured Projects</span>
                    </h2>
                    <p className="text-slate-400">What I've built recently</p>
                </div>

                {/* Work In Progress / Spotlight Section */}
                <div className="mb-20">
                    <h3 className="text-xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
                        <span className="p-2 bg-cyan-900/30 rounded-lg"><Workflow size={24} /></span>
                        Current Focus / Work in Progress
                    </h3>
                    <div
                        onClick={() => setSelectedProject(policyPalData)}
                        className="relative group w-full bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl border border-cyan-500/30 p-1 cursor-pointer overflow-hidden shadow-xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative bg-slate-900 rounded-xl p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center h-full">
                            <div className="flex-1 space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="px-3 py-1 text-xs font-semibold bg-amber-500/10 text-amber-400 rounded-full border border-amber-500/20 flex items-center gap-1">
                                        <Loader2 className="w-3 h-3 animate-spin" /> In Development
                                    </span>
                                    <span className="px-3 py-1 text-xs font-semibold bg-slate-800 text-slate-400 rounded-full border border-slate-700">
                                        {policyPalData.category}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {policyPalData.title}
                                </h3>
                                <p className="text-slate-400 text-lg leading-relaxed">{policyPalData.desc}</p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {policyPalData.tech.split(', ').map((t, i) => (
                                        <span key={i} className="text-sm font-mono text-cyan-500/80">#{t}</span>
                                    ))}
                                </div>
                                <div className="pt-4">
                                    <span className="inline-flex items-center gap-2 text-white font-medium group-hover:translate-x-2 transition-transform">
                                        View Case Study <ChevronRight size={16} />
                                    </span>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 aspect-video bg-gradient-to-br from-slate-800 to-cyan-900/40 rounded-lg border border-slate-700 flex items-center justify-center relative overflow-hidden shadow-inner">
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent" />
                                <div className="text-center">
                                    <div className="w-16 h-16 mx-auto bg-slate-900 rounded-full flex items-center justify-center mb-3 border border-slate-700 group-hover:scale-110 transition-transform duration-500">
                                        <Code2 className="text-cyan-400" size={32} />
                                    </div>
                                    <span className="text-slate-500 text-sm font-mono">System Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Project Filters */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {['All', 'Full Stack', 'Data & AI'].map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 border ${activeCategory === category
                                    ? 'bg-cyan-500/10 border-cyan-500 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                                    : 'bg-slate-900 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} onClick={() => setSelectedProject(project)} />
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="https://github.com/harishgg20?tab=repositories" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 rounded-full font-medium hover:bg-slate-800 hover:text-white transition-all hover:border-cyan-500/50">
                        <Github size={20} /> View More Projects on GitHub
                    </a>
                </div>
            </div>

            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </section>
    );
}
