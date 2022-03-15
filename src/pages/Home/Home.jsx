import "./Home.css";

const Home = () => {
  return (
    <>
      <header className="homepage-header">
        <div className="fade-in-text">
          <h1>Welcome to Trip Log</h1>
        </div>
      </header>
      <section style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ maxWidth: "600px" }}>
          <h3>Sign Up</h3>
          <span>
            Sign up today to create a log of your recent trip. Log where you
            went, the activities you did, the cost of your trip, and upload any
            images of your trip!
          </span>
        </div>
        <div style={{ maxWidth: "600px" }}>
          <h3>View other users trips!</h3>
          <span>
            Head to the main trips page and see recently uploaded trips from all
            users. You're able to look at the details of other trips and see
            images that user uploaded!
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;
