import { useNavigate, useParams } from 'react-router-dom';
import SubjectForm from '../components/forms/SubjectForm.jsx';
import { useSubjectDetails } from '../hooks/useSubjectDetails.js';
import { subjectsApi } from '../services/subjectsApi.js';
import '../styles/subjects.css';

export default function SubjectEditPage() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { subject, loading, error } = useSubjectDetails(subjectId);

  const handleUpdate = async (payload) => {
    await subjectsApi.update(subjectId, payload);
    navigate(`/subjects/${subjectId}`);
  };

  if (loading) {
    return <section className="subject-module-page"><div className="subject-panel">Loading subject...</div></section>;
  }

  return (
    <section className="subject-module-page">
      <header className="subject-page-header">
        <div>
          <p className="subject-eyebrow">Edit subject</p>
          <h1>{subject?.subjectName || 'Subject'}</h1>
        </div>
      </header>

      {error ? <div className="subject-error-banner">{error}</div> : null}

      {subject ? (
        <article className="subject-panel">
          <SubjectForm
            initialValues={subject}
            onSubmit={handleUpdate}
            submitLabel="Save subject"
          />
        </article>
      ) : null}
    </section>
  );
}

