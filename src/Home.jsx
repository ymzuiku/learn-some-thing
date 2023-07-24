import { Icon } from "@iconify/react";
import { useState } from "react";

export function Home() {
  const [focus, setFocus] = useState(false);

  console.log("--debug--", "hanlde", focus);
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="mt-10 border border-solid border-gray-300 rounded-md p-6 w-full max-w-lg">
        <div className="text-3xl flex flex-col items-center">
          <Icon icon="logos:google" />
        </div>
        <h1 className="text-3xl text-center mt-6">登录</h1>
        <p className="text-lg text-center mt-6">使用您的 Google 帐号</p>
        <div className="relative mt-6 h-14 w-72 mx-auto ">
          <input
            className="box-border border border-solid focus:border-transparent focus:ring-2 ring-indigo-500 focus:outline-none border-gray-300 h-full w-full rounded-md px-3"
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
          <div
            className={[
              "absolute left-3  flex flex-col justify-center pointer-events-none transition-all bg-white p-2",
              focus
                ? "top-0 -translate-y-1/2 text-gray-600 scale-90 origin-left"
                : "top-1/2 -translate-y-1/2 text-gray-600",
            ].join(" ")}
          >
            电子邮件地址或电话号码
          </div>
        </div>
      </div>
    </div>
  );
}
