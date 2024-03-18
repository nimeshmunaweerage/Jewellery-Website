import "./DestinationStyles.css";
import AddData from "../components/DestinationData";
import img1 from "../assects/items/img1.png";
import img2 from "../assects/items/img2.png";
import img3 from "../assects/items/img3.jpg";

function Destination(){
    return(
        <div className="add">
            <div className="addcard">
                <AddData
                    image={img1}
                    heading= "MONARCH OF THE GOLD WORLD"
                    text= "Raja Jewellers counts over nine decades of successful enterprise as one of Sri Lanka’s most accomplished entities in the gold jewellery industry."
                />

                <AddData
                    image={img2}
                    heading= "AWARDS"
                    text= "Presidential and National business excellence award winner"
                />

                <AddData
                    image={img3}
                    heading= "FAST AND SECURE SHIPPING"
                    text= "Fully secured online payment facility, order management process and International shipping"
                />
                
            </div>
        </div>
    );
}

export default Destination;