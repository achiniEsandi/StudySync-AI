import { Router } from 'express';
import { createPlan, listPlans } from './planner.controller.js';
import { protect } from '../../middleware/auth.middleware.js';

const router = Router();

router.get('/', protect, listPlans);
router.post('/', protect, createPlan);

export default router;

