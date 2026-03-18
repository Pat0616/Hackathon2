import './headerbar.css'

import {Link} from 'react-router-dom'

function PurchaseHeaderBarComponent()
{

    return(
        <div className="header">
      <div className="leftside">
        <div className="logo">
          <Link to="/dashboard" className="purchasepage-buttonlink">Inventory</Link>
        </div>
        <p>/ Purchase</p>
      </div>

    

      
    </div>
    )
}

export default PurchaseHeaderBarComponent;