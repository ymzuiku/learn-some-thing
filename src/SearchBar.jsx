import { useState } from "react";
import "./SearchBar.css";

// setState(old+1)  setState((old)=> old+1)
// SPA: single page application

export function SearchBar({ setData }) {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setData((oldData) => {
      return [
        ...oldData,
        {
          id: Math.random().toString(36).substring(2),
          title: value,
          completed: false,
        },
      ];
    });
    setValue("");
  };
  return (
    <div className="search-bar">
      <h1 className="title">My todo list</h1>
      <form className="input-box" onSubmit={handleSubmit}>
        <input value={value} placeholder="Title..." onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
