import AbtUsMainImg from "../src/assets/about-us/about-us-main.png"


const AboutUs = () => {
  return (
    <>
     <section className="about-us-sec">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="about-us-contant-card">
                        <span className="about-us-mini-tit">
                        ABOUT US
                        </span>

                        <h3 className="about-us-main-tit">
                        42+ years of helping you find the right Propertys   
                        </h3>

                        <p>
                        Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto
                        </p>

                        <p>
                        Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>

                        <div className="expreance-projects-previus">
                        <div className="row">
                            <div className="col-md-4">
                                <span className="abt-red-mini-tit">Previous projects</span>
                                <div className="abt-div-mini-tit">34+</div>
                            </div>
                            <div className="col-md-4">
                                <span className="abt-red-mini-tit">years experience</span>
                                <div className="abt-div-mini-tit">20y</div>
                            </div>
                            <div className="col-md-4">
                                <span className="abt-red-mini-tit">Ongoing projects</span>
                                <div className="abt-div-mini-tit">12</div>
                            </div>
                        </div>
                    </div>

                    <a href="" className="abt-btn">Learn More</a>
                    </div>

                    
                </div>
                <div className="col-md-6">
                    <div className="abt-us-main-img">
                        {/* <img src={AbtUsMainImg} alt="" />    */}
                    </div>
                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default AboutUs