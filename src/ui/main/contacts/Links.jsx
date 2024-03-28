import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiGmail } from "react-icons/si";

export default function Links() {
  const linkClass = "text-4xl border rounded-full p-4 mb-2 ";
  const listClass = "m-2 p-4 flex items-center";
  return (
    <ul>
      <li className={listClass}>
        <FontAwesomeIcon icon={faWhatsapp} className={linkClass} />
        <a href="https://wa.me/+393472637900" target="_blank" className="ml-4">
          Send me a message
        </a>
      </li>
      <li className={listClass}>
        <FontAwesomeIcon icon={faGithub} className={linkClass} />
        <a href="https://github.com/Marcofa87" target="_blank" className="ml-4">
          Github
        </a>
      </li>
      <li className={listClass}>
        <SiGmail className={linkClass} />
        <a
          href="mailto:marco.falasca87@gmail.com"
          target="_blank"
          className="ml-4"
        >
          Email: marco.falasca87@gmail.com
        </a>
      </li>
      <li className={listClass}>
        <FontAwesomeIcon icon={faLinkedin} className={linkClass} />
        <a
          href="https://www.linkedin.com/in/marco-falasca-web-developer/"
          target="_blank"
          className="ml-4"
        >
          Linkedin
        </a>
      </li>
    </ul>
  );
}
