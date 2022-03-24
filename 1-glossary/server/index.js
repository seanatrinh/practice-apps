require("dotenv").config();
const express = require("express");
const cors = require('cors');
const path = require("path");
const controller = require('./controllers.js');

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(cors());
app.use(express.json());

/*
 * Other routes here....
*/
app.get('/api/words', controller.getAllWords);
app.post('/api/words', controller.saveWord);
app.delete('/api/words', controller.deleteWord);
app.put('/api/words', controller.editWord);

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
