import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { SiGmail } from "react-icons/si";

export default function Links() {
  const { t } = useTranslation();
  const linkClass = "text-4xl border rounded-3xl p-4 mb-2 ";
  const listClass = "m-2 p-4 flex items-center";

  const contactLinks = [
    {
      icon: <FontAwesomeIcon icon={faWhatsapp} className={linkClass} />,
      href: "https://wa.me/+393472637900",
      text: t("message"),
    },
    {
      icon: <FontAwesomeIcon icon={faGithub} className={linkClass} />,
      href: "https://github.com/Marcofa87",
      text: t("github"),
    },
    {
      icon: <SiGmail className={`text-7xl ${linkClass}`} />,
      href: "mailto:marco.falasca87@gmail.com",
      text: t("email"),
    },
    {
      icon: <FontAwesomeIcon icon={faLinkedin} className={linkClass} />,
      href: "https://www.linkedin.com/in/marco-falasca-web-developer/",
      text: t("linkedin"),
    },
  ];

  return (
    <>
      <div>
        <ul>
          {contactLinks.map((link, id) => (
            <li key={id} className={listClass}>
              {link.icon}
              <a href={link.href} target="_blank" className="ml-4">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
