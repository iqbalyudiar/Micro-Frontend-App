import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, TodoContent, AuthContent } from "./components";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<TodoContent />} />
        <Route path="/auth" element={<AuthContent />} />
      </Routes>
    </BrowserRouter>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
