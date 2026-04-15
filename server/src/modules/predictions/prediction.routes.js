import { Router } from 'express';
import { getPerformancePrediction } from './prediction.controller.js';
import { protect } from '../../middleware/auth.middleware.js';

const router = Router();

router.get('/me', protect, getPerformancePrediction);

export default router;

