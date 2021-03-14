const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

const router = require('./routes/home');

app.set('view engine', ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.use("/", router);

app.listen(5000, ()=>{
    console.log('Server is running on port 5000');
}); 