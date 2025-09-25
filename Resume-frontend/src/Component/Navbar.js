import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; // nice icons
import { Outlet, Link } from "react-router-dom";
import Footer from "../pages/Footer";


function Navbar() {
    const [theme, setTheme] = useState("light");

    // Load saved theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }, []);

    // Toggle theme
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };
    return (
        // className="pt-16"

        <div>
            <div className='w-[90%] mt-[2%] mx-auto bg-gray-800 text-white h-16 flex items-center rounded-3xl fixed top-0 left-1/2 transform -translate-x-1/2 shadow-lg z-50 bg-opacity-80'>
                {/* Navbar */}
                <nav className='flex justify-between items-center w-full px-6'>

                    {/* img */}
                    <div ><img src="/logo192.png" alt="Logo" className='h-8 w-auto' /></div>

                    {/* Navigation Links */}
                    <ul className='flex space-x-6 '>
                        <Link to="/" className='hover:text-gray-300 hover:underline cursor-pointer'>Home</Link>
                        <Link to="/About" className='hover:text-gray-300 hover:underline cursor-pointer'>About</Link>
                        <Link to="/blogs" className='hover:text-gray-300 hover:underline cursor-pointer'>Blog</Link>
                        <Link to="/coverletter" className='hover:text-gray-300 hover:underline cursor-pointer'>Cover Letter</Link>
                    </ul>
                </nav>
                {/* Theme Toggle Button */}                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-700 dark:bg-gray-600 mr-4"
                >
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                </button>
            </div>
            <Outlet />
            <Footer />
        </div>
        

    )
}

export default Navbar