import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Links() {
  const linkClass = "text-4xl border rounded-full p-4 mr-4";
  return (
    <ul>
      <li className="p-4 m-4">
        <a href="">
          <FontAwesomeIcon icon={faPhoneAlt} className={linkClass} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faGithub} className={linkClass} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faEnvelope} className={linkClass} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faLinkedin} className={linkClass} />
        </a>
      </li>
    </ul>
  );
}
