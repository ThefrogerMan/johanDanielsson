export default function Grid(props: { children: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3 mt-4">
      {props.children}
    </div>
  );
}
