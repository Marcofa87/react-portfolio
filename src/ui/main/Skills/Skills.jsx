import { iconsList } from "./SkillsData";

export default function Skillset() {
  return (
    <>
      <div className="p-4">
        <div className="mb-4">
          <h2 className="text-center text-3xl">Skills</h2>
        </div>
        <div className="mt-12">
          <ul className="flex justify-center">
            {iconsList.map((item, id) => (
              <li key={id}>{<item.icon className={item.className} />}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
