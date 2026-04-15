import { Link } from 'react-router-dom';
import { useSubjects } from '../hooks/useSubjects.js';
import SubjectCard from '../components/cards/SubjectCard.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import '../styles/subjects.css';

export default function SubjectsPage() {
  const { subjects, loading, error } = useSubjects();

  return (
    <section className="subject-module-page">
      <header className="subject-page-header">
        <div>
          <p className="subject-eyebrow">Subjects</p>
          <h1>Subject and academic structure</h1>
          <p className="subject-muted-copy">
            Manage subjects, learning components, assessments, and final exam preparation.
          </p>
        </div>
        <Link to="/subjects/new" className="subject-button-primary">
          New subject
        </Link>
      </header>

      {loading ? <div className="subject-panel">Loading subjects...</div> : null}
      {error ? <div className="subject-error-banner">{error}</div> : null}

      {!loading && !subjects.length ? (
        <EmptyState
          title="No subjects yet"
          description="Create your first subject to start managing lectures, tutorials, labs, assessments, and final exam details."
          action={
            <Link to="/subjects/new" className="subject-button-primary">
              Create subject
            </Link>
          }
        />
      ) : null}

      <div className="subject-card-grid">
        {subjects.map((subject) => (
          <SubjectCard key={subject._id} subject={subject} />
        ))}
      </div>
    </section>
  );
}

