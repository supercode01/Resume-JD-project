import { Outlet, Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle'; // import toggle button
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700">
      <nav className="bg-blue-700 p-4 text-white shadow">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/images/logo.png"   
              alt="MySite Logo"
              className="h-12 w-auto"
            />
          </Link>
          <ul className="flex space-x-4 items-center">
            <li><Link className="hover:underline" to="/">Home</Link></li>
            <li><Link className="hover:underline" to="/blogs">Blogs</Link></li>
            <li><Link className="hover:underline" to="/coverletter">CoverLetter</Link></li>
            <li><Link className="hover:underline" to="/about">About Us</Link></li>
            <li><ThemeToggle /></li> {/* 🌙 Dark Mode Toggle here */}
          </ul>
        </div>
      </nav>

      <main className="flex-grow container mx-auto p-6">
        <Outlet />
      </main>
      
    <Footer/>
      
    </div>
  );
};

export default Layout;
