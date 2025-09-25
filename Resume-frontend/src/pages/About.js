import React from 'react'

function About() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-100 dark:bg-gray-800 dark:text-white relative bg-gradient-to-r from-green-100 via-purple-100 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-justify h-screen'>

            {/* Left image */}
            <div className='mt-10 p-16 '>
                <img src='images/background.png' alt='background img' className='rounded-lg shadow-lg bg-white dark:bg-gray-700' />
            </div>

            {/* Right side Text */}
            <div className='ml-10 mt-10 p-16'>
                <h1 className='text-gray-800 text-3xl font-bold dark:text-white mt-2 leading-snug'>Resume & <br></br> Job Match Analyzer</h1>

                <p className="text-gray-600 leading-relaxed mb-4 mt-3">
                    Welcome to <span className="font-semibold text-purple-600">Resume Matcher</span> –
                    a smart tool designed to help job seekers align their resumes with the
                    requirements of their dream jobs. Our platform analyzes both your resume
                    and the job description, giving you a compatibility score and practical
                    suggestions to improve your chances of landing an interview.
                </p>

                <div className='mt-5'>
                    <button className='bg-blue-500 text-white px-5 py-2 rounded-lg'>Get Started</button>
                </div>
            </div>


        </div>

    )
}

export default About