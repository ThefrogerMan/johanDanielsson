import { projects } from "../data/data";
import Grid from "../components/Grid";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="">
      <Grid>
        {projects.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </Grid>
    </div>
  );
}
