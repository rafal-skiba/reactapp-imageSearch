import "./ImageShow.css";

function ImageShow({ image }) {
  return (
    <div>
      <img
        className="image"
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </div>
  );
}

export default ImageShow;
