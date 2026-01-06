export const portfolioData = {
    hero: {
        name: "Harish Gouda",
        title: "Full-Stack Developer, Data Analyst & Innovator",
        description: "I build scalable full-stack applications and data intelligence platforms that turn complex data into actionable insights.",
        resumeLink: "https://drive.google.com/file/d/11_QZ4V7BF4fSi_NTq5sw1N9Ej7BasUVu/view?usp=sharing",
        socials: {
            github: "https://github.com/harishgg20",
            linkedin: "https://linkedin.com/in/harishgouda20",
            email: "harishgouda52001@gmail.com"
        }
    },

    about: {
        title: "About Me",
        subtitle: "My journey into code and data",
        description: [
            "I am an MCA student at Sir M Visvesvaraya Institute of Technology, Bengaluru, with strong expertise in full-stack development and data analytics.",
            "My passion lies in bridging the gap between application development and data science. I enjoy building modern frontends and robust backends, then supercharging them with analytical pipelines and BI dashboards to solve real-world problems."
        ],
        stats: [
            { number: "03+", label: "Internships" },
            { number: "10+", label: "Projects" },
            { number: "24/7", label: "Committed" },
            { number: "100%", label: "Delivered" }
        ]
    },

    skills: {
        marquee: [
            "React.js", "Next.js", "Python", "TypeScript", "Tailwind CSS", "Node.js",
            "PostgreSQL", "Pandas", "NumPy", "Scikit-Learn", "Tableau", "Git",
            "FastAPI", "Express", "Matplotlib", "Seaborn", "AWS", "Docker"
        ],
        categories: [
            {
                title: "Full-Stack Dev",
                skills: ['Next.js', 'React.js', 'Tailwind', 'Node.js', 'FastAPI', 'PostgreSQL']
            },
            {
                title: "Data Analytics",
                skills: ['Python', 'Pandas', 'NumPy', 'EDA', 'Scikit-Learn', 'Statistics']
            },
            {
                title: "Visualization",
                skills: ['Tableau', 'Excel', 'Matplotlib', 'Seaborn', 'Dashboards']
            },
            {
                title: "DevOps & Tools",
                skills: ['Git', 'GitHub', 'Docker', 'AWS', 'Linux', 'CI/CD']
            }
        ]
    },

    experience: [
        {
            role: "Data Analyst Intern",
            company: "UptoSkills",
            period: "Feb 2025 - May 2025",
            description: [
                "Analyzed structured datasets using Python & Excel to identify key trends.",
                "Built comprehensive dashboards and reports for business insights.",
                "Transformed analytics requirements into actionable data solutions."
            ]
        },
        {
            role: "Data Analytics Intern",
            company: "Deloitte Australia",
            period: "Jan 2025",
            description: [
                "Built interactive Tableau dashboards for telemetry data visualization.",
                "Modeled complex data for business intelligence and reporting.",
                "Collaborated with cross-functional teams to define data KPIs."
            ]
        },
        {
            role: "Data Analytics Intern",
            company: "360DigiTMG",
            period: "Nov 2024 - Jan 2025",
            description: [
                "Optimized machine downtime using advanced statistical analysis.",
                "Delivered insights and visualizations that improved operational performance.",
                "Performed EDA on industrial datasets to predict failure points."
            ]
        }
    ],

    projects: {
        spotlight: {
            title: "PolicyPal",
            category: "Full Stack",
            tech: "Next.js, Tailwind CSS, Node.js, PostgreSQL",
            desc: "A web platform that helps Indian citizens instantly check eligibility for government schemes using a rule-based engine, multi-language support, reminders, and accessibility-compliant UX.",
            problem: "Citizens often struggle to navigate fragmented government portals to find schemes they are eligible for, facing challenges like complex criteria, language barriers, and lack of awareness about application deadlines.",
            solution: "PolicyPal aggregates schemes into a single platform with a rule-based eligibility engine. It features multi-language support, automated reminders, and a WCAG-compliant accessible UX, ensuring users are matched instantly and redirected to official portals for final application.",
            github: null,
            demo: null
        },
        featured: [
            {
                title: "Dataview AI",
                category: "Full Stack",
                tech: "Next.js, Tailwind, FastAPI, PostgreSQL, Gemini",
                desc: "Full-stack BI dashboard with real-time charts, filters, automated executive insights, and voice-narrated AI summaries.",
                problem: "Business data is often siloed in complex databases, making it difficult for non-technical stakeholders to extract immediate insights without waiting for analyst reports.",
                solution: "I built a Generative AI-powered dashboard that connects directly to PostgreSQL. It uses Gemini to interpret natural language queries (e.g., 'Show sales trend last month') and converts them into SQL, displaying real-time visualizations and voice-narrated summaries.",
                github: "https://github.com/harishgg20/Dataview-AI",
                demo: "#"
            },
            {
                title: "TalentID Career Platform",
                category: "Full Stack",
                tech: "Next.js, Tailwind, Node.js, Express, TS",
                desc: "Career platform for freshers with login, job listings, application workflows, and responsive UI.",
                problem: "Fresh graduates often struggle to track job applications across multiple disparate portals, leading to missed opportunities and lack of feedback.",
                solution: "TalentID is a centralized career portal featuring a unified application tracking system (ATS). I implemented secure authentication, a real-time status workflow, and a responsive dashboard that aggregates job listings relevant to entry-level candidates.",
                github: "https://github.com/harishgg20",
                demo: "#"
            },
            {
                title: "Documind AI",
                category: "Data & AI",
                tech: "Next.js, TypeScript, AI Integration",
                desc: "AI-powered document assistant that enables users to chat with their PDFs, extract insights, and generate summaries instantly.",
                problem: "Manual extraction of key information from lengthy legal and technical PDF documents is time-consuming and prone to human error.",
                solution: "I developed a RAG (Retrieval-Augmented Generation) pipeline using vector embeddings. Users can upload PDFs, and the system indexes the content, allowing them to ask context-aware questions and receive instant, accurate citations from the document.",
                github: "https://github.com/harishgg20/documind-ai",
                demo: "#"
            },
            {
                title: "Data Analyst Intelligence",
                category: "Data & AI",
                tech: "Python, AI/ML, Data Visualization",
                desc: "Advanced data intelligence platform designed to uncover actionable insights through automated analysis and predictive modeling.",
                problem: "Exploratory Data Analysis (EDA) involves repetitive coding tasks for every new dataset, slowing down the time-to-insight for data analysts.",
                solution: "This platform automates the EDA process. By simply uploading a dataset, the system runs statistical tests, detects anomalies, generates correlation heatmaps, and builds predictive models automatically, reducing initial analysis time by 70%.",
                github: "https://github.com/harishgg20/Data-Analyst-Intelligence-Platform",
                demo: "#"
            },
            {
                title: "AI-CAD Copilot",
                category: "Data & AI",
                tech: "Python, Computer Vision, AI",
                desc: "Intelligent assistant for CAD workflows that uses AI to automate design tasks, detect errors, and optimize geometry.",
                problem: "CAD designers spend hours manually checking for geometric errors and optimizing standard parts, which creates bottlenecks in the manufacturing workflow.",
                solution: "I integrated computer vision algorithms to analyze CAD schematics in real-time. The AI Copilot highlights geometric inconsistencies, suggests standard part replacements, and automates repetitive drafting tasks, streamlining the design-to-production pipeline.",
                github: "https://github.com/harishgg20/ai-cad-copilot",
                demo: "#"
            }
        ]
    },

    education: {
        degrees: [
            { degree: "MCA (Master of Computer Applications)", school: "Sir M Visvesvaraya Institute of Technology", year: "Graduated" },
            { degree: "BSc Computer Science", school: "KCS Dr. A.V. Baliga Arts & Science College", year: "Graduated" }
        ],
        certifications: [
            "IBM (IT & Customer Engagement)",
            "Microsoft (Power BI)",
            "Cisco (Python & Analytics)",
            "HackerRank (SQL)",
            "freeCodeCamp (Python)",
            "Tata Imagination Challenge 2024",
            "Accenture Innovation Badge"
        ]
    },

    contact: {
        email: "harishgouda52001@gmail.com",
        phone: "+91 91410 74129",
        location: "Bengaluru, India"
    }
};
