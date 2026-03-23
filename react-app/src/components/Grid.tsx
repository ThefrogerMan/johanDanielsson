export default function Grid(props: { children: React.ReactNode }) {
  return <div className="grid grid-cols-3 gap-3 mt-4">{props.children}</div>;
}
