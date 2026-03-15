interface Props{
    name: string;
    category: string;
    quantity: number;
    price: string;
    status: string;
}


function ItemStatusComponent({name, category, quantity, price, status }: Props) {
  

    if(quantity >= 50){
        return(
            <div className="table-row">
                <p>{name}</p>
                <p>{category}</p>
                <p>{quantity}</p>
                <p>{price}</p>
                <p className='table-row-status-available' style={{color:"green"}}>{status}</p>
                <button className="btn-edit">Edit</button>
            </div>
        )
    }
   
    else if(quantity === 0){
        return(
            <div className="table-row">
                <p>{name}</p>
                <p>{category}</p>
                <p>{quantity}</p>
                <p>{price}</p>
                <p className='table-row-status-outofstock'style={{color:"red"}}>{status}</p>
                <button className="btn-edit">Edit</button>
            </div>
        )}

    else{
        return(
            <div className="table-row">
                <p>{name}</p>
                <p>{category}</p>
                <p>{quantity}</p>
                <p>{price}</p>
                <p className='table-row-status-lowstock'style={{color:"orange"}}>{status}</p>
                <button className="btn-edit">Edit</button>
            </div>
        )
    }
  
}

export default ItemStatusComponent