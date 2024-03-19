import React, { useState } from "react";
import { Link } from "react-router-dom";
import BeatLoader from "react-spinners/BeatLoader";

const AccountOptions = () => {
    const [loading, setLoading] = useState(false);
    
    const clickHandler = () => {
        setLoading(true);
        localStorage.removeItem("user");
        location.reload();
    };

    return (
        <div className="mx-2 my-4 p-2 grid grid-cols-4 bg-slate-700 border border-gray-300 rounded">
            <div className="text-center py-4">
            {loading ? (
                    <BeatLoader color="#36d7b7" size={10} />
                ) : (
                    <div>
                        <Link
                            to="/addbank"
                            className="material-symbols-outlined text-4xl text-blue-500"
                        >
                             account_balance
                        </Link>
                        <p className="text-xs leading-[1rem]">Add Bank</p>
                    </div>
                )}
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-4xl text-blue-500">
                    checkbook
                </span>
                <p className="text-xs leading-[1rem]">Fund Details</p>
            </div>
            <div className="text-center py-4">
                <i className="fa fa-bolt fa-fw fa-2x  text-4xl text-blue-500"></i>
                <p className="text-xs leading-[1.5rem]">Invite</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-4xl text-blue-500">
                    open_in_new
                </span>
                <p className="text-xs leading-[1rem]">My project</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-4xl text-blue-500">
                    settings
                </span>
                <p className="text-xs leading-[1rem]">Settings</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-4xl text-blue-500">
                    leaderboard
                </span>
                <p className="text-xs leading-[1rem]">Activity</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-4xl text-blue-500">
                    task
                </span>
                <p className="text-xs leading-[1rem]">Personal Info</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-4xl text-blue-500">
                    history
                </span>
                <p className="text-xs leading-[1rem]">History</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-4xl text-blue-500">
                    icecream
                </span>
                <p className="text-xs leading-[1rem]">Reward</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-4xl text-blue-500">
                    face
                </span>
                <p className="text-xs leading-[1rem]">New Feature</p>
            </div>
            <div className="text-center py-4 flex items-center justify-center">
                {loading ? (
                    <BeatLoader color="#36d7b7" size={10} />
                ) : (
                    <div>
                        <Link
                            to=""
                            onClick={clickHandler}
                            className="material-symbols-outlined text-4xl text-blue-500"
                        >
                            logout
                        </Link>
                        <p className="text-xs leading-[1rem]">Logout</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AccountOptions;
