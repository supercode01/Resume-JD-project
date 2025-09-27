// src/pages/Result.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const stateAnalysis = location.state?.analysis;
  const [analysis, setAnalysis] = React.useState(() => {
    // priority: navigation state -> sessionStorage fallback
    return stateAnalysis || sessionStorage.getItem("analysis") || "";
  });

  React.useEffect(() => {
    // if we got via navigation state, save to sessionStorage so refresh doesn't lose it
    if (stateAnalysis) {
      sessionStorage.setItem("analysis", stateAnalysis);
      setAnalysis(stateAnalysis);
    }
  }, [stateAnalysis]);

  // If no analysis available, ask user to go back
  if (!analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 max-w-xl w-full text-center">
          <h2 className="text-xl font-semibold mb-4">No analysis found</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            You don't have an analysis to view. Upload a resume and job
            description first.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // try to parse a numeric score (common patterns like "70/100" or "Compatibility Score: 70")
  const scoreMatch = analysis.match(
    /(\d{1,3})\s*\/\s*100|Compatibility Score[:\s]*([0-9]{1,3})/i
  );
  const score = scoreMatch ? Number(scoreMatch[1] || scoreMatch[2]) : null;
  const safeScore = score !== null ? Math.max(0, Math.min(100, score)) : null;

  return (
    <div className="pt-32 min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            AI Analysis Result
          </h1>
          <div className="flex gap-2">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 border rounded text-sm bg-white dark:bg-gray-800"
            >
              Back
            </button>
            <button
              onClick={() => {
                sessionStorage.removeItem("analysis");
                navigate("/");
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded text-sm"
            >
              Done
            </button>
          </div>
        </div>

        {safeScore !== null && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="font-medium text-gray-700 dark:text-gray-200">
                Compatibility Score
              </div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                {safeScore}/100
              </div>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded h-4">
              <div
                className="h-4 rounded bg-green-500"
                style={{
                  width: `${safeScore}%`,
                  transition: "width 0.5s ease",
                }}
              />
            </div>
          </div>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
            Full Analysis
          </h2>
          <div className="prose dark:prose-invert max-w-none text-sm">
            <ReactMarkdown>{analysis}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
