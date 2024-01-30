import React from "react";
import AccountOptions from "../components/Account/AccountOptions";

const Account = () => {
    return (
        <div className="py-4 px-2">
            <div className="flex justify-start items-center">
                <div className="w-14 h-14 ml-4 bg-gray-500 rounded-full flex justify-center items-center" style={{backgroundImage: 'url("logo2.png")', backgroundPosition: "center", backgroundSize: "cover",}}>
                </div>
                <div className="px-4">
                    <h2>userId: 8653859822</h2>
                    <p>Balance: ₹ 240/-</p>
                </div>
            </div>

            <div className="flex justify-around items-center py-4 mt-2 gap-2">
                <div className="text-left bg-[#dc143c] w-1/3 rounded p-2 text-white">
                    <p className="text-xs md:text-sm lg:text-base xl:text-lg font-semibold">
                       Invest Income
                    </p>
                    <h2 className="py-1 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                        ₹ 8,750
                    </h2>
                </div>
                <div className="text-left bg-[#dc143c] w-1/3 rounded p-2 text-white">
                    <p className="text-xs md:text-sm lg:text-base xl:text-lg font-semibold">
                        Commission
                    </p>
                    <h2 className="py-1 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                        ₹ 50
                    </h2>
                </div>
                <div className="text-left bg-[#dc143c] w-1/3 rounded p-2 text-white">
                    <p className="text-xs md:text-sm lg:text-base xl:text-lg font-semibold">
                        Total Income
                    </p>
                    <h2 className="py-1 text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold">
                        ₹ 8,700
                    </h2>
                </div>
            </div>

            <div className="flex justify-center items-center gap-4">
                <button className="py-2 px-4 bg-blue-500 text-white text-sm rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    Withdraw
                </button>
                <button className="p-2 px-4 bg-orange-500 text-white text-sm rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
                    Add money
                </button>
            </div>
            <AccountOptions />
        </div>
    );
};

export default Account;
