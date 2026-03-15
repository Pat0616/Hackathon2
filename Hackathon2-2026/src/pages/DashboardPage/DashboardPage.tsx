import "./dashboarddesign.css";
import HeaderBarComponent from "../../components/HeaderBar/HeaderBarComponent";
import StatsCardComponent from "../../components/StatsCard/StatsCardComponent";
import ItemTableComponent from "../../components/ItemTableComponent/ItemTableComponent";

function DashboardPage() {
  return (
    <>
      <HeaderBarComponent />
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <StatsCardComponent />
      <ItemTableComponent />
      </div>
    
    </>
  );
}

export default DashboardPage;
