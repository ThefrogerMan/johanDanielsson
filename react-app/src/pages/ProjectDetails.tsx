import { useParams, useNavigate } from "react-router";
import { projects } from "../data/data";
import { useState } from "react";
import RightArrow from "../icons/RightArrow";

function getYouTubeEmbedUrl(url: string): string {
  const videoIdMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/,
  );
  if (videoIdMatch && videoIdMatch[1]) {
    return `https://www.youtube.com/embed/${videoIdMatch[1]}`;
  }
  return url;
}

function getYoutubeThumbnailUrl(url: string): string {
  const videoIdMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/,
  );
  if (videoIdMatch && videoIdMatch[1]) {
    return `https://img.youtube.com/vi/${videoIdMatch[1]}/0.jpg`;
  }
  return "";
}

type Media = "video" | number;

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = projects.find((project) => project.id === projectId);
  const navigate = useNavigate();
  const defaultMedia: Media = project?.trailerUrl ? "video" : 0;

  const [selectedMedia, setSelectedMedia] = useState<Media>(defaultMedia);

  if (!project) {
    return <div>Project not found</div>;
  }

  const videoThumbnailUrl = project.trailerUrl
    ? getYoutubeThumbnailUrl(project.trailerUrl)
    : null;

  console.log(videoThumbnailUrl);

  return (
    <div className="max-w-4xl mx-auto">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="bg-transparent! p-0! flex items-center gap-2 mb-4 text-sm text-contrast-white hover:text-contrast-light hover:border-0! border-0!"
      >
        <div className="rotate-180">
          <RightArrow height={24} width={24} />
        </div>
        <div>Back to projects</div>
      </button>
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>

      {/* Main Media Display */}
      <div className="mb-6">
        {selectedMedia === "video" && project.trailerUrl ? (
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={getYouTubeEmbedUrl(project.trailerUrl)}
              title={`${project.name} trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : typeof selectedMedia === "number" &&
          project.images?.[selectedMedia] ? (
          <img
            src={project.images[selectedMedia]}
            alt={`${project.name} screenshot ${selectedMedia + 1}`}
            className="w-full h-auto rounded-lg"
          />
        ) : null}
      </div>

      {/* Media Picker/Thumbnails */}
      <div className="mb-6 flex gap-2 overflow-x-auto pb-2">
        {project.trailerUrl && (
          <Thumbnail
            video
            index={-1}
            image={videoThumbnailUrl ?? ""}
            onClick={() => setSelectedMedia("video")}
            selected={selectedMedia === "video"}
          />
        )}
        {project.images?.map((image, index) => (
          <Thumbnail
            key={index}
            index={index}
            image={image}
            onClick={() => setSelectedMedia(index)}
            selected={selectedMedia === index}
          />
        ))}
      </div>

      <div className="space-y-4">
        <div className="text-sm">
          <div>
            Project length:{" "}
            <span className="font-semibold">{project.length}</span>
          </div>
          <div>
            Team size: <span className="font-semibold">{project.teamSize}</span>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Description</h2>
          <p>{project.description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">My Contributions</h2>
          <p className="font-extralight text-sm my-0!">
            {project.myContributions}
          </p>
          <p className="">{project.myContributionsDetails}</p>
        </div>
      </div>
    </div>
  );
}

function Thumbnail(props: {
  index: number;
  image: string;
  onClick: () => void;
  selected: boolean;
  video?: boolean;
}) {
  return (
    <button
      onClick={props.onClick}
      style={{
        backgroundImage: `url(${props.image})`,
      }}
      className={`relative shrink-0 p-0! bg-center w-32 h-20 rounded border-4! transition-all overflow-hidden ${
        props.selected ? "border-white! " : "border-transparent "
      }`}
    >
      <img
        src={props.image}
        alt={`Thumbnail ${props.index + 1}`}
        className={`w-full h-full object-cover ${props.video ? "scale-110" : "scale-100"}`}
      />
      {props.video && (
        <div className="absolute inset-0  flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            width="48px"
            height="48px"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}
    </button>
  );
}
