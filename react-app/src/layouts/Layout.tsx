import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="w-screen min-h-screen">
      <Header />
      <main className="p-3 md:p-6 max-w-4xl mx-auto">
        <Outlet />
      </main>
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
