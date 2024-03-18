import "./FooterStyles.css";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>Jewellers.lk</h1>
                    <p>Choose your favourite jewellery.</p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-behance-square"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter-square"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Contact Us</h4>
                    <a href="/">nimeshmlakshan@gmail.com</a>
                    <a href="/">+94 112 695458</a>
                    <a href="/">+94 115 586949</a>

                </div>
                <div>
                    <h4>Usefull Links</h4>
                    <a href="/">Gallery</a>
                    <a href="/">Quality Policy</a>
                    <a href="/">Coin Design</a>
                    <a href="/">Sitemap</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms and Services</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;