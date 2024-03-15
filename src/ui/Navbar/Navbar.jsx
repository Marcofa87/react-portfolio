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
      <nav className="flex flex-col md:flex-row items-center justify-between md:border-b-2 p-2">
        <div className="flex items-center justify-between md:w-2/4">
          <NavLink
            to="/"
            className="justify-start w-1/4 hidden md:block md:w-2/4"
          >
            <NavbarImage />
          </NavLink>
          <DarkMode />
          <Language />
        </div>

        <ul className="md:flex text-slate-50 font-bold">
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
