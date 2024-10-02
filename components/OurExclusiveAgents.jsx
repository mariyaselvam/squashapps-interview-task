
import OurExclusive1 from "../src/assets/Our-Exclusive/Our-Exclusive1.png"
import OurExclusive2 from "../src/assets/Our-Exclusive/Our-Exclusive2.png"
import OurExclusive3 from "../src/assets/Our-Exclusive/Our-Exclusive3.png"
import OurExclusive4 from "../src/assets/Our-Exclusive/Our-Exclusive4.png"

import SocialMedia1 from "../src/assets/Our-Exclusive/Social-Media1.svg"
import SocialMedia2 from "../src/assets/Our-Exclusive/Social-Media2.svg"
import SocialMedia3 from "../src/assets/Our-Exclusive/Social-Media3.svg"
import SocialMedia4 from "../src/assets/Our-Exclusive/Social-Media4.svg"



const OurExclusiveAgents = () => {
  return (
    <>
    <section className="Our-Exclusive-Agents-sec">

           <h3 className="Our-Exclusive-Agents-tit">
           Our Exclusive Agents
           </h3>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="Our-Exclusive-Agents-card">
                        <div className="Our-Exclusive-Agents-card-img">
                            <img src={OurExclusive1} alt="" />

                            <div className="Our-Exclusive-social-prof">
                                <img src={SocialMedia1} alt="" />
                                <img src={SocialMedia2} alt="" />
                                <img src={SocialMedia3} alt="" />
                                <img src={SocialMedia4} alt="" />
                            </div>
                        </div>

                        <h5 className="Our-Exclusive-Agents-name">
                        Marvin McKinney
                        </h5>

                        <p>
                        Product Designer
                        </p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="Our-Exclusive-Agents-card">
                        <div className="Our-Exclusive-Agents-card-img">
                            <img src={OurExclusive2} alt="" />

                            <div className="Our-Exclusive-social-prof">
                                <img src={SocialMedia1} alt="" />
                                <img src={SocialMedia2} alt="" />
                                <img src={SocialMedia3} alt="" />
                                <img src={SocialMedia4} alt="" />
                            </div>
                        </div>

                        <h5 className="Our-Exclusive-Agents-name">
                        Ronald Richards
                        </h5>

                        <p>
                        Web Designer
                        </p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="Our-Exclusive-Agents-card">
                        <div className="Our-Exclusive-Agents-card-img">
                            <img src={OurExclusive3} alt="" />

                            <div className="Our-Exclusive-social-prof">
                                <img src={SocialMedia1} alt="" />
                                <img src={SocialMedia2} alt="" />
                                <img src={SocialMedia3} alt="" />
                                <img src={SocialMedia4} alt="" />
                            </div>
                        </div>

                        <h5 className="Our-Exclusive-Agents-name">
                        Courtney Henry
                        </h5>

                        <p>
                        President of Sales
                        </p>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="Our-Exclusive-Agents-card">
                        <div className="Our-Exclusive-Agents-card-img">
                            <img src={OurExclusive4} alt="" />

                            <div className="Our-Exclusive-social-prof">
                                <img src={SocialMedia1} alt="" />
                                <img src={SocialMedia2} alt="" />
                                <img src={SocialMedia3} alt="" />
                                <img src={SocialMedia4} alt="" />
                            </div>
                        </div>

                        <h5 className="Our-Exclusive-Agents-name">
                        Guy Hawkins
                        </h5>

                        <p>
                        Web Designer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OurExclusiveAgents