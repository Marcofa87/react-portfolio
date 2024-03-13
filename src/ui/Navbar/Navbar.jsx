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
      <nav className="flex justify-around border-b-2 p-2">
        <NavbarImage />
        <DarkMode />
        <Language />

        <ul className=" text-slate-400 flex justify-end ">
          {links.map((link, index) => (
            <li key={index} className="p-4">
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
