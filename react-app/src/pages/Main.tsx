import Hero from "../components/Hero";
import earlyBird from "../assets/early-bird.png";
import { projects, type ProjectType } from "../data/data";
import { Link } from "react-router";

export default function Main() {
  return (
    <div className="">
      <Hero />
      <div className="grid grid-cols-3 gap-3 mt-4">
        {projects.map((project) => {
          return <Project {...project} />;
        })}
      </div>
    </div>
  );
}

function Project(props: ProjectType) {
  console.log(earlyBird);
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
