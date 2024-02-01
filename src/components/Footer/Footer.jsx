import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);
    const handleLinkClick = (to) => {
        setActiveLink(to);
    };

    // Update activeLink when location changes
    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location.pathname]);

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
                    className={`${activeLink === "/care" ? "active" : ""}`}
                    onClick={() => handleLinkClick("/care")}
                >
                    <i
                        className={`fas fa-blog ${
                            activeLink === "/care" ? "colori" : ""
                        }`}
                    ></i>{" "}
                    <span>care</span>
                </Link>

                <Link
                    to="plan/new_plan"
                    className={`${
                        activeLink === "/plan/new_plan" ||
                        activeLink === "/plan/normal" ||
                        activeLink === "/plan/advance" ||
                        activeLink === "/plan/pro"
                            ? "active"
                            : ""
                    }`}
                    onClick={() => handleLinkClick("/plan/new_plan")}
                >
                    <i
                        className={`fas fa-briefcase ${
                            activeLink === "/plan/new_plan" ||
                            activeLink === "/plan/normal" ||
                            activeLink === "/plan/advance" ||
                            activeLink === "/plan/pro"
                                ? "colori"
                                : ""
                        }`}
                    ></i>{" "}
                    <span>plan</span>
                </Link>

                <Link
                    to="account"
                    className={`${activeLink === "/account" ? "active" : ""}`}
                    onClick={() => handleLinkClick("/account")}
                >
                    <i
                        className={`fas fa-user ${
                            activeLink === "/account" ? "colori" : ""
                        }`}
                    ></i>{" "}
                    <span>me</span>
                </Link>
            </nav>
        </>
    );
};

export default Footer;
