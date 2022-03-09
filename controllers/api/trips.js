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
  try {
    Trip.find({ user: req.user._id })
      .populate("user")
      .exec((err, trips) => {
        if (err) res.send(err);
        res.json(trips);
      });
  } catch (err) {
    res.send(err);
  }
};
module.exports = { create, index };
