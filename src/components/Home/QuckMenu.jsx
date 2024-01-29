// RoundedBoxes.js
import React from "react";

const QuckMenu = () => {
    return (
        <div className="flex gap-4 p-2 pt-0 mb-4 bg-black justify-around items-center fixed top-[64px] left-0 right-0 z-30">
            {/* About */}
            <div className="text-center flex flex-col justify-center items-center">
                <div className="rounded-full w-6 h-6 p-5 flex justify-center items-center bg-gray-500 bg-opacity-30">
                    <i className="fas fa-heart text-blue-700 text-sm"></i>
                </div>
                <p className="text-gray-300 text-[9px] mt-1 font-semibold">About</p>
            </div>

            {/* Telegram */}
            <div className="text-center flex flex-col justify-center items-center">
                <div className="rounded-full w-6 h-6 flex justify-center items-center p-5 bg-gray-500 bg-opacity-30">
                    <i className="fas fa-paper-plane text-teal-500"></i>
                </div>
                <p className="text-gray-300 text-[9px]  mt-1 font-semibold">
                    Telegram
                </p>
            </div>

            {/* WhatsApp */}
            <div className="text-center flex flex-col justify-center items-center">
                <div className="rounded-full w-4 h-4 flex justify-center items-center p-5 bg-gray-500 bg-opacity-30">
                    <i className="fab fa-whatsapp text-red-500"></i>
                </div>
                <p className="text-gray-300 text-[9px] mt-1 font-semibold">
                    WhatsApp
                </p>
            </div>

            {/* Service */}
            <div className="text-center flex flex-col justify-center items-center">
                <div className="rounded-full w-4 h-4 flex justify-center items-center p-5 bg-gray-500 bg-opacity-30">
                    <i className="fas fa-cogs text-orange-500"></i>
                </div>
                <p className="text-gray-300 text-[9px] mt-1 font-semibold">
                    Service
                </p>
            </div>

            {/* Team */}
            <div className="text-center flex flex-col justify-center items-center">
                <div className="rounded-full w-4 h-4 flex justify-center items-center p-5 bg-gray-500 bg-opacity-30">
                    <i className="fas fa-book text-purple-500"></i>
                </div>
                <p className="text-gray-300 text-[9px] mt-1 font-semibold">
                    Rules
                </p>
            </div>
        </div>
    );
};

export default QuckMenu;
