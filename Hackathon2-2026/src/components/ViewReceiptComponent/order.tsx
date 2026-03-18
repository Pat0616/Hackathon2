import { useState, useEffect } from "react";
import "./ViewReceiptComponent.css";

interface Props {
  id: number;
  name: string;
  price: number;
  SendTotalPrice: (itemtotalprice: number) => void;
  RemoveThisItem: () => void;
}

function Order({ name, price, SendTotalPrice, RemoveThisItem }: Props) {
  const [itemPrice, setItemPrice] = useState<number>(0);
  const [itemQuantity, setItemQuantity] = useState<number>(0);

  useEffect(() => {
    setItemPrice(price);
  }, []);

  useEffect(() => {
    console.log("Price Computed");
  }, [itemQuantity]);

  const AddItemQuantity = () => {
    setItemQuantity((prev) => prev + 1);
    SendTotalPrice(price);
  };

  const MinusItemQuantity = () => {
    if (itemQuantity > 1) {
      setItemQuantity((prev) => prev - 1);
      SendTotalPrice(-price);
    } else {
      SendTotalPrice(-price);
      RemoveThisItem();
    }
  };

  return (
    <div className="Order">
      {name}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button onClick={MinusItemQuantity} className="add/minus">
          -
        </button>
        {itemQuantity}
        <button onClick={AddItemQuantity} className="add/minus">
          +
        </button>
      </div>
      {itemPrice}
    </div>
  );
}

export default Order;
