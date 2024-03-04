import { useState } from "react";
import { projectData } from "../ui/main/data";

export default function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

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
        <img
          src={projectData[selectedProjectIndex].image}
          alt=""
          className="w-full rounded-lg"
        />
        <div className="p-6">
          <p className="text-gray-800  text-lg font-bold mb-2 text-center">
            {projectData[selectedProjectIndex].title}
          </p>
          <p className="text-gray-800 text-sm mb-4 font-bold">
            {projectData[selectedProjectIndex].description}
          </p>
          <div className="flex justify-between items-center">
            <a
              href={projectData[selectedProjectIndex].sourceCodeLink.link}
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              {projectData[selectedProjectIndex].sourceCodeLink.source}
            </a>
            <a
              href={projectData[selectedProjectIndex].demoLink.link}
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              {projectData[selectedProjectIndex].demoLink.demo}
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
