const Models = require("../../models/trip");
const User = require("../../models/user");
const Trip = Models.Trip;

const create = async (req, res) => {
  try {
    const tripCost = parseInt(req.body.cost);
    const newTrip = await new Trip({
      user: req.user._id,
      location: req.body.location,
      images: req.body.images,
      date: req.body.date,
      tripCost,
    }).save();

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
  let trips = {
    userTrips: null,
    allTrips: null,
  };
  try {
    trips.userTrips = await Trip.find({ user: req.user._id })
      .populate("user")
      .exec();
    trips.allTrips = await Trip.find({}).populate("user").exec();
    res.json(trips)
  } catch (err) {
    res.send(err);
  }
};

const show = async (req, res) => {
  try {
    Trip.findById(req.params.id)
      .populate("user")
      .exec((err, trip) => {
        if (err) res.send(err);
        res.json(trip);
      });
  } catch (err) {
    res.send(err);
  }
};
module.exports = { create, index, show };
