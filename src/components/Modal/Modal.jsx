import { useState } from "react";
import "./Modal.css";
const Modal = ({ setOpenModal, activities, setActivities }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
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
      price: 0,
    });
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title-close-btn">
          <button
            className="close-btn"
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <form className="trip-form" onSubmit={handleSubmit}>
          <div className="modal-content">
            <h1>Activity Form</h1>
            <label htmlFor="">
              Title <input name="title" onChange={handleChange} type="text" />
            </label>
            <label htmlFor="">
              Description{" "}
              <textarea name="description" onChange={handleChange} />
            </label>
            <label htmlFor="">
              Price <input name="price" onChange={handleChange} type="number" />
            </label>
          </div>

          <div className="footer">
            <button type="submit">Add Activity</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
