import { useState } from "react";
import * as tripsAPI from "../../utilities/trips-api";
import Modal from "../../components/Modal/Modal";
import "./NewTrip.css";

const NewTrip = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activities, setActivities] = useState([]);
  const [formData, setFormData] = useState({
    location: "",
    cost: 0,
    images: "",
    activities: [],
    date: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    tripsAPI.createTrip(formData);
  };

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  return (
    <>
      <h1>New Trip</h1>
      {openModal && (
        <Modal
          activities={activities}
          setActivities={setActivities}
          setOpenModal={setOpenModal}
        />
      )}
      <form className="trip-form" onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <label htmlFor="">
            Location:
            <input onChange={handleChange} name="location" type="text" />
          </label>
          <label htmlFor="">
            Total Cost:
            <input onChange={handleChange} name="cost" type="number" />
          </label>
          <label htmlFor="">
            Images:
            <input onChange={handleChange} name="images" type="file" />
          </label>
          <label name="activities" htmlFor="">
            Activities:
            <button
              type="button"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Activity Form
            </button>
          </label>
          <label htmlFor="">
            Trip Date:
            <input onChange={handleChange} name="date" type="date" />
          </label>
        </div>
        {!openModal && <button type="submit">Submit</button>}
      </form>
    </>
  );
};

export default NewTrip;
