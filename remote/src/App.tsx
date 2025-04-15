import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Counter from "./Counter";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: remote</div>
    <div>Framework: react-18</div>
    <Counter name="Remote Components" className="border-green-500" />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
