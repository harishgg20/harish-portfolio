'use client';
import React, { useState } from 'react';
import { Code2, BarChart3, Terminal, Server, Cpu } from 'lucide-react';

const marqueeSkills = [
    "React.js", "Next.js", "Python", "TypeScript", "Tailwind CSS", "Node.js",
    "PostgreSQL", "Pandas", "NumPy", "Scikit-Learn", "Tableau", "Git",
    "FastAPI", "Express", "Matplotlib", "Seaborn", "AWS", "Docker"
];

const SkillCategory = ({ title, skills, icon }) => (
    <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-colors duration-300 group">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform duration-300">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-200">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-900 text-slate-400 text-sm rounded-full border border-slate-700/50 hover:text-cyan-400 transition-colors cursor-default">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const SkillRadar = () => {
    const [hoveredSkill, setHoveredSkill] = useState(null);
    const size = 300;
    const radius = 100;
    const cx = size / 2;
    const cy = size / 2;
    const levels = 4;

    const data = [
        { name: 'Frontend', value: 90 },
        { name: 'Backend', value: 85 },
        { name: 'Data Sci', value: 90 },
        { name: 'DevOps', value: 75 },
        { name: 'Bus. Intel', value: 85 },
    ];

    const getCoordinates = (value, index, total) => {
        const angle = (Math.PI * 2 * index) / total - Math.PI / 2;
        const x = cx + (radius * (value / 100)) * Math.cos(angle);
        const y = cy + (radius * (value / 100)) * Math.sin(angle);
        return { x, y };
    };

    const gridPolygons = Array.from({ length: levels }).map((_, i) => {
        const levelRadius = (i + 1) * (100 / levels);
        const points = data.map((_, index) => {
            const { x, y } = getCoordinates(levelRadius, index, data.length);
            return `${x},${y}`;
        }).join(' ');
        return points;
    });

    const dataPoints = data.map((d, i) => {
        const { x, y } = getCoordinates(d.value, i, data.length);
        return `${x},${y}`;
    }).join(' ');

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            <svg width={size} height={size} className="overflow-visible">
                <defs>
                    <radialGradient id="radarGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="rgba(6, 182, 212, 0.6)" />
                        <stop offset="100%" stopColor="rgba(6, 182, 212, 0.1)" />
                    </radialGradient>
                </defs>

                {gridPolygons.map((points, i) => (
                    <polygon key={i} points={points} fill="none" stroke="#334155" strokeWidth="1" className="opacity-50" />
                ))}

                {data.map((_, i) => {
                    const { x, y } = getCoordinates(100, i, data.length);
                    return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="#334155" strokeWidth="1" className="opacity-50" />;
                })}

                <polygon
                    points={dataPoints}
                    fill="url(#radarGradient)"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    className="drop-shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all duration-300"
                />

                {data.map((d, i) => {
                    const { x, y } = getCoordinates(d.value, i, data.length);
                    const labelCoords = getCoordinates(120, i, data.length);
                    const isHovered = hoveredSkill?.name === d.name;

                    return (
                        <g key={i} onMouseEnter={() => setHoveredSkill(d)} onMouseLeave={() => setHoveredSkill(null)} className="cursor-pointer transition-all duration-300">
                            {isHovered && <line x1={cx} y1={cy} x2={x} y2={y} stroke="#06b6d4" strokeWidth="2" className="animate-in fade-in" />}
                            <text x={labelCoords.x} y={labelCoords.y} textAnchor="middle" dominantBaseline="middle" className={`text-[10px] md:text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${isHovered ? 'fill-cyan-400 font-bold scale-110' : 'fill-slate-400'}`}>{d.name}</text>
                            <circle cx={x} cy={y} r={isHovered ? 6 : 3} className={`transition-all duration-300 ${isHovered ? 'fill-cyan-200 stroke-cyan-500' : 'fill-cyan-400 stroke-slate-900'} stroke-2`} />
                            <circle cx={x} cy={y} r="15" fill="transparent" />
                        </g>
                    )
                })}
            </svg>

            {hoveredSkill && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900/95 border border-cyan-500/50 px-4 py-2 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-md z-10 pointer-events-none animate-in fade-in zoom-in-95 duration-200 text-center">
                    <p className="text-slate-400 text-xs font-medium uppercase tracking-wider mb-0.5">{hoveredSkill.name}</p>
                    <p className="text-cyan-400 font-bold text-2xl">{hoveredSkill.value}%</p>
                </div>
            )}
        </div>
    );
};

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        <span className="border-b-4 border-cyan-500 pb-1">Technical Skills</span>
                    </h2>
                    <p className="text-slate-400">The tools I use to build & analyze</p>
                </div>

                {/* Infinite Marquee */}
                <div className="mb-12 relative">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />

                    <div className="flex overflow-hidden">
                        <div className="flex gap-8 animate-scroll whitespace-nowrap py-4">
                            {[...marqueeSkills, ...marqueeSkills, ...marqueeSkills].map((skill, i) => (
                                <div key={i} className="flex items-center gap-2 px-6 py-3 bg-slate-900/50 border border-slate-800 rounded-full text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 transition-colors cursor-default">
                                    <span className="font-semibold">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-5 gap-8 items-start">
                    <div className="md:col-span-2 bg-slate-900/50 rounded-2xl border border-slate-800 p-6 flex flex-col items-center justify-center relative overflow-hidden h-full min-h-[400px]">
                        <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-2 absolute top-6 left-6">
                            <Cpu className="text-cyan-400" size={24} />
                            Skill Balance
                        </h3>
                        <SkillRadar />
                        <p className="text-center text-sm text-slate-500 mt-4 max-w-xs absolute bottom-6">
                            Hover over a point to see proficiency level.
                        </p>
                    </div>

                    <div className="md:col-span-3 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                        <SkillCategory title="Full-Stack Dev" icon={<Code2 className="text-violet-400" />} skills={['Next.js', 'React.js', 'Tailwind', 'Node.js', 'FastAPI', 'PostgreSQL']} />
                        <SkillCategory title="Data Analytics" icon={<BarChart3 className="text-cyan-400" />} skills={['Python', 'Pandas', 'NumPy', 'EDA', 'Scikit-Learn', 'Statistics']} />
                        <SkillCategory title="Visualization" icon={<Terminal className="text-emerald-400" />} skills={['Tableau', 'Excel', 'Matplotlib', 'Seaborn', 'Dashboards']} />
                        <SkillCategory title="DevOps & Tools" icon={<Server className="text-orange-400" />} skills={['Git', 'GitHub', 'Docker', 'AWS', 'Linux', 'CI/CD']} />
                    </div>
                </div>
            </div>
        </section>
    );
}
