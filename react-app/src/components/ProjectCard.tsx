import { Link } from "react-router";
import type { ProjectType } from "../data/data";

export default function ProjectCard(props: ProjectType) {
  return (
    <Link
      to={"/projects/" + props.id}
      className="relative aspect-video text-white group overflow-hidden block font-bold!"
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-110"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent), url(${props.coverImage})`,
        }}
      />
      <div className="relative z-10 p-3 text-white group-hover:underline">
        <div>{props.name}</div>
      </div>
    </Link>
  );
}
