const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionOptions = new Schema({
    answer: { type: String, required: true},
    correct: { type: Boolean, require: true}
});

const quizzQuestions = new Schema({
    question: { type: String, required: true},
    options: [questionOptions]
});

const quizzSchema = new Schema({
    title : { type: String, required: true  },
    description: { type: String, required: false},
    questions: [quizzQuestions]
});

module.exports = mongoose.model('Quizz', quizzSchema);