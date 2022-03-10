import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as tripsAPI from "../../utilities/trips-api";
import DetailedActivityCard from "../../components/DetailedActivityCard/DetailedActivityCard";
import TripCard from "../../components/TripCard/TripCard";

const handleDelete = (id) => {
  tripsAPI.handleDelete(id);
};
const TripDetail = ({ user }) => {
  const [trip, setTrip] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getTrip = async () => {
      const trip = await tripsAPI.getTrip(id);
      setTrip(trip);
    };
    getTrip();
  }, []);

  return (
    <>
      <h1>Trip Detail</h1>
      {trip && <TripCard trip={trip} />}
      {trip && trip.user._id === user._id && (
        <button onClick={() => handleDelete(id)}>Delete</button>
      )}
    </>
  );
};

export default TripDetail;
