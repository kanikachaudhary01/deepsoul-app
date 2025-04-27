import React from "react";
import FeatureBox from "./FeatureBox";
import { Calendar, Heart, User, MessageCircle, Book } from "lucide-react";

function Features() {
    return (
        <>
            <div className="flex flex-col text-center items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 pt-10 sm:pt-16">
                <div className="font-playfair font-bold text-2xl sm:text-4xl md:text-5xl leading-tight">
                    Your Complete Mental Wellness Solution
                </div>
                <div className="text-gray-500 text-sm sm:text-lg md:text-xl font-medium max-w-[800px] pt-4 sm:pt-6">
                    DeepSoul combines multiple approaches to provide
                    comprehensive support for your mental wellbeing journey.
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 px-6 sm:px-12 md:px-20 pt-16">
                <FeatureBox
                    icon={<Calendar />}
                    heading={"Therapy Booking"}
                    subheading={
                        "Schedule sessions with licensed therapists who match your needs and preferences. Easy booking, rescheduling, and virtual sessions."
                    }
                />
                <FeatureBox
                    icon={<Heart />}
                    heading={"Self-help Exercises"}
                    subheading={
                        "Access guided meditations, journaling prompts, breathing exercises, and personalized activities to build resilience and mindfulness."
                    }
                />
                <FeatureBox
                    icon={<User />}
                    heading={"Therapist Buddy"}
                    subheading={
                        "Your assigned therapist keeps track of your progress, provides personalized exercises, and is available when you need guidance."
                    }
                />
                <FeatureBox
                    icon={<MessageCircle />}
                    heading={"Supportive Community"}
                    subheading={
                        "Connect with others who understand what you're going through. Share experiences, offer support, and never feel alone in your journey."
                    }
                />
                <FeatureBox
                    icon={<Book />}
                    heading={"Wellness Resources"}
                    subheading={
                        "Explore our extensive library of articles, blogs, audiobooks, and podcasts covering various mental health topics."
                    }
                />
            </div>
        </>
    );
}

export default Features;
