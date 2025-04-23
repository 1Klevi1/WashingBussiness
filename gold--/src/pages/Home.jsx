// src/pages/Home.js
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/Hero";
import AboutUs from "../components/About";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Layout from "../components/Layout"; // Import the Layout component

export default function Home() {
    return (
        <div className="font-sans text-gray-800">
            <Layout>
                <Header />
                <HeroSection />
                <AboutUs />
                <Services />
                <Pricing />
                <Contact />
                <Footer />
            </Layout>
        </div>
    );
}
