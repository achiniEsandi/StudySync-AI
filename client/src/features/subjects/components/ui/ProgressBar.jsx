export default function ProgressBar({ value = 0 }) {
  return (
    <div className="subject-progress">
      <div className="subject-progress-track">
        <div className="subject-progress-fill" style={{ width: `${value}%` }} />
      </div>
      <span>{value}%</span>
    </div>
  );
}

