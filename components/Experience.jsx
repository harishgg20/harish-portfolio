'use client';
import React from 'react';
import { ChevronRight } from 'lucide-react';

const ExperienceCard = ({ role, company, period, description }) => (
    <div className="relative flex flex-col md:flex-row gap-4 md:gap-10 items-start group">
        <div className="md:w-32 pt-1 md:text-right shrink-0">
            <span className="text-sm font-semibold text-cyan-400">{period}</span>
        </div>
        <div className="absolute left-0 ml-5 md:mx-auto md:left-0 md:right-0 w-3 h-3 bg-slate-600 rounded-full mt-1.5 border-2 border-slate-900 z-10 group-hover:bg-cyan-400 transition-colors" />
        <div className="pl-12 md:pl-0 flex-1">
            <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300">
                <h3 className="text-xl font-bold text-white">{role}</h3>
                <div className="text-violet-400 font-medium mb-4">{company}</div>
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
                    <ExperienceCard
                        role="Data Analyst Intern"
                        company="UptoSkills"
                        period="Feb 2025 - May 2025"
                        description={[
                            "Analyzed structured datasets using Python & Excel to identify key trends.",
                            "Built comprehensive dashboards and reports for business insights.",
                            "Transformed analytics requirements into actionable data solutions."
                        ]}
                    />
                    <ExperienceCard
                        role="Data Analytics Intern"
                        company="Deloitte Australia"
                        period="Jan 2025"
                        description={[
                            "Built interactive Tableau dashboards for telemetry data visualization.",
                            "Modeled complex data for business intelligence and reporting.",
                            "Collaborated with cross-functional teams to define data KPIs."
                        ]}
                    />
                    <ExperienceCard
                        role="Data Analytics Intern"
                        company="360DigiTMG"
                        period="Nov 2024 - Jan 2025"
                        description={[
                            "Optimized machine downtime using advanced statistical analysis.",
                            "Delivered insights and visualizations that improved operational performance.",
                            "Performed EDA on industrial datasets to predict failure points."
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}
