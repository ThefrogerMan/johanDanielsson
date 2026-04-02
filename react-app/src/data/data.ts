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
  length: string;
  teamSize: string;
  trailerUrl?: string;
  images?: string[];
};

export const projects: ProjectType[] = [
  {
    id: "test",
    name: "Early Bird",
    description: "You are a stressed seagull who overslept. Dodge, jump and dive through the hostile environment of Sweden. Collect berries to energize you on your journey to reunite with your flock.",
    myContributions: "Animations",
    myContributionsDetails: "The first projct from the game assembly (TGA) where the biggest learning experience was learning unity." +
    " While I was helping with a bunch of smaller aspects throughout the entire project, animation implementation was my largest part." +
    " This helped me to more deeply understand how to connect the differnet system which made othar parts easier to make, like moving obstacles.",
    coverImage: earlyBird,
    trailerUrl: "https://www.youtube.com/watch?v=PM2JWWO9Rw8",
    images: [earlyBirdSS1,earlyBirdSS2,earlyBirdSS3,earlyBirdSS4],
    length: "2 weeks",
    teamSize: "13",
  },
  {
    id: "test2",
    name: "Pawns Gambit",
    description: "You are a humble pawn sent forth by the King on a perilous journey. Battle foes & solve puzzles. Prove your worth and ascend as Queen!",
    myContributions: "UI, Sound",
    myContributionsDetails: "The second project was also made using unity but for mobile. So taking care of UI became more of a testing a making sure it works for a multitude of asåects ratios." +
    " I also managed the sound effects and putting in the music in the game which tought me how to understand other students code more to implement where and when sounds should play.",
    coverImage: pawnGambit,
    featured: true,
    trailerUrl: "https://www.youtube.com/watch?v=RV0J4raLpqY&pp=0gcJCdYKAYcqIYzv",
    images: [pawnGambitSS1,pawnGambitSS2,pawnGambitSS3,pawnGambitSS4],
    length: "2 weeks",
    teamSize: "14",
  },
  {
    id: "test3",
    name: "Grim Fates Await",
    description: "As a fallen angel, rush and dash your way through the sinful levels of hell, confronting your sins to determine your fate.",
    myContributions: "UI, Level Loading",
    myContributionsDetails: "The third project was the first in TGA's own engine TGE. To make anything work in TGE was harder given the lack of online help." + 
    " Unity was used as a level editor and then imported into TGE using TGA's level exporter which was built upon by the group. Translateing the data from unity " +
    "into TGE was the biggest learning experience to understand how the game engines handle data to make games work.",
    coverImage: grimFate,
    trailerUrl: "https://www.youtube.com/watch?v=iTCwuRnwLcU",
    images: [grimFateSS1,grimFateSS2,grimFateSS3,grimFateSS4],
    length: "6 weeks",
    teamSize: "13",
  },
  {
    id: "test4",
    name: "Game of Gnomes",
    description: "The gnomes have protected the garden for years but now a new threat invades their kingdom. Attack and dodge through the advancing squirrels to retake the garden!",
    myContributions: "Movement, Combat, Animations",
    myContributionsDetails: "In the fourth project I have learned more about how we need to use TGE engine so I could from the start build deeper mechanics. " +
    "Focusing on the core gameplay with movement and combat also made it so I could take a bigger on how the game should feel and look. " +
    "The process was more iteratively made with trying to geet as many base features out as quickly as possible for the fellow group members to iterate on their work. " +
    "These features could later be improved and refacored when more time was there and functionality was set in stone.",
    featured: true,
    coverImage: gameOfGnomes,
    trailerUrl: "https://www.youtube.com/watch?v=ZKy3h8cz20I",
    images: [gameOfGnomesSS1,gameOfGnomesSS2,gameOfGnomesSS3,gameOfGnomesSS4],
    length: "4 weeks",    
    teamSize: "13",
  },
  {
    id: "test5",
    name: "Spite: Oathbound",
    description: "As a shieldmaiden, slash and strike your way through your draugr-infested hometown, taking on the role of a valkyrie to save the World Tree.",
    myContributions: "Combat, Sound",
    myContributionsDetails: "First part of the fifth was just for preproduction for 2 weeks and then later 5 weeks of production. During the first 2 weeks "+
    "I mostly worked on getting in video and audio fetures to our groups engine. Part of it I also planned up a lot for the tools that would need to be added " +
    "for the other groupmembers. This was done through looking back into the previous projects they have been apart of and seeing what was good and what could be "+
    "improved. This made it easier for all the programmers in the group to build tools and have a understanding on what is needed for the tool user in question. " +
    "During the actual game production I worked mostly on the player where I used a modular system to build the abilities so that enemies and the boss easily could "+
    "use the same abilities with tweaked stats. Through this I gained a deeper understanding on tool making and the UX experinece needed for people to use what you actually "+
    "make. Cause a slight hard tool to use might be worse than no tool at all. ",
    coverImage: spite,
    trailerUrl: "https://www.youtube.com/watch?v=6T9ucwCqhoA",
    images: [spiteSS1,spiteSS2,spiteSS3,spiteSS4],
    length: "7 weeks",
    teamSize: "19",
  },
  {
    id: "test6",
    name: "Merle: The Incompetent Wizard",
    featured: true,
    description: "As a wizard who has lost their power, climb and puzzle the way as you scour, beware suits of armor and do not cower, regain the magic and free your tower.",
    myContributions: "Movement, Gameplay Features, Project Management",
    myContributionsDetails: "During the production and planing of Merle I took a bigger part of planing the core features and references for the game. Given that we had " +
      "A Hat In Time as a refence game I gathered images and GIFs from the game to make it easier for everyone to have the same vision of the game we were making. " +
      "With this preperation we could go into the beginning of the game development process quicker and have the option of more iterations. " +
      "During the main project I also took a bigger part of leading sprint planings and holding the stand ups. During the main coding part of the project "+
      "I was partly responsible for making most of the gameplay features like moving platforms, spring, buttons, particle activations and making it possible to use it through unreal. " +
      "The deeper movement mechanics like dash, wall jump, ledge grab, fireball and health system I was also a part of developing.",
    coverImage: lilWiz,
    length: "8 weeks",
    teamSize: "18",
  },
];
