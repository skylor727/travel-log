import { useState } from "react";
import * as tripsAPI from "../../utilities/trips-api";
import Modal from "../../components/Modal/Modal";
import AcivityCard from "../../components/ActivityCard/ActivityCard";
import "./NewTrip.css";

const NewTrip = () => {
  const [openModal, setOpenModal] = useState(false);
  const [activities, setActivities] = useState([]);
  const [formData, setFormData] = useState({
    location: "",
    cost: "",
    images: "",
    activities: [],
    date: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    formData.activities = activities;
    tripsAPI.createTrip(formData);
    setFormData({
      location: "",
      cost: "",
      images: "",
      activities: [],
      date: "",
    });
  };

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const activityCards = activities.map((activity, idx) => (
    <AcivityCard key={idx} activity={activity} />
  ));

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
            <input
              value={formData.location}
              onChange={handleChange}
              name="location"
              type="text"
            />
          </label>
          <label htmlFor="">
            Total Cost:
            <input
              value={formData.price}
              onChange={handleChange}
              name="cost"
              type="number"
            />
          </label>
          <label htmlFor="">
            Images:
            <input value="" onChange={handleChange} name="images" type="file" />
          </label>
          <span>
            Activities:
            {activityCards}
            <br />
            <button
              type="button"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Activity Form
            </button>
          </span>

          <label htmlFor="">
            Trip Date:
            <input
              value={formData.date}
              onChange={handleChange}
              name="date"
              type="date"
            />
          </label>
        </div>
        {!openModal && <button type="submit">Submit</button>}
      </form>
    </>
  );
};

export default NewTrip;
