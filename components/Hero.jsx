'use client';
import React from 'react';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

const SocialLink = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-cyan-500 hover:text-white transition-all duration-300 border border-slate-700 hover:border-cyan-500"
    >
        {icon}
    </a>
);

export default function Hero() {
    const scrollToContact = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-20 left-20 w-72 h-72 bg-violet-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px]" />

            <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6 text-center md:text-left">

                    {/* Open to Work Badge */}
                    <div className="flex justify-center md:justify-start">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Open to Work — Full-time &amp; Freelance
                        </span>
                    </div>

                    <h2 className="text-cyan-400 font-medium tracking-wide">Hello, I'm</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Harish <span className="text-slate-500">Gouda</span>
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-slate-400 font-light">
                        Data Analyst
                    </h3>

                    {/* Location + availability line */}
                    <p className="flex items-center justify-center md:justify-start gap-1.5 text-slate-500 text-sm">
                        <MapPin size={14} className="text-cyan-500" />
                        Bengaluru, India &nbsp;·&nbsp; Available for Data Analyst roles &amp; remote opportunities
                    </p>

                    <p className="text-slate-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        I specialise in <strong className="text-slate-300">SQL, Python, Power BI & Tableau</strong> — transforming raw data into dashboards, risk models, and business insights that help teams make faster, smarter decisions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <button
                            onClick={scrollToContact}
                            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-violet-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1"
                        >
                            Let's Talk
                        </button>
                        <a
                            href="https://drive.google.com/file/d/1QOoxO2aY59rP3ljYl_kErTTkHdVfI2nc/view?usp=sharing"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-3 border border-slate-700 text-slate-300 rounded-full font-medium hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                            <Download size={18} />
                            Resume
                        </a>
                    </div>

                    <div className="flex gap-6 justify-center md:justify-start pt-6">
                        <SocialLink href="https://github.com/harishgg20" icon={<Github size={22} />} />
                        <SocialLink href="https://linkedin.com/in/harishgouda20" icon={<Linkedin size={22} />} />
                        <SocialLink href="https://mail.google.com/mail/?view=cm&fs=1&to=harishgouda52001@gmail.com" icon={<Mail size={22} />} />
                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 group cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-violet-600 rounded-full animate-pulse opacity-20 blur-xl group-hover:from-emerald-500 group-hover:to-green-500 group-hover:opacity-60 transition-all duration-500" />
                        <div className="relative w-full h-full rounded-full border-2 border-slate-700 overflow-hidden bg-slate-800 shadow-2xl group-hover:border-emerald-500 transition-colors duration-500 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                            {/* Uses GitHub avatar */}
                            <img
                                src="https://github.com/harishgg20.png"
                                alt="Harish Gouda"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
