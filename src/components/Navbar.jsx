//navbar
import React, { useState, useEffect } from "react";
import { X, AlignJustify,Sun,Moon } from "lucide-react";

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isDarkMode , setIsDarkMode]=useState(false);

    function SidebarHandler() {
        setSidebarOpen(!sidebarOpen);
    }

    function isDarkModeHandler(){
        setIsDarkMode(!isDarkMode)
    }

    useEffect(() => {
        const root = window.document.documentElement;
        if (isDarkMode) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      }, [isDarkMode]);

    return (
        <>
            <div className="flex justify-between items-center px-8 sm:px-20 py-4 border-b border-gray-200 fixed w-full z-50 top-0 left-0 bg-transparent backdrop-blur-md dark:bg-gray-700">
                <div className="flex items-center gap-2">
                    <img
                        src="/icon.webp"
                        alt="Logo"
                        className="w-12 h-12 rounded-full"
                    />
                    <div className="bg-gradient-to-r from-[#1EAEDB] to-[#4F46E5] bg-clip-text text-transparent text-[1.5rem] font-extrabold font-playfair">
                        Deep Soul
                    </div>
                </div>

                <div className="gap-6 text-gray-500 dark:text-white font-medium hidden sm:flex">
                    <div className="hover:text-[#1EAEDB] cursor-pointer">
                        Features
                    </div>
                    <div className="hover:text-[#1EAEDB] cursor-pointer">
                        Therapy
                    </div>
                    <div className="hover:text-[#1EAEDB] cursor-pointer">
                        Self Help
                    </div>
                    <div className="hover:text-[#1EAEDB] cursor-pointer">
                        Community
                    </div>
                    <div className="hover:text-[#1EAEDB] cursor-pointer">
                        Resources
                    </div>
                    <div className="" onClick={isDarkModeHandler}>
                        {
                            isDarkMode ? <Sun/> : <Moon/>
                            
                        }
                    </div>
                </div>

                <div
                    className="flex sm:hidden cursor-pointer text-2xl"
                    onClick={SidebarHandler}
                >
                    {sidebarOpen ? <X /> : <AlignJustify />}
                </div>
            </div>
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
                    sidebarOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out z-40 p-8`}
            >
                <div className="flex flex-col gap-8 text-gray-700 font-semibold text-lg mt-10">
                    <div className="hover:text-[#1EAEDB] cursor-pointer">
                        Features
                    </div>
                    <div className="hover:text-[#1EAEDB] cursor-pointer">
                        Therapy
                    </div>
                    <div className="hover:text-[#1EAEDB] cursor-pointer">
                        Self Help
                    </div>
                    <div className="hover:text-[#1EAEDB] cursor-pointer">
                        Community
                    </div>
                    <div className="hover:text-[#1EAEDB] cursor-pointer">
                        Resources
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;