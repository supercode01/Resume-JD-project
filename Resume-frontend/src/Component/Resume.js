import React, { useState } from 'react';
import UploadModal from './UploadModal';

function Resume() {
  const [showModal, setShowModal] = useState(false);
  const [analysisResult, setAnalysisResult] = useState('');

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-100 dark:bg-gray-800 dark:text-white relative bg-gradient-to-r from-green-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-justify min-h-screen'>
      
      {/* Left side Text */}
      <div className='ml-10 mt-10 p-16'>
        <h1 className='text-blue-600'>Resume & Job Match Analyzer</h1>
        <p className='text-4xl font-bold leading-snug tracking-tight text-gray-800 dark:text-white mt-5'>
          Is your resume aligned with the job you want?
        </p>
        <p className='mt-5'>
          Upload your resume and the job description to get an AI-powered analysis.
          <br />
          Our AI-powered resume matcher compares your resume with the job description, highlights missing keywords, and gives you a personalized compatibility score.
        </p>
        <div className='mt-5'>
          <button 
            onClick={() => setShowModal(true)}
            className='bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition-colors duration-200'
          >
            Get Started
          </button>
        </div>

        {analysisResult && (
          <div className="mt-6 p-4 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">AI Analysis Result:</h3>
            <pre className="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-200">
              {analysisResult}
            </pre>
          </div>
        )}
      </div>

      {/* Right image */}
      <div className='mt-10 p-16'>
        <img src='/images/background.png' alt='background img' className='rounded-lg shadow-lg bg-white dark:bg-gray-700' />
      </div>

      {/* Modal */}
      {showModal && (
        <UploadModal 
          onClose={() => setShowModal(false)}
          onResult={(result) => setAnalysisResult(result)}
        />
      )}
    </div>
  );
}

export default Resume;
