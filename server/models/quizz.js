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
    quizzTitle : { type: String, required: true  },
    quizzQuestions: [quizzQuestions]
});

module.exports = mongoose.model('Quizz', quizzSchema);