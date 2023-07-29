import { Icon } from "@iconify/react";
import { useState } from "react";

export function MyInput({ value, setValue, error, placeholder, ...rest }) {
  const [focus, setFocus] = useState(false);
  return (
    <>
      <div className="relative mt-6 h-14">
        <input
          value={value}
          onInput={(e) => setValue(e.target.value)}
          className={[
            "box-border border border-solid focus:border-transparent focus:ring-2  focus:outline-none border-gray-300 h-full w-full rounded-md px-3",
            error
              ? "ring-red-500 ring-2 outline-none border-none"
              : "ring-indigo-500",
          ].join(" ")}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          {...rest}
        />
        <div
          className={[
            "absolute left-3  flex flex-col justify-center pointer-events-none transition-all bg-white p-2",
            focus || value
              ? [
                  "top-0 -translate-y-1/2 scale-90 origin-left",
                  error ? "text-red-500" : "text-indigo-500",
                ].join(" ")
              : "top-1/2 -translate-y-1/2 text-gray-600",
          ].join(" ")}
        >
          {placeholder}
        </div>
      </div>
      {error ? (
        <div className="mt-2 mb-4 flex flex-row text-red-500">
          <Icon icon="material-symbols:info" />
          <div className="text-sm">{error}</div>
        </div>
      ) : null}
    </>
  );
}
