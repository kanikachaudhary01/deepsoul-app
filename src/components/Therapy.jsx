import React from "react";
import TherapyList from "./TherapyList";
import TherapyBoxes from "./TherapyBoxes";

function Therapy() {
    return (
        <div className="py-20 sm:py-24 md:py-32 px-4 sm:px-8 md:px-16 lg:px-20 bg-white">
            <div className="flex justify-center sm:justify-start">
                <button className="text-[#4F46E5] bg-[#E5DEFF] rounded-full w-fit px-4 py-2 text-sm sm:text-base">
                    Professional Support
                </button>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20 mt-10">
                <div className="flex-1">
                    <h2 className="font-playfair font-bold text-3xl sm:text-4xl pt-6 sm:pt-10">
                        Your Complete Mental Wellness Solution
                    </h2>
                    <p className="text-gray-500 text-base sm:text-lg font-medium pt-4 max-w-2xl">
                        Find the right therapist who understands your unique
                        needs. Our platform makes it easy to schedule sessions,
                        whether in-person or virtual, so you can get the support
                        you need, when you need it.
                    </p>

                    <div className="pt-10 flex flex-col gap-6">
                        {TherapyList.map((therapy, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <div className="text-blue-400 bg-[#F2FCE2] rounded-full w-10 h-10 flex items-center justify-center">
                                    {therapy.icon}
                                </div>
                                <div>
                                    <div className="font-semibold text-lg sm:text-xl">
                                        {therapy.title}
                                    </div>
                                    <div className="text-gray-500 text-sm sm:text-base">
                                        {therapy.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1">
                    <div className="bg-gradient-to-r from-[#F2FCE2] to-[#E5DEFF] rounded-2xl px-6 sm:px-10 py-8 text-center">
                        <h3 className="font-playfair font-bold text-2xl">
                            Our Therapists
                        </h3>
                        <p className="text-gray-500 text-base sm:text-lg font-light mt-2">
                            Our network includes hundreds of licensed
                            professionals ready to support you.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 mt-10">
                        <TherapyBoxes
                            heading={"Dr. Sarah Johnson"}
                            subheading={"Anxiety & Depression"}
                            image={"/sara.webp"}
                        />
                        <TherapyBoxes
                            heading={"Dr. Michael Chen"}
                            subheading={"Trauma & PTSD"}
                            image={"/chen.webp"}
                        />
                        <TherapyBoxes
                            heading={"Dr. Amara Patel"}
                            subheading={"Relationship Issues"}
                            image={"/patel.webp"}
                        />
                        <div className="bg-gradient-to-r from-[#FFDEE2] to-[#E5DEFF] rounded-2xl flex items-center justify-center">
                            <TherapyBoxes
                                heading={"+200"}
                                subheading={"Licensed therapists ready to help"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Therapy;
