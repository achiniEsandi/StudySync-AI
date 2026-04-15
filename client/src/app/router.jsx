import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from '../pages/auth/LoginPage.jsx';
import RegisterPage from '../pages/auth/RegisterPage.jsx';
import DashboardPage from '../pages/dashboard/DashboardPage.jsx';
import PlannerPage from '../pages/planner/PlannerPage.jsx';
import AnalyticsPage from '../pages/analytics/AnalyticsPage.jsx';
import DashboardLayout from '../layouts/DashboardLayout.jsx';
import SubjectsPage from '../features/subjects/pages/SubjectsPage.jsx';
import SubjectCreatePage from '../features/subjects/pages/SubjectCreatePage.jsx';
import SubjectEditPage from '../features/subjects/pages/SubjectEditPage.jsx';
import SubjectDetailsPage from '../features/subjects/pages/SubjectDetailsPage.jsx';

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
        path="/subjects"
        element={
          <DashboardLayout>
            <SubjectsPage />
          </DashboardLayout>
        }
      />
      <Route
        path="/subjects/new"
        element={
          <DashboardLayout>
            <SubjectCreatePage />
          </DashboardLayout>
        }
      />
      <Route
        path="/subjects/:subjectId"
        element={
          <DashboardLayout>
            <SubjectDetailsPage />
          </DashboardLayout>
        }
      />
      <Route
        path="/subjects/:subjectId/edit"
        element={
          <DashboardLayout>
            <SubjectEditPage />
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
