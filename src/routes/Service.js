import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ServiceImg from "../assects/Services.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Jewellery";


function Service(){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero-mid"
            heroImg={ServiceImg}
            title="Jewellery"

            btnClass="hide"
        />
        <Trip/>
        <Footer/>
        </>
    )
}

export default Service;