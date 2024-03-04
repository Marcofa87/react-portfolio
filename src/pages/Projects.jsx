import { projectData } from "../ui/main/data";

export default function Projects() {
  return (
    <div className="container mx-auto m-40 md:w-6/12 lg:w-4/12 bg-slate-200  rounded-lg overflow-hidden p-2 shadow-2xl">
      <img src={projectData.image} alt="" className="w-full rounded-lg" />
      <div className="p-6">
        <p className="text-gray-800  text-lg font-bold mb-2 text-center">
          {projectData.title}
        </p>
        <p className="text-gray-800 text-sm mb-4 font-bold">
          {projectData.description}
        </p>
        <div className="flex justify-between items-center">
          <a
            href={projectData.sourceCodeLink.link}
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            {projectData.sourceCodeLink.source}
          </a>
          <a
            href={projectData.demoLink.link}
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            {projectData.demoLink.demo}
          </a>
        </div>
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 rounded-md bg-slate-200 text-gray-800 hover:bg-gray-300 focus:outline-none">
            Back
          </button>
          <button className="px-4 py-2 rounded-lg bg-slate-200 text-gray-800 hover:bg-gray-300 focus:outline-none">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
