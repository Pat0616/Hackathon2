import { useState } from "react";

interface Props {
  name: string;
  category: string;
  quantity: number;
  price: string;
  status: string;
}

function getStatus(quantity: number) {
  if (quantity >= 50) return { label: "Available",    color: "green",  className: "table-row-status-available"  };
  if (quantity === 0) return { label: "Out of Stock", color: "red",    className: "table-row-status-outofstock" };
  return              { label: "Low Stock",           color: "orange", className: "table-row-status-lowstock"  };
}

function ItemStatusComponent({ name, category, quantity, price }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName,  setEditName]  = useState(name);
  const [editQty,   setEditQty]   = useState(quantity);
  const [editPrice, setEditPrice] = useState(price);

  const status = getStatus(editQty);

  if (isEditing) {
    return (
      <div className="table-row">
        <input value={editName}   style={{ width: "140px" }} onChange={e => setEditName(e.target.value)} />
        <p>{category}</p>
        <input type="number" value={editQty}   style={{ width: "60px" }}  onChange={e => setEditQty(Number(e.target.value))} />
        <input value={editPrice} style={{ width: "80px" }} onChange={e => setEditPrice(e.target.value)} />
        <p className={status.className} style={{ color: status.color }}>{status.label}</p>
        <button className="btn-save"   onClick={() => setIsEditing(false)}>Save</button>
        <button className="btn-cancel" onClick={() => { setIsEditing(false); setEditName(name); setEditQty(quantity); setEditPrice(price); }}>Cancel</button>
      </div>
    );
  }

  return (
    <div className="table-row">
      <p>{editName}</p>
      <p>{category}</p>
      <p>{editQty}</p>
      <p>{editPrice}</p>
      <p className={status.className} style={{ color: status.color }}>{status.label}</p>
      <button className="btn-edit" onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}

export default ItemStatusComponent;