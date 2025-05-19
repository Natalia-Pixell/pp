import Link from 'next/link';
import Image from "next/image";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <Image src="/images/blume.png" alt="Logo" width={32} height={32}/>
        <span className="text-2xl font-bold">Natalia Jagiela</span>
      </div>
        <div className="space-x-7  p-2 rounded-4xl">
          <Link href="/" className="navlink">Home</Link>
          <Link href="/projects" className="navlink">Projecte</Link>
          <Link href="/contact" className="navlink">Blog</Link>
        </div>
        <div className="flex gap-7 text-lg">
        <a href="https://www.linkedin.com/in/natalia-jagiela-1a8912341/" target="_blank" rel="noopener noreferrer" className="ico"><FaLinkedin className="w-6 h-6" /></a>
        <a href="https://github.com/Natalia-Pixell" target="_blank" rel="noopener noreferrer" className="ico"><FaGithub className="w-6 h-6" /></a>
        <a href="https://www.instagram.com/n_nati_n/" target="_blank" rel="noopener noreferrer" className="ico"><FaInstagram className="w-6 h-6" /></a>
      </div>
      </div>
    </nav>
  );
}