import React from "react";
import HeroBoxes from "./HeroBoxes";

function Hero() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="md:grid md:grid-cols-2 md:items-center md:gap-16 lg:gap-20">
          <div className="mb-8 md:mb-0">
            <div className="font-playfair font-bold text-4xl sm:text-5xl lg:text-[4rem] leading-tight lg:leading-snug">
              Your Journey to{" "}
              <span className="bg-gradient-to-r from-[#1EAEDB] to-[#4F46E5] bg-clip-text text-transparent ">
                inner peace{" "}
              </span>
              begins here
            </div>
            <div className="text-gray-500 text-lg sm:text-xl font-medium pt-4 md:pr-10 lg:pr-20">
              DeepSoul connects you with professional therapists, supportive
              community, and powerful self-help tools for your mental wellbeing
              journey.
            </div>
          </div>
          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col sm:flex-row items-center sm:gap-6 lg:gap-10">
              <HeroBoxes
                heading={"Mental Health Quiz"}
                subheading={"Understand your emotional wellbeing"}
              />
              <HeroBoxes
                heading={"Upcoming Therapy Session"}
                subheading={"Today at 3:00 PM with Dr. Sarah"}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center sm:gap-6 lg:gap-10">
              <HeroBoxes
                heading={"Daily Journal"}
                subheading={"Take a moment to reflect on your feelings today"}
              />
              <HeroBoxes
                heading={"Community Support"}
                subheading={"Connect with others who understand"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;