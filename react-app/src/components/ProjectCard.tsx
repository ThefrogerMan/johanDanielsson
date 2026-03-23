import { Link } from "react-router";
import type { ProjectType } from "../data/data";

export default function ProjectCard(props: ProjectType) {
  return (
    <Link
      to={"/projects/" + props.id}
      className="p-2 aspect-square bg-cover text-white"
      style={{
        backgroundImage: `url(${props.coverImage}`,
      }}
    >
      <div className="text-white">
        <div>{props.name}</div>
      </div>
    </Link>
  );
}
