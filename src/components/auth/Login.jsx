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
                    <i className="fa-solid fa-eye" id="eye"></i>
                    <input
                        type="password"
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
                      {loading ? <BeatLoader color="#36d7b7" size={10} /> : "Login"}  
                    </button>
                </form>
                <Link to="/register" className="signup underline">
                    Don't have an account? Sign up
                </Link>
            </div>

            {/* <div className="max-w-md mx-auto p-6 mt-4 bg-white rounded-md shadow-md px-2">
                <form className="text-black">
                    <div className="text-center">
                        <h2 className="text-2xl">Login</h2>
                        <p className="pt-2 pb-6">
                            Don't have an account? please{" "}
                            <Link to="/register" className="underline">
                                create account
                            </Link>
                        </p>
                    </div>
                    <input
                        className="mb-4 px-3 py-2 w-full border rounded-md text-black"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="mb-4 px-3 py-2 w-full border rounded-md text-black"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        className="w-full flex justify-center items-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        type="button"
                        onClick={() => login(email, password)}
                    >
                        {loading ? <BeatLoader color="#36d7b7" /> : "Login"}
                    </button>
                </form>
            </div> */}
        </>
    );
};

export default Login;
