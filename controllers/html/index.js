const router = require('express').Router();
const exerciseRoutes = require('./exerciseRoutes.js');

router.use('/exercise', exerciseRoutes);

module.exports = router;