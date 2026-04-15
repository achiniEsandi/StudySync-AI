export default function StatusBadge({ status }) {
  const normalized = (status || '').toLowerCase().replace(/\s+/g, '-');

  return <span className={`subject-status subject-status-${normalized}`}>{status}</span>;
}

