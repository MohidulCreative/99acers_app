import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { databases, account as userAccount } from "../lib/appwrite";
import { toast } from "react-toastify";

function AddBank() {
    const [name, setName] = useState("");
    const [account, setAccount] = useState("");
    const [IFC, setIFC] = useState("");
    const [data, setData] = useState("");
    const history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await userAccount.get();
            data
                ? await databases.updateDocument(
                      "65f9a34195bb3fac17af",
                      "65f9bccca7fff2a0e300",
                      user.$id,
                      {
                          name: name,
                          account_number: account,
                          ifc_code: IFC,
                      }
                  )
                : await databases.createDocument(
                      "65f9a34195bb3fac17af",
                      "65f9bccca7fff2a0e300",
                      user.$id,
                      {
                          name: name,
                          account_number: account,
                          ifc_code: IFC,
                      }
                  );
            toast.success("save successfully", { autoClose: 3000 });
        } catch (error) {
            console.error(error);
        }

        history("/account");
    };

    useEffect(() => {
        try {
            const data = async () => {
                const user = await userAccount.get();
                let getdata = await databases.getDocument(
                    "65f9a34195bb3fac17af",
                    "65f9bccca7fff2a0e300",
                    user.$id
                );
                setData(getdata);
            };
            data();
        } catch (error) {
            console.error(error);
        }
    }, []);

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
                    <h3>{data.name ? data.name : "Name"}</h3>
                    <p>
                        {data.account_number
                            ? `${data.account_number} (${data.ifc_code})`
                            : "Account Number (IFC Code)"}
                    </p>
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
                    required
                />
                <input
                    className="bg-gray-300 py-2 px-2 text-black rounded"
                    type="text"
                    placeholder="Account No"
                    value={account}
                    onChange={(e) => setAccount(e.target.value)}
                    required
                />
                <input
                    className="bg-gray-300 py-2 px-2 text-black rounded"
                    type="text"
                    placeholder="IFC code"
                    value={IFC}
                    onChange={(e) => setIFC(e.target.value)}
                    required
                />
                {data ? (
                    <input
                        className="bg-[crimson] p-1 text-xl rounded"
                        type="submit"
                        value="change"
                    />
                ) : (
                    <input
                        className="bg-[crimson] p-1 text-xl rounded"
                        type="submit"
                        value="save"
                    />
                )}
            </form>
        </div>
    );
}

export default AddBank;
