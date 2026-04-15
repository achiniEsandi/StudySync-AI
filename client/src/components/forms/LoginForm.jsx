import Button from '../common/Button.jsx';
import Input from '../common/Input.jsx';

export default function LoginForm() {
  return (
    <form className="auth-card">
      <div className="auth-copy">
        <p className="section-kicker">Sign in</p>
        <h2>Welcome back</h2>
        <p>
          Continue to your planner and analytics workspace.
        </p>
      </div>

      <label className="field">
        <span>Email</span>
        <Input type="email" placeholder="student@campus.edu" />
      </label>

      <label className="field">
        <span>Password</span>
        <Input type="password" placeholder="Enter your password" />
      </label>

      <Button type="submit">Sign In</Button>
    </form>
  );
}
