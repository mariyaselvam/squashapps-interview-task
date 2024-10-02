import Customer from "../src/assets/landing-sec/Customer.png"
import NewListing from "../src/assets/landing-sec/New-Listing.png"
import Profi1 from "../src/assets/landing-sec/profi-1.png"
import Profi2 from "../src/assets/landing-sec/profi-2.png"
import Profi3 from "../src/assets/landing-sec/profi-3.png"
import Profi4 from "../src/assets/landing-sec/profi-4.png"
import Profi5 from "../src/assets/landing-sec/profi-5.png"
import Profi6 from "../src/assets/landing-sec/profi-6.png"
import Profi7 from "../src/assets/landing-sec/profi-7.png"

const LandingSec = () => {
  return (
    <>
     <section className="landing-page-sec">
        <div className="container">
            <div className="landing-sec-row">
                <div className="landing-sec-tit-nd-para-warp">
                    <h1>
                    Find your dream home
                    </h1>
                    <p>
                    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                    </p>
                  
                   <div className="costamur-card">
                      <div className="costamur-card-1">
                      <div className="costamur-card-1-imgs">
                         <img src={Profi1} alt="" />
                         <img src={Profi2} alt="" />
                         <img src={Profi3} alt="" />
                         <img src={Profi4} alt="" />
                         <img src={Profi5} alt="" />
                         <img src={Profi6} alt="" />
                      </div>
                      <div className="costamur-card-1-cont">
                      72k+ Happy 
                      Customers
                      </div>
                      </div>
                      <div className="costamur-card-2">
                     <div className="costamur-card-2-imgs">
                     <img src={Profi7} alt="" />
                      </div>
                      <div className="costamur-card-2-cont">
                      200+ New 
                      Listings Everyday!
                      </div>
                      </div>
                      
                   </div>

                </div>

                <div className="landing-form-card">
                    <div className="landing-from-head">
                        <span>For Sale</span>
                        <span>For Rent</span>
                    </div>
                   <div className="landing-from-body">
                    <input type="text" className="New-York" placeholder="New York, San Francisco, etc" />

                    <select name="" id="" className="Select-Property">
                        <option value="">Select Property Type</option>
                    </select>

                    <select name="" id="" className="Select-Rooms">
                        <option value="">Select Rooms</option>
                    </select>


                   </div>

                   <a href="" className="form-get-start"> 
                   Search
                   </a>

                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default LandingSec