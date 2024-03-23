import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Footer from "./ui/footer/Footer";
import "./index.css";
import Loader from "./ui/loading/Loader";
import { useTheme } from "./context/ThemeContext";

const About = lazy(() => import("./pages/About"));
const ProjectsCard = lazy(() => import("./pages/ProjectsCard"));
const Contact = lazy(() => import("./pages/Contact"));
const Navbar = lazy(() => import("./ui/Navbar/Navbar"));
const Home = lazy(() => import("./pages/Home"));

function App() {
  const { backgroundThemeColor, textThemeColor } = useTheme();

  return (
    <>
      <div
        className={` font-bold min-h-screen w-full font-mono flex flex-col ${backgroundThemeColor} ${textThemeColor}`}
      >
        <h1>Ciao</h1>
        <BrowserRouter>
          <Suspense fallback={<Loader />}>
            <header>
              <Navbar />
            </header>
            <main className="flex justify-center flex-grow ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<ProjectsCard />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            <Footer className="mt-auto" />
          </Suspense>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
