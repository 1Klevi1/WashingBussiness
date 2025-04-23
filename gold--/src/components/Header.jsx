import React from "react";

export default function Header() {
    return (
        <header className="bg-light shadow-md px-6 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gold tracking-wide">Gold Lavanderi</h1>
            <nav className="space-x-6">
                <a href="#about" className="text-dark hover:text-gold transition">Rreth Nesh</a>
                <a href="#services" className="text-dark hover:text-gold transition">Shërbimet</a>
                <a href="#pricing" className="text-dark hover:text-gold transition">Çmimet</a>
                <a href="#contact" className="text-dark hover:text-gold transition">Kontakt</a>
            </nav>
        </header>

    );
}
