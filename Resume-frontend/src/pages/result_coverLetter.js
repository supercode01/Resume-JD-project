import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResultCoverLetter() {
  const location = useLocation();
  const navigate = useNavigate();
  const coverLetter =
    location.state?.cover_letter || sessionStorage.getItem("cover_letter");

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 mt-16 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-8 sm:px-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Generated Cover Letter
          </h1>
          {coverLetter ? (
            <pre
              className="whitespace-pre-wrap bg-gray-100 dark:bg-gray-700 
                         p-4 rounded-md text-gray-800 dark:text-gray-200 
                         overflow-auto"
            >
              {coverLetter}
            </pre>
          ) : (
            <p className="text-gray-600 dark:text-gray-300">
              No Cover Letter available. Please try again.
            </p>
          )}
        </div>
        <div className="px-6 pb-8 sm:px-10 flex justify-center">
          <button
            onClick={() => navigate("/")}
            className="rounded-full bg-teal-600 hover:bg-teal-700 
                       text-white px-6 py-2 font-medium 
                       focus:outline-none focus:ring-2 focus:ring-offset-2 
                       focus:ring-teal-500"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}