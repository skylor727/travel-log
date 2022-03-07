import { useState } from "react";
import "./NewTrip.css";
import Modal from "../../components/Modal/Modal";

const NewTrip = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <h1>New Trip</h1>
            {openModal && <Modal setOpenModal={setOpenModal} />}
      <form>
        <div className="form-wrapper">
          <label htmlFor="">
            Location:
            <input type="text" />
          </label>
          <label htmlFor="">
            Total Cost:
            <input type="number" />
          </label>
          <label htmlFor="">
            Images:
            <input type="file" />
          </label>
          <label htmlFor="">
            Activities:
            <a
              type="button"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Activity Form
            </a>
          </label>
        </div>
        {!openModal && <button type="submit">Submit</button>}
      </form>
    </>
  );
};

export default NewTrip;
