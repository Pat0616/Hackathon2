import "./headerbar.css";
import {useState, useEffect} from 'react';
import {getMe} from '../../utils/authAPI';


function HeaderBarComponent() {
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
          <p>Inventory</p>
        </div>
        <p>Purchase</p>
      </div>

    <p>Welcome {userName} </p>

      <button className="additem">+ Add Item</button>
    </div>
  );
}

export default HeaderBarComponent;
