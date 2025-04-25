import React from "react";
import TherapyList from "./TherapyList";
import TherapyBoxes from "./TherapyBoxes";

function Therapy() {
    return (
        <>
            <div className=" py-100 h-screen px-20 ">
                <button className=" text-[#4F46E5] bg-[#E5DEFF]  rounded-full w-fit px-2 h-[2.5rem] ">
                    Professional Support
                </button>
                <div className="flex justify-between gap-10">
                    <div>
                        <div className="font-playfair font-bold text-4xl pt-10">
                            Your Complete Mental Wellness Solution
                        </div>
                        <div className="text-gray-500 text-xl font-medium pt-4 pr-20">
                            Find the right therapist who understands your unique
                            needs. Our platform makes it easy to schedule
                            sessions, whether in-person or virtual, so you can
                            get the support you need, when you need it.
                        </div>
                        <div className="pt-10">
                            {TherapyList.map((therapy, index) => (
                                <div className="flex items-center gap-3">
                                    <div>{therapy.icon}</div>
                                    <div>
                                        <div>{therapy.title}</div>
                                        <div>{therapy.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className=" ">
                        <div className="bg-gradient-to-r from-[#F2FCE2] to-[#E5DEFF] rounded-2xl px-10 w-[45rem]">
                            <div className="font-playfair font-bold text-xl py-5 text-center">
                                Our Therapists
                            </div>
                            <div className="text-gray-500 text-lg font-light text-center pb-10 pt-3 ">
                                Our network includes hundreds of licensed
                                professionals ready to support you.
                            </div>
                        </div>
                        <div className="grid grid-cols-2  gap-20 pt-10  ">
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
                            <div className=" bg-gradient-to-r from-[#FFDEE2] to-[#E5DEFF] rounded-2xl">
                                <TherapyBoxes
                                    heading={"+200"}
                                    subheading={
                                        "Licensed therapists ready to help"
                                    }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Therapy;
