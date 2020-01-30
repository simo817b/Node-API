const express = require('express');
const router = express.Router();
const workoutController = require('../app/api/controllers/workoutController');

router.get('/', workoutController.getAll);
router.get('/:Id', workoutController.getById);
router.get('/:ownerId', workoutController.getByOwnerId);
router.post('/', workoutController.create);
router.put('/:Id', workoutController.updateById);
router.delete('/:Id', workoutController.deleteById);

module.exports = router;