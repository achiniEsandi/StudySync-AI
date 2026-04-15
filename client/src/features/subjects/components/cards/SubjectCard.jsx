import { Link } from 'react-router-dom';
import ProgressBar from '../ui/ProgressBar.jsx';

export default function SubjectCard({ subject }) {
  return (
    <article className="subject-card">
      <div className="subject-card-head">
        <div>
          <p>{subject.subjectCode}</p>
          <h3>{subject.subjectName}</h3>
        </div>
        <span>{subject.semester}</span>
      </div>

      <dl className="subject-card-meta">
        <div>
          <dt>Lecturer</dt>
          <dd>{subject.lecturer || 'Not set'}</dd>
        </div>
        <div>
          <dt>Credits</dt>
          <dd>{subject.creditValue}</dd>
        </div>
      </dl>

      <ProgressBar value={subject.overallProgress || 0} />

      <Link to={`/subjects/${subject._id}`} className="subject-inline-link">
        Open subject
      </Link>
    </article>
  );
}

