// ErrorPage.js
import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-4">Page not found</p>
        <p className="text-gray-500">
          Oops! The page you are looking for might be under construction.
        </p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full mt-8"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
