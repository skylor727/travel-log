import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TripForm from "../../components/TripForm/TripForm";
import * as tripsAPI from "../../utilities/trips-api";
import TripCard from "../../components/TripCard/TripCard";
import ImageCard from "../../components/ImageCard/ImageCard";
import Button from "@mui/material/Button";

const TripDetail = ({ user, routeChange }) => {
  const [trip, setTrip] = useState(null);
  const { id } = useParams();
  const [showButton, setShowButton] = useState(null);

  //Delete the trip
  const handleDelete = async (id) => {
    tripsAPI.handleDelete(id);
    routeChange("/trips");
  };

  //Fetching the trip for the DB on initial load
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
      {/* Make sure trip has been set before rendering, and only render edit and delete
      if current user === the user who created the trip */}
      {trip && (
        <>
          {/* If edit button is hit show the trip form */}
          {showButton && trip && (
            <TripForm
              setTrip={setTrip}
              user={user}
              upOrDel="update"
              editData={trip}
            />
          )}
          <TripCard
            user={user}
            trip={trip}
            page="detail"
            handleDelete={handleDelete}
            id={id}
            showButton={showButton}
            setShowButton={setShowButton}
          />
          <ImageCard images={trip.images} />
        </>
      )}
    </>
  );
};

export default TripDetail;
