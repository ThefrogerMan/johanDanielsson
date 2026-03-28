import Hero from "../components/Hero";
import { projects } from "../data/data";
import Grid from "../components/Grid";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router";
import RightArrow from "../icons/RightArrow";

export default function Main() {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <div className="flex flex-col gap-6">
      <Hero />
      <Link
        to="/specialisation"
        className="block text-left bg-white group text-black! mt-8 p-4 text-lg font-medium hover:underline"
      >
        Learn more about my specialisation
        <div className="flex gap-4 items-center">
          <div className="text-4xl font-bold group-hover:underline">
            {" "}
            Dialog Tool
          </div>

          <RightArrow height={44} width={44} />
        </div>
      </Link>
      <div>
        <div className="text-white w-fit  p-2   font-bold">Projects</div>
        <Grid>
          {featuredProjects.map((project) => {
            return <ProjectCard {...project} />;
          })}
          <Link
            to="/projects"
            className="border h-fit p-6 bg-white text-black! hover:underline! font-bold! flex items-center justify-between"
          >
            <div>All projects</div>
            <RightArrow height={32} width={32} />
          </Link>
        </Grid>
      </div>
    </div>
  );
}
