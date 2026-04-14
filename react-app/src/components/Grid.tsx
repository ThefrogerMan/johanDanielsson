export default function Grid(props: { children: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-3 ">
      {props.children}
    </div>
  );
}
