const express = require('express');


const app = express();


app.use(express.json());

//RUTAS
app.use('/api', require('./routes/api'));

//exportat para usar deste afuera
module.exports = app;