export default function Hero() {
  return (
    <div className="text-white text-2xl font-light">
      Hello my name is
      <Hightlight> Johan Danielsson </Hightlight>
      and I'm a<Hightlight> Tools </Hightlight>
      and
      <Hightlight> Gameplay Programmer</Hightlight>.
    </div>
  );
}

function Hightlight({ children }: { children: React.ReactNode }) {
  return (
    <span className=" font-semibold text-contrast-light md:whitespace-nowrap">
      {children}
    </span>
  );
}
