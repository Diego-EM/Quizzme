const express = require('express');
const CORS = require('cors');
const morgan = require('morgan');
const { mongoose } = require('./database');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Midlewares
app.use(CORS());
app.use(morgan('dev'));
app.use(express.json());

//Route
app.use('/api/quizz',require('./routes/quizz.routes'));

app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
})