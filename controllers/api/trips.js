const Models = require("../../models/trip");
const User = require("../../models/user");
const Trip = Models.Trip;

//Creating a new Trip
const create = async (req, res) => {
  try {
    console.log('create hit');
    const tripCost = parseInt(req.body.cost);
    const newTrip = await new Trip({
      user: req.user._id,
      location: req.body.location,
      images: req.body.images,
      date: req.body.date,
      tripCost,
    }).save();
    //Pushing activity subdocuments into the trip documents activities property
    req.body.activities.forEach(async (activity) => {
      price = parseInt(activity.price);
      newTrip.activities.push({
        title: activity.title,
        description: activity.description,
        price,
      });
    });
    newTrip.save();
  } catch (err) {
    res.send(err);
  }
};

const index = async (req, res) => {
  //Split trips into user and all to avoid multiple queries
  const trips = {
    userTrips: null,
    allTrips: null,
  };
  try {
    trips.userTrips = await Trip.find({ user: req.user._id })
      .populate("user")
      .exec();
    trips.allTrips = await Trip.find({}).populate("user").exec();
    res.json(trips);
  } catch (err) {
    res.send(err);
  }
};

//Find a single trip to show
const show = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id).populate("user").exec();
    res.json(trip);
  } catch (err) {
    res.send(err);
  }
};

//Delete a single trip
const deleteTrip = async (req, res) => {
  try {
    await Trip.findOneAndDelete({ _id: req.params.id });
  } catch (err) {
    res.send(err);
  }
};

//Update a trip
const update = async (req, res) => {
  console.log('update hit');
  try {
    console.log(req.body);
  } catch (err) {
    res.send(err);
  }
};
module.exports = { create, index, show, delete: deleteTrip, update };
