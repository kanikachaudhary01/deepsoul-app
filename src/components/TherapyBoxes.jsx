import React from "react";

function TherapyBoxes({ heading, subheading ,image}) {
    return (
        <div className="p-5 rounded-xl shadow-2xl min-w-[20rem] h-auto flex items-center gap-4">
            <div className="">
                <img src={image} alt="" className="h-[4rem] w-[4rem] rounded-full"/>
            </div>
            <div>
                <div className="text-lg font-semibold ">{heading}</div>
                <div className="font-medium text-gray-500">{subheading}</div>
            </div>
        </div>
    );
}

export default TherapyBoxes;
