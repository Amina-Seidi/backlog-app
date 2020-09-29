const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mediaSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: Date, default: new Date(Date.now())}, 
  comment: { type: String, required: false, default: ""}
});

const Media = mongoose.model("Media", mediaSchema);

module.exports = Media;