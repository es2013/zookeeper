const { animals } = require('./data/animals');
const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3001;
//require statement will read the index file in each directories
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

var app = express();
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

//tell servers that any time a client navigates to outhost/api, 
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//The way it works is that we provide a file path to a location in our application 
//(in this case, the public folder) and instruct the server to make these files static resources. 
app.use(express.static('public'));
//moving filterByQuery(), findById(), createNewAnimal(), validateAnimal() functions to animals.js in lib directory

//when did we add the * route??
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
  });

app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}`)
});