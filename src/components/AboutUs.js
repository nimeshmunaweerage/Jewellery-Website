import "./AboutUsStyles.css";
import staff from "../assects/about_staff.png";

function AboutUs(){
    return(
        <div className="about-container">
            <h1>Who We Are</h1>
            <p className="p">NLM Jewellers, the ‘Monarch of the Gold World’, hails from Sri Lanka – the land known as the Island of Gems.
                 With a range of dazzling gemstones found in Sri Lanka, the brand speaks volumes of bold artistry.
                  This heritage establishment, since its inception in 2024, was established by the late M.N. Lakshan.
                   It has produced several uniquely attractive jewellery using rare Sri Lankan gemstones, catering to the
                    evolving requirements of generation upon generation of Sri Lankans.</p>
                    
            <center><img src={staff}></img></center>
            
            <br/>
            <p className="p">NLM Jewellers counts over nine decades of successful enterprise as one of Sri Lanka’s most accomplished entities
                 in the gold jewellery industry. Throughout its journey of delivering innovative designs, the Company has
                  handcrafted immaculate works of some of the best jewellery that are renowned locally and around the world
                   with a loyal and growing clientele. The vast range of iconic jewellery available at NLM Jewellers include
                    men’s, women’s, and children’s jewellery.  </p>
            
            <p className="p">The company earns the rich legacy of a strong brand name and trust built over the years providing a variety of
                 bespoke services for customers who desire exquisite adornments for their special day or to celebrate extraordinary
                  achievements.  </p>
                    
            <h1>Our Vission</h1>
            <p className="p">NLM Jewellers' vision is to be the leading and most respected jeweler in Sri Lanka, we strive to do so by
                 maintaining unparalleled quality matched with a devotion to expanding our product catalog as well as our
                  market share.</p>
      
            <h1>Our Mission</h1>
            <p className="p">NLM Jewellers’ has always followed the quality standards when we make our jewellery, which is why our company's
                 mission is to plan to achieve this through the improvement of quality in the range of products and growth of
                  our market share through innovation and benchmarking with world-class organizations.</p>
      
       
       
        </div>
    )
}

export default AboutUs;