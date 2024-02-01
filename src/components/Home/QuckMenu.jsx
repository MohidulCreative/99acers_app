// RoundedBoxes.js
import React from "react";
import { Link } from "react-router-dom";

const QuckMenu = () => {
    return (
        <div className="flex gap-4 p-2 mb-4 bg-black justify-around items-center fixed top-[64px] left-0 right-0 z-30">
            {/* About */}
            <Link to="/about">
                <div className="text-center flex flex-col justify-center items-center">
                    <div className="rounded-full w-6 h-6 p-5 flex justify-center items-center bg-gray-500 bg-opacity-30">
                        <i className="fas fa-heart text-blue-700 text-sm"></i>
                    </div>
                    <p className="text-gray-300 text-[9px] mt-1 font-semibold">
                        About
                    </p>
                </div>
            </Link>

            {/* Telegram */}
            <Link to="https://t.me/white_arrow_invest">
                <div className="text-center flex flex-col justify-center items-center">
                    <div className="rounded-full w-6 h-6 flex justify-center items-center p-5 bg-gray-500 bg-opacity-30">
                        <i className="fas fa-paper-plane text-teal-500"></i>
                    </div>
                    <p className="text-gray-300 text-[9px]  mt-1 font-semibold">
                        Telegram
                    </p>
                </div>
            </Link>

            {/* WhatsApp */}
            <Link to="https://whatsapp.com/channel/0029VaAk5jbD38CMnXaH2F1E">
                <div className="text-center flex flex-col justify-center items-center">
                    <div className="rounded-full w-4 h-4 flex justify-center items-center p-5 bg-gray-500 bg-opacity-30">
                        <i className="fab fa-whatsapp text-red-500"></i>
                    </div>
                    <p className="text-gray-300 text-[9px] mt-1 font-semibold">
                        WhatsApp
                    </p>
                </div>
            </Link>

            {/* Service */}
            <Link to="#">
                <div className="text-center flex flex-col justify-center items-center">
                    <div className="rounded-full w-4 h-4 flex justify-center items-center p-5 bg-gray-500 bg-opacity-30">
                        <i className="fas fa-cogs text-orange-500"></i>
                    </div>
                    <p className="text-gray-300 text-[9px] mt-1 font-semibold">
                        Service
                    </p>
                </div>
            </Link>

            {/* Rules */}
            <Link to="/rules">
                <div className="text-center flex flex-col justify-center items-center">
                    <div className="rounded-full w-4 h-4 flex justify-center items-center p-5 bg-gray-500 bg-opacity-30">
                        <i className="fas fa-book text-purple-500"></i>
                    </div>
                    <p className="text-gray-300 text-[9px] mt-1 font-semibold">
                        Rules
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default QuckMenu;
