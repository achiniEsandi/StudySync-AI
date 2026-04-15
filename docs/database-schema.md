# MongoDB Collections

## users

- `_id`
- `fullName`
- `email`
- `passwordHash`
- `role`
- `createdAt`
- `updatedAt`

## study_plans

- `_id`
- `userId`
- `title`
- `goal`
- `startDate`
- `endDate`
- `status`

## study_tasks

- `_id`
- `planId`
- `userId`
- `subject`
- `topic`
- `scheduledDate`
- `durationMinutes`
- `completed`

## performance_records

- `_id`
- `userId`
- `subject`
- `studyHours`
- `attendance`
- `previousScore`
- `score`
- `recordedAt`

## predictions

- `_id`
- `userId`
- `predictedScore`
- `confidence`
- `factors`
- `generatedAt`

