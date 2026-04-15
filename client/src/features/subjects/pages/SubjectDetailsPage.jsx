import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CaItemCard from '../components/cards/CaItemCard.jsx';
import FinalExamCard from '../components/cards/FinalExamCard.jsx';
import LearningComponentCard from '../components/cards/LearningComponentCard.jsx';
import SubjectHeader from '../components/SubjectDetails/SubjectHeader.jsx';
import SubjectOverviewTab from '../components/SubjectDetails/SubjectOverviewTab.jsx';
import SubjectTabNav from '../components/SubjectDetails/SubjectTabNav.jsx';
import LearningComponentForm from '../components/forms/LearningComponentForm.jsx';
import FinalExamForm from '../components/forms/FinalExamForm.jsx';
import CaItemModal from '../components/modals/CaItemModal.jsx';
import DeleteSubjectModal from '../components/modals/DeleteSubjectModal.jsx';
import EmptyState from '../components/ui/EmptyState.jsx';
import { useSubjectDetails } from '../hooks/useSubjectDetails.js';
import { subjectsApi } from '../services/subjectsApi.js';
import '../styles/subjects.css';

const componentTabMap = {
  Lectures: 'lectures',
  Tutorials: 'tutorials',
  Labs: 'labs',
};

export default function SubjectDetailsPage() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const { subject, loading, error, reloadSubject } = useSubjectDetails(subjectId);
  const [activeTab, setActiveTab] = useState('Overview');
  const [caModalState, setCaModalState] = useState({ open: false, item: null });
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleComponentSave = async (componentKey, payload) => {
    await subjectsApi.updateComponent(subjectId, componentKey, payload);
    await reloadSubject();
  };

  const handleCaSubmit = async (payload) => {
    if (caModalState.item?._id) {
      await subjectsApi.updateCaItem(subjectId, caModalState.item._id, payload);
    } else {
      await subjectsApi.addCaItem(subjectId, payload);
    }
    setCaModalState({ open: false, item: null });
    await reloadSubject();
  };

  const handleDeleteCa = async (caItemId) => {
    await subjectsApi.deleteCaItem(subjectId, caItemId);
    await reloadSubject();
  };

  const handleFinalExamSave = async (payload) => {
    await subjectsApi.upsertFinalExam(subjectId, payload);
    await reloadSubject();
  };

  const handleDeleteSubject = async () => {
    await subjectsApi.remove(subjectId);
    navigate('/subjects');
  };

  const renderTab = () => {
    if (!subject) {
      return null;
    }

    if (activeTab === 'Overview') {
      return <SubjectOverviewTab subject={subject} />;
    }

    if (['Lectures', 'Tutorials', 'Labs'].includes(activeTab)) {
      const componentKey = componentTabMap[activeTab];
      return (
        <section className="subject-tab-layout">
          <LearningComponentCard
            title={activeTab}
            component={subject[componentKey] || {}}
          />
          <article className="subject-panel">
            <p>Update {activeTab.toLowerCase()}</p>
            <h3>Edit progress</h3>
            <LearningComponentForm
              initialValues={subject[componentKey]}
              onSubmit={(payload) => handleComponentSave(componentKey, payload)}
            />
          </article>
        </section>
      );
    }

    if (activeTab === 'CA') {
      return (
        <section className="subject-tab-layout">
          <article className="subject-panel">
            <div className="subject-panel-head">
              <div>
                <p>Continuous assessment</p>
                <h3>Assessment items</h3>
              </div>
              <button
                type="button"
                className="subject-button-primary"
                onClick={() => setCaModalState({ open: true, item: null })}
              >
                Add item
              </button>
            </div>

            {subject.continuousAssessments?.length ? (
              <div className="subject-stack">
                {subject.continuousAssessments.map((item) => (
                  <CaItemCard
                    key={item._id}
                    item={item}
                    onEdit={() => setCaModalState({ open: true, item })}
                    onDelete={() => handleDeleteCa(item._id)}
                  />
                ))}
              </div>
            ) : (
              <EmptyState
                title="No CA items yet"
                description="Add assignments, quizzes, presentations, or mid exams for this subject."
              />
            )}
          </article>
        </section>
      );
    }

    if (activeTab === 'Final Exam') {
      return (
        <section className="subject-tab-layout">
          <FinalExamCard finalExam={subject.finalExam || {}} />
          <article className="subject-panel">
            <p>Final exam</p>
            <h3>Update exam details</h3>
            <FinalExamForm
              initialValues={subject.finalExam}
              onSubmit={handleFinalExamSave}
            />
          </article>
        </section>
      );
    }

    return null;
  };

  if (loading) {
    return <section className="subject-module-page"><div className="subject-panel">Loading subject...</div></section>;
  }

  return (
    <section className="subject-module-page">
      {error ? <div className="subject-error-banner">{error}</div> : null}

      {subject ? (
        <>
          <SubjectHeader subject={subject} onDeleteClick={() => setDeleteOpen(true)} />
          <SubjectTabNav activeTab={activeTab} onChange={setActiveTab} />
          {renderTab()}
        </>
      ) : (
        <EmptyState title="Subject not found" description="The requested subject could not be loaded." />
      )}

      <CaItemModal
        isOpen={caModalState.open}
        title={caModalState.item ? 'Edit CA item' : 'Add CA item'}
        initialValues={caModalState.item}
        onClose={() => setCaModalState({ open: false, item: null })}
        onSubmit={handleCaSubmit}
      />

      <DeleteSubjectModal
        isOpen={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDeleteSubject}
      />
    </section>
  );
}

