const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const DB_HOST = process.env.NODE_ENV === 'production' ? 'mongodb' : 'localhost';

mongoose.connect(`mongodb://${DB_HOST}:27017/express-mongo`, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))