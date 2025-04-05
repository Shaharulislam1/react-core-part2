import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const countStyle = {
    border: "2px solid green",
    borderRadius: "10px",
  };
  return (
    <div style={countStyle}>
      <h3>Count: {count} </h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
