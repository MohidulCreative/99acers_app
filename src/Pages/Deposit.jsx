import React, { useState } from "react";
import { toast } from "react-toastify";

const Deposit = () => {
    const [channelChange, setChannelChange] = useState(false);
    const [channelChange1, setChannelChange1] = useState(false);
    const [channelChange2, setChannelChange2] = useState(true);
    let [addAmount, setAddAmount] = useState(500);
    console.log(addAmount);
    const AddAmount = (amount) => {
        setAddAmount(amount);
        console.log(amount);
    };

    const handleChannelChange = (e) => {
        const targetId = e.target.id;
        if (targetId === "checkbox1") {
            setChannelChange(e.target.checked);
            setChannelChange1(!e.target.checked);
            setChannelChange2(!e.target.checked);
        } else if (targetId === "checkbox2") {
            setChannelChange1(e.target.checked);
            setChannelChange(!e.target.checked);
            setChannelChange2(!e.target.checked);
        } else if (targetId === "checkbox3") {
            setChannelChange2(e.target.checked);
            setChannelChange(!e.target.checked);
            setChannelChange1(!e.target.checked);
        }
    };

    const toastTest = () => {
        toast.info("under development", { autoClose: 3000 });
    };

    return (
        <div className="mb-20 flex flex-col items-center justify-center mx-auto">
            <h1 className="text-center mx-auto mt-2 text-3xl font-bold pb-8">
                Deposit
            </h1>
            <div className="w-[300px] mx-auto flex flex-col justify-center items-center bg-gray-700 p-4 rounded-md">
                <h3 className="pb-2 ml-[-92px] text-[crimson]">
                    Available balance: ₹50
                </h3>
                <input
                    className="w-full p-1.5 rounded-md text-[white] font-semibold border bg-gray-700 outline-none border-[crimson] appearance-none focus:outline-none focus:shadow-outline"
                    type="number"
                    value={addAmount}
                />
                <h3 className="font-semibold p-2 text-xl text-[crimson]">or</h3>
                <div className="grid grid-cols-3 gap-2">
                    <div onClick={() => AddAmount(1000)} className="bg-[crimson] py-2 px-4 rounded-md">
                        <strong>1000</strong>
                    </div>
                    <div onClick={() => AddAmount(2000)} className="bg-[crimson] py-2 px-4 rounded-md">
                        <strong>2000</strong>
                    </div>
                    <div onClick={() => AddAmount(4000)} className="bg-[crimson] py-2 px-4 rounded-md">
                        <strong>4000</strong>
                    </div>
                    <div onClick={() => AddAmount(6000)} className="bg-[crimson] py-2 px-4 rounded-md">
                        <strong>6000</strong>
                    </div>
                    <div onClick={() => AddAmount(10000)} className="bg-[crimson] py-2 px-4 rounded-md">
                        <strong>10000</strong>
                    </div>
                    <div onClick={() => AddAmount(50000)} className="bg-[crimson] py-2 px-4 rounded-md">
                        <strong>50000</strong>
                    </div>
                </div>
            </div>

            <div className="pt-8 mx-auto">
                <h2>Select The Deposit Channel</h2>
                <div className="w-[300px] p-2 bg-gray-700 rounded-md flex items-center mt-2">
                    <input
                        className="rounded-full h-4 w-4 border-gray-300 focus:ring-offset-transparent"
                        type="checkbox"
                        id="checkbox1"
                        checked={channelChange}
                        onChange={(e) => handleChannelChange(e)}
                    />
                    <div className="px-4">
                        <label
                            htmlFor="checkbox1"
                            className="text-[crimson] text-sm font-semibold"
                        >
                            Payment limit
                        </label>
                        <br />
                        <label
                            htmlFor="checkbox1"
                            className="text-xs font-semibold mt-[-5px]"
                        >
                            ₹500 - ₹2000
                        </label>
                    </div>
                </div>
                <div className="w-[300px] p-2 bg-gray-700 rounded-md flex items-center mt-2">
                    <input
                        className="rounded-full h-4 w-4 border-gray-300 focus:ring-offset-transparent"
                        type="checkbox"
                        id="checkbox2"
                        checked={channelChange1}
                        onChange={(e) => handleChannelChange(e)}
                    />
                    <div className="px-4">
                        <label
                            htmlFor="checkbox2"
                            className="text-[crimson] text-sm font-semibold"
                        >
                            Payment limit
                        </label>
                        <br />
                        <label
                            htmlFor="checkbox2"
                            className="text-xs font-semibold mt-[-5px]"
                        >
                            ₹1000 - ₹10000
                        </label>
                    </div>
                </div>
                <div className="w-[300px] p-2 bg-gray-700 rounded-md flex items-center mt-2">
                    <input
                        className="rounded-full h-4 w-4 border-gray-300 focus:ring-offset-transparent"
                        type="checkbox"
                        id="checkbox3"
                        checked={channelChange2}
                        onChange={(e) => handleChannelChange(e)}
                    />
                    <div className="px-4">
                        <label
                            htmlFor="checkbox3"
                            className="text-[crimson] text-sm font-semibold"
                        >
                            Payment limit
                        </label>
                        <br />
                        <label
                            htmlFor="checkbox3"
                            className="text-xs font-semibold mt-[-5px]"
                        >
                            ₹50000 - ₹200000
                        </label>
                    </div>
                </div>
            </div>
            <button
                onClick={toastTest}
                className="mx-auto bg-[crimson] py-2 px-4 mt-2 rounded-md"
            >
                deposit
            </button>
        </div>
    );
};

export default Deposit;
