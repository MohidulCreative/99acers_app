import React from "react";
import AccountOptions from "../components/Account/AccountOptions";

const Account = () => {
    return (
        <div className="py-2 px-2">
            <div className="flex justify-start items-center">
                <div className="w-14 h-14 ml-4 bg-gray-500 rounded-full flex justify-center items-center">
                    <p className="text-2xl">M</p>
                </div>
                <div className="px-4">
                    <h2>userId: 8653859822</h2>
                    <p>Balance: ₹ 240/-</p>
                </div>
            </div>

            <div className="flex justify-around items-center py-4 mt-2 gap-1">
                <div className="text-left bg-[crimson] w-1/3 h-16 rounded p-2">
                    <p className="text-[11px]">Project income</p>
                    <h2 className="py-1">₹ 500/-</h2>
                </div>
                <div className="text-left bg-[crimson] w-1/3 h-16 rounded p-2">
                    <p className="text-[11px]">Commision</p>
                    <h2 className="py-1">₹ 50/-</h2>
                </div>
                <div className="text-left bg-[crimson] w-1/3 h-16 rounded p-2">
                    <p className="text-[11px]">Total income</p>
                    <h2 className="py-1">₹ 8700/-</h2>
                </div>
            </div>

            <div className="flex justify-center items-center gap-4">
                <button className="p-2 bg-blue-500 text-white text-[11px] rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Withdraw
                </button>
                <button className="p-2 bg-orange-500 text-white text-[11px] rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Add money
                </button>
            </div>
            <AccountOptions />
        </div>
    );
};

export default Account;
