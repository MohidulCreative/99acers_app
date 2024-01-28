import React, {useState} from "react";
import Header from "../components/Header/Header";
import { Link } from "react-router-dom";
import image_1 from "../assets/images/img_1.jpg";

const Plan = () => {
      const [activeLink, setActiveLink] = useState('/plan/new plan');
    
      const handleLinkClick = (to) => {
        setActiveLink(to);
      };

    return (
        <>
            <Header />
            {/* plan navigation */}
            <div className="w-full border-b bg-black z-30 mt-0 border-gray-500 flex justify-start items-center fixed left-0 right-0 top-[3.5rem]">
                <Link
                    className={`px-3 py-4 ${
                        activeLink === "/plan/new plan" ? "border-b-2" : ""
                    }`}
                    to="/plan/new plan"
                    onClick={() => handleLinkClick("/plan/new plan")}
                >
                    new plan
                </Link>
                <Link
                    className={`px-3 py-4 ${
                        activeLink === "/plan/normal" ? "border-b-2" : ""
                    }`}
                    to="/plan/normal"
                    onClick={() => handleLinkClick("/plan/normal")}
                >
                    normal
                </Link>
                <Link
                    className={`px-3 py-4 ${
                        activeLink === "/plan/advance" ? "border-b-2" : ""
                    }`}
                    to="/plan/advance"
                    onClick={() => handleLinkClick("/plan/advance")}
                >
                    advance
                </Link>
                <Link
                    className={`px-3 py-4 ${
                        activeLink === "/plan/pro" ? "border-b-2" : ""
                    }`}
                    to="/plan/pro"
                    onClick={() => handleLinkClick("/plan/pro")}
                >
                    pro
                </Link>
            </div>

            <div className="relative mt-16">
                <div className="w-full h-auto">
                    <img src={image_1} alt="new plan image" />
                </div>
                <div className="w-[70%] bg-[#f54141a9] p-2 rounded-lg absolute left-0 right-0 bottom-[-20%] mx-auto">
                    <h2 className="text-xl text-center pb-2">
                        Mahalaxmi Apartment
                    </h2>
                    <div className="text-center">
                        <p>price: 32 lacks</p>
                        <p>localtion: kolkata Amtala</p>
                        <p>
                            let's invest in this property. high chance to earn
                            better profit
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-orange-600 p-6 m-2 mx-auto max-w-80 mt-20">
                <h2>Product A agent property</h2>
                <span>price: 200</span>
                <p>daily get: 95</p>
                <p>total income: 1800</p>
            </div>
            <div className="bg-orange-600 p-6 m-2 mx-auto max-w-80">
                <h2>Product A agent property</h2>
                <span>price: 200</span>
                <p>daily get: 95</p>
                <p>total income: 1800</p>
            </div>
            <div className="bg-orange-600 p-6 m-2 mx-auto max-w-80">
                <h2>Product A agent property</h2>
                <span>price: 200</span>
                <p>daily get: 95</p>
                <p>total income: 1800</p>
            </div>
            <div className="bg-orange-600 p-6 m-2 mx-auto max-w-80">
                <h2>Product A agent property</h2>
                <span>price: 200</span>
                <p>daily get: 95</p>
                <p>total income: 1800</p>
            </div>
            <div className="bg-orange-600 p-6 m-2 mx-auto max-w-80">
                <h2>Product A agent property</h2>
                <span>price: 200</span>
                <p>daily get: 95</p>
                <p>total income: 1800</p>
            </div>
        </>
    );
};

export default Plan;
