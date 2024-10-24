const e = require("express");
const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    enum: ["Coordinator","Assistant Coordinator","Lead", "Assistant Team Lead", "Member"],
    required: true,
  },
  domain: {
    type: String,
    enum:["web","java","iot","ui/ux","marketing","graphic design","photography/editing","ar&vr","machine learning","cloud computing"],
    required: true,
  },
});

module.exports = mongoose.model("Member", memberSchema);
