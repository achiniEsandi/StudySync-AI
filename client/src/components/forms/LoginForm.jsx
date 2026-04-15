import Button from '../common/Button.jsx';
import Input from '../common/Input.jsx';

export default function LoginForm() {
  return (
    <form className="card">
      <h2>Login</h2>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Sign In</Button>
    </form>
  );
}

