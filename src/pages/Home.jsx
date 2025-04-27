
import React from "react";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SelfHelp from "../components/SelfHelp";
import Therapy from "../components/Therapy";

function Home() {
    return (
        <div className="dark:bg-gray-700 dark:text-white">
            <Navbar />
            <Hero />
            <Features />
            <Therapy />
            <SelfHelp />
            <Footer />
        </div>
    );
}

export default Home;