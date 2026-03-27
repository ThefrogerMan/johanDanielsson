import earlyBird from "../assets/early-bird.png";
import earlyBirdSS1 from "../assets/Early bird img/birdScreenshot.png";
import earlyBirdSS2 from "../assets/Early bird img/birdScreenshot2.png";
import earlyBirdSS3 from "../assets/Early bird img/birdScreenshot3.png";
import earlyBirdSS4 from "../assets/Early bird img/birdScreenshot4.png";

import gameOfGnomes from "../assets/game-of-gnomes.png";
import gameOfGnomesSS1 from "../assets/Game of Gnomes img/GameOfGnomes_Screenshot_01.png";
import gameOfGnomesSS2 from "../assets/Game of Gnomes img/GameOfGnomes_Screenshot_02.png";
import gameOfGnomesSS3 from "../assets/Game of Gnomes img/GameOfGnomes_Screenshot_03.png";
import gameOfGnomesSS4 from "../assets/Game of Gnomes img/GameOfGnomes_Screenshot_04.png";

import grimFate from "../assets/grim-fate-awaits.png";
import grimFateSS1 from "../assets/Grim fate img/grimScreenshot 2.png";
import grimFateSS2 from "../assets/Grim fate img/grimScreenshot 3.png";
import grimFateSS3 from "../assets/Grim fate img/grimScreenshot 4.png";
import grimFateSS4 from "../assets/Grim fate img/grimScreenshot 5.png";

import lilWiz from "../assets/lilwizz.png";

import spite from "../assets/spite-oathbound.png";
import spiteSS1 from "../assets/Spite img/spiteScreenshot.png";
import spiteSS2 from "../assets/Spite img/spiteScreenshot2.png";
import spiteSS3 from "../assets/Spite img/spiteScreenshot3.png";
import spiteSS4 from "../assets/Spite img/spiteScreenshot4.png";

import pawnGambit from "../assets/pawns-gambit.png";
import pawnGambitSS1 from "../assets/pawns gambit img/pawnScreenshot1.png";
import pawnGambitSS2 from "../assets/pawns gambit img/pawnScreenshot2.png";
import pawnGambitSS3 from "../assets/pawns gambit img/pawnScreenshot3.png";
import pawnGambitSS4 from "../assets/pawns gambit img/pawnScreenshot4.png";

export type ProjectType = {
  id: string;
  name: string;
  featured?: boolean;
  description: string;
  myContributions: string;
  myContributionsDetails: string;
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
    myContributionsDetails: "Pogchamp",
    coverImage: earlyBird,
    trailerUrl: "https://www.youtube.com/watch?v=PM2JWWO9Rw8",
    images: [earlyBirdSS1,earlyBirdSS2,earlyBirdSS3,earlyBirdSS4],
  },
  {
    id: "test2",
    name: "Pawns Gambit",
    description: "You’re a humble pawn sent forth by the King on a perilous journey. Battle foes & solve puzzles. Prove your worth and ascend as Queen!",
    myContributions: "UI, Sound",
    myContributionsDetails: "Pogchamp",
    coverImage: pawnGambit,
    trailerUrl: "https://www.youtube.com/watch?v=RV0J4raLpqY&pp=0gcJCdYKAYcqIYzv",
    images: [pawnGambitSS1,pawnGambitSS2,pawnGambitSS3,pawnGambitSS4],
    
  },
  {
    id: "test3",
    name: "Grim Fates Await",
    description: "As a fallen angel, rush and dash your way through the sinful levels of hell, confronting your sins to determine your fate.",
    myContributions: "UI, Level Loading",
    myContributionsDetails: "Pogchamp",
    coverImage: grimFate,
    trailerUrl: "https://www.youtube.com/watch?v=iTCwuRnwLcU",
    images: [grimFateSS1,grimFateSS2,grimFateSS3,grimFateSS4],
  },
  {
    id: "test4",
    name: "Game of Gnomes",
    description: "The gnomes have protected the garden for years but now a new threat invades their kingdom. Attack and dodge through the advancing squirrels to retake the garden!",
    myContributions: "Movement, Combat, Animations",
    myContributionsDetails: "Pogchamp",
    featured: true,
    coverImage: gameOfGnomes,
    trailerUrl: "https://www.youtube.com/watch?v=ZKy3h8cz20I",
    images: [gameOfGnomesSS1,gameOfGnomesSS2,gameOfGnomesSS3,gameOfGnomesSS4],
  },
  {
    id: "test5",
    name: "Spite: Oathbound",
    description: "As a shieldmaiden, slash and strike your way through your draugr-infested hometown, taking on the role of a valkyrie to save the World Tree.",
    myContributions: "Combat, Sound",
    myContributionsDetails: "Pogchamp",
    coverImage: spite,
    trailerUrl: "https://www.youtube.com/watch?v=6T9ucwCqhoA",
    images: [spiteSS1,spiteSS2,spiteSS3,spiteSS4],
  },
  {
    id: "test6",
    name: "Merle: The Incompetent Wizard",
    featured: true,
    description: "As a wizard who has lost their power, climb and puzzle the way as you scour, beware suits of armor and do not cower, regain the magic and free your tower.",
    myContributions: "Movement, Gameplay Features",
    myContributionsDetails: "Pogchamp",
    coverImage: lilWiz,
  },
];
