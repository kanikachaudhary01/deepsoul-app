import React from "react";

function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center px-20 py-4 border-b border-gray-200 fixed w-full z-50 top-0 left-0 bg-transparent backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <img src="/icon.webp" alt="" className="w-15 h-15 rounded-full" />
                    <div className="bg-gradient-to-r from-[#1EAEDB] to-[#4F46E5] bg-clip-text text-transparent text-[1.5rem] font-extrabold font-playfair">Deep Soul</div>
                </div>
                <div className="flex gap-6 text-gray-500 font-medium">
                    <div className="hover:text-[#1EAEDB] cursor-pointer">Features</div>
                    <div className="hover:text-[#1EAEDB] cursor-pointer">Therapy</div>
                    <div className="hover:text-[#1EAEDB] cursor-pointer">Self Help</div>
                    <div className="hover:text-[#1EAEDB] cursor-pointer">Community</div>
                    <div className="hover:text-[#1EAEDB] cursor-pointer">Resources</div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
