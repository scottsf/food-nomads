const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// ########################################
//            Middleware
// ########################################
app.use(bodyParser.json());

const PORT = 4000;
app.listen(PORT => console.log(`App is listening on ${PORT}`));
