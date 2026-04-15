import Navbar from './Navbar.jsx';
import Sidebar from './Sidebar.jsx';

export default function DashboardLayout({ children }) {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-content">
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
}

