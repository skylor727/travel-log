import "./PhotoCard.css";

const PhotoCard = ({ photos }) => {
  const photoEls = photos.map((photo, idx) => (
    <div className="box box1">
      {" "}
      <img key={idx} src={photo}></img>
    </div>
  ));
  return (
    <>
      <h1>Photo Card</h1>
      <div className="wrapper">{photoEls}</div>
    </>
  );
};

export default PhotoCard;
