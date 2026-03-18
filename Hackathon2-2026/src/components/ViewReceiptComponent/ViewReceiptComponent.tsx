import { useState, useEffect } from "react";
import "./ViewReceiptComponent.css";
import Order from "./order";

type Item = {
  id: number;
  name: string;
  price: number;
};

function ViewReceiptComponent() {
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [realTotal, setRealTotal] = useState<number>(0);

  const ComputeTotalPrice = (itemprice: number) => {
    console.log("Added Price");
    setTotalPrice((prev) => prev + itemprice);
  };

  const [items, setItems] = useState<Item[]>([
    { id: 0, name: "Item 1", price: 6 },
    { id: 1, name: "Item 2", price: 6 },
  ]);

  const removeItemByIndex = (indexToRemove: number) => {
    setItems((prevItems) =>
      prevItems.filter((_, index) => index !== indexToRemove),
    );

    console.log("Item Removed");
    console.log(items);
  };

  const [tax, setTax] = useState<number>(0.12);

  useEffect(() => {
    setTax(totalPrice * 0.12);
  }, [totalPrice]);

  useEffect(() => {
    setRealTotal(totalPrice + tax);
  }, [tax]);

  return (
    <div className="ViewReceiptComponentContainer">
      <div className="ViewReceiptComponentHeader">
        <h1>Receipt</h1>
        <p>{new Date().toLocaleDateString()}</p>
        <hr />
      </div>

      <div className="ViewReceiptComponentBody">
        {loading ? (
          <p>Loading receipt...</p>
        ) : items.length === 0 ? (
          <p>No items added yet</p>
        ) : (
          items.map((item, index) => (
            <Order
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              SendTotalPrice={ComputeTotalPrice}
              RemoveThisItem={() => removeItemByIndex(index)}
            />
          ))
        )}
        <hr />
      </div>

      <div className="Subtotal">
        <p>Subtotal</p>
        <p>${totalPrice}</p>
      </div>
      <div className="Tax">
        <p>Tax</p>
        <p>${tax.toFixed(2)}</p>
      </div>
      <div className="Total">
        <p>TOTAL</p>
        <p>{realTotal}</p>
      </div>
      <button className="btnCheckout">Checkout</button>
    </div>
  );
}

export default ViewReceiptComponent;
