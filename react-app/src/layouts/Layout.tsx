import { Link, Outlet } from "react-router";
import LinkedIn from "../icons/LinkedIn";

export default function Layout() {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <main className="p-3 md:p-6 max-w-4xl mx-auto">
        <Outlet />
      </main>
      <div className="p-3 md:p-6 max-w-4xl mx-auto pt-24!">
        <div className="flex flex-col gap-2">
          <a
            href="https://www.linkedin.com/in/johan-danielsson-049737213/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <LinkedIn />
            LinkedIn
          </a>
          <a href="mailto:johan_axel@live.se ">johan_axel@live.se</a>
          <a href="tel:+46761169651" className="">
            +46-76 116 96 51
          </a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="flex justify-between p-3 md:p-6 max-w-4xl mx-auto">
      <div className="text-lg font-bold">
        <Link to="/" className="font-extrabold!">
          JD
        </Link>
      </div>
      <nav aria-label="Main navigation">
        <ul className="flex justify-between gap-2 list-none!">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/specialisation">Specialisation</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
