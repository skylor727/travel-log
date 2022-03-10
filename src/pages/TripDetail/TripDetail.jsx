import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as tripsAPI from "../../utilities/trips-api";
import TripCard from "../../components/TripCard/TripCard";

const TripDetail = ({ user, routeChange }) => {
  const [trip, setTrip] = useState(null);
  const { id } = useParams();

  const handleDelete = async (id) => {
    tripsAPI.handleDelete(id);
    routeChange("/trips");
  };

  const handleUpdate = async (id) => {
    const updatedTrip = await tripsAPI.handleUpdate(id);
    console.log(updatedTrip)
  }

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
        <>
          <button onClick={() => handleDelete(id)}>Delete</button>
          <button onClick={() => handleUpdate(id)}>Edit</button>
        </>
      )}
    </>
  );
};

export default TripDetail;
