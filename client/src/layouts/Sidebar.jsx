import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Dashboard', description: 'Overview' },
  { to: '/subjects', label: 'Subjects', description: 'Academic structure' },
  { to: '/planner', label: 'Planner', description: 'Study sessions' },
  { to: '/analytics', label: 'Analytics', description: 'Insights' },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="sidebar-brand-mark">S</span>
        <div>
          <p className="sidebar-eyebrow">StudySync AI</p>
          <h1>Study Planner</h1>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `sidebar-link${isActive ? ' sidebar-link-active' : ''}`
            }
          >
            <span>{item.label}</span>
            <small>{item.description}</small>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
