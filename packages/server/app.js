const express = require('express');
const router = require('./routers/router');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);
//
app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;