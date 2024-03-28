import { iconsList } from "./SkillsData";

export default function Skillset() {
  return (
    <>
      <div className="p-4 mt-6">
        <h2 className="text-center">Skills</h2>
        <div>
          <ul className="flex justify-center">
            {iconsList.map((item, index) => (
              <li key={index} className="">
                {<item.icon className={item.className} />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
