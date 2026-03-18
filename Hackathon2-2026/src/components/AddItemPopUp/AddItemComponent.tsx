import './additem.css';
import {useState} from 'react'

interface Props
{
    itemPopupHide: () => void;
}

function AddItemComponent({itemPopupHide}: Props)
{

    const [itemName, setItemName] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [modelName, setModelName] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const [price, setPrice] = useState<number>(0);


    const SaveItem = () =>
    {
        console.log(itemName, category, modelName, quantity, price);
        itemPopupHide();
        ClearAllData();
    }

    const CancelSaveItem = () =>
    {
        itemPopupHide();
        ClearAllData();
    }

    const ClearAllData = () =>
    {
        setItemName('');
        setCategory('');
        setModelName('');
        setQuantity(0);
        setPrice(0);
    }

    return(
        <div className='darken-bg-container'>
            <div className='additem-card-container'>
                <p className='additem-popup-title'> 📦 New Item</p>
                <div className='line-divider'></div>
                <p className='additem-popup-subtitles' > Item Name</p>
                <input value={itemName} onChange={(e) => setItemName(e.target.value)} className='additem-inputs'></input>
                
                

                <div className='additem-dual-input-container'>
                    <div className='additem-input-container'>
                        <p className='additem-popup-subtitles'> Category</p>
                        <input value={category} onChange={(e) => setCategory(e.target.value)} className='additem-inputs'></input>
                    </div>

                    <div className='additem-input-container'>
                        <p className='additem-popup-subtitles'> Model</p>
                        <input value={modelName} onChange={(e) => setModelName(e.target.value)} className='additem-inputs'></input>
                    </div>
                </div>



                <div className='additem-dual-input-container'>
                    <div className='additem-input-container'>
                        <p className='additem-popup-subtitles'> Quantity</p>
                        <input type='number' min={1} value={quantity} onChange={(e) => setQuantity(e.target.valueAsNumber)} className='additem-inputs'></input>
                    </div>

                    <div className='additem-input-container'>
                        <p className='additem-popup-subtitles'> Price ($)</p>
                        <input type='number'min ={1} value={price} onChange={(e) => setPrice(e.target.valueAsNumber)} className='additem-inputs'></input>
                    </div>
                </div>

                <p className='additem-popup-subtitles'>Notes</p>
                <textarea className='additem-notes-input'></textarea>

                <div className='additem-optionbutton-container'>
                    <button onClick={CancelSaveItem} className='additem-button-cancel'>Cancel</button>
                    <button  onClick={SaveItem} className='additem-button-save'>Save Item    </button>
                </div>

            </div>
        </div>
    )
}

export default AddItemComponent;