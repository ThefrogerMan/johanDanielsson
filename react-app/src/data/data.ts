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
    description: "You are a stressed seagull who overslept. Dodge, jump and dive through the hostile environment of Sweden. Collect berries to energize you on your journey to reunite with your flock.",
    myContributions: "Animations",
    coverImage: earlyBird,
    trailerUrl: "https://www.youtube.com/watch?v=PM2JWWO9Rw8",
  },
  {
    id: "test2",
    name: "Pawns Gambit",
    description: "You’re a humble pawn sent forth by the King on a perilous journey. Battle foes & solve puzzles. Prove your worth and ascend as Queen!",
    myContributions: "UI, Sound",
    coverImage: pawnGambit,
    trailerUrl: "https://www.youtube.com/watch?v=RV0J4raLpqY&pp=0gcJCdYKAYcqIYzv",
  },
  {
    id: "test3",
    name: "Grim Fates Await",
    description: "As a fallen angel, rush and dash your way through the sinful levels of hell, confronting your sins to determine your fate.",
    myContributions: "UI, Level Loading",
    coverImage: grimFate,
    trailerUrl: "https://www.youtube.com/watch?v=iTCwuRnwLcU",
  },
  {
    id: "test4",
    name: "Game of Gnomes",
    description: "The gnomes have protected the garden for years but now a new threat invades their kingdom. Attack and dodge through the advancing squirrels to retake the garden!",
    myContributions: "Movement, Combat, Animations",
    featured: true,
    coverImage: gameOfGnomes,
    trailerUrl: "https://www.youtube.com/watch?v=ZKy3h8cz20I",
  },
  {
    id: "test5",
    name: "Spite: Oathbound",
    featured: true,
    description: "As a shieldmaiden, slash and strike your way through your draugr-infested hometown, taking on the role of a valkyrie to save the World Tree.",
    myContributions: "Combat, Sound",
    coverImage: spite,
    trailerUrl: "https://www.youtube.com/watch?v=6T9ucwCqhoA",
  },
  {
    id: "test6",
    name: "Merle: The Incompetent Wizard",
    featured: true,
    description: "As a wizard who has lost their power, climb and puzzle the way as you scour, beware suits of armor and do not cower, regain the magic and free your tower.",
    myContributions: "Movement, Gameplay Features",
    featured: true,
    coverImage: lilWiz,
  },
];
