import { useState } from "react";
import TripForm from "../../components/TripForm/TripForm";

const NewTrip = ({user}) => {
  return (
    <>
      <h1>New Trip Page</h1>
      <TripForm />
    </>
  );
};

export default NewTrip;
