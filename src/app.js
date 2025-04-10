import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';

import routes from './routes/index.js';
// import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routes
app.use('/api/v1', routes);

// Global Error Handler
// app.use(errorMiddleware);

export default app;
