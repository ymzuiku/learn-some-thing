import { useState } from "react";
import "./App.css";
import { List } from "./List";
import { SearchBar } from "./SearchBar";

const defaultData = [
  {
    id: "1fjdklsafk",
    title: "Hit the gym",
    completed: false,
  },
  {
    id: "2",
    title: "Pay bills",
    completed: true,
  },
  {
    id: "3",
    title: "Meet George",
    completed: false,
  },
];

// 引用对象: 数组,函数,对象
// 值对象: 字符串,boolean,数字

export default function App() {
  const [data, setData] = useState(defaultData);

  return (
    <div className="app">
      <SearchBar setData={setData} />
      <List data={data} setData={setData} />
    </div>
  );
}
