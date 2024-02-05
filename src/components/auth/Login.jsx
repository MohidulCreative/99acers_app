import React, { useState, useEffect, useContext } from "react";
import { account, ID } from "../../lib/appwrite";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../contex/Auth";

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    async function login(email, password) {
        try {
            await account.createEmailSession(email, password);
            setLoggedInUser(await account.get());
            setEmail("");
            setPassword("");
        } catch (error) {
            console.error("Error fetching user account:", error);
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

    return (
        <>
            <div className="max-w-md mx-auto p-6 mt-4 bg-white rounded-md shadow-md">
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
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                        type="button"
                        onClick={() => login(email, password)}
                    >
                        Login
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;
