import { useState } from "react";
import { cn } from "./utils/cn";

// import "./index.css";

type TCounter = {
  name: string;
  className?: string;
};

export default function Counter({ name, className }: TCounter) {
  const [count, setCount] = useState(0);

  // p-5 rounded-xl border-2 border-blue-500 m-5
  return (
    <div
      className={cn("p-5 rounded-xl border-2 border-blue-500 m-5", className)}
    >
      {name}
      <p className="text-9xl">Counts: {count}</p>
      <button className="cursor-pointer" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
