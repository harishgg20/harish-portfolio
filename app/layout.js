import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Harish Gouda | Full-Stack Developer & Data Analyst',
    description: 'Portfolio of Harish Gouda - Full-Stack Developer, Data Analyst, and AI-Driven BI Builder.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased selection:bg-cyan-500/30`}>
                {children}
            </body>
        </html>
    )
}
