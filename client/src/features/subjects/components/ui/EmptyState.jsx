export default function EmptyState({ title, description, action }) {
  return (
    <div className="subject-empty-state">
      <h3>{title}</h3>
      <p>{description}</p>
      {action}
    </div>
  );
}

