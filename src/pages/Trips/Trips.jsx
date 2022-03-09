import * as tripsAPI from "../../utilities/trips-api";
import TripCard from "../../components/TripCard/TripCard";
import { useState, useEffect } from "react";

const Trips = () => {
  let userTripCards = [];
  const [userTrips, setUserTrips] = useState(null);
  useEffect(() => {
    const getTrips = async () => {
      const trips = await tripsAPI.getTrips();
      console.log(trips);
      setUserTrips(trips);
    };
    getTrips();
  }, []);

  if (userTrips) {
    userTripCards = userTrips.map((trip, idx) => (
      <TripCard trip={trip} key={idx} />
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
        <div>
          EXAMPLE TRIP
          <p>location</p>
          <p>added by</p>
          <p>price</p>
          <p>details</p>
        </div>
      </div>
    </main>
  );
};

export default Trips;
