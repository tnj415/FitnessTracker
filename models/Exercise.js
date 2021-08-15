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
const WorkoutSchema = new Schema({
  day: {
    type: Date,
  },
  exercises:Array
  

});
//const Exercise = mongoose.model("Exercise", ExerciseSchema);
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;