import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Plan from "./Pages/Plan.jsx";
import Layout from "./components/Layout.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import Account from "./Pages/Account.jsx";
import About from "./Pages/About.jsx";
import Rules from "./Pages/Rules.jsx";
import Care from "./Pages/Care.jsx";
import Register from "./components/auth/Register.jsx";
import Login from "./components/auth/Login.jsx";
import Password_reset from "./components/auth/Password_reset.jsx";
import { UserProvider } from "./contex/Auth.jsx";
import { PrivateRoute } from "./utils/PrivateRoutes.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Deposit from "./Pages/Deposit.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password_reset" element={<Password_reset />} />
            <Route element={<PrivateRoute />}>
                <Route
                    path="/"
                    errorElement={<ErrorPage />}
                    element={<Layout />}
                >
                    <Route path="/" element={<Home />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/care" element={<Care />} />
                    <Route path="/plan/new_plan" element={<Plan />} />
                    <Route path="/plan/normal" element={<Plan />} />
                    <Route path="/plan/advance" element={<Plan />} />
                    <Route path="/plan/pro" element={<Plan />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/rules" element={<Rules />} />
                    <Route path="/deposit" element={<Deposit />} />
                </Route>
            </Route>
        </Route>
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <UserProvider>
            <RouterProvider router={router}>
                <App />
            </RouterProvider>
        </UserProvider>
        <ToastContainer />
    </React.StrictMode>
);
