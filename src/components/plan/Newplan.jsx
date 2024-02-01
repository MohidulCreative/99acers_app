import React from "react";
// import Img_1 from "../../assets/images/img_1.jpg";
const Newplan = ({ title, img, vip='0', price, days, percent, daily, total }) => {
    return (
        <div className="mt-4 mx-2">
            <div className="w-full flex flex-col md:flex-row justify-between items-start bg-[crimson] rounded p-4 shadow-lg">
                <div className="w-full md:w-[50%] h-auto md:mb-0">
                    <div className="w-full">
                        <img
                            src={img}
                            className="w-full h-[175px] object-cover rounded"
                            alt="Image"
                        />
                    </div>
                    <div className="flex justify-between gap-2 items-center p-2">
                        <p
                            style={{
                                color: "white",
                                fontSize: "14px",
                                fontWeight: "bold",
                            }}
                        >
                            <span className="text-slate-200">Need:</span> VIP{vip}
                        </p>
                        <button className="p-2 bg-blue-500 text-white text-[14px] font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                            Buy Now
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-[50%] text-white">
                    <h2 className="text-lg md:text-xl font-bold">
                        {title}
                    </h2>
                    <div className="flex flex-col justify-center items-start project_detail">
                        <p className="text-sm md:text-base">
                            Invest: <span className="font-semibold">₹ {price}/-</span>
                        </p>
                        <p className="text-sm md:text-base">
                            Time: <span className="font-semibold">{days} days</span>
                        </p>
                        <p className="text-sm md:text-base">
                            Buy: <span className="font-semibold">{percent}% of project</span>
                        </p>
                        <p className="text-sm md:text-base">
                            Daily Income:<span className="font-semibold"> ₹ {daily}/-</span>
                        </p>
                        <p className="text-sm md:text-base">
                            Total: <span className="font-semibold">₹ {total}/-</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newplan;
