import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#328E6E] to-[#67AE6E] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your Ward, Your Voice, Our Solution
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-[#E1EEBC] max-w-3xl mx-auto">
              A transparent and accountable grievance redressal system
              connecting citizens with local authorities for faster resolution
              of civic issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/register"
                className="bg-white text-[#328E6E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 text-center"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#328E6E] transition duration-300 text-center"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to raise, track, and resolve local civic
              issues efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#E1EEBC] rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#328E6E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Problem Posting
              </h3>
              <p className="text-gray-600">
                Report civic issues like broken streetlights, bad roads, sewage
                problems with photos and videos for better documentation.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#E1EEBC] rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#67AE6E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Authority Dashboard
              </h3>
              <p className="text-gray-600">
                Ward members can view all submitted problems and must provide
                updates within 4-5 working days with full action logging.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#E1EEBC] rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#328E6E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1721 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Aadhar Authentication
              </h3>
              <p className="text-gray-600">
                Secure authentication via Aadhar card ensures users can only
                post problems within their own ward for better accountability.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#E1EEBC] rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#90C67C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V1H4v4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Real-time Tracking
              </h3>
              <p className="text-gray-600">
                Track the status of your complaints in real-time and see all
                actions taken by authorities with complete transparency.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#E1EEBC] rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#67AE6E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6V1H4v4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Community Subscriptions
              </h3>
              <p className="text-gray-600">
                Subscribe to problems posted by others in your ward and receive
                email notifications for all updates and responses.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-[#E1EEBC] rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-[#328E6E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Analytics & Reports
              </h3>
              <p className="text-gray-600">
                Comprehensive analytics for ward members to track resolution
                rates, response times, and community satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to get your civic issues resolved quickly and
              transparently
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#328E6E] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Report Issue
              </h3>
              <p className="text-gray-600">
                Authenticate with your Aadhar card and report civic issues in
                your ward with photos, videos, and detailed descriptions.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#328E6E] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Authority Review
              </h3>
              <p className="text-gray-600">
                Ward members receive your complaint and must provide an update
                within 4-5 working days with detailed action plans.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#328E6E] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Track & Resolve
              </h3>
              <p className="text-gray-600">
                Monitor progress in real-time, receive notifications for
                updates, and see the issue resolved with full transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits for Everyone
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creating a better community through technology and transparency
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Citizens */}
            <div className="bg-[#E1EEBC] bg-opacity-40 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#328E6E] mb-6">
                For Citizens
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#328E6E] mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Easy and quick issue reporting with multimedia support
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#328E6E] mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Real-time tracking and status updates
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#328E6E] mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Email notifications for all updates
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#328E6E] mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Community engagement through subscriptions
                  </span>
                </li>
              </ul>
            </div>

            {/* For Authorities */}
            <div className="bg-[#E1EEBC] bg-opacity-40 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[#67AE6E] mb-6">
                For Ward Authorities
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#67AE6E] mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Centralized dashboard for all ward issues
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#67AE6E] mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Automated reminders for response deadlines
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#67AE6E] mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Complete action logging and accountability
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#67AE6E] mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">
                    Analytics and performance tracking
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#328E6E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-[#E1EEBC] mb-8 max-w-2xl mx-auto">
            Join thousands of citizens who are already using MyWard to create
            better communities through transparent governance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="bg-white text-[#328E6E] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 text-center"
            >
              Get Started Now
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#328E6E] transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-[#90C67C] mb-4">MyWard</h3>
              <p className="text-gray-400">
                A transparent and accountable grievance redressal system for
                better civic governance.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Problem Reporting</li>
                <li>Real-time Tracking</li>
                <li>Authority Dashboard</li>
                <li>Notifications</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: support@myward.gov</li>
                <li>Phone: +91-XXX-XXXX</li>
                <li>Address: City Hall, Ward Office</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2024 MyWard. All rights reserved. Built with ❤️ for better
              governance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
