// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import { EB_Garamond } from "next/font/google";

const eb = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "400"], // oder was du brauchst
  variable: "--font-eb", // CSS Variable setzen
});


export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Created with Next.js and Tailwind',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={eb.variable}>
      <body className=''>
        <Navbar />
        {children}</body>
    </html>
  );
}