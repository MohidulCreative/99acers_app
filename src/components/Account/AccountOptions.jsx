import React from "react";

const AccountOptions = () => {
    return (
        <div className="mx-2 my-4 p-2 grid grid-cols-4 bg-slate-700 border border-gray-300 rounded">
            <div className="text-center py-2">
                <span className="material-symbols-outlined text-xl text-blue-500">
                    account_balance
                </span>
                <p className="text-[10px] leading-[0.20rem]">Add Bank</p>
            </div>
            <div className="text-center py-2">
                <span className="material-symbols-outlined text-xl text-blue-500">
                    checkbook
                </span>
                <p className="text-[10px] leading-[0.20rem]">Fund Details</p>
            </div>
            <div className="text-center py-2">
                <i className="fa fa-bolt fa-fw fa-2x  text-2xl text-blue-500"></i>
                <p className="text-[10px] leading-[0.30rem]">Invite</p>
            </div>
            <div className="text-center py-2">
                <span className="material-symbols-outlined text-xl text-blue-500">
                    icecream
                </span>
                <p className="text-[10px] leading-[0.20rem]">Reward</p>
            </div>
            <div className="text-center py-2">
                <span className="material-symbols-outlined text-xl text-blue-500">
                    settings
                </span>
                <p className="text-[10px] leading-[0.20rem]">Settings</p>
            </div>
            <div className="text-center py-2">
                <span className="material-symbols-outlined text-xl text-blue-500">
                    leaderboard
                </span>
                <p className="text-[10px] leading-[0.20rem]">Activity</p>
            </div>
            <div className="text-center py-2">
                <span className="material-symbols-outlined text-xl text-blue-500">
                    task
                </span>
                <p className="text-[10px] leading-[0.20rem]">Personal Info</p>
            </div>
            <div className="text-center py-2">
                <span className="material-symbols-outlined text-xl text-blue-500">
                    history
                </span>
                <p className="text-[10px] leading-[0.20rem]">History</p>
            </div>
            <div className="text-center py-2">
                <span className="material-symbols-outlined text-xl text-blue-500">
                    face
                </span>
                <p className="text-[10px] leading-[0.20rem]">New Feature</p>
            </div>
            <div className="text-center py-2">
                <span className="material-symbols-outlined text-xl text-blue-500">
                    logout
                </span>
                <p className="text-[10px] leading-[0.20rem]">Logout</p>
            </div>
        </div>
    );
};

export default AccountOptions;
