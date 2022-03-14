import * as tripsAPI from "../../utilities/trips-api";
import TripCard from "../../components/TripCard/TripCard";
import { useState, useEffect } from "react";

const Trips = ({ user }) => {
  let userTripCards = [];
  let tripCards = [];
  const [userTrips, setUserTrips] = useState(null);
  const [trips, setTrips] = useState(null);
  //Fetch all trips on initial render
  useEffect(() => {
    const getTrips = async () => {
      const trips = await tripsAPI.getTrips();
      setUserTrips(trips.userTrips);
      setTrips(trips.allTrips);
    };
    getTrips();
  }, []);

  //Make sure the trips have been fetched before trying to map the cards
  if (trips) {
    userTripCards = userTrips.map((trip, idx) => (
      <TripCard trip={trip} currentUser={user} key={idx} />
    ));
    tripCards = trips.map((trip, idx) => (
      <TripCard trip={trip} currentUser={user} key={idx} />
    ));
  }

  return (
    <main
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ width: "20%" }}>
        <h1>My Trips</h1>
        {userTrips && userTripCards}
      </div>
      <div style={{ width: "50%" }}>
        <h1>All Trips</h1>
        {tripCards}
      </div>
    </main>
  );
};

export default Trips;
