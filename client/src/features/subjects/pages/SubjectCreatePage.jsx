import { useNavigate } from 'react-router-dom';
import SubjectForm from '../components/forms/SubjectForm.jsx';
import { subjectsApi } from '../services/subjectsApi.js';
import '../styles/subjects.css';

export default function SubjectCreatePage() {
  const navigate = useNavigate();

  const handleCreate = async (payload) => {
    const response = await subjectsApi.create(payload);
    navigate(`/subjects/${response.data.data._id}`);
  };

  return (
    <section className="subject-module-page">
      <header className="subject-page-header">
        <div>
          <p className="subject-eyebrow">New subject</p>
          <h1>Create subject</h1>
        </div>
      </header>

      <article className="subject-panel">
        <SubjectForm onSubmit={handleCreate} submitLabel="Create subject" />
      </article>
    </section>
  );
}

