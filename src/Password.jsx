import { Icon } from "@iconify/react";
import { useState } from "react";
import { MyInput } from "./MyInput";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

export function Password() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const email = new URLSearchParams(location.search).get("email");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordRegex.test(password)) {
      setError("密码必须不小于8位, 必须包含大小写字母和数字");
      return;
    }
    setError("");
    //
    // const res = await fetch("/api/login", {method:"POST", headers:{
    //   'context-'
    // }})
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="mt-10 border border-solid border-gray-300 rounded-md p-6 w-full max-w-lg">
        <div className="text-3xl flex flex-col items-center">
          <Icon icon="logos:google" />
        </div>
        <h1 className="text-3xl text-center mt-6">请输入密码</h1>
        <p className="text-lg text-center mt-6">使用您的 Google 帐号</p>
        <form onSubmit={handleSubmit} className="w-80 mx-auto">
          <div className="pt-4 text-gray-400">{email}</div>
          <MyInput
            autoFocus
            value={password}
            setValue={setPassword}
            error={error}
            placeholder="请输入密码"
          />
          <div className="mt-4 flex flex-row justify-between items-end">
            <a className="text-indigo-600" href="/register">
              创建账号
            </a>
            <button
              className="bg-indigo-500 text-white py-2 px-4 text-sm rounded hover:shadow-md hover:bg-indigo-600 transition-all ease-in-out duration-200 active:bg-indigo-700"
              type="submut"
            >
              下一步
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
