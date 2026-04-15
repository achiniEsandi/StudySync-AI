export default function SubjectOverviewTab({ subject }) {
  return (
    <section className="subject-tab-layout">
      <article className="subject-panel">
        <p>Basic details</p>
        <h3>Subject information</h3>
        <dl className="subject-grid-two subject-detail-grid">
          <div>
            <dt>Name</dt>
            <dd>{subject.subjectName}</dd>
          </div>
          <div>
            <dt>Code</dt>
            <dd>{subject.subjectCode}</dd>
          </div>
          <div>
            <dt>Semester</dt>
            <dd>{subject.semester}</dd>
          </div>
          <div>
            <dt>Credits</dt>
            <dd>{subject.creditValue}</dd>
          </div>
          <div>
            <dt>Lecturer</dt>
            <dd>{subject.lecturer || 'Not set'}</dd>
          </div>
        </dl>
      </article>

      <article className="subject-panel">
        <p>Description</p>
        <h3>Module notes</h3>
        <p className="subject-muted-copy">{subject.description || 'No description added yet.'}</p>
      </article>
    </section>
  );
}
