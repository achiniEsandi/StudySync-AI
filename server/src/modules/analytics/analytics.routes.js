import { Router } from 'express';
import { createRecord, getOverview } from './analytics.controller.js';
import { protect } from '../../middleware/auth.middleware.js';

const router = Router();

router.get('/overview', protect, getOverview);
router.post('/records', protect, createRecord);

export default router;

