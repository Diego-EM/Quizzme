const express = require('express');
const router = express.Router();
const quizzController = require('../controllers/quizz.controller');

router.get('/',quizzController.getAllQuizzes);
router.get('/:id',quizzController.getQuizz);

module.exports = router;