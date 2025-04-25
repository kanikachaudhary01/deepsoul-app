import React from "react";
import HeroBoxes from "./HeroBoxes";

function Hero() {
    return (
        <>
            <div className="flex items-center justify-between h-screen px-20 ">
                <div>
                    <div className="font-playfair font-bold text-[4rem] leading-15">
                        Your Journey to{" "}
                        <span className="bg-gradient-to-r from-[#1EAEDB] to-[#4F46E5] bg-clip-text text-transparent ">
                            inner peace{" "}
                        </span>
                        begins here
                    </div>
                    <div className="text-gray-500 text-xl font-medium pt-4 pr-20">
                        DeepSoul connects you with professional therapists,
                        supportive community, and powerful self-help tools for
                        your mental wellbeing journey.
                    </div>
                </div>
                <div className="flex flex-col gap-40 pl-20">
                    <div className="flex items-center gap-30">
                        <HeroBoxes heading={"Mental Health Quiz"} subheading={"Understand your emotional wellbeing"}/>
                        <HeroBoxes heading={"Upcoming Therapy Session"} subheading={"Today at 3:00 PM with Dr. Sarah"}/>
                    </div>

                    <div className="flex items-center gap-30">
                        <HeroBoxes heading={"Daily Journal"} subheading={"Take a moment to reflect on your feelings today"}/>
                        <HeroBoxes heading={"Community Support"} subheading={"Connect with others who understand"}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
