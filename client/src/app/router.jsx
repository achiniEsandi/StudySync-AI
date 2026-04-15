import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage.jsx';
import RegisterPage from '../pages/auth/RegisterPage.jsx';
import DashboardPage from '../pages/dashboard/DashboardPage.jsx';
import PlannerPage from '../pages/planner/PlannerPage.jsx';
import AnalyticsPage from '../pages/analytics/AnalyticsPage.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          <DashboardLayout>
            <DashboardPage />
          </DashboardLayout>
        }
      />
      <Route
        path="/planner"
        element={
          <DashboardLayout>
            <PlannerPage />
          </DashboardLayout>
        }
      />
      <Route
        path="/analytics"
        element={
          <DashboardLayout>
            <AnalyticsPage />
          </DashboardLayout>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

