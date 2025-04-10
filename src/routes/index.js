// src/routes/index.js
import {Router} from 'express';
import userRoutes from './user.routes.js';

const router = Router();

// Combine routes
router.use('/users', userRoutes); // http://localhost:3000/api/v1/users

export default router;
