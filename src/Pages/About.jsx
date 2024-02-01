import React from "react";
import about_img1 from "../assets/images/about_img1.jpg";
const About = () => {
    return (
        <>
            <div className="p-8 bg-gray-700 h-full pb-16">
                <img src="logo.png" alt="about logo" />
                <h2 className="py-4 pb-2 font-bold text-2xl">
                    About White Arrow ?
                </h2>
                <p className="text-slate-300">
                    White arrow real estate & builders pvt ltd for residential
                    uses is the business of residential development properties.
                </p>
                <div className="flex py-4 justify-center items-center flex-col">
                    <img src={about_img1} alt="property investment" />
                    <p className="text-slate-300 pt-4">
                        White Arrow offers other people to invest together and earn profit equally.
                        As we grow our company consistently we neet more fund to invest in the property but it's tough to arrange from other place that's why we make a this plan so that we can grow our company and other person can earn some profit.
                    </p>
                </div>
            </div>
        </>
    );
};

export default About;
