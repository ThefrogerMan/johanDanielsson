import { useParams } from "react-router";
import { projects } from "../data/data";

function getYouTubeEmbedUrl(url: string): string {
  const videoIdMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/,
  );
  if (videoIdMatch && videoIdMatch[1]) {
    return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
  }
  return url;
}

export default function ProjectDetails() {
  const { projectId } = useParams();

  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>

      {project.trailerUrl && (
        <div className="mb-6">
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={getYouTubeEmbedUrl(project.trailerUrl)}
              title={`${project.name} trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p>{project.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">My Contributions</h2>
          <p>{project.myContributions}</p>
        </div>
      </div>
    </div>
  );
}
