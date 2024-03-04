import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./ui/Navbar/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-slate-800 h-screen w-full">
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <p>Test</p>
      </BrowserRouter>
    </div>
  );
}

export default App;
