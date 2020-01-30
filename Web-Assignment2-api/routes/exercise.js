const express = require('express');
const router = express.Router();
const exerciseController = require('../app/api/controllers/exerciseController');

router.get('/getByWorkout/:workoutId', exerciseController.getByWorkoutId);
router.get('/getById/:Id', exerciseController.getById);
router.post('/', exerciseController.create);
router.put('/:Id', exerciseController.updateById);
router.delete('/:Id', exerciseController.deleteById);


module.exports = router;