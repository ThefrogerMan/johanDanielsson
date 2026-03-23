import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Main from "./pages/Main.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./layouts/Layout.tsx";
import ProjectDetails from "./pages/ProjectDetails.tsx";
import Resume from "./pages/Resume.tsx";
import Projects from "./pages/Projects.tsx";
import Specialisation from "./pages/Specialisation.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/specialisation" element={<Specialisation />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="/resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
