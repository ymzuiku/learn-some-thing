import { useState } from "react";

function View({ count, money, vip, name }) {
  return (
    <div>
      <div>view name is {name}</div>
      <div>i have count {count}</div>
      <div>i have money: {money}</div>
      <div>vip: {vip ? "i am vip" : "i not vip"}</div>
    </div>
  );
}

function View2({ count, money, vip, name, onChangeName }) {
  const handleChange = (event) => {
    const text = event.target.value;
    onChangeName(text);
  };

  return (
    <div>
      <div>view2 name is {name}</div>
      <div>i have count {count}</div>
      <div>i have money: {money}</div>
      <div>vip: {vip ? "i am vip" : "i not vip"}</div>
      <input onChange={handleChange} placeholder="change view name" />
    </div>
  );
}

function Container() {
  // hooks
  const [count, setCount] = useState(0);
  const [name, setName] = useState("nick");

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div>num: {count}</div>
      <View money={2} name={name} vip count={count} />
      <View2 money={2} onChangeName={setName} name="hello" vip count={count} />
      <button onClick={handleClick}>add count</button>
    </>
  );
}

function App() {
  return <Container />;
}

export default App;
