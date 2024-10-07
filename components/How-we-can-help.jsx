import img1 from "../src/assets/How-we-can-help/House.png"
import img2 from "../src/assets/How-we-can-help/Apartment.png"
import img3 from "../src/assets/How-we-can-help/Beach-House.png"
import img4 from "../src/assets/How-we-can-help/Cabins.png"
import img5 from "../src/assets/How-we-can-help/Tree-House.png"
import img6 from "../src/assets/How-we-can-help/Pool-House.png"
import img7 from "../src/assets/How-we-can-help/Lakefront.png"
import img8 from "../src/assets/How-we-can-help/Farm-House.png"
import howWeCanHelpCardimg1 from "../src/assets/How-we-can-help/how-we-can-help-card-img-1.png"
import howWeCanHelpCardimg2 from "../src/assets/How-we-can-help/howWeCanHelpCardimg2.png"
import howWeCanHelpCardimg3 from "../src/assets/How-we-can-help/howWeCanHelpCardimg3.png"
import howWeCanHelpCardimg4 from "../src/assets/How-we-can-help/howWeCanHelpCardimg4.png"
import howWeCanHelpCardimg5 from "../src/assets/How-we-can-help/howWeCanHelpCardimg5.png"
import howWeCanHelpCardimg6 from "../src/assets/How-we-can-help/howWeCanHelpCardimg6.png"
import howWeCanHelpCardimg7 from "../src/assets/How-we-can-help/howWeCanHelpCardimg7.png"
import howWeCanHelpCardimg8 from "../src/assets/How-we-can-help/howWeCanHelpCardimg8.png"

import ListOfSevices1 from "../src/assets/How-we-can-help/list-of-sevices-1.svg"
import ListOfSevices2 from "../src/assets/How-we-can-help/list-of-sevices-2.svg"
import ListOfSevices3 from "../src/assets/How-we-can-help/list-of-sevices-3.svg"
import ListOfSevices4 from "../src/assets/How-we-can-help/list-of-sevices-4.svg"
import ListOfSevices5 from "../src/assets/How-we-can-help/list-of-sevices-5.svg"
import ListOfSevices6 from "../src/assets/How-we-can-help/list-of-sevices-6.svg"
import ListOfSevices7 from "../src/assets/How-we-can-help/list-of-sevices-7.svg"
import ListOfSevices8 from "../src/assets/How-we-can-help/list-of-sevices-8.svg"

const HowWeCanHelp = () => {
  return (
   <>
   <section className="how-we-can-help-sec">
    <h3 className="how-we-can-help-tit"  >
    How we can help?
    </h3>

     <div className="list-of-sevices-topcard nav nav-tabs" id="nav-tab" role="tablist">
        <div className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
            <img src={ListOfSevices1} alt="" />
            <p>House</p>
        </div>
        <div className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
            <img src={ListOfSevices2} alt="" />
            <p>Apartment</p>
        </div>
        <div className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
            <img src={ListOfSevices3} alt="" />
            <p>Beach House</p>
        </div>
        <div className="nav-link" id="nav-cabins-tab" data-bs-toggle="tab" data-bs-target="#nav-cabins" type="button" role="tab" aria-controls="nav-cabins" aria-selected="false">
            <img src={ListOfSevices4} alt="" />
            <p>Cabins</p>
        </div>
        <div className="nav-link" id="nav-treehouse-tab" data-bs-toggle="tab" data-bs-target="#nav-treehouse" type="button" role="tab" aria-controls="nav-treehouse" aria-selected="false">
            <img src={ListOfSevices5} alt="" />
            <p>Tree House</p>
        </div>
        <div className="nav-link" id="nav-poolhouse-tab" data-bs-toggle="tab" data-bs-target="#nav-poolhouse" type="button" role="tab" aria-controls="nav-poolhouse" aria-selected="false">
            <img src={ListOfSevices6} alt="" />
            <p>Pool House</p>
        </div>
        <div className="nav-link" id="nav-lakefront-tab" data-bs-toggle="tab" data-bs-target="#nav-lakefront" type="button" role="tab" aria-controls="nav-lakefront" aria-selected="false">
            <img src={ListOfSevices7} alt="" />
            <p>Lakefront</p>
        </div>
        <div className="nav-link" id="nav-farmhouse-tab" data-bs-toggle="tab" data-bs-target="#nav-farmhouse" type="button" role="tab" aria-controls="nav-farmhouse" aria-selected="false">
            <img src={ListOfSevices8} alt="" />
            <p>Farm House</p>
        </div>

     </div>
      <div className="container tab-content" id="nav-tabContent">
         <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
         <div className="row justify-content-center ">
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg1} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg2} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg3} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg4} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg5} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg6} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg7} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg8} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
         </div>
         </div>
         <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
         <div className="row justify-content-center ">
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg1} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg2} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg3} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg4} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg5} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg6} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg7} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg8} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
         </div>
         </div>
         <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
         <div className="row justify-content-center ">
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg1} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg2} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg3} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg4} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg5} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg6} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg7} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg8} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
         </div>
         </div>
         <div className="tab-pane fade" id="nav-cabins" role="tabpanel" aria-labelledby="nav-cabins-tab">
         <div className="row justify-content-center ">
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg1} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg2} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg3} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg4} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg5} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg6} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg7} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg8} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
         </div>
         </div>
         <div className="tab-pane fade" id="nav-treehouse" role="tabpanel" aria-labelledby="nav-treehouse-tab">
         <div className="row justify-content-center ">
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg1} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg2} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg3} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg4} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg5} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg6} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg7} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg8} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
         </div>
         </div>
         <div className="tab-pane fade" id="nav-poolhouse" role="tabpanel" aria-labelledby="nav-poolhouse-tab">
         <div className="row justify-content-center ">
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg1} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg2} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg3} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg4} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg5} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg6} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg7} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg8} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
         </div>
         </div>
         <div className="tab-pane fade" id="nav-lakefront" role="tabpanel" aria-labelledby="nav-lakefront-tab">
         <div className="row justify-content-center ">
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg1} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg2} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg3} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg4} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg5} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg6} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg7} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg8} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
         </div>
         </div>
         <div className="tab-pane fade" id="nav-farmhouse" role="tabpanel" aria-labelledby="nav-farmhouse-tab">
         <div className="row justify-content-center ">
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg1} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg2} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg3} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg4} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg5} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg6} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg7} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
            <div className="col-lg-3 col-md-4">
                <div className="how-we-can-help-sec-card">
                <div className="how-we-can-help-card-img">
                    <img src={howWeCanHelpCardimg8} alt="" />
                </div>

                <span className="card-price">
                $1,199,000
                </span>

                <div className="room-options">
                    <div className="bed">4 bed</div>
                    <div className="bath">2 bath</div>
                    <div className="sqft">1,500 sqft</div>
                </div>

                <div className="how-we-can-help-addresss">
                2464 Royal Ln. Mesa, New Jersey 45463
                </div>


                </div>
            </div>
         </div>
         </div>
      </div>
   </section>
   </>
  )
}

export default HowWeCanHelp