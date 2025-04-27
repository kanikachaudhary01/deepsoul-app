//footer
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
    return (
        <footer className=" text-gray-700 dark:text-white pt-10 border-t border-gray-300 pb-5">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    <div>
                        <div className="flex items-center mb-4">
                            <img
                                src="/icon.webp"
                                alt=""
                                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2"
                            />
                            <div className="bg-gradient-to-r from-[#1EAEDB] to-[#4F46E5] bg-clip-text text-transparent text-xl sm:text-2xl font-extrabold font-playfair">
                                Deep Soul
                            </div>
                        </div>
                        <p className="text-sm sm:text-base mb-4">
                            Your journey to inner peace and mental wellbeing
                            starts here.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-blue-600" />
                            <Twitter className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-blue-400" />
                            <Instagram className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-pink-500" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-md sm:text-lg font-semibold mb-4">
                            Features
                        </h2>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li>Therapy Booking</li>
                            <li>Self-Help Exercises</li>
                            <li>Therapist Buddy</li>
                            <li>Community Support</li>
                            <li>Wellness Resources</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-md sm:text-lg font-semibold mb-4">
                            Resources
                        </h2>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li>Articles</li>
                            <li>Blogs</li>
                            <li>Podcasts</li>
                            <li>Audiobooks</li>
                            <li>Research</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-md sm:text-lg font-semibold mb-4">
                            Company
                        </h2>
                        <ul className="space-y-2 text-sm sm:text-base">
                            <li>About Us</li>
                            <li>Our Team</li>
                            <li>Careers</li>
                            <li>Contact</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 dark:text-white">
                    <p>© 2025 DeepSoul. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:underline">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:underline">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:underline">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;