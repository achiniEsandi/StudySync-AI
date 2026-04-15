import { formatDate } from '../../utils/subjectHelpers.js';
import StatusBadge from '../ui/StatusBadge.jsx';

export default function CaItemCard({ item, onEdit, onDelete }) {
  return (
    <article className="subject-list-card">
      <div className="subject-list-card-head">
        <div>
          <h4>{item.title}</h4>
          <p>{item.type}</p>
        </div>
        <StatusBadge status={item.status} />
      </div>

      <dl className="subject-list-meta">
        <div>
          <dt>Due date</dt>
          <dd>{formatDate(item.dueDate)}</dd>
        </div>
        <div>
          <dt>Weight</dt>
          <dd>{item.weight}%</dd>
        </div>
        <div>
          <dt>Marks</dt>
          <dd>
            {item.marksObtained || 0} / {item.totalMarks || 0}
          </dd>
        </div>
      </dl>

      <p className="subject-muted-copy">{item.feedbackOrNotes || 'No notes yet.'}</p>

      <div className="subject-card-actions">
        <button type="button" className="subject-button-secondary" onClick={onEdit}>
          Edit
        </button>
        <button type="button" className="subject-button-danger" onClick={onDelete}>
          Delete
        </button>
      </div>
    </article>
  );
}

