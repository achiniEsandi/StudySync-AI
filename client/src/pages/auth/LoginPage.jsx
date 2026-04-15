import LoginForm from '../../components/forms/LoginForm.jsx';

export default function LoginPage() {
  return (
    <section className="auth-page">
      <div className="auth-hero">
        <p className="section-kicker">StudySync AI</p>
        <h1>Plan your study in one calm, focused workspace.</h1>
        <p>
          A minimal study planner with space for scheduling, tracking, and
          performance insights.
        </p>
      </div>

      <LoginForm />
    </section>
  );
}
