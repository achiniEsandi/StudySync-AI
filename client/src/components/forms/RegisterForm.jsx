import Button from '../common/Button.jsx';
import Input from '../common/Input.jsx';

export default function RegisterForm() {
  return (
    <form className="card">
      <h2>Create Account</h2>
      <Input type="text" placeholder="Full name" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Register</Button>
    </form>
  );
}

