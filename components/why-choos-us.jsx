import React from 'react'
import service from "../src/assets/why-choos-us/24-7service.png"
import insurance from "../src/assets/why-choos-us/insurance.png"
import primeLocation from "../src/assets/why-choos-us/prime-location.png"
import serviceEngineers from "../src/assets/why-choos-us/service-engineers.png"

const whyChoosUs = () => {
  return (
    <>
      <section className="why-choose-us-sec">
        <div className="container-fluid">
            <h2 className='why-choos-us-main-tit'> 
            Why choose us
            </h2>
            <div className="row">
               <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="why-chos-us-inner-card">
                    <div className="why-chos-us-logo">
                        <img src={service} alt="" />
                    </div>
                    <h4 className="why-chos-us-tit">
                    24/7 Service
                    </h4>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum. ortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.
                    </p>
                </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="why-chos-us-inner-card">
                    <div className="why-chos-us-logo">
                        <img src={insurance} alt="" />
                    </div>
                    <h4 className="why-chos-us-tit">
                    Insurance
                    </h4>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum. ortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.
                    </p>
                </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="why-chos-us-inner-card">
                    <div className="why-chos-us-logo">
                        <img src={primeLocation} alt="" />
                    </div>
                    <h4 className="why-chos-us-tit">
                    Prime Location
                    </h4>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum. ortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.
                    </p>
                </div>
               </div>
               <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="why-chos-us-inner-card">
                    <div className="why-chos-us-logo">
                        <img src={serviceEngineers} alt="" />
                    </div>
                    <h4 className="why-chos-us-tit">
                    Service engineers
                    </h4>

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipis cing elit. Nullam id arcu tortor. Sed eget sit ame egestas, cursus felis quis, vestibulum. ortor. Sed eget sit ame egestas, cursus felis quis, vestibulum.
                    </p>
                </div>
               </div>
            </div>
        </div>

        <a href="#" className="why-chooss-us-btn">
        See All
        </a>
      </section>
    </>
  )
}

export default whyChoosUs