'use client';
import React from 'react';
import { Database, Award, ExternalLink } from 'lucide-react';

const certifications = [
    "Alteryx Designer Core Certification",
    "IBM (IT & Customer Engagement)",
    "Microsoft (Power BI)",
    "Cisco (Python & Analytics)",
    "HackerRank (SQL)",
    "freeCodeCamp (Python)",
    "Tata Imagination Challenge 2024",
    "Accenture Innovation Badge"
];

const EduCard = ({ degree, school, year }) => (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700/50">
        <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center shrink-0 border border-slate-700 text-cyan-400">
            <Database size={20} />
        </div>
        <div>
            <h4 className="text-lg font-bold text-slate-200">{degree}</h4>
            <p className="text-slate-400">{school}</p>
            <span className="text-sm text-violet-500 font-medium">{year}</span>
        </div>
    </div>
);

export default function Education() {
    return (
        <section id="education" className="py-24 px-6 bg-slate-900/50">
            <div className="max-w-5xl mx-auto">
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-white mb-10 flex items-center justify-center gap-3 text-center">
                        <span className="text-cyan-400 text-3xl">🎓</span> Education
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <EduCard degree="MCA (Master of Computer Applications)" school="Sir M Visvesvaraya Institute of Technology" year="Graduated" />
                        <EduCard degree="BSc Computer Science" school="KCS Dr. A.V. Baliga Arts & Science College" year="Graduated" />
                    </div>
                </div>

                <div className="text-center pt-8 border-t border-slate-800/50">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-200 mb-12">Certifications & Achievements</h3>
                    <div className="flex flex-wrap justify-center gap-4 mb-14 max-w-4xl mx-auto">
                        {certifications.map((cert, index) => (
                            <div key={index} className="group relative px-6 py-3 rounded-full bg-slate-900 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)] cursor-default transition-all duration-300 ease-out hover:scale-105 hover:bg-slate-800 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)]">
                                <span className="text-slate-300 font-medium group-hover:text-cyan-50 transition-colors duration-300">{cert}</span>
                            </div>
                        ))}
                    </div>
                    <a href="https://www.linkedin.com/in/harishgouda20/details/certifications/" target="_blank" rel="noreferrer" className="inline-block px-8 py-3 rounded-full border border-cyan-500/60 text-cyan-400 font-medium tracking-wide shadow-[0_0_10px_rgba(6,182,212,0.15)] transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]">
                        View All Certificates on LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}
