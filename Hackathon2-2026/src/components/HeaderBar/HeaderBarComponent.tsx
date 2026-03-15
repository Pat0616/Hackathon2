import "./headerbar.css";
function HeaderBarComponent() {
  return (
    <div className="header">
      <div className="leftside">
        <div className="logo">
          <p>Inventory</p>
        </div>
        <p>Purchase</p>
      </div>

      <button className="additem">+ Add Item</button>
    </div>
  );
}

export default HeaderBarComponent;
