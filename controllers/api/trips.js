const Models = require("../../models/trip");
const Trip = Models.Trip;


const create = async (req, res) => {
  try {
    const tripCost = parseInt(req.body.cost);
    const newTrip = await new Trip({
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
    console.log(err);
  }
};

module.exports = { create };
