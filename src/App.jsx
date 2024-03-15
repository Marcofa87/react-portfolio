import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const About = lazy(() => import("./pages/About"));
const ProjectsCard = lazy(() => import("./pages/ProjectsCard"));
const Contact = lazy(() => import("./pages/Contact"));
const Navbar = lazy(() => import("./ui/Navbar/Navbar"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <div className="bg-slate-800 min-h-screen w-full font-mono">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <header>
            <Navbar />
          </header>
          <main className="flex justify-center p-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<ProjectsCard />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
