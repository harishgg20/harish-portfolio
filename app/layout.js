import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const SITE_URL = 'https://harish-portfolio-mkps.vercel.app';
const FULL_NAME = 'Harish Gouda';
const TITLE = 'Harish Gouda | Data Analyst — SQL, Python, Power BI & Tableau';
const DESCRIPTION =
    'Portfolio of Harish Gouda, a Data Analyst based in Bengaluru, India. Specialising in SQL, Python, Power BI, Tableau, and Excel. MCA graduate with internship experience at Deloitte, UptoSkills & 360DigiTMG. Open to full-time Data Analyst roles.';

export const metadata = {
    metadataBase: new URL(SITE_URL),
    title: TITLE,
    description: DESCRIPTION,
    keywords: [
        'Harish Gouda',
        'Data Analyst',
        'Data Analyst Bengaluru',
        'SQL Data Analyst',
        'Python Data Analyst',
        'Power BI Developer',
        'Tableau Developer',
        'Business Intelligence',
        'Data Analytics Portfolio',
        'MCA Data Analyst',
        'Deloitte Intern',
        'Harish Gouda portfolio',
        'harishgg20',
    ],
    authors: [{ name: FULL_NAME, url: 'https://github.com/harishgg20' }],
    creator: FULL_NAME,
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true },
    },
    alternates: {
        canonical: SITE_URL,
    },
    openGraph: {
        type: 'website',
        url: SITE_URL,
        title: TITLE,
        description: DESCRIPTION,
        siteName: `${FULL_NAME} | Portfolio`,
        images: [
            {
                url: 'https://github.com/harishgg20.png',
                width: 400,
                height: 400,
                alt: 'Harish Gouda — Data Analyst',
            },
        ],
        locale: 'en_IN',
    },
    twitter: {
        card: 'summary',
        title: TITLE,
        description: DESCRIPTION,
        images: ['https://github.com/harishgg20.png'],
    },
};

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: FULL_NAME,
    url: SITE_URL,
    image: 'https://github.com/harishgg20.png',
    jobTitle: 'Data Analyst',
    description: DESCRIPTION,
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressCountry: 'IN',
    },
    sameAs: [
        'https://github.com/harishgg20',
        'https://linkedin.com/in/harishgouda20',
    ],
    knowsAbout: ['SQL', 'Python', 'Power BI', 'Tableau', 'Data Analytics', 'Business Intelligence', 'Alteryx'],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased selection:bg-cyan-500/30`}>
                {children}
            </body>
        </html>
    )
}
