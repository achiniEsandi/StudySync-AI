import { useEffect, useState } from 'react';

const emptySubject = {
  subjectName: '',
  subjectCode: '',
  semester: '',
  creditValue: 0,
  lecturer: '',
  description: '',
};

export default function SubjectForm({ initialValues, onSubmit, submitLabel }) {
  const [formData, setFormData] = useState(initialValues || emptySubject);

  useEffect(() => {
    setFormData(initialValues || emptySubject);
  }, [initialValues]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: name === 'creditValue' ? Number(value) : value,
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
          <span>Subject name</span>
          <input name="subjectName" value={formData.subjectName} onChange={handleChange} required />
        </label>
        <label>
          <span>Subject code</span>
          <input name="subjectCode" value={formData.subjectCode} onChange={handleChange} required />
        </label>
        <label>
          <span>Semester</span>
          <input name="semester" value={formData.semester} onChange={handleChange} required />
        </label>
        <label>
          <span>Credit value</span>
          <input
            name="creditValue"
            type="number"
            min="0"
            value={formData.creditValue}
            onChange={handleChange}
            required
          />
        </label>
        <label className="subject-form-wide">
          <span>Lecturer</span>
          <input name="lecturer" value={formData.lecturer} onChange={handleChange} />
        </label>
        <label className="subject-form-wide">
          <span>Description</span>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
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
