import "./productlist.css";

const products = [ {
                    name: "Wireless Mouse",
                    category: "Electronics",
                    stock: 42,
                    price: "$850"
                },
                {
                    name: "Mechanical Keyboard",
                    category: "Electronics",
                    stock: 28,
                    price: "$1200"
                },
                {
                    name: "Gaming Monitor",
                    category: "Electronics",
                    stock: 15,
                    price: "$3000"
                },
                {
                    name: "Pencil",
                    category: "Stationery",
                    stock: 200,
                    price: "$20"
                }
 ];

function ProductListComponent() {
  return (
    <div className="product-list-container">
        <div className="container-header">
            <h2> 📦Select Items</h2>
        </div>
        <div className="product-list-search">
            <input type="text" placeholder="Search items..." />
        </div>
        <div className="product-List">
            {products.map((product) => (
                 <div className="product-item-container">
                <div className="product-item-container-left">
                    <div className="item-name">
                    <p>{product.name}</p>
                    </div>
                    <div className="item-details">
                    <p>{product.category}</p>
                    <p>{product.stock} in stock</p>
                    </div>
                </div>
                <div className="product-item-container-right">
                    <p>{product.price}</p>
                    <button className="btn-add">Add</button>
                </div>
            </div>))}

        </div>
    </div>
  );
}

export default ProductListComponent;