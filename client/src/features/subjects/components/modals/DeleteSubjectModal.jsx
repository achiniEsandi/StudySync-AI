export default function DeleteSubjectModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="subject-modal-backdrop">
      <div className="subject-modal subject-modal-compact">
        <div className="subject-modal-head">
          <h3>Delete subject</h3>
        </div>
        <p>This action will permanently remove the subject and all its academic data.</p>
        <div className="subject-card-actions">
          <button type="button" className="subject-button-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="button" className="subject-button-danger" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

