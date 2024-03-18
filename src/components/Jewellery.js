import "./JewelleryStyles.css";
import SellData from "../components/JewelleryData";
import Sell1 from "../assects/items/love u pendant.jpg";
import Sell2 from "../assects/items/My Tiny Heart Gold Earrings.jpg";
import Sell3 from "../assects/items/Diamond Dainty Ring.jpg";
import Sell4 from "../assects/items/grateful-diamond-studded-jewellery-set.jpg";
import Sell5 from "../assects/items/sparkling-swirl-gold-pendant.jpg";
import Sell6 from "../assects/items/elegant-with-mesh-gold-bracelet.jpg";


function Jewellery(){
    return(
        <>
        <div class="search-container">
            <input type="text" placeholder="Search..."></input>
            <button type="submit">Search</button>

                <a href="" className="cart">
                    <div className="cart-div">
                        <i class="fas fa-shopping-cart"/>
                    </div>
                </a>
            

        </div>


        <div className="sell">

            <div className="sellcard">
                <SellData
                    image={Sell1}
                    heading= "Love  Pendant"
                    price= "LKR 67,918.00"
                />

                <SellData
                    image={Sell4}
                    heading= "Grateful Diamond Studded Sewellery Set"
                    price= "LKR 221,760.00"
                />
                
                <SellData
                    image={Sell3}
                    heading= "Diamond Dainty Ring"
                    price= "LKR 87,560.00"
                />

                <SellData
                    image={Sell2}
                    heading= "My Tiny Heart Gold Earrings"
                    price= "LKR 51,023.00"
                />

                <SellData
                    image={Sell5}
                    heading= "Sparkling Swirl Gold Pendant"
                    price= "LKR 51,023.00"
                />

                <SellData
                    image={Sell6}
                    heading= "Elegant with Mesh gold bracelet"
                    price= "LKR 131,822.00"
                />
                
            </div>
        </div>
        </>
    );
}

export default Jewellery;