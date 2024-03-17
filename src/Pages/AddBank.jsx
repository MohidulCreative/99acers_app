import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function AddBank() {
    const [name, setName] = useState("");
    const [account, setAccount] = useState("");
    const [IFC, setIFC] = useState("");
    const history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data, for example:
        console.log("Name:", name);
        console.log("Account:", account);
        console.log("IFC Code:", IFC);
        history("/account");
    };

    return (
        <div className="mx-auto p-2 my-4">
            <Link to="/account" className="bg-gray-500 p-1 my-2 w-full">
                <i className="fa-solid fa-arrow-left"></i> Withdrawal account
            </Link>
            <div className="flex justify-start bg-orange-600 p-2 my-2 text-black rounded">
                <div>
                    <i className="fa-solid fa-money-check text-4xl"></i>
                </div>
                <div className="px-2">
                    <h3>{name}</h3>
                    <p>{`${account} (${name})`}</p>
                </div>
            </div>
            <h2>Add your bank account</h2>
            <form className="flex flex-col gap-2 mt-2" onSubmit={handleSubmit}>
                <input
                    className="bg-gray-300 py-2 px-2 text-black rounded"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="bg-gray-300 py-2 px-2 text-black rounded"
                    type="text"
                    placeholder="Account No"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                />
                <input
                    className="bg-gray-300 py-2 px-2 text-black rounded"
                    type="text"
                    placeholder="IFC code"
                    value={IFC}
                    onChange={(e) => setIFC(e.target.value)}
                />
                <input
                    className="bg-[crimson] p-1 text-xl rounded"
                    type="submit"
                    value="Save"
                />
            </form>
        </div>
    );
}

export default AddBank;
