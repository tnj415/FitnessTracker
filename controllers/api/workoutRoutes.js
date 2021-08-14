const router = require('express').Router();
const {Exercise} = require('../../models');

router.get("/", (req, res) => {
  Exercise.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/:id", ({body}, res) => {
Exercise.insert(body)
  .then(({}) => db.Library.findOneAndUpdate({}, { $push: {} }, { new: true }))
  .then(dbWorkouts => {
    res.json(dbWorkouts);
  })
  .catch(err => {
    res.json(err);
  });
});

// router.create("/", (req, res) => {
// Exercise.find({})
//   .then(dbWorkouts => {
//     res.json(dbWorkouts);
//   })
//   .catch(err => {
//     res.json(err);
//   });
// });

module.exports = router;