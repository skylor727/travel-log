import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import RowingIcon from "@mui/icons-material/Rowing";
import Stack from "@mui/material/Stack";
import "./Modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "40%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const BasicModal = ({ openModal, setOpenModal, activities, setActivities }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setActivities([...activities, formData]);
    setFormData({
      title: "",
      description: "",
      price: "",
    });
  };

  return (
    <Modal
      open={openModal}
      onClose={() => setOpenModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1>Activity Form</h1>
        <form className="trip-form" onSubmit={handleSubmit}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <TextField
              label="Activity"
              name="title"
              value={formData.title}
              onChange={handleChange}
              type="text"
              required
            />

            <TextField
              label="Activity Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={4}
              required
            />

            <TextField
              label="Activity Cost"
              name="price"
              value={formData.price}
              onChange={handleChange}
              type="number"
              required
            />

            <Button
              endIcon={<RowingIcon />}
              color="primary"
              variant="contained"
              type="submit"
            >
              Add Activity
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default BasicModal;
