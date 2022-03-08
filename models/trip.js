const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

const tripSchema = new Schema(
  {
    location: { type: String, required: true },
    tripCost: { type: Number, required: true },
    images: Array,
    date: { type: String, required: true },
    activities: [activitySchema],
  },
  { timestamps: true }
);

const Trip = mongoose.model("Trip", tripSchema);

module.exports = { Trip };
