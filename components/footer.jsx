import Logo from "../src/assets/footer/Logo2.png"
import SocialMedia1 from "../src/assets/footer/Social-Media1.svg"
import SocialMedia2 from "../src/assets/footer/Social-Media2.svg"
import SocialMedia3 from "../src/assets/footer/Social-Media3.svg"
import SocialMedia4 from "../src/assets/footer/Social-Media4.svg"
import SocialMedia5 from "../src/assets/footer/Social-Media5.svg"


const Footer = () => {
  return (
    <>
    <section className="footer-sec">
      <div className="container">
        <div className="footer-row">
          <div className="footer-cont-nd-logo">
            <div className="footer-log">
              <img src={Logo} alt="" />
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

            <div className="footer-social-media">
            <img src={SocialMedia1} alt="" />
            <img src={SocialMedia2} alt="" />
            <img src={SocialMedia3} alt="" />
            <img src={SocialMedia4} alt="" />
            <img src={SocialMedia5} alt="" />
            </div>
          </div>

          <div className="footer-quick-lins">
           <h5 className="quick-links-tit">
           Quick Links
           </h5>

           <ul className="quick-likes">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blogs & Article</a></li>
            <li><a href="#">Terms And Condition</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
           </ul>
          </div>

          <div className="footer-news-letter">
            <h5 className="footer-news-letter-tit">
            News Letter
            </h5>

            <input className="footer-news-letter-input" type="text" placeholder="Enter Email Address" />
            <a className="footer-news-letter-btn" href="">
            Subscribe
            </a>

            <p>
            We never span you!
            </p>

          </div>

          <div className="footer-contact">

          <h5 className="footer-contact-tit">
          Contact
            </h5>
            <span className="footeraddre">121 King St, Melbourne den 3000, Australia</span>
            <span className="footer-email">Info@example.com</span>
            <span className="footer-num">+91 999999999</span>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Footer