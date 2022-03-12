import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ActivityCard from "../ActivityCard/ActivityCard";
import DetailedActivityCard from "../DetailedActivityCard/DetailedActivityCard";

const TripCard = ({ trip, currentUser }) => {
  let activityCards = [];
  let detailedActivityCards = [];
  const { user, activities, date, images, location, tripCost } = trip;

  activityCards = activities.map((activity, idx) => (
    <ActivityCard activity={activity} key={idx} />
  ));

  detailedActivityCards = activities.map((activity, idx) => (
    <DetailedActivityCard activity={activity} key={idx} />
  ));

  const params = useParams();

  const card = (
    <>
      <CardContent>
        <Typography>Trip To: {location}</Typography>
        <Typography>Trip Date: {date}</Typography>
        <Typography>Trip Cost: ${tripCost}</Typography>
        <Typography>Activities {activityCards}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/trips/${trip._id}`}>
          Details
        </Button>
      </CardActions>
    </>
  );

  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default TripCard;
