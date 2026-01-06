'use client';
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactItem = ({ icon, text, href, target }) => (
    <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-colors group h-full">
        {href ? (
            <a href={href} target={target} rel={target === '_blank' ? 'noreferrer' : undefined} className="flex flex-col items-center gap-2 w-full h-full cursor-pointer">
                <div className="p-3 bg-slate-800 rounded-full group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">{icon}</div>
                <span className="text-slate-300 group-hover:text-cyan-400 text-sm break-all transition-colors">{text}</span>
            </a>
        ) : (
            <div className="flex flex-col items-center gap-2 w-full h-full">
                <div className="p-3 bg-slate-800 rounded-full">{icon}</div>
                <span className="text-slate-300 text-sm">{text}</span>
            </div>
        )}
    </div>
);

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        <span className="border-b-4 border-cyan-500 pb-1">Get In Touch</span>
                    </h2>
                    <p className="text-slate-400">Let's build something amazing together</p>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-3xl border border-slate-700 shadow-2xl mt-8">
                    <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                        Whether you have a question, a project proposal, or just want to say hi, my inbox is always open.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        <ContactItem icon={<Mail className="text-cyan-400" />} text="harishgouda52001@gmail.com" href="https://mail.google.com/mail/?view=cm&fs=1&to=harishgouda52001@gmail.com" target="_blank" />
                        <ContactItem icon={<Phone className="text-violet-400" />} text="+91 91410 74129" href="tel:+919141074129" />
                        <ContactItem icon={<MapPin className="text-emerald-400" />} text="Bengaluru, India" href="https://www.google.com/maps/place/Bengaluru,+Karnataka,+India" target="_blank" />
                    </div>

                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=harishgouda52001@gmail.com" target="_blank" rel="noreferrer" className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-transform hover:-translate-y-1">
                        Say Hello
                    </a>
                </div>
            </div>
        </section>
    );
}
