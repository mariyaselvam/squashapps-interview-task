

import FindPropertybyCity1 from "../src/assets/find-property-by-city/find-property-by-city1.png"
import FindPropertybyCity2 from "../src/assets/find-property-by-city/find-property-by-city2.png"
import FindPropertybyCity3 from "../src/assets/find-property-by-city/find-property-by-city3.png"

import FindPropertybyCity4 from "../src/assets/find-property-by-city/find-property-by-city4.png"
import FindPropertybyCity5 from "../src/assets/find-property-by-city/find-property-by-city5.png"
import FindPropertybyCity6 from "../src/assets/find-property-by-city/find-property-by-city6.png"

import FindPropertybyCity7 from "../src/assets/find-property-by-city/find-property-by-city7.png"
import FindPropertybyCity8 from "../src/assets/find-property-by-city/find-property-by-city8.png"
import FindPropertybyCity9 from "../src/assets/find-property-by-city/find-property-by-city9.png"


const FindPropertyCity = () => {
  return (
    <>
    <section className="find-property-by-city-sec">
           <h3 className="find-property-by-city-tit">
           Find Property By City
           </h3>

        <div className="container">
            <div className="find-property-by-row-1">
            <div className="find-property-img">
                <img src={FindPropertybyCity1} alt="" />
                <span>New York</span>
            </div>
            <div className="find-property-img">
                <img src={FindPropertybyCity2} alt="" />
                <span>New York</span>
            </div>
            <div className="find-property-img">
                <img src={FindPropertybyCity3} alt="" />
                <span>New York</span>
            </div>
            </div>

            <div className="find-property-by-row-1">
            <div className="find-property-img">
                <img src={FindPropertybyCity4} alt="" />
                <span>New York</span>
            </div>
            <div className="find-property-img">
                <img src={FindPropertybyCity5} alt="" />
                <span>New York</span>
            </div>
            <div className="find-property-img">
                <img src={FindPropertybyCity6} alt="" />
                <span>New York</span>
            </div>
            </div>

            <div className="find-property-by-row-1">
            <div className="find-property-img">
                <img src={FindPropertybyCity7} alt="" />
                <span>New York</span>
            </div>
            <div className="find-property-img">
                <img src={FindPropertybyCity8} alt="" />
                <span>New York</span>
            </div>
            <div className="find-property-img">
                <img src={FindPropertybyCity9} alt="" />
                <span>New York</span>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default FindPropertyCity