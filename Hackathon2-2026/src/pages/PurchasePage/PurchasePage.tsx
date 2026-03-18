import PurchaseHeaderBarComponent from "../../components/HeaderBar/PurchaseHeaderBarComponent";
import ProductListComponent from "../../components/ProductList/ProductListComponent";
import ViewReceiptComponent from "../../components/ViewReceiptComponent/ViewReceiptComponent";
import {useState} from 'react';
import ReceiptPopup from "../ReceiptPopup/ReceiptPopup";

function PurchasePage() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

      const OpenReceiptSum = () =>
      {
        setIsOpen(prev => !prev);
      }

    return (
        <>
        <PurchaseHeaderBarComponent></PurchaseHeaderBarComponent>
        <div style={{display: "flex", flexDirection: "row" , alignItems: "flex-start",marginTop: "9rem", gap: "2rem"}}>
            <ProductListComponent />
            <ViewReceiptComponent OpenReceipt={OpenReceiptSum}></ViewReceiptComponent>
        </div>
       {isOpen && <ReceiptPopup OpenReceiptSummary={OpenReceiptSum}></ReceiptPopup>}
        
        </>
        
    );
}

export default PurchasePage;