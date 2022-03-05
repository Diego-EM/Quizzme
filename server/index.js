const express = require('express');
const CORS = require('cors');

const app = express();

//Settings
app.set('port',3000);

//Midlewares
app.use(CORS());

app.listen(app.get('port'),()=>{
    console.log(`Server on port ${app.get('port')}`)
})