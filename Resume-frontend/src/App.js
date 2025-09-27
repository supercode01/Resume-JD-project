import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Component/Navbar";
import About from "./pages/About";
import Blogs from './pages/Blogs';
import CoverLetter from './pages/CoverLetter';
import BlogDetails from './pages/BlogDetails';
import NoPage from './pages/NoPage';
import Result from './pages/Result';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="about" element={<About />} />
          <Route path="/coverletter" element={<CoverLetter/>} />    
          <Route path="/blogs/:id" element={<BlogDetails />} />   
          <Route path="result" element={<Result />} />    
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);