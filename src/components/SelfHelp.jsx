import React from "react";
import SelfBox from "./SelfBox";
import { Activity, Book, Timer, Play } from "lucide-react";

function SelfHelp() {
    return (
        <div className="mt-24 sm:mt-32 md:mt-40 pt-10 sm:pt-16 md:pt-20 bg-gradient-to-b from-[#F2FCE2] to-white pb-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-20">
                <div className="flex flex-col items-center justify-center mb-14 md:mb-20">
                    <button className="text-[#4F46E5] bg-[#E5DEFF] rounded-full px-5 py-2 text-sm sm:text-base">
                        Daily Practice
                    </button>
                    <h2 className="font-playfair font-bold text-3xl sm:text-4xl pt-6 md:pt-10 text-center">
                        Self-Help Tools For Your Wellbeing
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg md:text-xl font-medium pt-4 max-w-md sm:max-w-lg md:max-w-2xl text-center">
                        Build resilience and mindfulness with our extensive
                        library of guided exercises, meditations, and
                        personalized activities.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-20">

  <div className="shadow-lg px-6 sm:px-8 md:px-10 rounded-2xl bg-white py-8 sm:py-10 md:w-full lg:w-[60%]">
    <h3 className="text-xl sm:text-2xl font-semibold pb-6 sm:pb-10">
      Featured Exercises
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      <SelfBox bgColor="bg-violet-400" icon={<Activity />} heading="Guided Meditation" subheading="10 min" />
      <SelfBox bgColor="bg-green-400" icon={<Timer />} heading="Mindful Journaling" subheading="10 min" />
      <SelfBox bgColor="bg-yellow-400" icon={<Book />} heading="Breathing Exercise" subheading="10 min" />
      <SelfBox bgColor="bg-violet-400" icon={<Play />} heading="Sleep Stories" subheading="10 min" />
    </div>
    <div className="pt-6 sm:pt-8">
      <h4 className="text-xl sm:text-2xl font-semibold py-3 sm:py-4">
        Your Daily Progress
      </h4>
      <div className="w-full h-4 rounded-full bg-gray-300 overflow-hidden my-2 sm:my-3">
        <div className="bg-gradient-to-r from-[#1EAEDB] to-[#4F46E5] h-full w-[60%] rounded-r-full"></div>
      </div>
      <div className="flex justify-between text-xs sm:text-sm text-gray-400">
        <span>3 of 5 exercises completed</span>
        <span>60%</span>
      </div>
    </div>
  </div>

  <div className="flex flex-col gap-6 md:gap-8 md:w-full lg:w-[40%]">
    <div className="bg-gradient-to-r from-[#FFDEE2] to-[#E5DEFF] rounded-2xl px-6 sm:px-10 py-8">
      <h3 className="font-semibold text-2xl sm:text-3xl mb-2">
        Personalized For You
      </h3>
      <p className="text-gray-500 text-base sm:text-lg">
        Exercises tailored to your needs and goals based on your progress.
      </p>
    </div>

    <div className="shadow-lg rounded-2xl bg-white px-6 sm:px-10 py-8">
      <h3 className="font-semibold text-2xl sm:text-3xl mb-2">
        Track Your Mood
      </h3>
      <p className="text-gray-500 text-base sm:text-lg">
        Monitor your emotional wellbeing with our daily check-ins.
      </p>

      <div className="flex justify-between items-center mt-6">
        {["Low", "Mid", "Okay", "Good", "Great"].map((mood, idx) => (
          <div className="flex flex-col items-center" key={idx}>
            <div className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full ${
              idx === 2
                ? "bg-gradient-to-r from-blue-400 to-purple-500 p-0.5 sm:p-1"
                : "bg-gray-200"
            }`}>
              <div className={`w-full h-full rounded-full ${
                idx === 0 ? "bg-red-200" :
                idx === 1 ? "bg-pink-100" :
                idx === 2 ? "bg-green-50" :
                idx === 3 ? "bg-blue-100" :
                "bg-orange-100"
              }`}></div>
            </div>
            <span className="text-gray-400 text-xs sm:text-sm mt-1">{mood}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
}

export default SelfHelp;
