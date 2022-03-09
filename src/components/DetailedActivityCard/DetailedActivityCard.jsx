const DetailedActivityCard = ({ activity }) => {
  const { title, description, price } = activity;
  return (
    <>
      <div style={{ border: "1px solid black" }}>
        <p>Activity: {title}</p>
        <p>Description: {description}</p>
        <p>Cost: ${price}</p>
      </div>
    </>
  );
};

export default DetailedActivityCard;
