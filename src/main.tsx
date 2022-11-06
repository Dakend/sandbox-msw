import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";

const prepare = async () => {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/server");
    await worker.start();
  }
};

prepare().then(() => {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
