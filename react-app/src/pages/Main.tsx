import Hero from "../components/Hero";
import { projects } from "../data/data";
import Grid from "../components/Grid";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router";

export default function Main() {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <div className="">
      <Hero />
      <Link
        to="/specialisation"
        className="block text-left bg-white group text-black! mt-8 p-4 text-lg font-medium hover:underline"
      >
        Learn more about my specialisation
        <div className="text-4xl font-bold group-hover:underline">
          {" "}
          Dialog Tool
        </div>
      </Link>
      <Grid>
        {featuredProjects.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </Grid>
    </div>
  );
}
