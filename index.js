const winston = require('winston');
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => {
            return `${info.timestamp} ${info.level}: ${info.message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'falcon-app.log' })
    ]
});
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const DB_HOST = process.env.NODE_ENV === 'production' ? 'mongodb' : 'localhost';

mongoose.connect(`mongodb://${DB_HOST}:27017/express-mongo`, { useNewUrlParser: true })
    .then(() => {
        logger.log('info', 'mongodb connected');
    })
    .catch(err => {
        logger.log('error', err)
    });

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))