const quizzController = {};
const quizzSchema = require('../models/quizz');

quizzController.getAllQuizzes = async (req, res) => {
    try{
        const requiredValues = {
            "_id": true,
            "img_preview": true,
            "title": true,
            "description": true
        }
        const quizzes = await quizzSchema.find({}, requiredValues);
        res.json(quizzes);
    }
    catch(e){
        console.error(`Connection failed, err:${e}`)
    }
}

quizzController.getQuizz = async (req, res) => {
    try{
        const quizz = await quizzSchema.findById(req.params.id);
        res.json(quizz);
    }
    catch(e){
        console.error(`Connection failed, err:${e}`);
    }
}

module.exports = quizzController;