import React from "react";
import SelfBox from "./SelfBox";
import { Activity, Book, Timer, Play } from "lucide-react";

function SelfHelp() {
  return (
    <div className="mt-24 sm:mt-32 md:mt-40 pt-8 sm:pt-16 md:pt-20 bg-gradient-to-b from-[#F2FCE2] pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-12 md:mb-16">
          <button className="text-[#4F46E5] bg-[#E5DEFF] rounded-full w-fit px-4 py-2 text-sm sm:text-base">
            Daily Practice
          </button>
          <div className="font-playfair font-bold text-3xl sm:text-4xl pt-6 md:pt-10 text-center">
            Self-Help Tools For Your Wellbeing
          </div>
          <p className="text-gray-500 text-lg sm:text-xl font-medium pt-4 max-w-md sm:max-w-lg md:max-w-2xl text-center">
            Build resilience and mindfulness with our extensive library of guided
            exercises, meditations, and personalized activities.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10 lg:gap-20">
          <div className="shadow-lg px-6 sm:px-10 rounded-lg bg-white py-8 sm:py-10 gap-5 md:w-[60%]">
            <div className="text-xl sm:text-2xl font-semibold pb-6 sm:pb-10">
              Featured Exercises
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <SelfBox
                bgColor={"bg-violet-400"}
                icon={<Activity />}
                heading={"Guided Meditation"}
                subheading={"10 min"}
              />
              <SelfBox
                bgColor={"bg-green-400"}
                icon={<Timer />}
                heading={"Mindful Journaling"}
                subheading={"10 min"}
              />
              <SelfBox
                bgColor={"bg-yellow-400"}
                icon={<Book />}
                heading={"Breathing Exercise"}
                subheading={"10 min"}
              />
              <SelfBox
                bgColor={"bg-violet-400"}
                icon={<Play />}
                heading={"Sleep Stories"}
                subheading={"10 min"}
              />
            </div>
            <div className="pt-6 sm:pt-8">
              <div className="text-xl sm:text-2xl font-semibold py-3 sm:py-4">
                Your Daily Progress
              </div>
              <div className="w-full h-4 rounded-full bg-gray-300 overflow-hidden my-2 sm:my-3">
                <div className="bg-gradient-to-r from-[#1EAEDB] to-[#4F46E5] h-full w-[60%] rounded-r-full"></div>
              </div>
              <div className="flex justify-between items-center text-sm sm:text-base text-gray-400">
                <div>3 of 5 exercises completed</div>
                <div>60%</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:gap-8 md:w-[40%]">
            <div className="bg-gradient-to-r from-[#FFDEE2] to-[#E5DEFF] rounded-2xl px-6 sm:px-10 pb-6 sm:pb-8">
              <div className="font-semibold text-2xl sm:text-3xl pt-4 sm:pt-6">
                Personalized For You
              </div>
              <div className="text-gray-500 text-lg pt-2 sm:pt-4">
                Exercises tailored to your needs and goals based on your
                progress.
              </div>
            </div>
            <div className="shadow-lg pb-6 sm:pb-8 px-6 sm:px-10 rounded-lg bg-white">
              <div className="font-semibold text-2xl sm:text-3xl pt-4 sm:pt-6">
                Track Your Mood
              </div>
              <div className="text-gray-500 pt-2 sm:pt-4 text-lg">
                Monitor your emotional wellbeing with our daily check-ins.
              </div>
              <div className="flex items-center justify-between mt-4 sm:mt-6">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-red-200"></div>
                  <div className="text-gray-400 text-sm sm:text-base">Low</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-pink-100"></div>
                  <div className="text-gray-400 text-sm sm:text-base">Mid</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-gradient-to-r from-blue-400 to-purple-500 p-0.5 sm:p-1 rounded-full">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-green-50"></div>
                  </div>
                  <div className="text-gray-400 text-sm sm:text-base">Okay</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-100"></div>
                  <div className="text-gray-400 text-sm sm:text-base">Good</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-orange-100"></div>
                  <div className="text-gray-400 text-sm sm:text-base">Great</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelfHelp;