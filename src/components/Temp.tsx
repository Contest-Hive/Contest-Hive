"use client";
import { useState } from "react";

const Component = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Click me</button>
      <p>{count}</p>
    </div>
  );
};

export default Component;
