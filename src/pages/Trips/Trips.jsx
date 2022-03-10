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
    <main>
      <h1>Trips</h1>
      <div>All Trips</div>
      <aside
        style={{
          display: "block",
          float: "left",
          border: "1px solid black",
          height: "100vh",
          width: "30%",
        }}
      >
        Your submitted Trips
        {userTrips && userTripCards}
      </aside>
      <br />
      <div style={{ border: "1px solid black", width: "50%", float: "right" }}>
        {tripCards}
      </div>
    </main>
  );
};

export default Trips;
