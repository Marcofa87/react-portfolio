import { NavLink } from "react-router-dom";
import DarkMode from "./Navbarstates/DarkMode";
import Language from "./Navbarstates/Language";

export default function Navbar() {
  const links = [
    { path: "/about", text: "About" },
    { path: "/projects", text: "Projects" },
    { path: "/contact", text: "Contact" },
  ];
  return (
    <nav>
      <ul className="text-slate-400 flex justify-end border-b-2">
        <DarkMode />
        <Language />
        {links.map((link, index) => (
          <li key={index} className="p-4">
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
