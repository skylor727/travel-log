const ImageCard = ({ images }) => {
  console.log(images);
  const imageEls = images.map((img) => <img src={img}></img>);
  return (
    <>
      <h1>Image Card</h1>
      <div>{imageEls}</div>
    </>
  );
};

export default ImageCard;
