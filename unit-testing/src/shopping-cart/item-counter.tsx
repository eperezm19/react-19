import { useState, type CSSProperties } from "react";

import "./item-counter.css";

interface ItemCounterProps {
  itemName: string;
  quantity: number;
}

// const sectionStyle: CSSProperties = {
//   display: "flex",
//   alignItems: "center",
//   gap: "10px",
// };

const buttonStyle: CSSProperties = {
  backgroundColor: "blue",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
};


export default function ItemCounter({
  itemName,
  quantity = 1,
}: ItemCounterProps) {
  const [count, setCount] = useState(quantity);

  const handleDecrement = () => {
    if (count === 1) return;
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <section className="item-row">
      <span className="item-text">{itemName}</span>
      <button style={buttonStyle} onClick={handleDecrement}>
        -1
      </button>
      <span>{count}</span>
      <button style={buttonStyle} onClick={handleIncrement}>
        +1
      </button>
    </section>
  );
}
