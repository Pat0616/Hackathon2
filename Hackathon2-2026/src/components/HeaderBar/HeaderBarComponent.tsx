import "./headerbar.css";
import {useState, useEffect} from 'react';
import {getMe} from '../../utils/authAPI';
import {Link} from 'react-router-dom';

interface Props
{
  ShowAddItem: () => void;
}

function HeaderBarComponent({ShowAddItem}: Props) {
    const [userName, setUserName] = useState<string>("");

    

    useEffect(() => {
        GetUserName();
    },[]);

    const GetUserName = async () =>
    {
        const user = await getMe()
        setUserName(user.username);
    }


  return (
    <div className="header">
      <div className="leftside">
        <div className="logo">
          <Link to="/purchase" className="purchasepage-buttonlink">Purchase</Link>
        </div>
        <p>/ Inventory</p>
      </div>

    <p>Welcome {userName} </p>

      <button className="additem" onClick={ShowAddItem}>+ Add Item</button>
    </div>
  );
}

export default HeaderBarComponent;
