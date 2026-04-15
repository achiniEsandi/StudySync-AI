import Button from '../common/Button.jsx';
import Input from '../common/Input.jsx';

export default function RegisterForm() {
  return (
    <form className="auth-card">
      <div className="auth-copy">
        <p className="section-kicker">Create account</p>
        <h2>Get started</h2>
        <p>
          Create your account to start planning and tracking your study flow.
        </p>
      </div>

      <label className="field">
        <span>Full name</span>
        <Input type="text" placeholder="Aarav Perera" />
      </label>

      <label className="field">
        <span>Email</span>
        <Input type="email" placeholder="student@campus.edu" />
      </label>

      <label className="field">
        <span>Password</span>
        <Input type="password" placeholder="Create a secure password" />
      </label>

      <Button type="submit">Register</Button>
    </form>
  );
}
