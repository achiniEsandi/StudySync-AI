import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';

export default function DashboardLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-content">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <Navbar />
        <main className="page-shell">{children}</main>
      </div>
    </div>
  );
}
