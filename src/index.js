import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Timeline } from "./components/Timeline.jsx";
import timelineItems from "./timelineItems.js";

function App() {
  const [items, setItems] = useState(timelineItems);

  const updateItemName = (itemId, newName) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, name: newName } : item
      )
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Timeline items={items} onUpdateItemName={updateItemName} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
