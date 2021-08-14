const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  type: {
    type: String,
    //enum: ["cardio", "resistance"],
    //required: "Type is required"
  },
  name: {
    type: String,
    //required: "Name is required"
  },
  duration: {
    type: Number,
    //required: [true, "Duration is required" ]
  },
  weight: {
    type: Number
  },
  reps: {
    type: Number
  },
  sets: {
    type: Number
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;