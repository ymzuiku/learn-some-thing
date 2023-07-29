import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyInput } from "./MyInput";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function Login() {
  const nav = useNavigate(); // hooks
  const [email, _setEmail] = useState("");
  const [error, setError] = useState("");

  const setEmail = (text) => {
    if (text.length === 0) {
      setError("");
    }
    _setEmail(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!emailRegex.test(email)) {
      setError("您输入的不是正确的邮箱");
      return;
    }
    setError("");
    const url = new URLSearchParams({ email, bbb: 20 });
    nav("/password?" + url.toString());
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="mt-10 border border-solid border-gray-300 rounded-md p-6 w-full max-w-lg">
        <div className="text-3xl flex flex-col items-center">
          <Icon icon="logos:google" />
        </div>
        <h1 className="text-3xl text-center mt-6">登录</h1>
        <p className="text-lg text-center mt-6">使用您的 Google 帐号</p>
        <form onSubmit={handleSubmit} className="w-80 mx-auto">
          <MyInput
            value={email}
            setValue={setEmail}
            error={error}
            placeholder="电子邮件地址或电话号码"
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
