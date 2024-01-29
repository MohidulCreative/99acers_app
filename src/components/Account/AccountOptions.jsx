import React from "react";

const AccountOptions = () => {
    return (
        <div className="mx-2 my-4 p-2 grid grid-cols-4 bg-slate-700 border border-gray-300 rounded">
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-3xl text-blue-500">
                    account_balance
                </span>
                <p className="text-[10px] leading-[0.70rem]">Add Bank</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-3xl text-blue-500">
                    checkbook
                </span>
                <p className="text-[10px] leading-[0.70rem]">Fund Details</p>
            </div>
            <div className="text-center py-4">
                <i className="fa fa-bolt fa-fw fa-2x  text-3xl text-blue-500"></i>
                <p className="text-[11px] leading-[1rem]">Invite</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-3xl text-blue-500">
                    open_in_new
                </span>
                <p className="text-[10px] leading-[0.70rem]">My project</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-3xl text-blue-500">
                    settings
                </span>
                <p className="text-[10px] leading-[0.70rem]">Settings</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-3xl text-blue-500">
                    leaderboard
                </span>
                <p className="text-[10px] leading-[0.70rem]">Activity</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-3xl text-blue-500">
                    task
                </span>
                <p className="text-[10px] leading-[0.70rem]">Personal Info</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-3xl text-blue-500">
                    history
                </span>
                <p className="text-[10px] leading-[0.70rem]">History</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-3xl text-blue-500">
                    icecream
                </span>
                <p className="text-[10px] leading-[0.70rem]">Reward</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-3xl text-blue-500">
                    face
                </span>
                <p className="text-[10px] leading-[0.70rem]">New Feature</p>
            </div>
            <div className="text-center py-4">
                <span className="material-symbols-outlined text-3xl text-blue-500">
                    logout
                </span>
                <p className="text-[10px] leading-[0.70rem]">Logout</p>
            </div>
        </div>
    );
};

export default AccountOptions;
