import React from "react";
import { Link } from "react-router-dom";

const Options = () => {
    return (
        <div className="grid grid-cols-3 gap-y-8 py-8 px-2">
            <div className="text-center flex flex-col justify-center items-center">
                <Link to="deposit">
                    <div className="rounded-xl w-10 h-10 p-8 flex justify-center items-center bg-gray-500 bg-opacity-30">
                        <span className="material-symbols-outlined text-blue-700 text-4xl">
                            checkbook
                        </span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">Recharge</p>
                </Link>
            </div>

            <div className="text-center flex flex-col justify-center items-center">
                <Link to="widthdraw">
                    <div className="rounded-xl w-10 h-10 p-8 flex justify-center items-center bg-gray-500 bg-opacity-30">
                        <span className="material-symbols-outlined text-blue-700 text-4xl">
                            open_in_browser
                        </span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">Widthdraw</p>
                </Link>
            </div>

            <div className="text-center flex flex-col justify-center items-center">
                <Link to="teams">
                    <div className="rounded-xl w-10 h-10 p-8 flex justify-center items-center bg-gray-500 bg-opacity-30">
                        <span className="material-symbols-outlined text-blue-700 text-4xl">
                            groups
                        </span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">Team</p>
                </Link>
            </div>

            <div className="text-center flex flex-col justify-center items-center">
                <Link to="how_works">
                    <div className="rounded-xl w-10 h-10 p-8 flex justify-center items-center bg-gray-500 bg-opacity-30">
                        <span className="material-symbols-outlined text-blue-700 text-4xl">
                            hub
                        </span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">How works</p>
                </Link>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
                <Link to="my_project">
                    <div className="rounded-xl w-10 h-10 p-8 flex justify-center items-center bg-gray-500 bg-opacity-30">
                        <span className="material-symbols-outlined text-blue-700 text-4xl">
                            open_in_new
                        </span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">My project</p>
                </Link>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
                <Link to="activity">
                    <div className="rounded-xl w-10 h-10 p-8 flex justify-center items-center bg-gray-500 bg-opacity-30">
                        <span className="material-symbols-outlined text-blue-700 text-4xl">
                            browse_activity
                        </span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2">Activity</p>
                </Link>
            </div>
        </div>
    );
};

export default Options;
