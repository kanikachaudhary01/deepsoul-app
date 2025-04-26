import React from "react";

function SelfBox({ heading, subheading, icon ,bgColor}) {
    return (
        <>
            <div className="flex items-center gap-5 py-5 pl-5 pr-[10rem] hover:shadow rounded-xl">
                <div className= {`${bgColor} p-4 rounded-full text-white`}>{icon}</div>
                <div>
                    <div className="text-lg font-semibold whitespace-nowrap">{heading}</div>
                    <div className="font-medium text-gray-500">
                        {subheading}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SelfBox;
