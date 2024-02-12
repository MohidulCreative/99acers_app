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
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const togglePass = () => {
        setPasswordVisible(!isPasswordVisible);
    };
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
                    <i
                        id="eye"
                        className={`fa-solid fa-eye pass-eye ${
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
        </>
    );
};

export default Register;
