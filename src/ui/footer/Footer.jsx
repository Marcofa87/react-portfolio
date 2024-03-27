import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialIcons } from "./data";

export default function Footer() {
  return (
    <ul className="flex justify-end  font-bold p-6">
      {socialIcons.map((socialIcon, id) => (
        <li key={id} className="p-2 text-3xl">
          <a href={socialIcon.link} target="_blank">
            <FontAwesomeIcon icon={socialIcon.icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
