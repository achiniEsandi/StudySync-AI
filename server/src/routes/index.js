import { Router } from 'express';
import authRoutes from '../modules/auth/auth.routes.js';
import userRoutes from '../modules/users/user.routes.js';
import plannerRoutes from '../modules/planner/planner.routes.js';
import analyticsRoutes from '../modules/analytics/analytics.routes.js';
import predictionRoutes from '../modules/predictions/prediction.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/planner', plannerRoutes);
router.use('/analytics', analyticsRoutes);
router.use('/predictions', predictionRoutes);

export default router;

