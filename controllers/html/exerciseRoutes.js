const router = require('express').Router();
const {Exercise} = require('../../models');
const path = require('path');

router.get("/", (req, res) => {
  res.sendFile (path.join(__dirname, '../../public/exercise.html'));
  
});

module.exports = router;