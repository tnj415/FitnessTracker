const router = require('express').Router();
const { Workout } = require('../../models');
const mongojs = require("mongojs");

router.get("/", async (req, res) => {
  // If= await Workout.find({});
  const workouts = await Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" }
      }
    }]
  )
  console.log(workouts);
  res.send(workouts);

});
router.get("/range", async (req, res) => {
  // If= await Workout.find({});
  const workouts = await Workout.aggregate([
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" }
      }
    }]
  )
  console.log(workouts);
  res.send(workouts);

});

router.post("/", async (req, res) => {  // create

  console.log("POST", req.body);
  const ex = await Workout.create({day: Date.now()});
  res.send(ex);

});

router.put("/:id", async (req, res) => { // update
  //   const errors = validate (req.body);
  //    // server side validation
  // if (errors.size()>0){
  //    res.send (errors);
  //    return;
  // }
  console.log ("api.put", req.body);
  Workout.findOne({ _id: mongojs.ObjectId(req.params.id) },
    (err, workout) => {
      workout.exercises.push(req.body); // add to exercise array
      workout.save((err) => { // save bck to Mongo.
        if (err) {
          console.log(err);
          const resp = { message: "workout not added" };
          res.send(resp);
        } else {
          const resp = { message: "workout Added" };

          res.send(resp);
        }
      });
    });

  console.log("PUT", req.body);


});

// function validate(workout) {{
//   let errors=[];
//   if (workout.weight<0)
//   {
//     errors.push ({field:"weight", message:"Invalid weight"});
//   }
//   if (workout.duration<0)
//   {
//     errors.push ({field:"duration", message:"Invalid duration"});
//   }

//   return errors;

// }}

module.exports = router;