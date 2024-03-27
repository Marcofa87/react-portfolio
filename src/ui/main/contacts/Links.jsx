import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Links() {
  const linkClass = "text-4xl border rounded-full p-4 mb-2 ";
  const listClass = "m-2 p-4 flex items-center";
  return (
    <ul>
      <li className={listClass}>
        <FontAwesomeIcon icon={faPhoneAlt} className={linkClass} />
        <a href="" className="ml-4">
          +393472637900
        </a>
      </li>
      <li className={listClass}>
        <FontAwesomeIcon icon={faGithub} className={linkClass} />
        <a href="" className="ml-4">
          Marcofa87
        </a>
      </li>
      <li className={listClass}>
        <FontAwesomeIcon icon={faEnvelope} className={linkClass} />
        <a href="" className="ml-4">
          marco.falasca87@gmail.com
        </a>
      </li>
      <li className={listClass}>
        <FontAwesomeIcon icon={faLinkedin} className={linkClass} />
        <a href="" className="ml-4">
          marco-falasca-web-developer
        </a>
      </li>
    </ul>
  );
}
