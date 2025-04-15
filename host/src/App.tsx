import ReactDOM from "react-dom/client";

import "./index.css";

import CounterMounter from "vue_remote/counterMounter";

import React, { useEffect, useRef } from "react";
import UIProvider from "remote/UIProvider";

// This lazy Import is better way, with suspense confirm that the remote is
// success fully loaded
const Counter = React.lazy(() => import("remote/Counter"));

const App = () => {
  const ref = useRef<HTMLElement>();

  //React can't handle native, so need to create mounter function handle it
  useEffect(() => {
    if (ref.current) {
      CounterMounter(ref.current);
    }
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div className="text-blue-600">Name: host</div>
      <div>Framework: react-18</div>
      <React.Suspense fallback="Loading Button">
        {/* this ui provider better put on more up level. 
          Maybe up level on router.
        */}
        <UIProvider>
          <Counter
            name="Host Component"
            className="border-green-500 text-red-500"
          />

          <Counter name="Host Component Sub Counter" />
        </UIProvider>
      </React.Suspense>

      {/* Vue remote get the counter */}
      <div ref={ref} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(<App />);
