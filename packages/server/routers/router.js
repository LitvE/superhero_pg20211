const {Router} = require('express');
const syperheroeRouter = require('./superheroeRouter');

const router = Router();
router.use('/superheroes', syperheroeRouter);
module.exports = router;