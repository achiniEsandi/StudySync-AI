import { asyncHandler } from '../../utils/asyncHandler.js';
import { ApiResponse } from '../../utils/ApiResponse.js';
import { subjectService } from './subject.service.js';
import {
  validateCreateCaItem,
  validateCreateSubject,
  validateFinalExam,
  validateLearningComponentPayload,
  validateLearningComponentType,
  validateUpdateCaItem,
  validateUpdateSubject,
} from './subject.validation.js';

export const createSubject = asyncHandler(async (req, res) => {
  validateCreateSubject(req.body);
  const subject = await subjectService.createSubject(req.user.id, req.body);
  res.status(201).json(new ApiResponse('Subject created successfully', subject));
});

export const getSubjects = asyncHandler(async (req, res) => {
  const subjects = await subjectService.getSubjects(req.user.id);
  res.status(200).json(new ApiResponse('Subjects fetched successfully', subjects));
});

export const getSubjectById = asyncHandler(async (req, res) => {
  const subject = await subjectService.getSubjectById(req.params.subjectId, req.user.id);
  res.status(200).json(new ApiResponse('Subject fetched successfully', subject));
});

export const updateSubject = asyncHandler(async (req, res) => {
  validateUpdateSubject(req.body);
  const subject = await subjectService.updateSubject(
    req.params.subjectId,
    req.user.id,
    req.body,
  );
  res.status(200).json(new ApiResponse('Subject updated successfully', subject));
});

export const deleteSubject = asyncHandler(async (req, res) => {
  await subjectService.deleteSubject(req.params.subjectId, req.user.id);
  res.status(200).json(new ApiResponse('Subject deleted successfully', null));
});

export const updateLearningComponent = asyncHandler(async (req, res) => {
  validateLearningComponentType(req.params.componentType);
  validateLearningComponentPayload(req.body);

  const subject = await subjectService.updateLearningComponent(
    req.params.subjectId,
    req.user.id,
    req.params.componentType,
    req.body,
  );

  res
    .status(200)
    .json(new ApiResponse('Learning component updated successfully', subject));
});

export const addCaItem = asyncHandler(async (req, res) => {
  validateCreateCaItem(req.body);
  const subject = await subjectService.addCaItem(
    req.params.subjectId,
    req.user.id,
    req.body,
  );
  res.status(201).json(new ApiResponse('CA item added successfully', subject));
});

export const updateCaItem = asyncHandler(async (req, res) => {
  validateUpdateCaItem(req.body);
  const subject = await subjectService.updateCaItem(
    req.params.subjectId,
    req.user.id,
    req.params.caItemId,
    req.body,
  );
  res.status(200).json(new ApiResponse('CA item updated successfully', subject));
});

export const deleteCaItem = asyncHandler(async (req, res) => {
  const subject = await subjectService.deleteCaItem(
    req.params.subjectId,
    req.user.id,
    req.params.caItemId,
  );
  res.status(200).json(new ApiResponse('CA item deleted successfully', subject));
});

export const upsertFinalExam = asyncHandler(async (req, res) => {
  validateFinalExam(req.body);
  const subject = await subjectService.upsertFinalExam(
    req.params.subjectId,
    req.user.id,
    req.body,
  );
  res
    .status(200)
    .json(new ApiResponse('Final exam updated successfully', subject));
});

