import React from "react";
import Banner from "../components/Home/Banner";
import QuckMenu from "../components/Home/QuckMenu";
import Options from "../components/Home/Options";

const Home = () => {
    return (
        <>
            <QuckMenu />
            <Banner />
            <Options />
            <div className="grid gap-2 p-2 pb-16">
                {/* Box 1: Portfolio Management */}
                <div className="box bg-gray-200 rounded p-4 text-center">
                    <i className="fas fa-chart-pie text-blue-500 text-4xl mb-2"></i>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Portfolio Management
                    </h3>
                    <p className="text-gray-600">
                        Explore our advanced portfolio management tools to
                        optimize your investment strategy.
                    </p>
                </div>

                {/* Box 2: Investment Analysis */}
                <div className="box bg-gray-200 rounded p-4 text-center">
                    <i className="fas fa-chart-bar text-blue-500 text-4xl mb-2"></i>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Investment Analysis
                    </h3>
                    <p className="text-gray-600">
                        Utilize our powerful analytics tools to make informed
                        decisions based on market trends.
                    </p>
                </div>

                {/* Box 3: Risk Management */}
                <div className="box bg-gray-200 rounded p-4 text-center">
                    <i className="fas fa-shield-alt text-blue-500 text-4xl mb-2"></i>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Risk Management
                    </h3>
                    <p className="text-gray-600">
                        Mitigate risks with our comprehensive risk management
                        solutions tailored for investors.
                    </p>
                </div>

                {/* Box 4: Financial Planning */}
                <div className="box bg-gray-200 rounded p-4 text-center">
                    <i className="fas fa-wallet text-blue-500 text-4xl mb-2"></i>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Financial Planning
                    </h3>
                    <p className="text-gray-600">
                        Plan your financial future with personalized financial
                        planning services for investors.
                    </p>
                </div>

                {/* Box 5: Real-time Market Data */}
                <div className="box bg-gray-200 rounded p-4 text-center">
                    <i className="fas fa-chart-line text-blue-500 text-4xl mb-2"></i>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Real-time Market Data
                    </h3>
                    <p className="text-gray-600">
                        Access live market data to stay updated on stock prices
                        and market trends.
                    </p>
                </div>

                {/* Box 6: Automated investment */}
                <div className="box bg-gray-200 rounded p-4 text-center">
                    <i className="fas fa-robot text-blue-500 text-4xl mb-2"></i>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Automated Trading
                    </h3>
                    <p className="text-gray-600">
                        Execute trades efficiently with our automated trading
                        solutions.
                    </p>
                </div>
                <div
                    className="c-primary-reputation mt-10 mb-6"
                    aria-label="0 reputation"
                >
                    <span>Refer & Earn</span>
                </div>
            </div>
        </>
    );
};

export default Home;
