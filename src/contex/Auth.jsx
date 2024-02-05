import { createContext, useState } from "react";
// import useAuth from "../components/Auth";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()

    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>;
};

// export const useUser = () => {
//     const userAuth = useContext(UserContext);
//     return userAuth;
// };
