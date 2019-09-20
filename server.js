const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


app.use(express.json());

require('./routes/Routers.js')(app,path);


app.listen(3000, () => `Server is running on port ${port}`);
