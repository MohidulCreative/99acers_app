import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
    const storedUser = localStorage.getItem("user");   
    const user = JSON.parse(storedUser)
    return user ? <Outlet/> : <Navigate to="login" />;
};
