import { Link } from "react-router-dom";
import ActivityCard from "../ActivityCard/ActivityCard";
const TripCard = ({ trip }) => {
  const [tripInfo] = trip;
  const { user, activities, date, images, location, tripCost } = tripInfo;
  const activityCards = activities.map((activity, idx) => (
    <ActivityCard activity={activity} key={idx} />
  ));
  return (
    <>
      <div>
        <p>Location: {location}</p>
        <p>Activities: {activityCards}</p>
        <p>Trip Date: {date}</p>
        <p>Est Cost: ${tripCost}</p>
        <Link to="/:id">Details</Link>
      </div>
    </>
  );
};

export default TripCard;

// [{"_id":"6228ea9514c292d708bdd231","user":{"_id":"62265eecee262cd512defd1f","name":"John","email":"john@email.com",
// "createdAt":"2022-03-07T19:37:16.581Z","updatedAt":"2022-03-07T19:37:16.581Z","__v":0},"location":
// "Alaska","tripCost":1000,"images":["https://sei-bucket-sjp.s3.us-west-1.amazonaws.com/7d076a9ef481387b1e169fac89aa1051"],"date":"2022-03-09","activities":[{"title":"skiiing",
// "description":"on big mountain","price":1,"_id":"6228ea9514c292d708bdd233"}],
// "createdAt":"2022-03-09T17:57:41.644Z","updatedAt":"2022-03-09T17:57:41.702Z","__v":1}]
