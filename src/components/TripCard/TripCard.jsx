import { Link, useParams } from "react-router-dom";
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

  return (
    <>
      <div>
        <p>Location: {location}</p>
        <p>Trip Date: {date}</p>
        <p>Est Cost: ${tripCost}</p>
        {Object.keys(params).length ? (
          <>
            <span>Activies:</span>
            {detailedActivityCards}
          </>
        ) : (
          <>
            <p>Activities: {activityCards}</p>
            <Link to={`/trips/${trip._id}`}>Details</Link>
          </>
        )}
      </div>
    </>
  );
};

export default TripCard;
