import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-[#328E6E] mb-4">404</h1>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for.
          </p>
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-block bg-[#328E6E] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#67AE6E] transition duration-300"
            >
              Go Home
            </Link>
            <div>
              <Link
                to="/register"
                className="text-[#328E6E] hover:text-[#67AE6E] font-medium"
              >
                Or create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
