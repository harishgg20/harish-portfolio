'use client';
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

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

export default function Footer() {
    return (
        <footer className="py-8 bg-slate-950 border-t border-slate-800 text-center text-slate-500">
            <p className="flex items-center justify-center gap-2 text-sm">
                © {new Date().getFullYear()} Designed & Built by <span className="text-slate-300 font-medium">Harish Gouda</span>
            </p>
            <div className="flex justify-center gap-6 mt-4">
                <SocialLink href="https://github.com/harishgg20" icon={<Github size={18} />} />
                <SocialLink href="https://linkedin.com/in/harishgouda20" icon={<Linkedin size={18} />} />
            </div>
        </footer>
    );
}
