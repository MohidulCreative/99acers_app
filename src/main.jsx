import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Plan from "./Pages/Plan.jsx";
import Layout from "./components/Layout.jsx";
import ErrorPage from './Pages/ErrorPage.jsx'
import Account from "./Pages/Account.jsx";
import About from "./Pages/About.jsx";
import Rules from "./Pages/Rules.jsx";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" errorElement={<ErrorPage />} element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<Account />} />
            <Route path="/care" element={<Home />} />
            <Route path="/plan/new_plan" element={<Plan />} />
            <Route path="/plan/normal" element={<Plan />} />
            <Route path="/plan/advance" element={<Plan />} />
            <Route path="/plan/pro" element={<Plan />} />
            <Route path="/about" element={<About />} />
            <Route path="/rules" element={<Rules />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router}>
            <App />
        </RouterProvider>
    </React.StrictMode>
);
