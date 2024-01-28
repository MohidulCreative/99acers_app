import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const [activeLink, setActiveLink] = useState("/");

    const handleLinkClick = (to) => {
        setActiveLink(to);
    };

    return (
        <>
            <nav className="navbar">
                <Link
                    to="/"
                    className={`${activeLink === "/" ? "active" : ""}`}
                    onClick={() => handleLinkClick("/")}
                >
                    <i
                        className={`fas fa-home ${
                            activeLink === "/" ? "colori" : ""
                        }`}
                    ></i>{" "}
                    <span>home</span>
                </Link>

                <Link
                    to="care"
                    className={`${activeLink === "care" ? "active" : ""}`}
                    onClick={() => handleLinkClick("care")}
                >
                    <i
                        className={`fas fa-blog ${
                            activeLink === "care" ? "colori" : ""
                        }`}
                    ></i>{" "}
                    <span>care</span>
                </Link>

                <Link
                    to="plan/new plan"
                    className={` ${
                        activeLink === "plan/new plan" ? "active" : ""
                    }`}
                    onClick={() => handleLinkClick("plan/new plan")}
                >
                    <i
                        className={`fas fa-briefcase ${
                            activeLink === "plan/new plan" ? "colori" : ""
                        }`}
                    ></i>{" "}
                    <span>plan</span>
                </Link>

                <Link
                    to="account"
                    className={`${activeLink === "account" ? "active" : ""}`}
                    onClick={() => handleLinkClick("account")}
                >
                    <i
                        className={`fas fa-user ${
                            activeLink === "account" ? "colori" : ""
                        }`}
                    ></i>{" "}
                    <span>me</span>
                </Link>
            </nav>
        </>
    );
};

export default Footer;
