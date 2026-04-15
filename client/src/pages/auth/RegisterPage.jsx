import RegisterForm from '../../components/forms/RegisterForm.jsx';

export default function RegisterPage() {
  return (
    <section className="auth-page">
      <div className="auth-hero">
        <p className="section-kicker">StudySync AI</p>
        <h1>Create a study space that stays clear and organized.</h1>
        <p>
          Start with a simple workspace for planning sessions and reviewing
          progress over time.
        </p>
      </div>

      <RegisterForm />
    </section>
  );
}
