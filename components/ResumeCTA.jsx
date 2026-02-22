'use client';
import React from 'react';
import { Download, FileText, ArrowRight } from 'lucide-react';

const RESUME_URL = "https://drive.google.com/file/d/1QOoxO2aY59rP3ljYl_kErTTkHdVfI2nc/view?usp=sharing";

export default function ResumeCTA() {
    return (
        <section className="py-16 px-6 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-violet-600/10 to-cyan-600/5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl">

                    {/* Icon */}
                    <div className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                        <FileText size={36} className="text-white" />
                    </div>

                    {/* Text */}
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">My Resume</p>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                            Interested in working together?
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            My resume covers my experience at <strong className="text-slate-300">Deloitte, UptoSkills & 360DigiTMG</strong>, all 5 data analytics projects, and <strong className="text-slate-300">8 certifications</strong> including Alteryx Designer Core.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
                        <a
                            href={RESUME_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
                        >
                            <Download size={18} />
                            View Resume
                        </a>
                        <a
                            href="mailto:harishgouda52001@gmail.com"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-600 text-slate-300 font-medium rounded-xl hover:bg-slate-700 hover:text-white hover:border-slate-500 transition-all duration-300 whitespace-nowrap"
                        >
                            Let's Connect
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
