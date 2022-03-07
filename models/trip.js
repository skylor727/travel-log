const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const activitySchema = newSchema({
  title: {type: String, required: true},
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  trip: {
    type: Schema.Types.ObjectId,
    ref: "Trip",
  },
});

const tripSchema = new Schema(
  {
    location: { type: String, required: true },
    tripCost: { type: Number, required: true },
    images: { type: String, required: true },
    activities: { activitySchema },
  },
  { timestamps: true }
);

module.export = mongoose.model("Trip", tripSchema);
