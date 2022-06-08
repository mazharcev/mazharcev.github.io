import "../App.css";

export default function MediaLink(props) {
  const { img, url } = props;

  const openInNewTab = () => {
    const newWindow = window.open(url, "_blank", "noopener noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <button className="btn-media" onClick={openInNewTab}>
      <img src={img} alt="media logo" className="link-media"/>
      </button>
  );
}