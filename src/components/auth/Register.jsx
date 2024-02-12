import React, { useState, useEffect, useContext } from "react";
import { account, ID } from "../../lib/appwrite";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contex/Auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import BeatLoader from "react-spinners/BeatLoader";

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    async function register(e) {
        e.preventDefault();
        try {
            setLoading(true);
            await account.create(ID.unique(), email, password, name);
            login(email, password);
            setLoading(false);
        } catch (error) {
            console.log("error while creating account:", error);
            toast.error("please fill up correctly!", { autoClose: 3000 });
            setLoading(false);
        }
    }

    async function login(email, password) {
        try {
            setLoading(true);
            await account.createEmailSession(email, password);
            setLoggedInUser(await account.get());
            toast.success("Register success", { autoClose: 3000 });
        } catch (error) {
            console.log("error while login:", error);
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

    return (
        <>
            <div className="container_form">
                <form action="" className="form-box">
                    <div className="form-title">
                        <h4>
                            Signup<span>Form</span>
                        </h4>
                        <h5>Sign up for free!</h5>
                    </div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <i className="fa-solid fa-eye eye" id="eye"></i>
                    <input
                        type="password"
                        name="password"
                        placeholder="Passsword"
                        id="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="submit"
                        className="submit-btn bg-[#7f5feb] flex justify-center items-center"
                        onClick={(e) => register(e)}
                    >
                      {loading ? <BeatLoader color="#36d7b7" size={10} /> : "Sign up"}  
                    </button>
                </form>
                <Link to="/login" className="signup underline">
                    Have an account? Login
                </Link>
            </div>

            {/* <div className="max-w-md mx-auto p-6 mt-4 bg-white rounded-md shadow-md">
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
                        className="w-full flex justify-center items-center bg-green-500 text-white py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 mt-2"
                        type="button"
                        onClick={register}
                    >
                    {loading ? <BeatLoader color="#36d7b7" /> : "Register"}
                    </button>
                </form>
            </div> */}
        </>
    );
};

export default Register;
