const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port',process.env.PORT || 4000);

//middleware
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200
}));
app.use(express.json());

//routes
app.use('/api/users', require('./routes/users'));
app.use('/api/teams', require('./routes/teams'));

module.exports = app;
