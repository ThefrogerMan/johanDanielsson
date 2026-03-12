import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="w-screen min-h-screen">
      <Menu />
      <div className="p-3 md:p-6">
        <Outlet />
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="flex justify-between p-3 md:p-6">
      <div>JD</div>
      <div>
        <ul className="flex justify-between gap-2">
          <li>Specialisation</li>
          <li>Resume</li>
          <li>Project</li>
        </ul>
      </div>
    </div>
  );
}
