
import img1 from "../src/assets/happy-customer/home1.png"
import img2 from "../src/assets/happy-customer/trophy1.png"
import img3 from "../src/assets/happy-customer/emoticon-happy1.png"
import img4 from "../src/assets/happy-customer/crown1.png"

const HappyCustomer = () => {
  return (
    <>
    <section className="happy-customer">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="happy-customer-card h-c-1" >
                        <img src={img1} alt="" />
                        <h3 className="happy-customer-tit">
                            10.5k
                        </h3>
                        <p>Premium Property</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="happy-customer-card h-c-2" >
                        <img src={img2} alt="" />
                        <h3 className="happy-customer-tit">
                        8600+
                        </h3>

                        <p>Happy Customer</p>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="happy-customer-card h-c-3">
                        <img src={img3} alt="" />
                        <h3 className="happy-customer-tit">
                        1200
                        </h3>

                        <p>Awward Winning</p>

                    </div>
                </div>
                <div className="col-md-3">
                    <div className="happy-customer-card h-c-4">
                        <img src={img4} alt="" />
                        <h3 className="happy-customer-tit">
                        750
                        </h3>

                        <p>Years Experience</p>

                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HappyCustomer