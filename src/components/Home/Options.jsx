import React from "react";

const Options = () => {
    return (
        <div className="grid grid-cols-3 gap-y-8 py-4 px-8">
            <div className="text-center flex flex-col justify-center items-center">
                <div className="rounded-xl w-10 h-10 p-8 flex justify-center items-center bg-gray-500 bg-opacity-30">
                    <span className="material-symbols-outlined text-blue-700 text-4xl">
                        checkbook
                    </span>
                </div>
                <p className="text-gray-300 text-sm mt-2">Recharge</p>
            </div>

            <div className="text-center flex flex-col justify-center items-center">
                <div className="rounded-xl w-10 h-10 p-8 flex justify-center items-center bg-gray-500 bg-opacity-30">
                    <span className="material-symbols-outlined text-blue-700 text-4xl">
                        open_in_browser
                    </span>
                </div>
                <p className="text-gray-300 text-sm mt-2">Widthdraw</p>
            </div>

            <div className="text-center flex flex-col justify-center items-center">
                <div className="rounded-xl w-10 h-10 p-8 flex justify-center items-center bg-gray-500 bg-opacity-30">
                    <span className="material-symbols-outlined text-blue-700 text-4xl">
                        groups
                    </span>
                </div>
                <p className="text-gray-300 text-sm mt-2">Team</p>
            </div>

            <div className="text-center flex flex-col justify-center items-center">
                <div className="rounded-xl w-10 h-10 p-8 flex justify-center items-center bg-gray-500 bg-opacity-30">
                    <span className="material-symbols-outlined text-blue-700 text-4xl">
                        hub
                    </span>
                </div>
                <p className="text-gray-300 text-sm mt-2">How works</p>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
                <div className="rounded-xl w-10 h-10 p-8 flex justify-center items-center bg-gray-500 bg-opacity-30">
                    <span className="material-symbols-outlined text-blue-700 text-4xl">
                        open_in_new
                    </span>
                </div>
                <p className="text-gray-300 text-sm mt-2">My project</p>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
                <div className="rounded-xl w-10 h-10 p-8 flex justify-center items-center bg-gray-500 bg-opacity-30">
                    <span className="material-symbols-outlined text-blue-700 text-4xl">
                      browse_activity
                    </span>
                </div>
                <p className="text-gray-300 text-sm mt-2">Activity</p>
            </div>
        </div>
    );
};

export default Options;
