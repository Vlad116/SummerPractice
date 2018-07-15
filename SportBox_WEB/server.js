const express = require('express');
const app = express();
const fs = require('fs');
require('./app/routes/registration_routes')(app, fs);
require('./app/routes/login_routes')(app, fs);
require('./app/routes/addProduct_routes')(app, fs);
app.use(express.static('public'));
app.listen(8080);
console.log("Server started at 8080");