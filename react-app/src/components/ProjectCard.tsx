import { Link } from "react-router";
import type { ProjectType } from "../data/data";

export default function ProjectCard(props: ProjectType) {
  return (
    <Link
      to={"/projects/" + props.id}
      className="relative border-2 border-transparent hover:border-white aspect-video text-white group overflow-hidden block font-bold! duration-300 rounded-2xl scale-100 hover:scale-103 hover:shadow transition-all"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent), url(${props.coverImage})`,
        }}
      >
        {/* <div
          className=" w-full h-full bg-cover bg-center rounded-2xl"
          style={{
            backgroundImage: ` url(${props.coverImage})`,
          }}
        ></div> */}
      </div>
      <div className="relative z-10 p-6  text-white flex flex-col  h-full">
        <div>{props.name}</div>
      </div>
      <div
        className="absolute text-white inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 duration-300 transition-opacity flex flex-col-reverse p-6"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3))`,
        }}
      >
        <p className="m-0! font-normal ">{props.description}</p>
      </div>
    </Link>
  );
}
