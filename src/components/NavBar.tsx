import { NavLink } from "react-router-dom";

export default function NavBar() {

  const activate = ({ isActive }: { isActive: boolean }) => isActive ? "text-blue-500" : "text-black";

  return (
    <>
      <header className={"header"}>
        <NavLink
          to={"/"}
          className={"flex h-10 w-10 items-center justify-center rounded-lg bg-white font-bold shadow-md"}
        >
          <p className={"blue-gradient_text"}>DG</p>
        </NavLink>
        <nav className={"flex gap-7 text-lg font-medium"}>
          <NavLink
            to={"/about"}
            className={activate}
          >
            About
          </NavLink>
          <NavLink to={"/projects"} className={activate}>Projects</NavLink>
          <NavLink to={"/contact"} className={activate}>Contact</NavLink>
        </nav>
      </header>
    </>
  );
}