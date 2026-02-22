'use client';
import React, { useState, useEffect } from 'react';
import { Eye, Github, ExternalLink, X, Lock, Code2, TrendingUp } from 'lucide-react';



const projectsData = [
    {
        title: "Loan Portfolio Risk Analysis",
        category: "Data & AI",
        tech: "Python, Pandas, NumPy, Matplotlib, Seaborn",
        desc: "Comprehensive loan portfolio risk assessment using statistical analysis and EDA to identify default patterns and risk segments.",
        problem: "Financial institutions need to proactively identify high-risk loan segments to minimize defaults and optimize their lending strategy.",
        solution: "Performed end-to-end EDA on loan portfolio data — cleaning duplicates, engineering risk features, and building visualizations that surface default probability by borrower profile, loan type, and repayment history.",
        achievements: [
            "Identified top 3 high-risk borrower segments driving 68% of defaults",
            "Reduced manual risk tagging effort by automating feature engineering with Pandas",
            "Produced interactive Seaborn visualizations adopted for quarterly risk reporting"
        ],
        metrics: ["68% of defaults pinpointed", "3 risk segments identified", "EDA on 10K+ records"],
        github: "https://github.com/harishgg20/Loan-Portfolio-Risk-Analysis",
        demo: "#"
    },
    {
        title: "Inventory & Sales Analytics",
        category: "Data & AI",
        tech: "Python, SQL, Pandas, Power BI, Excel",
        desc: "End-to-end inventory and sales analytics pipeline that surfaces stock trends, demand forecasting, and revenue insights.",
        problem: "Retail businesses often suffer from stockouts or overstocking due to poor visibility into sales velocity and inventory levels.",
        solution: "Built a data pipeline that ingests raw inventory and sales data, cleans and transforms it, and generates Power BI dashboards tracking KPIs like stock turnover rate, sell-through %, and revenue by category.",
        achievements: [
            "Delivered a Power BI dashboard tracking 8 key inventory KPIs in real-time",
            "Reduced data preparation time by 60% through automated SQL pipeline",
            "Uncovered $50K+ in slow-moving stock causing revenue leakage across categories"
        ],
        metrics: ["60% faster data prep", "8 KPIs tracked live", "$50K+ stock waste found"],
        github: "https://github.com/harishgg20/Inventory-Sales-Analytics",
        demo: "#"
    },
    {
        title: "Alteryx Retail Sales Analysis",
        category: "Data & AI",
        tech: "Alteryx, Excel, Data Blending, ETL",
        desc: "Retail sales analysis workflow built in Alteryx, automating data blending, cleansing, and KPI reporting from raw transactional data.",
        problem: "Large retail datasets from multiple stores require complex data blending and transformation before any analysis can begin, causing delays.",
        solution: "Designed an Alteryx workflow that auto-ingests multi-source retail data, applies transformation logic including deduplication, date parsing and category mapping, and outputs clean datasets ready for dashboard consumption.",
        achievements: [
            "Automated ETL for 5+ store data sources into a single clean dataset",
            "Cut data preparation time from hours to minutes using Alteryx workflows",
            "Standardized KPI definitions across regions, enabling consistent reporting"
        ],
        metrics: ["5+ sources merged", "Hours → Minutes ETL", "Consistent cross-region KPIs"],
        github: "https://github.com/harishgg20/Alteryx_Retail_Sales_Analysis",
        demo: "#"
    },
    {
        title: "KYC Customer Risk Analysis",
        category: "Data & AI",
        tech: "Python, Jupyter, Pandas, Matplotlib, Seaborn",
        desc: "Python project for validating customer KYC data, cleaning duplicates, and visualizing risk scores based on FATF/OFAC compliance.",
        problem: "Compliance teams face challenges manually verifying whether customer records meet FATF/OFAC standards, especially with large, duplicate-laden datasets.",
        solution: "Built a Jupyter-based pipeline that validates customer fields, flags FATF/OFAC-listed entities, removes duplicates, and generates risk score visualizations segmented by country, transaction size, and customer type.",
        achievements: [
            "Flagged 120+ high-risk customer records against FATF/OFAC watchlists",
            "Achieved 95%+ data quality score post-deduplication and field validation",
            "Delivered risk heatmaps by country and transaction size for compliance review"
        ],
        metrics: ["120+ risks flagged", "95%+ data quality", "FATF/OFAC compliant"],
        github: "https://github.com/harishgg20/Customer-Data-Validation-KYC-Risk-Analysis",
        demo: "#"
    },
    {
        title: "UPI Transaction Analysis",
        category: "Data & AI",
        tech: "Power BI, Excel, DAX, Data Modeling",
        desc: "Power BI dashboard analyzing UPI transactions to uncover payment trends, peak usage times, and failure rate patterns.",
        problem: "Digital payment platforms need to monitor transaction volumes and failure rates in real-time to ensure reliability and identify bottlenecks.",
        solution: "Created an interactive Power BI report using an Excel UPI dataset — built star-schema data model, authored DAX measures for failure rate, peak hours, and merchant category breakdown, with drill-through capability.",
        achievements: [
            "Identified peak transaction hours enabling proactive server scaling decisions",
            "Reduced failure rate investigation time with drill-through merchant breakdowns",
            "Built a reusable DAX library of 12+ measures for payment analytics reporting"
        ],
        metrics: ["12+ DAX measures built", "Failure rate tracked live", "Peak hour insights delivered"],
        github: "https://github.com/harishgg20/UPI-Transaction-Analysis",
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
                    {project.achievements && project.achievements.length > 0 && (
                        <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6 space-y-4">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="w-1 h-6 bg-amber-400 rounded-full" />
                                What I Achieved
                            </h3>
                            <ul className="space-y-3">
                                {project.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                                        <span className="text-slate-300 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
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
    <div onClick={onClick} className="group bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 cursor-pointer relative flex flex-col">
        <div className="h-44 bg-gradient-to-br from-slate-800 to-violet-900/20 relative group-hover:from-slate-700 group-hover:to-cyan-900/20 transition-all duration-500 flex items-center justify-center overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
            <Code2 className="text-slate-600 group-hover:text-cyan-400/50 transition-colors w-16 h-16" />
            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="px-4 py-2 bg-cyan-600 text-white rounded-full text-sm font-medium flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Eye size={16} /> View Case Study
                </span>
            </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">{project.title}</h3>
            <p className="text-slate-400 text-sm mb-5 line-clamp-2 flex-1">{project.desc}</p>

            {/* Metrics chips */}
            {project.metrics && (
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.metrics.map((m, i) => (
                        <span
                            key={i}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20"
                        >
                            <TrendingUp size={11} />
                            {m}
                        </span>
                    ))}
                </div>
            )}

            <div className="text-xs text-violet-400 font-mono border-t border-slate-700/50 pt-4">{project.tech}</div>
        </div>
    </div>
);

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = projectsData;

    return (
        <section id="projects" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        <span className="border-b-4 border-cyan-500 pb-1">Featured Projects</span>
                    </h2>
                    <p className="text-slate-400">What I've built recently</p>
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
