import { useEffect, useState } from 'react';
import { caStatuses, caTypes } from '../../utils/subjectConstants.js';

export default function CaItemForm({ initialValues, onSubmit, submitLabel }) {
  const [formData, setFormData] = useState({
    title: initialValues?.title || '',
    type: initialValues?.type || 'Assignment',
    dueDate: initialValues?.dueDate ? initialValues.dueDate.slice(0, 10) : '',
    weight: initialValues?.weight || 0,
    marksObtained: initialValues?.marksObtained || 0,
    totalMarks: initialValues?.totalMarks || 0,
    status: initialValues?.status || 'Upcoming',
    feedbackOrNotes: initialValues?.feedbackOrNotes || '',
  });

  useEffect(() => {
    setFormData({
      title: initialValues?.title || '',
      type: initialValues?.type || 'Assignment',
      dueDate: initialValues?.dueDate ? initialValues.dueDate.slice(0, 10) : '',
      weight: initialValues?.weight || 0,
      marksObtained: initialValues?.marksObtained || 0,
      totalMarks: initialValues?.totalMarks || 0,
      status: initialValues?.status || 'Upcoming',
      feedbackOrNotes: initialValues?.feedbackOrNotes || '',
    });
  }, [initialValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: ['title', 'type', 'dueDate', 'status', 'feedbackOrNotes'].includes(name)
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
        <label className="subject-form-wide">
          <span>Title</span>
          <input name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          <span>Type</span>
          <select name="type" value={formData.type} onChange={handleChange}>
            {caTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Due date</span>
          <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} required />
        </label>
        <label>
          <span>Weight</span>
          <input type="number" min="0" max="100" name="weight" value={formData.weight} onChange={handleChange} />
        </label>
        <label>
          <span>Marks obtained</span>
          <input type="number" min="0" name="marksObtained" value={formData.marksObtained} onChange={handleChange} />
        </label>
        <label>
          <span>Total marks</span>
          <input type="number" min="0" name="totalMarks" value={formData.totalMarks} onChange={handleChange} />
        </label>
        <label>
          <span>Status</span>
          <select name="status" value={formData.status} onChange={handleChange}>
            {caStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </label>
        <label className="subject-form-wide">
          <span>Feedback or notes</span>
          <textarea
            name="feedbackOrNotes"
            rows="4"
            value={formData.feedbackOrNotes}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit" className="subject-button-primary">
        {submitLabel}
      </button>
    </form>
  );
}
