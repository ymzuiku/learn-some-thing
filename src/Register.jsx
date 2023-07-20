import { useState } from "react";

/*
XHR (XMLHttpRequest, ajax, 浏览器标准)
fetch (浏览器标准+nodejs标准)
axios (用的最多的请求库, XHR, http)
www.baidu.com host
qq.com
mail.qq.com
URL [http|https|fps|mysql|...(链接协议)]://[host]:[port]/url
跨域问题 (浏览器做的同源安全/同源协议)

跨域问题: 在开发环境需要解决, 在生产环境不需要解决
解决方法: 前端服务器解决(代理), 后端解决, 浏览器解决(不推荐用)
*/

export function Register({ goBack }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) {
      alert("please input username");
      return;
    }
    if (!password) {
      alert("please input password");
      return;
    }
    if (password !== passwordAgain) {
      alert("password no equal");
      return;
    }

    // Promise
    const data = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((response) => {
      return response.json();
    });

    if (data.success) {
      alert("You success!");
    } else if (data.error) {
      alert(data.error);
    }
  };
  return (
    <div className="login-box">
      <button onClick={goBack}>goback</button>
      <h1>register</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
          placeholder="username"
        />
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="login-input"
          placeholder="password"
        />
        <input
          value={passwordAgain}
          type="password"
          onChange={(e) => setPasswordAgain(e.target.value)}
          className="login-input"
          placeholder="password-again"
        />
        <button type="submit" className="login-button">
          Register
        </button>
      </form>
    </div>
  );
}
