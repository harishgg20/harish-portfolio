'use client';
import React, { useState, useEffect } from 'react';
import { Github, Loader2, ExternalLink } from 'lucide-react';

const StatCard = ({ number, label }) => (
    <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500">
            {number}
        </div>
        <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">{label}</div>
    </div>
);

const ContributionGraph = ({ year, username }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState(0);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(false);
            try {
                const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`);
                if (!res.ok) throw new Error('Failed to fetch');
                const json = await res.json();

                setTotal(json.total?.[year] || 0);

                const contributions = json.contributions;
                if (contributions && contributions.length > 0) {
                    const firstDate = new Date(contributions[0].date);
                    const dayOfWeek = firstDate.getDay();
                    const prefix = Array(dayOfWeek).fill(null);
                    setData([...prefix, ...contributions]);
                }
            } catch (err) {
                console.error("Failed to fetch graph", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [year, username]);

    if (loading) return (
        <div className="h-32 flex flex-col items-center justify-center text-slate-500 gap-2">
            <Loader2 className="animate-spin text-cyan-500" size={24} />
            <span className="text-xs">Loading activity...</span>
        </div>
    );

    if (error) return (
        <div className="h-32 flex items-center justify-center text-slate-500 text-sm">
            Unable to load contribution data.
        </div>
    );

    return (
        <div className="w-full">
            <div className="text-slate-400 text-sm mb-3 font-medium">
                <span className="text-white font-bold">{total}</span> contributions in {year}
            </div>
            <div className="overflow-x-auto pb-2 scrollbar-hide">
                <div className="grid grid-rows-7 grid-flow-col gap-[3px] w-max">
                    {data.map((item, i) => (
                        <div
                            key={i}
                            className={`w-3 h-3 rounded-[2px] transition-all duration-200 hover:scale-125 ${!item ? 'bg-transparent' :
                                    item.count === 0 ? 'bg-slate-800' :
                                        item.count < 3 ? 'bg-cyan-900/60' :
                                            item.count < 6 ? 'bg-cyan-700' :
                                                item.count < 10 ? 'bg-cyan-500' : 'bg-cyan-300'
                                }`}
                            title={item ? `${item.date}: ${item.count} contributions` : ''}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};

export default function About() {
    const [contributionYear, setContributionYear] = useState(2025);

    return (
        <section id="about" className="py-24 px-6 relative bg-slate-900/50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        <span className="border-b-4 border-cyan-500 pb-1">About Me</span>
                    </h2>
                    <p className="text-slate-400">My journey into code and data</p>
                </div>

                <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm shadow-xl">
                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        I am an <strong className="text-cyan-400">MCA student at Sir M Visvesvaraya Institute of Technology</strong>, Bengaluru, with strong expertise in full-stack development and data analytics.
                    </p>
                    <p className="text-lg text-slate-300 leading-relaxed mb-6">
                        My passion lies in bridging the gap between application development and data science. I enjoy building modern frontends and robust backends, then supercharging them with analytical pipelines and BI dashboards to solve real-world problems.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-700/50">
                        <StatCard number="03+" label="Internships" />
                        <StatCard number="10+" label="Projects" />
                        <StatCard number="24/7" label="Committed" />
                        <StatCard number="100%" label="Delivered" />
                    </div>

                    {/* GitHub Contribution Graph */}
                    <div className="mt-12 pt-8 border-t border-slate-700/50">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                            <h3 className="text-xl font-bold text-slate-200 flex items-center gap-2">
                                <Github className="text-cyan-400" size={24} />
                                Coding Activity
                            </h3>

                            {/* Year Selector */}
                            <div className="flex bg-slate-950 rounded-lg p-1 border border-slate-800">
                                {[2025, 2026].map(year => (
                                    <button
                                        key={year}
                                        onClick={() => setContributionYear(year)}
                                        className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${contributionYear === year
                                                ? 'bg-cyan-500/20 text-cyan-400 shadow-sm'
                                                : 'text-slate-500 hover:text-slate-300'
                                            }`}
                                    >
                                        {year}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-950/50 p-6 rounded-xl border border-slate-700/50 overflow-hidden">
                            <ContributionGraph year={contributionYear} username="harishgg20" />

                            <div className="flex justify-between items-center mt-4 text-xs text-slate-500 font-mono px-1 border-t border-slate-800 pt-3">
                                <div className="flex items-center gap-2">
                                    <span>Less</span>
                                    <div className="flex gap-1">
                                        <div className="w-2.5 h-2.5 rounded-[2px] bg-slate-800"></div>
                                        <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-900/60"></div>
                                        <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-700"></div>
                                        <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-500"></div>
                                        <div className="w-2.5 h-2.5 rounded-[2px] bg-cyan-300"></div>
                                    </div>
                                    <span>More</span>
                                </div>
                                <a href="https://github.com/harishgg20" target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
                                    View on GitHub <ExternalLink size={10} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
