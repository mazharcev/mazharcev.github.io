export default function Divider(props) {
  const { title } = props;
  return (
    <div className="divider">
      <div className="left1"></div>
      <h1>{title}</h1>
      <div className="right1"></div>
    </div>
  );
}
