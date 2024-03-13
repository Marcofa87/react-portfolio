import { NavLink } from "react-router-dom";
import DarkMode from "./Navbarstates/DarkMode";
import Language from "./Navbarstates/Language";
import NavbarImage from "./NavbarImage/NavbarImage";

export default function Navbar() {
  const links = [
    { path: "/about", text: "About Me" },
    { path: "/projects", text: "Projects" },
    { path: "/contact", text: "Contact" },
  ];

  return (
    <>
      <nav className="flex flex-col md:flex-row items-center justify-between border-b-2 p-2">
        <div className="flex items-center">
          <NavbarImage />
          <DarkMode />
          <Language />
        </div>

        <ul className="md:flex text-slate-400">
          {links.map((link, index) => (
            <li key={index} className="p-4">
              <NavLink to={link.path} className="hover:underline">
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
