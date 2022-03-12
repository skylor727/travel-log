import * as tripsAPI from "../../utilities/trips-api";
import TripCard from "../../components/TripCard/TripCard";
import { useState, useEffect } from "react";

const Trips = ({ user }) => {
  let userTripCards = [];
  let tripCards = [];
  const [userTrips, setUserTrips] = useState(null);
  const [trips, setTrips] = useState(null);
  useEffect(() => {
    const getTrips = async () => {
      const trips = await tripsAPI.getTrips();
      setUserTrips(trips.userTrips);
      setTrips(trips.allTrips);
    };
    getTrips();
  }, []);

  if (trips) {
    userTripCards = userTrips.map((trip, idx) => (
      <TripCard trip={trip} currentUser={user} key={idx} />
    ));
    tripCards = trips.map((trip, idx) => (
      <TripCard trip={trip} currentUser={user} key={idx} />
    ));
  }

  return (
    <main style={{ display: "flex", height: "100vh" }}>
      <aside style={{ width: "20%" }}>
        <h1>My Trips</h1>
        {userTrips && userTripCards}
      </aside>
      <div style={{ width: "50%" }}>
        <h1>All Trips</h1>
        {tripCards}
      </div>
    </main>
  );
};

export default Trips;
