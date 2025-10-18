import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 md:px-16 lg:px-28 py-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
            <h2 className="text-lg font-bold mb-3">About Us</h2>
            <p className="text-gray-300">We believe in building trust through excellence, innovation, and customer satisfaction.</p>
        </div>
        <div>
            <h2 className="text-lg font-bold mb-2">Quick Links</h2>
            <ul>
                <li className="hover:underline text-gray-300"><Link to="/">Home</Link></li>
                <li className="hover:underline text-gray-300"><Link to="/about">About</Link></li>
                <li className="hover:underline text-gray-300"><Link to="/blogs">Blog</Link></li>
                <li className="hover:underline text-gray-300"><Link to="/coverletter">Cover Letter</Link></li>
            </ul>
        </div>
        <div>
            <h2 className="text-lg font-bold mb-3">Follow Us</h2>
            <ul className="flex space-x-5">
              <li className="flex flex-col items-center hover:underline text-gray-300"> <FaFacebook className="text-2xl text-blue-600"/> <a href="#">Facebook</a></li>
              <li className="flex flex-col items-center hover:underline text-gray-300"> <FaTwitter className="text-2xl text-sky-400"/> <a href="#">Twitter</a></li>
              <li className="flex flex-col items-center hover:underline text-gray-300"> <FaInstagram className="text-2xl text-orange-400"/> <a href="#">Instagram</a></li>
            </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 text-center mt-4 pt-4 text-gray-300">
        <p>© 2025 MySite. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
