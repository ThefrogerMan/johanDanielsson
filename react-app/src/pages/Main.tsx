import Hero from "../components/Hero";
import { projects } from "../data/data";
import Grid from "../components/Grid";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router";
// import RightArrow from "../icons/RightArrow";
import type { ReactElement } from "react";

export default function Main() {
  const featuredProjects = projects.filter((project) => project.featured);
  return (
    <div className="flex flex-col gap-6">
      <Hero />
      <Link to="/specialisation">
        <ButtonThing inverted>
          <div>
            Learn more about my specialisation
            <div className="flex gap-4 items-center">
              <div className="text-4xl font-bold group-hover:underline">
                {" "}
                Dialog Tool
              </div>

              {/* <RightArrow height={44} width={44} /> */}
            </div>
          </div>
        </ButtonThing>
      </Link>
      <div>
        <div className="text-white w-fit  p-2   font-bold">Projects</div>
        <Grid>
          {featuredProjects.map((project) => {
            return <ProjectCard {...project} />;
          })}
          <Link to="/projects" className="">
            <ButtonThing inverted>
              <div className="w-full">
                <div>All projects</div>
                {/* <RightArrow height={32} width={32} /> */}
              </div>
            </ButtonThing>
          </Link>
        </Grid>
      </div>
    </div>
  );
}

function ButtonThing(props: { children: ReactElement; inverted?: boolean }) {
  return (
    <div
      className={`border-2 border-contrast-light bg-contrast-dark  overflow-hidden  hover:border-white h-full p-6 ${""} text-shadow-md  text-white! transition-all font-bold!  rounded-2xl scale-100 hover:scale-103 duration-300`}
      style={
        {
          // backgroundImage: `linear-gradient(to bottom right, #a6c149, #5a6a1e)`,
        }
      }
    >
      {props.children}
    </div>
  );
}
