import ProgressBar from '../ui/ProgressBar.jsx';
import StatusBadge from '../ui/StatusBadge.jsx';

export default function LearningComponentCard({ title, component }) {
  return (
    <article className="subject-panel">
      <div className="subject-panel-head">
        <div>
          <p>{title}</p>
          <h3>{title} Progress</h3>
        </div>
        <StatusBadge status={component.status || 'Not Started'} />
      </div>

      <div className="subject-grid-two">
        <div>
          <span>Planned hours</span>
          <strong>{component.plannedHours || 0}</strong>
        </div>
        <div>
          <span>Completed hours</span>
          <strong>{component.completedHours || 0}</strong>
        </div>
        <div>
          <span>Total sessions</span>
          <strong>{component.totalSessions || 0}</strong>
        </div>
        <div>
          <span>Completed sessions</span>
          <strong>{component.completedSessions || 0}</strong>
        </div>
      </div>

      <ProgressBar value={component.progressPercentage || 0} />

      <div className="subject-notes">
        <span>Notes</span>
        <p>{component.notes || 'No notes added yet.'}</p>
      </div>
    </article>
  );
}

