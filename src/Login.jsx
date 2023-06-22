export function Login({ goBack }) {
  const handleSubmit = () => {};
  return (
    <div className="login-box">
      <button onClick={goBack}>goback</button>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input className="login-input" placeholder="username" />
        <input className="login-input" placeholder="password" />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}
