const Trips = () => {
  return (
    <main>
      <h1>Trips</h1>
      <div>All Trips</div>
      <aside style={{ float: "left", border: "1px solid black" }}>
        Your submitted Trips
      </aside>
      <br />
      <div style={{ border: "1px solid black" }}>
        <div>
          EXAMPLE TRIP
          <p>location</p>
          <p>added by</p>
          <p>price</p>
          <p>details</p>
        </div>
      </div>
    </main>
  );
};

export default Trips;
