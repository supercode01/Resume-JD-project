import React, { useState } from 'react';

function UploadModal({ onClose, onResult }) {
  const [resumeFile, setResumeFile] = useState(null);
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!resumeFile) {
      alert("Please upload your Resume (PDF)");
      return;
    }
    if (!jobDescription.trim()) {
      alert("Please paste the Job Description");
      return;
    }

    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      formData.append("resume", resumeFile);
      formData.append("job_desc", jobDescription);

      const response = await fetch("http://127.0.0.1:5000/analyze", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.analysis) {
        onResult(data.analysis);
        onClose();
      } else {
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to connect to backend");
    }

    setLoading(false);
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full mx-4 p-6 max-h-[90vh] overflow-y-auto'>
        
        {/* Modal Header */}
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>
            Upload Your Details
          </h2>
          <button
            onClick={onClose}
            className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-3xl leading-none'
          >
            ×
          </button>
        </div>

        {/* Resume Upload */}
        <div className='mb-6'>
          <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3'>
            Upload Resume (PDF) *
          </label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => setResumeFile(e.target.files[0])}
            className='w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg'
          />
        </div>

        {/* Job Description */}
        <div className='mb-8'>
          <label className='block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3'>
            Job Description *
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder='Paste the complete job description here...'
            rows={6}
            className='w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white resize-none text-sm'
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {/* Action Buttons */}
        <div className='flex gap-4'>
          <button
            onClick={onClose}
            className='flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 font-medium'
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className='flex-1 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 font-medium shadow-lg'
          >
            {loading ? "Analyzing..." : "Start Analysis"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadModal;
