
import React from "react";
import HeroBoxes from "./HeroBoxes";

function Hero() {
    return (
        <div className="px-6 sm:px-8 md:px-12 lg:px-20 my-20 md:py-0">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 lg:gap-16 h-screen">
                <div className="mb-10 md:mb-0">
                    <h1 className="font-playfair font-bold text-3xl sm:text-5xl lg:text-[4rem] leading-16">
                        Your Journey to{" "}
                        <span className="bg-gradient-to-r from-[#1EAEDB] to-[#4F46E5] bg-clip-text text-transparent">
                            inner peace
                        </span>{" "}
                        begins here
                    </h1>
                    <p className="text-gray-500 text-base sm:text-lg md:text-xl font-medium pt-4 md:pr-6 lg:pr-16">
                        DeepSoul connects you with professional therapists,
                        supportive community, and powerful self-help tools for
                        your mental wellbeing journey.
                    </p>
                </div>

                <div className="lg:space-y-40 space-y-10">
                    <div className="flex flex-col sm:flex-row items-center lg:gap-30 gap-10">
                        <HeroBoxes
                            heading={"Mental Health Quiz"}
                            subheading={"Understand your emotional wellbeing"}
                        />
                        <HeroBoxes
                            heading={"Upcoming Therapy Session"}
                            subheading={"Today at 3:00 PM with Dr. Sarah"}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center lg:gap-30 gap-10">
                        <HeroBoxes
                            heading={"Daily Journal"}
                            subheading={
                                "Take a moment to reflect on your feelings today"
                            }
                        />
                        <HeroBoxes
                            heading={"Community Support"}
                            subheading={"Connect with others who understand"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;