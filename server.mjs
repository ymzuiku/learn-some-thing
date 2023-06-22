import express from "express";

const app = express(); // 构造函数
const port = 3001;

// RESTFul 规范
// GET POST PATCH DELETE PUT

// 幂等
// http://127.0.0.1:3001 1.6w
// https://127.0.0.1:3001
// (http|https)://[host]:[port]/api/user/1
// (http|https)://[host]:[port]/api/user/5
// (http|https)://[host]:[port]/api/user/52312312321
app.get("/api/ping", (req, res) => {
  res.send("pong");
});

// URL
app.post("/api/register", (req, res) => {
  res.send("hello world 1");
});

app.post("/api/login", (req, res) => {
  res.send("hello world 2");
});

app.listen(port, () => {
  console.log(`Example app listening on http://127.0.0.1:${port}`);
});
