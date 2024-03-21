import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const socialIcons = [
  { icon: faFacebook, link: "https://www.facebook.com/marco.falasca1" },
  { icon: faInstagram, link: "https://www.instagram.com/marcofa87/" },
  {
    icon: faLinkedin,
    link: "https://www.linkedin.com/in/marco-falasca-web-developer/",
  },
  { icon: faGithub, link: "https://github.com/Marcofa87" },
];

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
