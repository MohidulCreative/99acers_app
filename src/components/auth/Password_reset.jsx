import React from "react";
import { Link } from "react-router-dom";

const Password_reset = () => {
    return (
        <>
            <div className="container_form">
                <form className="form-box">
                    <div className="form-title">
                        <h4>
                            Reset<span>Password</span>
                        </h4>
                        <h5>Verify to reset password</h5>
                    </div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <Link to="/login" className="forgot-pass underline">
                        Login again
                    </Link>
                    <input
                        type="submit"
                        value="send"
                        className="submit-btn bg-[#7f5feb]"
                    />
                </form>
                <Link to="/register" className="signup underline">
                    Don't have an account? Sign up
                </Link>
            </div>
        </>
    );
};

export default Password_reset;
