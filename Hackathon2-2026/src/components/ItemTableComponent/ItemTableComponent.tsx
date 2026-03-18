import { SearchProduct, GetProduct } from "../../utils/productsAPI";
import ItemStatusComponent from "./ItemStatusComponent";
import "./itemtable.css";
import { useState, useEffect } from "react";

type Products = {
  product_id: number;
  product_name: string;
  product_quantity: number;
  product_price: number;
  model_name: string;
  category: string;
  notes: string;
};

function ItemTableComponent() {
  const items = [
    {
      name: "Milo",
      category: "Food",
      quantity: 100,
      price: "$10",
      status: "Available",
    },
    {
      name: "Milk",
      category: "Drink",
      quantity: 50,
      price: "$5",
      status: "Available",
    },
    {
      name: "Bread",
      category: "Food",
      quantity: 0,
      price: "$2",
      status: "Out of Stock",
    },
    {
      name: "Eggs",
      category: "Food",
      quantity: 10,
      price: "$3",
      status: "Low Stock",
    },
    {
      name: "Eggs",
      category: "Food",
      quantity: 10,
      price: "$3",
      status: "Low Stock",
    },
    {
      name: "Eggs",
      category: "Food",
      quantity: 10,
      price: "$3",
      status: "Low Stock",
    },
    {
      name: "Eggs",
      category: "Food",
      quantity: 10,
      price: "$3",
      status: "Low Stock",
    },
    {
      name: "Eggs",
      category: "Food",
      quantity: 10,
      price: "$3",
      status: "Low Stock",
    },
    {
      name: "Eggs",
      category: "Food",
      quantity: 10,
      price: "$3",
      status: "Low Stock",
    },
    {
      name: "Eggs",
      category: "Food",
      quantity: 10,
      price: "$3",
      status: "Low Stock",
    },
    {
      name: "Eggs",
      category: "Food",
      quantity: 10,
      price: "$3",
      status: "Low Stock",
    },
    {
      name: "Eggs",
      category: "Food",
      quantity: 10,
      price: "$3",
      status: "Low Stock",
    },
  ];

  const [searchedProducts, setSearchedProducts] = useState<Products[]>([]);
  const [allProducts, setAllProducts] = useState<Products[]>([]);
  const [searchinput, setsearchinput] = useState<string>("");


  const GetAllProductsArray = async () => {
    const res = await GetProduct();
    setAllProducts(res);

    console.log(res);
    console.log(allProducts);
  }


  
  const GetSearchProducts = async () => {
    const res = await SearchProduct(searchinput);
    setSearchedProducts(res);

    console.log(res);
    console.log(searchedProducts);
  };

  useEffect(() => {
    GetAllProductsArray();
  },[])

  return (
    <div className="card">
      <div className="card-header">
        <h2>All Products</h2>
        <input
          type="text"
          value={searchinput}
          onChange={(e) => setsearchinput(e.target.value)}
          placeholder="Search..."
        ></input>
        <button onClick={GetSearchProducts}>Enter</button>
      </div>
      <div className="table">
        <div className="table-header">
          <p>Name</p>
          <p>Category</p>
          <p>Quantity</p>
          <p>Price</p>
          <p>Status</p>
          <p>Action</p>
        </div>
        <div className="table-body">
          {searchedProducts.map((item, index) => (
            <ItemStatusComponent
              key={index}
              name={item.product_name}
              category={item.category}
              quantity={item.product_quantity}
              price={String(item.product_price)}
              status={item.notes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemTableComponent;
