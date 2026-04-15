import { Router } from 'express';
import { getMyProfile, updateMyProfile } from './user.controller.js';
import { protect } from '../../middleware/auth.middleware.js';

const router = Router();

router.get('/me', protect, getMyProfile);
router.patch('/me', protect, updateMyProfile);

export default router;

