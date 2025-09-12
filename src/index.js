import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.jsx";

function App() {
  return (
    <div className="container mx-auto p-6">
      <Header />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
