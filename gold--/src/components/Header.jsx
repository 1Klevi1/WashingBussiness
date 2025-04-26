import React, { useState } from "react";
import logo from "../assets/logo.png"; // adjust path based on where your logo is

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Toggle the mobile menu
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header
            className="fixed top-0 left-0 w-full z-50 bg-dark shadow-md px-6 py-4 flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
                <img src={logo} alt="Gold Lavanderi Logo" className="h-10 w-10 object-contain"/>
                <h1 className="text-3xl font-bold text-gold tracking-wide">Gold Lavanderi</h1>
            </div>

            {/* Hamburger icon for mobile */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-gold text-3xl">
                    {menuOpen ? '×' : '☰'} {/* Toggle icon */}
                </button>
            </div>

            {/* Navigation - Desktop View */}
            <nav className="lg:flex hidden space-x-6">
                <a href="#about" className="text-gold hover:text-gold transition">Rreth Nesh</a>
                <a href="#services" className="text-gold hover:text-gold transition">Shërbimet</a>
                <a href="#pricing" className="text-gold hover:text-gold transition">Çmimet</a>
                <a href="#contact" className="text-gold hover:text-gold transition">Kontakt</a>
            </nav>

            {/* Navigation - Mobile View (Hamburger menu toggled) */}
            <nav
                className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-dark py-4 px-6`}>
                <a href="#about" className="text-gold hover:text-gold transition mr-6">Rreth Nesh</a>
                <a href="#services" className="text-gold hover:text-gold transition mr-6">Shërbimet</a>
                <a href="#pricing" className="text-gold hover:text-gold transition mr-6">Çmimet</a>
                <a href="#contact" className="text-gold hover:text-gold transition">Kontakt</a>
            </nav>

        </header>
    );
}
