import { useState } from "react";
import { projectData } from "../ui/main/data";

export default function ProjectsCard() {
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
      <div className="mx-auto md:w-6/12 lg:w-4/12 bg-slate-200  rounded-lg overflow-hidden p-2 shadow-2xl">
        <h2 className="text-center text-2xl text-gray-800 font-bold">
          Project {currentProject.id} / {projectData.length}
        </h2>
        <img src={currentProject.image} alt="" className="w-full rounded-lg" />
        <div className="p-6">
          <p className="text-gray-800  text-lg font-bold mb-2 text-center">
            {currentProject.title}
          </p>
          <p className="text-gray-800 text-sm mb-4 font-bold">
            {currentProject.description}
          </p>
          <div className="flex justify-between items-center">
            <a
              href={currentProject.sourceCodeLink.link}
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              {currentProject.sourceCodeLink.source}
            </a>
            <a
              href={currentProject.demoLink.link}
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              {currentProject.demoLink.demo}
            </a>
          </div>
          <div className="flex justify-between mt-4">
            <button
              className="px-4 py-2 rounded-md bg-slate-200 text-gray-800 hover:bg-gray-300 focus:outline-none"
              onClick={handlePrevIndex}
            >
              Back
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-slate-200 text-gray-800 hover:bg-gray-300 focus:outline-none"
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
