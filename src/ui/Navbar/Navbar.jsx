import { NavLink } from "react-router-dom";
import DarkMode from "./Navbarstates/DarkMode";
import Language from "./Navbarstates/Language";
import NavbarImage from "./NavbarImage/NavbarImage";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();
  const links = [
    { path: "/about", text: t("aboutMe") },
    { path: "/projects", text: t("projects") },
    { path: "/contact", text: t("contact") },
  ];

  return (
    <>
      <nav className="flex flex-col md:flex-row items-center justify-between border-b-2 p-2">
        <div className="flex items-center justify-between w-full md:w-2/4 sm:border-b-2 md:border-none">
          <NavLink to="/" className="justify-start w-2/4  md:block md:w-2/4">
            <NavbarImage />
          </NavLink>
          <div>
            <DarkMode />
            <Language />
          </div>
        </div>

        <ul className="md:flex font-bold ">
          {links.map((link, id) => (
            <li
              key={id}
              className="p-3 border-2 rounded-lg m-2 hover:bg-slate-50 hover:text-slate-900 transition duration-300 "
            >
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
