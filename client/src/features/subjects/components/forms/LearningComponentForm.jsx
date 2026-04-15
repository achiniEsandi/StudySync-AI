import { useEffect, useState } from 'react';
import { learningStatuses } from '../../utils/subjectConstants.js';

export default function LearningComponentForm({ initialValues, onSubmit }) {
  const [formData, setFormData] = useState({
    plannedHours: initialValues?.plannedHours || 0,
    completedHours: initialValues?.completedHours || 0,
    totalSessions: initialValues?.totalSessions || 0,
    completedSessions: initialValues?.completedSessions || 0,
    status: initialValues?.status || 'Not Started',
    notes: initialValues?.notes || '',
  });

  useEffect(() => {
    setFormData({
      plannedHours: initialValues?.plannedHours || 0,
      completedHours: initialValues?.completedHours || 0,
      totalSessions: initialValues?.totalSessions || 0,
      completedSessions: initialValues?.completedSessions || 0,
      status: initialValues?.status || 'Not Started',
      notes: initialValues?.notes || '',
    });
  }, [initialValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: ['notes', 'status'].includes(name) ? value : Number(value),
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
          <span>Planned hours</span>
          <input type="number" min="0" name="plannedHours" value={formData.plannedHours} onChange={handleChange} />
        </label>
        <label>
          <span>Completed hours</span>
          <input type="number" min="0" name="completedHours" value={formData.completedHours} onChange={handleChange} />
        </label>
        <label>
          <span>Total sessions</span>
          <input type="number" min="0" name="totalSessions" value={formData.totalSessions} onChange={handleChange} />
        </label>
        <label>
          <span>Completed sessions</span>
          <input type="number" min="0" name="completedSessions" value={formData.completedSessions} onChange={handleChange} />
        </label>
        <label className="subject-form-wide">
          <span>Status</span>
          <select name="status" value={formData.status} onChange={handleChange}>
            {learningStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        <label className="subject-form-wide">
          <span>Notes</span>
          <textarea name="notes" rows="4" value={formData.notes} onChange={handleChange} />
        </label>
      </div>

      <button type="submit" className="subject-button-primary">
        Save changes
      </button>
    </form>
  );
}
