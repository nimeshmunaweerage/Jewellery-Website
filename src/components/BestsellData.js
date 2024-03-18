import "./BestsellStyles.css";

function BestsellData(props){
    return(
        <div className="s-card">
            <div className="s-image">
                <img src={props.image} alt="image"></img>
            </div>
            <font size="4"><b>{props.heading}</b></font>
            <p>{props.price}</p>

                <button className="but" type="text">Add to cart</button>
        </div>
    );
}

export default BestsellData;