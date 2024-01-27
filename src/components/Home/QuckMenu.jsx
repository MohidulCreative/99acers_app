// RoundedBoxes.js
import React from "react";

const QuckMenu = () => {
    return (
        <div className="flex gap-3 p-2 mb-4 justify-center items-center">
            {/* Home */}
            <div className="text-center">
                <div className="rounded-full p-3 bg-black bg-opacity-90 text-white inline-block">
                    <i className="fas fa-home text-blue-700 text-sm"></i>
                </div>
                <p className="text-gray-300 text-xs mt-1">Home</p>
            </div>

            {/* Telegram */}
            <div className="text-center">
                <div className="rounded-full p-3 bg-black bg-opacity-30 text-white inline-block">
                    <i className="fas fa-paper-plane text-teal-500"></i>
                </div>
                <p className="text-gray-300 text-xs mt-1 font-semibold">
                    Telegram
                </p>
            </div>

            {/* WhatsApp */}
            <div className="text-center">
                <div className="rounded-full p-3 bg-black bg-opacity-30 text-white inline-block">
                    <i className="fab fa-whatsapp text-red-500"></i>
                </div>
                <p className="text-gray-300 text-xs mt-1 font-semibold">
                    WhatsApp
                </p>
            </div>

            {/* Service */}
            <div className="text-center">
                <div className="rounded-full p-3 bg-black bg-opacity-30 text-white inline-block">
                    <i className="fas fa-cogs text-orange-500"></i>
                </div>
                <p className="text-gray-300 text-xs mt-1 font-semibold">
                    Service
                </p>
            </div>

            {/* Team */}
            <div className="text-center">
                <div className="rounded-full p-3 bg-black bg-opacity-30 text-white inline-block">
                    <i className="fas fa-users text-purple-500"></i>
                </div>
                <p className="text-gray-300 text-xs mt-1 font-semibold">Team</p>
            </div>
        </div>
    );
};

export default QuckMenu;
