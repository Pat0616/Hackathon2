import "./dashboarddesign.css";
import HeaderBarComponent from "../../components/HeaderBar/HeaderBarComponent";
import StatsCardComponent from "../../components/StatsCard/StatsCardComponent";
import ItemTableComponent from "../../components/ItemTableComponent/ItemTableComponent";
import {useState} from 'react';
import AddItemComponent from "../../components/AddItemPopUp/AddItemComponent";

function DashboardPage() {
  const [showAddItem, setShowAddItem] = useState<boolean>(false);

  const ClickedAddItemPopUp = () =>
  {
    setShowAddItem(prev => !prev);
  }

  return (
    <>
      <HeaderBarComponent ShowAddItem={ClickedAddItemPopUp}/>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <StatsCardComponent />
      <ItemTableComponent />
      {showAddItem && <AddItemComponent itemPopupHide={ClickedAddItemPopUp}></AddItemComponent>}
      </div>
    
    </>
  );
}

export default DashboardPage;
