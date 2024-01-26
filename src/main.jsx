import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Plan from "./Pages/Plan.jsx";
import Layout from "./components/Layout.jsx";
import ErrorPage from './Pages/ErrorPage.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" errorElement={<ErrorPage />} element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/plan" element={<Plan />} />
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
