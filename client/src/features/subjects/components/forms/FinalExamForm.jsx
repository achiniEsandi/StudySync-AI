import { useEffect, useState } from 'react';
import { finalExamStatuses, preparationLevels } from '../../utils/subjectConstants.js';

export default function FinalExamForm({ initialValues, onSubmit }) {
  const [formData, setFormData] = useState({
    examDate: initialValues?.examDate ? initialValues.examDate.slice(0, 10) : '',
    weight: initialValues?.weight || 0,
    syllabusCoverage: initialValues?.syllabusCoverage || 0,
    preparationLevel: initialValues?.preparationLevel || 'Moderate',
    predictedMark: initialValues?.predictedMark || 0,
    status: initialValues?.status || 'Not Started',
  });

  useEffect(() => {
    setFormData({
      examDate: initialValues?.examDate ? initialValues.examDate.slice(0, 10) : '',
      weight: initialValues?.weight || 0,
      syllabusCoverage: initialValues?.syllabusCoverage || 0,
      preparationLevel: initialValues?.preparationLevel || 'Moderate',
      predictedMark: initialValues?.predictedMark || 0,
      status: initialValues?.status || 'Not Started',
    });
  }, [initialValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: ['examDate', 'preparationLevel', 'status'].includes(name)
        ? value
        : Number(value),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="subject-form" onSubmit={handleSubmit}>
      <div className="subject-form-grid">
        <label>
          <span>Exam date</span>
          <input type="date" name="examDate" value={formData.examDate} onChange={handleChange} />
        </label>
        <label>
          <span>Weight</span>
          <input type="number" min="0" max="100" name="weight" value={formData.weight} onChange={handleChange} />
        </label>
        <label>
          <span>Syllabus coverage</span>
          <input type="number" min="0" max="100" name="syllabusCoverage" value={formData.syllabusCoverage} onChange={handleChange} />
        </label>
        <label>
          <span>Predicted mark</span>
          <input type="number" min="0" max="100" name="predictedMark" value={formData.predictedMark} onChange={handleChange} />
        </label>
        <label>
          <span>Preparation level</span>
          <select name="preparationLevel" value={formData.preparationLevel} onChange={handleChange}>
            {preparationLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Status</span>
          <select name="status" value={formData.status} onChange={handleChange}>
            {finalExamStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button type="submit" className="subject-button-primary">
        Save final exam
      </button>
    </form>
  );
}
