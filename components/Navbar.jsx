'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top >= -100 && rect.top <= 300;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const NavLink = ({ id, label }) => (
        <button
            onClick={() => scrollToSection(id)}
            className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300
        ${activeSection === id ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}
      `}
        >
            {label}
            <span className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300
        ${activeSection === id ? 'w-full' : 'w-0'}
      `} />
        </button>
    );

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-cyan-500/20 hover:scale-105 transition-all duration-300"
                    onClick={() => scrollToSection('home')}
                >
                    <span className="text-white font-bold text-xl tracking-tight">HG</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-2">
                    {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map(item => (
                        <NavLink key={item} id={item} label={item.charAt(0).toUpperCase() + item.slice(1)} />
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-slate-300 hover:text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 py-4 px-6 flex flex-col space-y-4 shadow-xl">
                    {['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className="text-left text-slate-300 hover:text-cyan-400 py-2 capitalize"
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </nav>
    );
}
