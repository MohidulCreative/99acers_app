import React, { useState, useEffect, useContext } from "react";
import { account } from "../../lib/appwrite";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../contex/Auth";
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    // const { pathname } = useLocation();
    const [loading, setLoading] = useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePass = () => {
        setPasswordVisible(!isPasswordVisible);
    };

    async function login(e, email, password) {
        e.preventDefault();
        try {
            setLoading(true);
            await account.createEmailSession(email, password);
            setLoggedInUser(await account.get());
            setEmail("");
            setPassword("");
            toast.success("Login success", { autoClose: 3000 });
            setLoading(false);
        } catch (error) {
            console.error("Error fetching user account:", error);
            toast.error("check email or password!", { autoClose: 3000 });
            setLoading(false);
        }
    }

    // Save user to local storage when logged in
    useEffect(() => {
        if (loggedInUser) {
            localStorage.setItem("user", JSON.stringify(loggedInUser));
            setUser(loggedInUser);
            navigate("/");
        }
    }, [loggedInUser]);

    // check if the user is logged in
    // useEffect(() => {
    //     if (pathname === "/login") {
    //         let user = localStorage.getItem("user");
    //          if (user) {
    //             navigate("/");
    //         }
    //     }
    // }, []);

    return (
        <>
            <div className="container_form">
                <form className="form-box">
                    <div className="form-title">
                        <h4>
                            Login<span>Form</span>
                        </h4>
                        <h5>Sign in to your account</h5>
                    </div>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <i
                        id="eye"
                        className={`fa-solid fa-eye ${
                            isPasswordVisible ? "active-eye" : ""
                        }`}
                        onClick={togglePass}
                    ></i>
                    <input
                        type={isPasswordVisible ? "text" : "password"}
                        name="password"
                        placeholder="Passsword"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Link to="/password_reset" className="forgot-pass">
                        Forgot Password?
                    </Link>
                    <button
                        type="submit"
                        className="submit-btn bg-[#7f5feb] flex justify-center items-center"
                        onClick={(e) => login(e, email, password)}
                    >
                        {loading ? (
                            <BeatLoader color="#36d7b7" size={10} />
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>
                <Link to="/register" className="signup underline mx-auto">
                    Don't have an account? Sign up
                </Link>
            </div>
        </>
    );
};

export default Login;
