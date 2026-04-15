export default function Button({ children, type = 'button', ...props }) {
  return (
    <button type={type} className="btn btn-primary" {...props}>
      {children}
    </button>
  );
}

