import ItemStatusComponent from './ItemStatusComponent';
import './itemtable.css'

function ItemTableComponent() {

    const items = [
        { name: 'Milo', category: 'Food', quantity: 100, price: '$10', status: 'Available' },
        { name: 'Milk', category: 'Drink', quantity: 50, price: '$5', status: 'Available' },
        { name: 'Bread', category: 'Food', quantity: 0, price: '$2', status: 'Out of Stock' },
        { name: 'Eggs', category: 'Food', quantity: 10, price: '$3', status: 'Low Stock' },
        

    ];

  return (
    <div className="card">
        <div className="card-header">
            <h2>All Products</h2>
             <input type="text" placeholder="Search..."></input>
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
                {items.map((item, index) => (
                    <ItemStatusComponent key={index} name={item.name} category={item.category} quantity={item.quantity} price={item.price} status={item.status} />
                ))}

            </div>
        </div>
        
    </div>
  );
}

export default ItemTableComponent;