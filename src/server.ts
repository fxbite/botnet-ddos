import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv';
dotenv.config();

import route from './api/services';

const app = express();
const port = process.env.PORT || 8080;

// Logger
app.use(morgan('dev'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route Init
route(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});