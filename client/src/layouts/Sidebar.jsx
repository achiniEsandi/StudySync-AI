import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/planner">Planner</Link>
      <Link to="/analytics">Analytics</Link>
    </aside>
  );
}

