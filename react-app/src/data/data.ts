import earlyBird from "../assets/early-bird.png";

export type ProjectType = {
  id: string;
  name: string;
  featured?: boolean;
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
    featured: true,
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
  {
    id: "test4",
    name: "My test project 4",
    description: "This game is the greatest, all my friends say so",
    myContributions: "everything",
    coverImage: earlyBird,
  },
  {
    id: "test5",
    name: "My test project 5",
    featured: true,
    description: "This game is the greatest, all my friends say so",
    myContributions: "everything",
    coverImage: earlyBird,
  },
];
