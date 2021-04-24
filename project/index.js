const express = require ('express')
const app = express();
const port = 3000
const path = require('path')
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
const { Schema } = mongoose;
const webRoute = require('./routes/web')

app.use(express.urlencoded({ extended:true}));
app.use(express.json());

app.use(express.static('public'))
app.set('views', './views')
app.set('view engine', 'ejs')

mongoose.connect('mongodb://localhost/atw',{useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("horray terkoneksi ")
})

app.use("/", webRoute)

app.listen(port, ()=> console.log("Server jalan diport "+port))
