import { useState, useEffect } from "react";
import * as tripsAPI from "../../utilities/trips-api";
import Modal from "../Modal/Modal";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import apiPostImage from "../../utilities/photos-api";
import "./TripForm.css";

async function postImage({ image, description }) {
  const formData = new FormData();
  formData.append("image", image);
  formData.append("description", description);
  const result = await apiPostImage(formData);
  return result.data;
}

const TripForm = ({ user, editData, upOrDel, setTrip }) => {
  const [file, setFile] = useState();
  const [images, setImages] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [activities, setActivities] = useState([]);
  const [formData, setFormData] = useState({
    location: "",
    cost: "",
    images: "",
    activities: [],
    date: "",
  });

  //Uploading the image to the server
  const submit = async (evt) => {
    evt.preventDefault();
    const result = await postImage({ image: file });
    setImages([result, ...images]);
    console.log(images);
  };

  //Selecting an image in the upload
  const fileSelected = (evt) => {
    const file = evt.target.files[0];
    setFile(file);
  };

  //Updating an existing trip
  const handleUpdate = async (evt) => {
    evt.preventDefault();
    formData.activities = activities;
    formData.images = images;
    const updatedTrip = await tripsAPI.handleUpdate(formData, editData._id);
    setTrip(updatedTrip);
  };

  //Handle creating a new trip
  const handleNew = (evt) => {
    evt.preventDefault();
    formData.activities = activities;
    formData.images = images;
    tripsAPI.createTrip(formData, user);
    setFormData({
      location: "",
      cost: "",
      images: "",
      activities: [],
      date: "",
    });
  };

  //Setting the form data state as the user types it
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const activityCards = activities.map((activity, idx) => (
    <ActivityCard key={idx} activity={activity} />
  ));

  //If edit data exists pre-fill the form with the data
  useEffect(() => {
    if (editData) {
      const getExistingData = () =>
        setFormData({
          location: editData.location,
          date: editData.date,
          activities: editData.activities,
          cost: editData.tripCost,
          user: editData.user,
          images: editData.images,
        });
      getExistingData();
      setActivities(formData.activities);
    }
  }, []);

  return (
    <>
      <h1>Trip Form</h1>
      {openModal && (
        <Modal
          activities={activities}
          setActivities={setActivities}
          setOpenModal={setOpenModal}
        />
      )}
      <form
        className="trip-form"
        //If a value was passed into upOrDel
        //we can assume that we are updating a trip rather than creating a new one
        //If none was passed we can assume we are creating
        onSubmit={(evt) =>
          upOrDel ? handleUpdate(evt, formData) : handleNew(evt)
        } //() => upOrDel ? handleUpdate(editData._id) : handleNew()
      >
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

      <h2>Images</h2>
      <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <button type="submit">Upload Photo</button>
      </form>
      {images.map((image, idx) => (
        <div key={idx}>
          <img src={image}></img>
        </div>
      ))}
    </>
  );
};

export default TripForm;
