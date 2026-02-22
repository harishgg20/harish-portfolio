export const portfolioData = {
    hero: {
        name: "Harish Gouda",
        title: "Data Analyst",
        description: "I build data intelligence platforms and analytics solutions that turn complex data into actionable insights.",
        resumeLink: "https://drive.google.com/file/d/1QOoxO2aY59rP3ljYl_kErTTkHdVfI2nc/view?usp=sharing",
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
            "I am an MCA student at Sir M Visvesvaraya Institute of Technology, Bengaluru, with strong expertise in data analytics and data-driven decision making.",
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
            "Python", "Pandas", "NumPy", "SQL", "Tableau", "Power BI",
            "Scikit-Learn", "Matplotlib", "Seaborn", "Excel", "Statistics",
            "EDA", "Machine Learning", "Data Wrangling", "Jupyter", "PostgreSQL"
        ],
        categories: [
            {
                title: "Data Analytics",
                skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'EDA', 'Statistics']
            },
            {
                title: "Machine Learning",
                skills: ['Scikit-Learn', 'Regression', 'Classification', 'Clustering', 'Feature Engineering']
            },
            {
                title: "Visualization",
                skills: ['Tableau', 'Power BI', 'Matplotlib', 'Seaborn', 'Excel Dashboards']
            },
            {
                title: "Data Tools",
                skills: ['PostgreSQL', 'MySQL', 'Jupyter', 'Git', 'Google Colab', 'VS Code']
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
        featured: [
            {
                title: "Dataview AI",
                category: "Data & AI",
                tech: "Next.js, Tailwind, FastAPI, PostgreSQL, Gemini",
                desc: "BI dashboard with real-time charts, filters, automated executive insights, and voice-narrated AI summaries.",
                problem: "Business data is often siloed in complex databases, making it difficult for non-technical stakeholders to extract immediate insights without waiting for analyst reports.",
                solution: "I built a Generative AI-powered dashboard that connects directly to PostgreSQL. It uses Gemini to interpret natural language queries (e.g., 'Show sales trend last month') and converts them into SQL, displaying real-time visualizations and voice-narrated summaries.",
                github: "https://github.com/harishgg20/Dataview-AI",
                demo: "https://dataview-ai.vercel.app"
            },
            {
                title: "Loan Portfolio Risk Analysis",
                category: "Data & AI",
                tech: "Python, Pandas, NumPy, Matplotlib, Seaborn",
                desc: "Comprehensive loan portfolio risk assessment using statistical analysis and EDA to identify default patterns and risk segments.",
                problem: "Financial institutions need to proactively identify high-risk loan segments to minimize defaults and optimize their lending strategy.",
                solution: "Performed end-to-end EDA on loan portfolio data — cleaning duplicates, engineering risk features, and building visualizations that surface default probability by borrower profile, loan type, and repayment history.",
                github: "https://github.com/harishgg20/Loan-Portfolio-Risk-Analysis",
                demo: "#"
            },
            {
                title: "Inventory & Sales Analytics",
                category: "Data & AI",
                tech: "Python, SQL, Pandas, Power BI, Excel",
                desc: "End-to-end inventory and sales analytics pipeline that surfaces stock trends, demand forecasting, and revenue insights.",
                problem: "Retail businesses often suffer from stockouts or overstocking due to poor visibility into sales velocity and inventory levels.",
                solution: "Built a data pipeline that ingests raw inventory and sales data, cleans and transforms it, and generates Power BI dashboards tracking KPIs like stock turnover rate, sell-through %, and revenue by category.",
                github: "https://github.com/harishgg20/Inventory-Sales-Analytics",
                demo: "#"
            },
            {
                title: "Alteryx Retail Sales Analysis",
                category: "Data & AI",
                tech: "Alteryx, Excel, Data Blending, ETL",
                desc: "Retail sales analysis workflow built in Alteryx, automating data blending, cleansing, and KPI reporting from raw transactional data.",
                problem: "Large retail datasets from multiple stores require complex data blending and transformation before any analysis can begin, causing delays.",
                solution: "Designed an Alteryx workflow that auto-ingests multi-source retail data, applies transformation logic including deduplication, date parsing and category mapping, and outputs clean datasets ready for dashboard consumption.",
                github: "https://github.com/harishgg20/Alteryx_Retail_Sales_Analysis",
                demo: "#"
            },
            {
                title: "KYC Customer Risk Analysis",
                category: "Data & AI",
                tech: "Python, Jupyter, Pandas, Matplotlib, Seaborn",
                desc: "Python project for validating customer KYC data, cleaning duplicates, and visualizing risk scores based on FATF/OFAC compliance.",
                problem: "Compliance teams face challenges manually verifying whether customer records meet FATF/OFAC standards, especially with large, duplicate-laden datasets.",
                solution: "Built a Jupyter-based pipeline that validates customer fields, flags FATF/OFAC-listed entities, removes duplicates, and generates risk score visualizations segmented by country, transaction size, and customer type.",
                github: "https://github.com/harishgg20/Customer-Data-Validation-KYC-Risk-Analysis",
                demo: "#"
            },
            {
                title: "UPI Transaction Analysis",
                category: "Data & AI",
                tech: "Power BI, Excel, DAX, Data Modeling",
                desc: "Power BI dashboard analyzing UPI transactions to uncover payment trends, peak usage times, and failure rate patterns.",
                problem: "Digital payment platforms need to monitor transaction volumes and failure rates in real-time to ensure reliability and identify bottlenecks.",
                solution: "Created an interactive Power BI report using an Excel UPI dataset — built star-schema data model, authored DAX measures for failure rate, peak hours, and merchant category breakdown, with drill-through capability.",
                github: "https://github.com/harishgg20/UPI-Transaction-Analysis",
                demo: "#"
            },
            {
                title: "Insurance Customer Analysis",
                category: "Data & AI",
                tech: "Power BI, Excel, Python, Sentiment Analysis",
                desc: "Analytics project on insurance policies, claims, and customer feedback — integrating structured data with sentiment analysis for satisfaction insights.",
                problem: "Insurance companies struggle to combine structured claims data with unstructured customer feedback to get a holistic view of satisfaction drivers.",
                solution: "Integrated Excel-based policy/claims data with NLP sentiment analysis on customer reviews. Built Power BI dashboards tracking premium distribution, claim approval rates, and satisfaction scores segmented by policy type.",
                github: "https://github.com/harishgg20/insurance-customer-analysis",
                demo: "#"
            },
            {
                title: "Power BI Sales Analysis",
                category: "Data & AI",
                tech: "Power BI, DAX, Excel, Data Modeling",
                desc: "Multi-region sales performance dashboard with revenue trend analysis, product mix insights, and manager-level drill-downs.",
                problem: "Regional sales managers need instant visibility into territory performance without requesting analyst-generated reports every week.",
                solution: "Designed a Power BI report with a normalized data model, custom DAX time-intelligence measures (MoM, QoQ growth), and row-level security so each regional manager sees only their territory's data.",
                github: "https://github.com/harishgg20/powerbi-sales-data-analysis",
                demo: "#"
            },
            {
                title: "Blinkit Data Insights",
                category: "Data & AI",
                tech: "Python, Pandas, Matplotlib, Power BI, SQL",
                desc: "Exploratory data analysis on Blinkit grocery delivery data revealing demand patterns, top SKUs, and delivery performance metrics.",
                problem: "Quick-commerce platforms like Blinkit need granular SKU-level demand analytics to optimize inventory placement across dark stores.",
                solution: "Performed in-depth EDA on Blinkit order data — analyzed SKU velocity, category demand curves, and delivery SLA adherence. Created Power BI dashboards for ops teams to monitor dark-store performance.",
                github: "https://github.com/harishgg20/blinkit-data-insights",
                demo: "#"
            },
            {
                title: "Tableau Sales Analysis",
                category: "Data & AI",
                tech: "Tableau, Excel, Sample Superstore Dataset",
                desc: "Tableau sales analysis using the Sample Superstore dataset, featuring profit maps, category breakdowns, and discount impact visualizations.",
                problem: "Business stakeholders need compelling, self-service visuals that explain why certain regions or product categories are underperforming.",
                solution: "Built a multi-page Tableau workbook with geographic profit maps, category/sub-category profit-loss trees, and a discount-vs-profit scatter plot revealing the diminishing returns of aggressive discounting.",
                github: "https://github.com/harishgg20/tableau-sales-project",
                demo: "#"
            },
            {
                title: "SQL Data Analyst Toolkit",
                category: "Data & AI",
                tech: "SQL, Python, PostgreSQL, Jupyter",
                desc: "Collection of SQL queries and Python scripts solving real-world data analyst problems — joins, window functions, CTEs, and aggregations.",
                problem: "Aspiring data analysts need structured, real-world SQL exercises to build query proficiency beyond basic SELECT statements.",
                solution: "Curated a repository of progressively complex SQL challenges — from multi-table joins to recursive CTEs and window functions — paired with Python scripts for data generation, making it a practical analyst training toolkit.",
                github: "https://github.com/harishgg20/SQL-Data-Analyst",
                demo: "#"
            }
        ]
    },

    freelancing: [
        {
            title: "Dosti Hip Hop Cafe",
            client: "Dosti Hip Hop Cafe, Bengaluru",
            category: "Freelance Project",
            tech: "Next.js, Firebase, Tailwind CSS, PWA",
            desc: "A complete cafe management system featuring a live QR-based digital menu, admin dashboard for real-time menu/order management, and PWA support for offline access.",
            features: [
                "QR Code-based digital menu for contactless ordering",
                "Real-time menu management with Firebase backend",
                "Admin dashboard for CRUD operations on menu items",
                "Menu item badges (New, Popular, Spicy, Vegan)",
                "Favorite items functionality for customers",
                "Reorder button for repeat orders",
                "Sales reports export for business analytics",
                "PWA support for offline menu access",
                "Multi-category menu organization",
                "Responsive design for mobile and tablet"
            ],
            problem: "The cafe needed a modern, contactless ordering solution that allows customers to view the menu via QR codes while giving staff real-time control over menu items, pricing, and orders without technical expertise.",
            solution: "I built a cafe management platform with Firebase for real-time data sync. The system features a customer-facing QR menu with categories and item details, an intuitive admin dashboard for menu CRUD operations, order tracking, and sales reports. PWA capabilities ensure the menu works offline for customers.",
            github: "https://github.com/harishgg20/DostiHipHop",
            demo: "https://dosticafe.vercel.app/",
            status: "Completed"
        }
    ],

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
