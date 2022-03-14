import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const DetailedActivityCard = ({ activity }) => {
  const { title, description, price } = activity;
  const card = (
    <CardContent>
      <Typography>Activity: {title}</Typography>
      <Typography>Description: {description}</Typography>
      <Typography>Activity Cost: ${price}</Typography>
    </CardContent>
  );
  return (
    <>
      <Box>
        <Card>{card}</Card>
      </Box>
    </>
  );
};

export default DetailedActivityCard;
