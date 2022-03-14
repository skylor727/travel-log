import { useState, useEffect, useRef } from "react";
import * as tripsAPI from "../../utilities/trips-api";
import * as photosAPI from "../../utilities/photos-api";
import BasicModal from "../BasicModal/BasicModal";
import ActivityCard from "../../components/ActivityCard/ActivityCard";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import RowingIcon from "@mui/icons-material/Rowing";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const TripForm = ({ user, editData, upOrDel, setTrip }) => {
  const fileInputRef = useRef();
  const [photos, setPhotos] = useState([]);
  const [title, setTitle] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [activities, setActivities] = useState([]);
  const [formData, setFormData] = useState({
    location: "",
    cost: "",
    photos: "",
    activities: [],
    date: "",
  });

  async function handleUpload() {
    // Use FormData object to send the inputs in the fetch request
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
    const formData = new FormData();
    formData.append("title", title);
    formData.append("photo", fileInputRef.current.files[0]);
    const newPhoto = await photosAPI.apiPostImage(formData);
    setPhotos([newPhoto, ...photos]);
    // Clear the description and file inputs
    fileInputRef.current.value = "";
  }

  //Updating an existing trip
  const handleUpdate = async (evt) => {
    evt.preventDefault();
    formData.activities = activities;
    formData.photos = photos;
    const updatedTrip = await tripsAPI.handleUpdate(formData, editData._id);
    setTrip(updatedTrip);
  };

  //Handle creating a new trip
  const handleNew = (evt) => {
    evt.preventDefault();
    formData.activities = activities;
    formData.photos = photos;
    tripsAPI.createTrip(formData, user);
    setFormData({
      location: "",
      price: "",
      photos: "",
      activities: [],
      date: "",
    });
    setActivities([]);
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
          photos: editData.photos,
        });
      getExistingData();
      setActivities(formData.activities);
    }
  }, []);

  return (
    <>
      {openModal && (
        <BasicModal
          activities={activities}
          setActivities={setActivities}
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      )}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          color: "white",
        }}
      >
        <Stack
          style={{ width: "40%" }}
          component="form"
          autoComplete="off"
          //If a value was passed into upOrDel
          //we can assume that we are updating a trip rather than creating a new one
          //If none was passed we can assume we are creating
          onSubmit={(evt) =>
            upOrDel ? handleUpdate(evt, formData) : handleNew(evt)
          } //() => upOrDel ? handleUpdate(editData._id) : handleNew()
          spacing={2}
        >
          <h1>Trip Form</h1>
          <TextField
            required
            label="Trip Destination"
            variant="outlined"
            value={formData.location}
            onChange={handleChange}
            name="location"
          />

          <TextField
            required
            label="Trip Cost"
            value={formData.price}
            onChange={handleChange}
            name="cost"
            type="number"
          />

          <TextField
            value={formData.date}
            onChange={handleChange}
            name="date"
            type="date"
            required
          />
          <span>
            Activities:
            {activityCards}
            <br />
          </span>
          <Button
            endIcon={<RowingIcon />}
            size="small"
            variant="contained"
            color="secondary"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Activity Form
          </Button>
          {!openModal && (
            <Button
              endIcon={<SendIcon />}
              color="primary"
              variant="contained"
              type="submit"
            >
              Submit
            </Button>
          )}
        </Stack>
      </div>
      <h2>Images</h2>
      <input type="file" ref={fileInputRef} />
      <input
        value={title}
        onChange={(evt) => setTitle(evt.target.value)}
        placeholder="Photo Title"
      />
      <button onClick={handleUpload}>Upload Photo</button>
      {photos.map((image, idx) => (
        <div key={idx}>
          <img src={image}></img>
        </div>
      ))}
    </>
  );
};

export default TripForm;
