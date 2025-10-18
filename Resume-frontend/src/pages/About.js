import React from 'react'
import { Link } from 'react-router-dom'
import { 
  Target, 
  Users, 
  Award, 
  Lightbulb, 
  Shield, 
  Heart,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  BarChart3,
  Star
} from 'lucide-react'

function About() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            {/* Mission Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <div className="relative">
                            <div className="relative z-10">
                                <img 
                                    src="/images/background1.png" 
                                    alt="Our Mission" 
                                    className="w-full h-auto rounded-2xl shadow-2xl"
                                />
                            </div>
                            <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-pink-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                        </div>

                        {/* Right Content */}
                        <div className="space-y-6">
                            <div className="space-y-4 mt-4">
                                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                                    Our Mission
                                </h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Our mission is to democratize career success by providing accessible, AI-powered tools that empower every job seeker to achieve their professional goals. We believe that everyone deserves a fair chance to showcase their skills and potential — regardless of background, experience level, or location.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    Through intelligent resume optimization, personalized recommendations, and modern career insights, we aim to bridge the gap between talent and opportunity. Our platform is designed to simplify the job application process, enhance professional visibility, and help individuals confidently land their dream jobs.
                                </p>
                                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    By combining the power of technology with human ambition, we're building a future where career success is not a privilege, but a possibility for everyone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Our Core Beliefs
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg mb-4">
                                <Shield className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Privacy First</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Your data is protected with enterprise-grade security and never shared without consent.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-lg mb-4">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                We continuously improve our AI algorithms to provide the most accurate insights possible.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-lg mb-4">
                                <Heart className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Empathy</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                We understand the challenges of job searching and design our tools with compassion.
                            </p>
                        </div>

                        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded-lg mb-4">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Excellence</h3>
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                We strive for the highest quality in everything we do, from our AI to our user experience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Impact
                        </h2>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Numbers that tell the story of our success
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">50K+</div>
                            <div className="text-xl text-blue-100">Resumes Analyzed</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">98%</div>
                            <div className="text-xl text-blue-100">User Satisfaction</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15K+</div>
                            <div className="text-xl text-blue-100">Jobs Landed</div>
                        </div>
                        <div>
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">100+</div>
                            <div className="text-xl text-blue-100">Countries Served</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                        Ready to Transform Your Career?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                        Join thousands of successful job seekers who have used our platform to advance their careers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link 
                            to="/"
                            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Start Your Journey
                        </Link>
                        <Link 
                            to="/blogs"
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
                        >
                            Read More
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About