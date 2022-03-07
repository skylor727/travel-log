import { useState } from "react";
import "./Modal.css";
const Modal = ({ setOpenModal }) => {
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
        <form>
          <div className="modal-content">
            <h1>Activity Form</h1>
            <label htmlFor="">
              Title <input type="text" />
            </label>
            <label htmlFor="">
              Description <textarea />
            </label>
            <label htmlFor="">
              Price <input type="number" />
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
