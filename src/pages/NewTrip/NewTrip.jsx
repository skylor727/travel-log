import "./NewTrip.css";

const NewTrip = () => {
  return (
    <>
      <h1>New Trip</h1>
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
            <input type="text" />
          </label>
        </div>
        <button type="submit">
            Submit
        </button>
      </form>
    </>
  );
};

export default NewTrip;
