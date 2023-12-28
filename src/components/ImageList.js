import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  const renderImages = images.map((image) => (
    <ImageShow key={image.id} image={image} />
  ));

  return <div className="images-list">{renderImages}</div>;
}

export default ImageList;
