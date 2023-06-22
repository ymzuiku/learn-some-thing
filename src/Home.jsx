export function Home({ setRouter }) {
  const handleGotoLogin = () => {
    setRouter("login");
  };
  const handleGotoRegister = () => {
    setRouter("register");
  };

  return (
    <div>
      <h1>Github welcome page</h1>
      <button onClick={handleGotoRegister}>Goto register</button>
      <button onClick={handleGotoLogin}>Goto login</button>
    </div>
  );
}
