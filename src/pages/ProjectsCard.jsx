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
      <div className="mx-auto md:w-6/12 lg:w-4/12 bg-slate-100  rounded-lg overflow-hidden p-6 shadow-2xl">
        <h2 className="text-center text-2xl text-gray-900 font-bold p-4">
          Project {currentProject.id} / {projectData.length}
        </h2>
        <img
          src={currentProject.image}
          alt="screen of projects"
          className="w-5/6 rounded-lg m-auto "
        />
        <div className="p-6">
          <p className="text-slate-900   font-bold text-2xl mb-2 text-center p-2">
            {currentProject.title}
          </p>
          <p className="text-gray-900 text-sm mb-4 font-bold p-4">
            {currentProject.description}
          </p>
          <div className="flex justify-between items-center">
            <a
              href={currentProject.sourceCodeLink.link}
              className="text-blue-700 hover:underline font-bold"
              target="_blank"
            >
              {currentProject.sourceCodeLink.source}
            </a>
            <a
              href={currentProject.demoLink.link}
              className="text-blue-700 hover:underline font-bold"
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
