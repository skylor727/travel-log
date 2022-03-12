import { useState } from "react";
import TripForm from "../../components/TripForm/TripForm";

const NewTrip = ({ user }) => {
  return (
    <>
      <TripForm user={user} />
    </>
  );
};

export default NewTrip;
