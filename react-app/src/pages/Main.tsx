import Hero from "../components/Hero";
import earlyBird from "../assets/early-bird.png";

export default function Main() {
  return (
    <div className="">
      <Hero />
      <div className="grid grid-cols-3 gap-3 mt-4">
        <Project />
        <Project />
      </div>
    </div>
  );
}

function Project() {
  console.log(earlyBird);
  return (
    <div
      className="border aspect-square bg-cover"
      style={{
        backgroundImage: `url(${earlyBird}`,
      }}
    >
      <div>project name</div>
    </div>
  );
}
