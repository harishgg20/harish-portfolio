'use client';
import React from 'react';
import { ChevronRight } from 'lucide-react';
import { portfolioData } from '../app/lib/data';

const ExperienceCard = ({ role, company, period, description, current }) => (
    <div className="relative flex flex-col md:flex-row gap-4 md:gap-10 items-start group">
        <div className="md:w-32 pt-1 md:text-right shrink-0">
            <span className={`text-sm font-semibold ${current ? 'text-emerald-400' : 'text-cyan-400'}`}>{period}</span>
        </div>
        <div className={`absolute left-0 ml-5 md:mx-auto md:left-0 md:right-0 w-3 h-3 rounded-full mt-1.5 border-2 border-slate-900 z-10 transition-colors ${current ? 'bg-emerald-400 group-hover:bg-emerald-300' : 'bg-slate-600 group-hover:bg-cyan-400'}`} />
        <div className="pl-12 md:pl-0 flex-1">
            <div className={`p-6 rounded-xl border transition-all duration-300 ${current ? 'bg-emerald-500/5 border-emerald-500/30 hover:bg-emerald-500/10' : 'bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/80'}`}>
                <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold text-white">{role}</h3>
                    {current && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Present
                        </span>
                    )}
                </div>
                <div className={`font-medium mb-4 ${current ? 'text-emerald-400' : 'text-violet-400'}`}>{company}</div>
                <ul className="space-y-2">
                    {description.map((item, i) => (
                        <li key={i} className="flex items-start text-slate-400 text-sm">
                            <ChevronRight size={16} className="mt-0.5 mr-2 text-cyan-500 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
);

export default function Experience() {
    return (
        <section id="experience" className="py-24 px-6 bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        <span className="border-b-4 border-cyan-500 pb-1">Experience</span>
                    </h2>
                    <p className="text-slate-400">My professional journey</p>
                </div>

                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-700 before:to-transparent">
                    {portfolioData.experience.map((exp, i) => (
                        <ExperienceCard key={i} {...exp} />
                    ))}
                </div>
            </div>
        </section>
    );
}
