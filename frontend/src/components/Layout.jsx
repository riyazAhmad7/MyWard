import React from "react";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#E1EEBC] bg-opacity-20">
      {/* Navigation - Only show on landing page */}
      {location.pathname === "/" && (
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold text-[#328E6E]">
                  MyWard
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#features"
                    className="text-gray-700 hover:text-[#328E6E] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Features
                  </a>
                  <a
                    href="#how-it-works"
                    className="text-gray-700 hover:text-[#328E6E] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    How it Works
                  </a>
                  <a
                    href="#benefits"
                    className="text-gray-700 hover:text-[#328E6E] px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Benefits
                  </a>
                </div>
              </div>
              <div className="md:hidden">
                <button className="text-gray-700 hover:text-[#328E6E]">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}

      {children}
    </div>
  );
}

export default Layout;
