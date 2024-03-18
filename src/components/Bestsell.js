import "./BestsellStyles.css";
import SellData from "../components/BestsellData";
import Sell1 from "../assects/items/love u pendant.jpg";
import Sell2 from "../assects/items/My Tiny Heart Gold Earrings.jpg";
import Sell3 from "../assects/items/Diamond Dainty Ring.jpg";

function Sell(){
    return(
        <div className="sell">
            <h1>Best Selling</h1>
            <p>Browse our website for the hottest items now</p>
            <div className="sellc">
                <SellData
                    image={Sell1}
                    heading= "Love U Pendant"
                    price= "LKR 67,918.00"
                />

                <SellData
                    image={Sell2}
                    heading= "My Tiny Heart Gold Earrings"
                    price= "LKR 51,023.00"
                />

                <SellData
                    image={Sell3}
                    heading= "Diamond Dainty Ring"
                    price= "LKR 87,560.00"
                />
                
            </div>
        </div>
    );
}

export default Sell;