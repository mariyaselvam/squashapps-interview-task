import { useEffect } from "react";
import img1 from "../src/assets/happy-customer/home1.png";
import img2 from "../src/assets/happy-customer/trophy1.png";
import img3 from "../src/assets/happy-customer/emoticon-happy1.png";
import img4 from "../src/assets/happy-customer/crown1.png";

const HappyCustomer = () => {

    useEffect(() => {
        const counters = document.querySelectorAll('.value');
        const speed = 80;

        const animateCounters = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const value = +counter.getAttribute('akhi');
                    const incrementCounter = () => {
                        const currentValue = +counter.innerText;
                        const increment = value / speed;
                        
                        if (currentValue < value) {
                            counter.innerText = Math.ceil(currentValue + increment);
                            setTimeout(incrementCounter, 30); 
                        } else {
                            counter.innerText = value;
                        }
                    };
                    incrementCounter();
                    observer.unobserve(counter); 
                }
            });
        };

        const observer = new IntersectionObserver(animateCounters, {
            threshold: 0.5, 
        });

        counters.forEach(counter => {
            observer.observe(counter); 
        });
        
        return () => {
            counters.forEach(counter => observer.unobserve(counter));
        };
    }, []);

    return (
        <>
        <section className="happy-customer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="happy-customer-card h-c-1" >
                            <img src={img1} alt="" />
                            <div className="happy-customer-tit-warper"> 
                            <h3 className="happy-customer-tit value" akhi="10.5">
                                
                            </h3><span>K</span>
                            </div>
                            <p>Premium Property</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="happy-customer-card h-c-2" >
                            <img src={img2} alt="" />
                            <div className="happy-customer-tit-warper"> 
                            <h3 className="happy-customer-tit value" akhi="8600">
                            0
                            </h3><span>+</span>
                            </div>
                            
                            <p>Happy Customer</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="happy-customer-card h-c-3">
                            <img src={img3} alt="" />
                            <h3 className="happy-customer-tit value" akhi="1200">
                            0
                            </h3>
                            <p>Award Winning</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="happy-customer-card h-c-4">
                            <img src={img4} alt="" />
                            <h3 className="happy-customer-tit value" akhi="750">
                            0
                            </h3>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default HappyCustomer;
