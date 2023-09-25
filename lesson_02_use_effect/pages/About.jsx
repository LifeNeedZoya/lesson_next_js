import { useState } from "react";
import React from "react";
export default function Home() {
  const [count, setCount] = useState(100);
  const add = () => {
    setCount(count + 10);
    console.log("Add", count);
  };
  const minus = () => {
    setCount(count - 10);
    console.log("minus", count);
  };
  const reset = () => {
    setCount(100);
  };
  return (
    <main
      className={` min-h-screen items-center flex mx-auto justify-center text-green-900 bg-violet-500
      `}
    >
      {" "}
      <h1
        className="text-red-800 border-dashed border-black border
      "
      >
        TOOLUUR {count}
      </h1>
      <button
        className=" p-3 rounded-full text-center bg-green-700 border border-spacing-1 border-black mx-3 "
        onClick={add}
      >
        Add
      </button>
      <button
        className=" p-3 rounded-full text-center bg-green-700 border border-spacing-1 border-black mx-3 "
        onClick={minus}
      >
        Minus
      </button>
      <button
        className=" p-3 rounded-full text-center bg-green-700 border border-spacing-1 border-black mx-3 "
        onClick={reset}
      >
        Reset
      </button>
    </main>
  );
}
