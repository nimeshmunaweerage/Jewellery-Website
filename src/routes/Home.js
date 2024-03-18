import Destination from "../components/Destination";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Bestsell from "../components/Bestsell";
import Footer from "../components/Footer";
import '../routes/Service';

function Home (){
    return(
        <>
        <Navbar/>
        <Hero
            cName="hero"
            heroImg="https://img.freepik.com/premium-photo/jewelry-display-store-generative-ai_220873-27329.jpg?w=996"
            title="Order your jewelery"
            buttonText="Order Now"
            url='/jewellery'
            btnClass="show"
        />

        <Destination/>
        <Bestsell/>
        <Footer/>
        </>
    )
}

export default Home;