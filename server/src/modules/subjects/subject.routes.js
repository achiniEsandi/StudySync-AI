import { Router } from 'express';
import { protect } from '../../middleware/auth.middleware.js';
import {
  addCaItem,
  createSubject,
  deleteCaItem,
  deleteSubject,
  getSubjectById,
  getSubjects,
  updateCaItem,
  updateLearningComponent,
  updateSubject,
  upsertFinalExam,
} from './subject.controller.js';

const router = Router();

router.use(protect);

router.route('/').post(createSubject).get(getSubjects);
router.route('/:subjectId').get(getSubjectById).patch(updateSubject).delete(deleteSubject);
router.patch('/:subjectId/components/:componentType', updateLearningComponent);
router.post('/:subjectId/ca', addCaItem);
router.patch('/:subjectId/ca/:caItemId', updateCaItem);
router.delete('/:subjectId/ca/:caItemId', deleteCaItem);
router.put('/:subjectId/final-exam', upsertFinalExam);

export default router;
