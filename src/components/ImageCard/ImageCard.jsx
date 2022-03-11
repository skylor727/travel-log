const ImageCard = ({ images }) => {
  const imageEls = images.map((image, idx) => <img key={idx} src={image}></img>);
  return (
    <>
      <h1>Image Card</h1>
      <div>{imageEls}</div>
    </>
  );
};

export default ImageCard;
