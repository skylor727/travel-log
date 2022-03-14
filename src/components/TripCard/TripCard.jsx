import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ActivityCard from "../ActivityCard/ActivityCard";
import DetailedActivityCard from "../DetailedActivityCard/DetailedActivityCard";

const TripCard = ({
  trip,
  currentUser,
  page,
  handleDelete,
  id,
  setShowButton,
  showButton,
}) => {
  let activityCards = [];
  let detailedActivityCards = [];
  const { user, activities, date, images, location, tripCost } = trip;

  activityCards = activities.map((activity, idx) => (
    <ActivityCard activity={activity} key={idx} />
  ));

  detailedActivityCards = activities.map((activity, idx) => (
    <DetailedActivityCard activity={activity} key={idx} />
  ));

  const card = !page ? (
    <>
      <Box sx={{ minWidth: 275 }}>
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
      </Box>
    </>
  ) : (
    <>
      <Box sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography>Trip To: {location}</Typography>
          <Typography>Trip Date: {date}</Typography>
          <Typography>Trip Cost: ${tripCost}</Typography>
          <Typography>Activities {detailedActivityCards}</Typography>
        </CardContent>
        <CardActions>
          {trip && trip.user._id === user._id && (
            <>
              <Button onClick={() => handleDelete(id)}>Delete</Button>
              <Button onClick={() => setShowButton(showButton ? null : true)}>
                Edit
              </Button>
            </>
          )}
        </CardActions>
      </Box>
    </>
  );

  return <Card variant="outlined">{card}</Card>;
};

export default TripCard;
