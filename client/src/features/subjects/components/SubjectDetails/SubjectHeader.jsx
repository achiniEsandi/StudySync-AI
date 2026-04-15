import { Link } from 'react-router-dom';
import ProgressBar from '../ui/ProgressBar.jsx';

export default function SubjectHeader({ subject, onDeleteClick }) {
  return (
    <header className="subject-header">
      <div>
        <p className="subject-eyebrow">{subject.subjectCode}</p>
        <h1>{subject.subjectName}</h1>
        <p className="subject-header-copy">
          {subject.semester} · {subject.lecturer || 'Lecturer not added'}
        </p>
      </div>

      <div className="subject-header-side">
        <div className="subject-progress-block">
          <span>Overall progress</span>
          <ProgressBar value={subject.overallProgress || 0} />
        </div>
        <div className="subject-card-actions">
          <Link to={`/subjects/${subject._id}/edit`} className="subject-button-secondary">
            Edit
          </Link>
          <button type="button" className="subject-button-danger" onClick={onDeleteClick}>
            Delete
          </button>
        </div>
      </div>
    </header>
  );
}

