const PhotoCard = ({ photos }) => {
  const photoEls = photos.map((photo, idx) => (
    <img key={idx} src={photo}></img>
  ));
  return (
    <>
      <h1>Photo Card</h1>
      <div>{photoEls}</div>
    </>
  );
};

export default PhotoCard;
