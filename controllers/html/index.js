const router = require('express').Router();
const exerciseRoutes = require('./exerciseRoutes.js');
const statsRoutes = require('./statsRoutes.js');

router.use('/exercise', exerciseRoutes);
router.use('/stats', statsRoutes)

module.exports = router;