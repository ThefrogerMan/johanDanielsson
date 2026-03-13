import earlyBird from "../assets/early-bird.png";

export type ProjectType = {
  id: string;
  name: string;
  description: string;
  myContributions: string;
  coverImage: string;
  trailerUrl?: string;
  images?: string[];
};

export const projects: ProjectType[] = [
  {
    id: "test",
    name: "My test project",
    description: "This game is the greatest, all my friends say so",
    myContributions: "everything",
    coverImage: earlyBird,
  },
  {
    id: "test2",
    name: "My test project 2",
    description: "This game is the greatest, all my friends say so",
    myContributions: "everything",
    coverImage: earlyBird,
  },
  {
    id: "test3",
    name: "My test project 3",
    description: "This game is the greatest, all my friends say so",
    myContributions: "everything",
    coverImage: earlyBird,
  },
];
