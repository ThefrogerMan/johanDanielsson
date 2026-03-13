import { useParams } from "react-router";
import { projects } from "../data/data";

export default function ProjectDetails() {
  let { projectId } = useParams();

  const project = projects.find((project) => project.id === projectId);
  console.log(project);

  return (
    <div>
      project details
      <pre>{JSON.stringify(project, null, 2)}</pre>
    </div>
  );
}
