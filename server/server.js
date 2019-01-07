const express = require('express');
const bodyParser = require('body-parser');
const ctr = require('./controller.js');
const app = express();

// ########################################
//            Middleware
// ########################################
app.use(bodyParser.json());
app.get('/api/restaurants', ctr.get_restaurants);

const PORT = 4000;
app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
