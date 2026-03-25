import earlyBird from "../assets/early-bird.png";
import gameOfGnomes from "../assets/game-of-gnomes.png";
import grimFate from "../assets/grim-fate-awaits.png";
import lilWiz from "../assets/lilwizz.png";
import spite from "../assets/spite-oathbound.png";
import pawnGambit from "../assets/pawns-gambit.png";

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
    name: "Early Bird",
    featured: true,
    description: "This game is the greatest, all my friends say so",
    myContributions: "Animations",
    coverImage: earlyBird,
  },
  {
    id: "test2",
    name: "Pawns Gambit",
    description: "This game is the greatest, all my friends say so",
    myContributions: "UI",
    coverImage: pawnGambit,
  },
  {
    id: "test3",
    name: "Grim Fates Await",
    description: "This game is the greatest, all my friends say so",
    myContributions: "UI",
    coverImage: grimFate,
  },
  {
    id: "test4",
    name: "Game of Gnomes",
    description: "This game is the greatest, all my friends say so",
    myContributions: "Movement, combat, animations",
    coverImage: gameOfGnomes,
  },
  {
    id: "test5",
    name: "Spite: Oathbound",
    featured: true,
    description: "This game is the greatest, all my friends say so",
    myContributions: "Combat, sound, tools, ",
    coverImage: spite,
  },
  {
    id: "test6",
    name: "Merle: The Incompetent Wizard",
    featured: true,
    description: "This game is the greatest, all my friends say so",
    myContributions: "Movement, Gameplay features",
    coverImage: lilWiz,
  },
];
