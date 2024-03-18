import "./JewelleryStyles.css";

function SellData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.image} alt="image"></img>
            </div>
            <font size="4"><b>{props.heading}</b></font>
            <p>{props.price}</p>

                <button className="but" type="text">Add to cart</button>

            
        </div>
    );
}

export default SellData;