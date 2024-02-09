import React, { useState, useEffect, useContext } from "react";
import { account, ID } from "../../lib/appwrite";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contex/Auth";
import { Link } from "react-router-dom";

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    async function register() {
        try {
            await account.create(ID.unique(), email, password, name);
            login(email, password);
        } catch (error) {
            console.log("error while creating account:", error);
        }
    }

    async function login(email, password) {
        try {
            await account.createEmailSession(email, password);
            setLoggedInUser(await account.get());
        } catch (error) {
            console.log("error while login:", error);
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
            <div className="max-w-md mx-2 p-6 mt-4 bg-white rounded-md shadow-md">
                <form className="text-black">
                    <div className="text-center">
                        <h2 className="text-2xl">Login</h2>
                        <p className="pt-2 pb-6">
                            Have an account?{" "}
                            <Link to="/login" className="underline">
                                login here
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
                    <input
                        className="mb-4 px-3 py-2 w-full border rounded-md text-black"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <button
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 mt-2"
                        type="button"
                        onClick={register}
                    >
                        Register
                    </button>
                </form>
            </div>
        </>
    );
};

export default Register;
