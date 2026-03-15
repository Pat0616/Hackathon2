import "./StatsCardComponent.css";
import { useState } from "react";
function StatsCardComponent() {
  const [totalItems] = useState<number>(100);
  const [inStock] = useState<number>(90);
  const [lowStock] = useState<number>(86);
  const [outOfStock] = useState<number>(5);
  return (
    <div className="container">
      <div className="card-stats">
        <p className="count" style={{ color: "black" }}>
          {totalItems}
        </p>
        <p className="label">Total Items</p>
      </div>
      <div className="card-stats">
        <p className="count" style={{ color: "green" }}>
          {inStock}
        </p>
        <p className="label"> In Stock</p>
      </div>
      <div className="card-stats">
        <p className="count" style={{ color: "yellow" }}>
          {lowStock}
        </p>
        <p className="label">Low Stock</p>
      </div>
      <div className="card-stats">
        <p className="count" style={{ color: "red" }}>
          {outOfStock}
        </p>
        <p className="label">Out of Stock</p>
      </div>
    </div>
  );
}

export default StatsCardComponent;
