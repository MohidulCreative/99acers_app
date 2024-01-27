// RoundedBoxes.js
import React from "react";

const QuckMenu = () => {
    return (
        <div className="flex gap-4 p-2 justify-center items-center">
            {/* Home */}
            <div className="text-center">
                <div className="rounded-full p-3 bg-gray-300 text-white inline-block">
                    <i className="fas fa-home text-blue-700 text-sm"></i>
                </div>
                <p className="text-white text-sm">Home</p>
            </div>

            {/* Telegram */}
            <div className="text-center">
                <div className="rounded-full p-3 bg-gray-300 text-white inline-block">
                    <i className="fas fa-paper-plane text-teal-500"></i>
                </div>
                <p className="text-white text-sm font-semibold mb-2">
                    Telegram
                </p>
            </div>

            {/* WhatsApp */}
            <div className="text-center">
                <div className="rounded-full p-3 bg-gray-300 text-white inline-block">
                    <i className="fab fa-whatsapp text-red-500"></i>
                </div>
                <p className="text-white text-sm font-semibold mb-2">
                    WhatsApp
                </p>
            </div>

            {/* Service */}
            <div className="text-center">
                <div className="rounded-full p-3 bg-gray-300 text-white inline-block">
                    <i className="fas fa-cogs text-orange-500"></i>
                </div>
                <p className="text-white text-sm font-semibold mb-2">Service</p>
            </div>

            {/* Team */}
            <div className="text-center">
                <div className="rounded-full p-3 bg-gray-300 text-white inline-block">
                    <i className="fas fa-users text-purple-500"></i>
                </div>
                <p className="text-white text-sm font-semibold mb-2">Team</p>
            </div>
        </div>
    );
};

export default QuckMenu;
