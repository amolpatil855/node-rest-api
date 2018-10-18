// app.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// initialize our express app
const app = express();
const product = require('./routes/product.route'); // Imports routes for the products
let dev_db_url = 'mongodb://apatil.855:api%40123@ds135003.mlab.com:35003/amol-node-rest-api';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
let port = 1234;
app.use('/products', product);
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});