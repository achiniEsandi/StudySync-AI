import CaItemForm from '../forms/CaItemForm.jsx';

export default function CaItemModal({
  isOpen,
  title,
  initialValues,
  onClose,
  onSubmit,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="subject-modal-backdrop">
      <div className="subject-modal">
        <div className="subject-modal-head">
          <h3>{title}</h3>
          <button type="button" className="subject-icon-button" onClick={onClose}>
            Close
          </button>
        </div>
        <CaItemForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          submitLabel={initialValues ? 'Update item' : 'Add item'}
        />
      </div>
    </div>
  );
}

