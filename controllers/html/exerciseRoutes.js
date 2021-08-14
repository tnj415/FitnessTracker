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

module.exports = router;