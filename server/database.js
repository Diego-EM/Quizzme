const mongoose = require('mongoose');
const URI = "mongodb://localhost/quizz";

mongoose.connect(URI)
    .then(()=>console.log('Connected to database'))
    .catch((e)=>console.error(`Connection failed: ${e}`))