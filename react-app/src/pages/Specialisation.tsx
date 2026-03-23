import earlyBird from "../assets/early-bird.png";

export default function Specialisation() {
  return (
    <div className="">
      <h1 className="text-center my-12 mt-6 text-4xl">Specialisation</h1>
      <Section title="Frontend" image={earlyBird}>
        <p>
          I have a strong passion for frontend development, with a particular
          focus on React. I enjoy creating intuitive and responsive user
          interfaces that provide a seamless user experience. My expertise in
          React allows me to build dynamic and interactive web applications that
          are both visually appealing and highly functional.
        </p>
      </Section>
      <Section title="Frontend" image={earlyBird}>
        <p>
          I have a strong passion for frontend development, with a particular
          focus on React. I enjoy creating intuitive and responsive
        </p>
        <ul>
          <li>React</li>
          <li>Vue</li>
          <li>Angular</li>
        </ul>
        <p>
          user interfaces that provide a seamless user experience. My expertise
          in React allows me to build dynamic and interactive web applications
          that are both visually appealing and highly functional.
        </p>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
  image,
}: {
  title: string;
  children: React.ReactNode;
  image?: string;
}) {
  return (
    <div className="mb-6 ">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <img src={image} alt={title} className="w-full h-auto mb-4" />
      <div className=" border-gray-300">{children}</div>
    </div>
  );
}
