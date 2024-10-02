import BlogOatherImg1 from "../src/assets/Blog/blog-oather-img1.png"
import BlogOatherImg2 from "../src/assets/Blog/blog-oather-img2.png"
import BlogOatherImg3 from "../src/assets/Blog/blog-oather-img3.png"
import Profile from "../src/assets/Blog/Photo.png"



const OurBlog = () => {
  return (
    <>
    <section className="blog-sec">

    <h3 className="blog-sec-tit">
           Our Exclusive Agents
           </h3>
      <div className="container">
        <div className="row justify-content-center">
           <div className="col-lg-4 col-md-6">
            <div className="blog-cards">
              <div className="blog-card-img">
                <img src={BlogOatherImg1} alt="" />
              </div>

              <div className="blog-cards-content">
              <div className="likesndcomments">
                <span className="likes"><b>2,729</b> Like</span>
                <span className="cmments"><b>273</b> Comments</span>
              </div>

              <p>Mauris ullamcorper tortor sed purus in fermentum efficitur est dictu.</p>

              <div className="blog-oather">
                <div className="blog-oather-img">
                  <img src={Profile} alt="" />
                </div>
                <div className="blog-oather-content">
                  <div className="blog-oather-content-tit">Eleanor Pena</div>
                  <div className="blog-oather-date">
                    <span>5 min read</span>
                    <span>January 20, 2024</span>
                  </div>
                </div>
                
              </div>
              </div>
            </div>
           </div>
           <div className="col-lg-4 col-md-6">
            <div className="blog-cards">
              <div className="blog-card-img">
                <img src={BlogOatherImg2} alt="" />
              </div>

              <div className="blog-cards-content">
              <div className="likesndcomments">
                <span className="likes"><b>2,729</b> Like</span>
                <span className="cmments"><b>273</b> Comments</span>
              </div>

              <p>Mauris ullamcorper tortor sed purus in fermentum efficitur est dictu.</p>

              <div className="blog-oather">
                <div className="blog-oather-img">
                  <img src={Profile} alt="" />
                </div>
                <div className="blog-oather-content">
                  <div className="blog-oather-content-tit">Eleanor Pena</div>
                  <div className="blog-oather-date">
                    <span>5 min read</span>
                    <span>January 20, 2024</span>
                  </div>
                </div>
                
              </div>
              </div>
            </div>
           </div>

           <div className="col-lg-4 col-md-6">
            <div className="blog-cards">
              <div className="blog-card-img">
                <img src={BlogOatherImg3} alt="" />
              </div>

              <div className="blog-cards-content">
              <div className="likesndcomments">
                <span className="likes"><b>2,729</b> Like</span>
                <span className="cmments"><b>273</b> Comments</span>
              </div>

              <p>Mauris ullamcorper tortor sed purus in fermentum efficitur est dictu.</p>

              <div className="blog-oather">
                <div className="blog-oather-img">
                  <img src={Profile} alt="" />
                </div>
                <div className="blog-oather-content">
                  <div className="blog-oather-content-tit">Eleanor Pena</div>
                  <div className="blog-oather-date">
                    <span>5 min read</span>
                    <span>January 20, 2024</span>
                  </div>
                </div>
                
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

export default OurBlog