import { formatDate } from '../../utils/subjectHelpers.js';
import StatusBadge from '../ui/StatusBadge.jsx';

export default function FinalExamCard({ finalExam }) {
  return (
    <article className="subject-panel">
      <div className="subject-panel-head">
        <div>
          <p>Final exam</p>
          <h3>Exam details</h3>
        </div>
        <StatusBadge status={finalExam.status || 'Not Started'} />
      </div>

      <dl className="subject-grid-two subject-detail-grid">
        <div>
          <dt>Exam date</dt>
          <dd>{formatDate(finalExam.examDate)}</dd>
        </div>
        <div>
          <dt>Weight</dt>
          <dd>{finalExam.weight || 0}%</dd>
        </div>
        <div>
          <dt>Syllabus coverage</dt>
          <dd>{finalExam.syllabusCoverage || 0}%</dd>
        </div>
        <div>
          <dt>Preparation</dt>
          <dd>{finalExam.preparationLevel || 'Moderate'}</dd>
        </div>
        <div>
          <dt>Predicted mark</dt>
          <dd>{finalExam.predictedMark || 0}</dd>
        </div>
      </dl>
    </article>
  );
}
