import { useState } from "react";
import { useProjectData } from "../ui/main/data";
import { useTheme } from "../context/theme/ThemeContext";
import imgBackground from "../../public/assets/app_pictures/code-projects-background.webp";

export default function ProjectsCard() {
  const projectData = useProjectData();
  const { theme } = useTheme();

  const opacity = theme === "on" ? { opacity: 0.3 } : { opacity: 0.6 };

  const imgNotFound = "../../assets/app_pictures/no_imagine.webp";
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const currentProject = projectData[selectedProjectIndex];

  const handleNextIndex = () => {
    setSelectedProjectIndex((nextIndex) =>
      nextIndex === projectData.length - 1 ? 0 : nextIndex + 1
    );
  };

  const handlePrevIndex = () => {
    setSelectedProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="grid min-h-screen relative w-screen overflow-hidden">
        <img
          src={imgBackground}
          alt="backgorund image of coding"
          className="absolute h-full w-full"
          style={opacity}
        />
        <div className="w-full m-auto items-center max-w-md bg-slate-50 rounded-lg shadow-md p-6 overflow-y-auto z-20">
          <h2 className="text-center text-2xl text-gray-900 font-bold mb-8">
            Project {currentProject.id} / {projectData.length}
          </h2>
          <img
            src={!currentProject.image ? imgNotFound : currentProject.image}
            alt="screen of projects"
            className="w-11/12 h-60 m-auto rounded-lg mb-4 border-2 border-amber-700"
          />
          <p className="text-slate-900 font-bold text-2xl m-8 text-center">
            {currentProject.title}
          </p>
          <p className="text-gray-900 text-sm m-8 font-bold">
            {currentProject.description}
          </p>
          <div className="flex justify-between m-8">
            <a
              href={currentProject.sourceCodeLink.link}
              className="text-blue-700 hover:underline font-bold text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentProject.sourceCodeLink.source}
            </a>
            <a
              href={currentProject.demoLink.link}
              className="text-blue-700 hover:underline font-bold text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              {currentProject.demoLink.demo}
            </a>
          </div>
          <div className="flex justify-between">
            <button
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-100 hover:bg-blue-800 focus:outline-none"
              onClick={handlePrevIndex}
            >
              Back
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-slate-800 text-slate-100 hover:bg-blue-800 focus:outline-none"
              onClick={handleNextIndex}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
