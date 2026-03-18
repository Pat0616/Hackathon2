import './receiptpopupdesign.css'

interface Props
{
    OpenReceiptSummary: () => void;
}

function ReceiptPopup({OpenReceiptSummary}: Props) {



    return (
        <div className="receiptpopup-wrapper">
            <div className="receiptpopup-container">
                <p className='receiptcheck'>✅</p>
                <h1>Order Complete!</h1>
                <p>Here's is your receipt summary.</p>

                <div className="receipt-details">

                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <p>Item 1: Widget A </p>
                        <p>$29.99</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <p>Item 2: Widget A </p>
                        <p>$29.99</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <p>Item 3: Widget A </p>
                        <p>$29.99</p>
                    </div>

                    <div className='div-divider'></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <p>Subtotal</p>
                        <p>$89.97</p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <p>Tax (0%): </p>
                        <p>$0.00</p>
                    </div>

                    <div className='div-divider'></div>

                    <div className="total-row" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <p>Total</p>
                        <p>$99.99</p>
                    </div>
                    
                </div>
                <button className="print-button" onClick={OpenReceiptSummary} >Okay</button>
            </div>
        </div>
    )
}

export default ReceiptPopup