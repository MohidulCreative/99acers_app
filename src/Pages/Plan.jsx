import React, {useState, useEffect} from "react";
import Header from "../components/Header/Header";
import { Link, useLocation } from "react-router-dom";
import image_1 from "../assets/images/img_1.jpg";
import comming_soon from "../assets/images/comming_soon.jpg";
import Newplan from "../components/plan/Newplan";

const Plan = () => {
      const location = useLocation();
      const [activeLink, setActiveLink] = useState(location.pathname);
    
      const handleLinkClick = (to) => {
        setActiveLink(to);
      };

      useEffect(() => {
        setActiveLink(location.pathname)
      }, [])

    return (
        <>
            <Header />
            {/* plan navigation */}
            <div className="w-full border-b bg-black z-30 mt-0 border-gray-500 flex justify-start items-center fixed left-0 right-0 top-[3.5rem]">
                <Link
                    className={`px-3 py-4 ${
                        activeLink === "/plan/new_plan" ? "border-b-2" : ""
                    }`}
                    to="/plan/new_plan"
                    onClick={() => handleLinkClick("/plan/new plan")}
                >
                    New plan
                </Link>
                <Link
                    className={`px-3 py-4 ${
                        activeLink === "/plan/normal" ? "border-b-2" : ""
                    }`}
                    to="/plan/normal"
                    onClick={() => handleLinkClick("/plan/normal")}
                >
                    Normal
                </Link>
                <Link
                    className={`px-3 py-4 ${
                        activeLink === "/plan/advance" ? "border-b-2" : ""
                    }`}
                    to="/plan/advance"
                    onClick={() => handleLinkClick("/plan/advance")}
                >
                    Advance
                </Link>
                <Link
                    className={`px-3 py-4 ${
                        activeLink === "/plan/pro" ? "border-b-2" : ""
                    }`}
                    to="/plan/pro"
                    onClick={() => handleLinkClick("/plan/pro")}
                >
                    Pro
                </Link>
            </div>
            {activeLink === "/plan/new_plan" ? (
               <div>
                <div className="relative mt-16">
                <div className="w-full h-auto">
                    <img src={image_1} alt="new plan image" />
                </div>
                <div className="w-[70%] bg-[crimson] bg-opacity-60 backdrop-blur-[1px] p-2 rounded-lg absolute left-0 right-0 bottom-[-20%] mx-auto">
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
            <div className="mt-20">
            <Newplan title="Mahalaxmi Apartment" price={1000} days={12} percent={0.3} daily={200} total={2400}  />
            </div>
            <Newplan title="Mahalaxmi Apartment" price={1600} days={20} percent={0.5} daily={450} total={9000} />
            <Newplan title="Mahalaxmi Apartment" price={2000} days={27} percent={0.6} daily={600} total={16200} />
            <Newplan title="Mahalaxmi Apartment" price={10000} days={30} percent={1} daily={1000} total={30000} />
            <Newplan title="Mahalaxmi Apartment" price={1600} days={30} percent={1.3} daily={1400} total={42000} />
               
            </div>
            ): activeLink === "/plan/normal" ? (
               <div className="flex flex-col items-center justify-center h-screen">
                  <div className="text-3xl font-bold mb-4">Coming Soon normal!</div>
                  <p className="text-gray-500 text-center px-2">
                     We are looking for exciting new project. Stay tuned for updates!
                  </p>
                  <img
                     className="mt-8 w-48 h-48 object-cover rounded-lg"
                     src={comming_soon}
                     alt="Coming Soon"
                  />
               </div>
             ) : (
               <div className="flex flex-col items-center justify-center h-screen">
                  <div className="text-3xl font-bold mb-4">Coming Soon!</div>
                  <p className="text-gray-500 text-center px-2">
                     We are looking for exciting new project. Stay tuned for updates!
                  </p>
                  <img
                     className="mt-8 w-48 h-48 object-cover rounded-lg"
                     src={comming_soon}
                     alt="Coming Soon"
                  />
               </div>
            )}        

           
        </>
    );
};

export default Plan;
