
export default function HeroSection() {
  return (
   <section
  className="jarallax bg-dark py-xxl-5"
  data-jarallax=""
  data-speed="0.4"
  data-bs-theme="dark"
>
  <span className="position-absolute top-0 start-0 w-100 h-100 " />
  <div
    className="jarallax-img"
    style={{
      backgroundImage: "url(assets/img/hero/hero.jpg)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      objectFit: "contain"
    }}
  />
  <div className="position-relative text-center zindex-5 overflow-hidden pt-4 py-md-5">
    {/* Slider controls (Prev / next) */}
    <button
      type="button"
      id="hero-prev"
      className="btn btn-prev btn-icon btn-xl bg-transparent shadow-none position-absolute top-50 start-0 translate-middle-y d-none d-md-inline-flex ms-n3 ms-lg-2"
      aria-label="Previous"
    >
      <i className="bx bx-chevron-left fs-1" />
    </button>
    <button
      type="button"
      id="hero-next"
      className="btn btn-next btn-icon btn-xl bg-transparent shadow-none position-absolute top-50 end-0 translate-middle-y d-none d-md-inline-flex me-n3 me-lg-2"
      aria-label="Next"
    >
      <i className="bx bx-chevron-right fs-1" />
    </button>
    {/* Slider */}
    <div className="container text-center py-xl-5">
      <div className="row justify-content-center pt-lg-5">
        <div className="col-xl-8 col-lg-9 col-md-10 col-11">
          <div
            className="swiper pt-5 pb-4 py-md-5"
            data-swiper-options='{
            "effect": "fade",
            "speed": 500,
            "autoplay": {
              "delay": 5500,
              "disableOnInteraction": false
            },
            "pagination": {
              "el": ".swiper-pagination",
              "clickable": true
            },
            "navigation": {
              "prevEl": "#hero-prev",
              "nextEl": "#hero-next"
            }
          }'
          >
            <div className="swiper-wrapper">
              {/* Item */}
              <div className="swiper-slide">
                <h2 className="display-2 from-start mb-lg-4">
                  Digital Solutions That Grow Your Business
                </h2>
                <div className="from-end">
                  <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                    Based in Edmonton, serving businesses nationwide with custom websites that convert. We combine technical expertise with creative vision to deliver websites that drive measurable results.
                  </p>
                </div>
                <div className="scale-up delay-1">
                  <a href="/contact" className="btn btn-primary shadow-primary btn-lg">
                    Start project
                  </a>
                </div>
              </div>
              {/* Item */}
              <div className="swiper-slide">
                <h2 className="display-2 from-start mb-lg-4">
                  Custom Web Development & Design
                </h2>
                <div className="from-end">
                  <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                    From concept to deployment, we build powerful digital experiences with modern technologies including Web Development, UI/UX Design, and SEO Optimization that engage your audience.
                  </p>
                </div>
                <div className="scale-up delay-1">
                  <a href="/portfolio" className="btn btn-primary shadow-primary btn-lg">
                    View portfolio
                  </a>
                </div>
              </div>
              {/* Item */}
              <div className="swiper-slide">
                <h2 className="display-2 from-start mb-lg-4">
                  Complete Web Solutions for Your Business
                </h2>
                <div className="from-end">
                  <p className="fs-xl text-light opacity-70 pb-2 mb-lg-5">
                    We are a premier web development company proudly based in Edmonton, Canada, serving businesses across the entire country with personalized approach and commitment to excellence.
                  </p>
                </div>
                <div className="scale-up delay-1">
                  <a href="/services" className="btn btn-primary shadow-primary btn-lg">
                    Our services
                  </a>
                </div>
              </div>
            </div>
            {/* Pagination (bullets) */}
            <div className="swiper-pagination position-relative d-md-none pt-2 mt-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container d-flex flex-column flex-sm-row align-items-center justify-content-between position-relative zindex-5 pb-5">
    <div className="d-flex mb-4 mb-sm-0">
      <a
        href="mailto:info@webstridestudios.ca"
        className="btn btn-icon btn-secondary rounded-circle me-2"
        aria-label="Email"
      >
        <i className="bx bx-envelope" />
      </a>
      <a
        href="#"
        className="btn btn-icon btn-secondary btn-facebook rounded-circle me-2"
        aria-label="Facebook"
      >
        <i className="bx bxl-facebook" />
      </a>
      <a
        href="#"
        className="btn btn-icon btn-secondary btn-twitter rounded-circle me-2"
        aria-label="Twitter"
      >
        <i className="bx bxl-twitter" />
      </a>
      <a
        href="#"
        className="btn btn-icon btn-secondary btn-instagram rounded-circle me-2"
        aria-label="Instagram"
      >
        <i className="bx bxl-instagram" />
      </a>
    </div>
    {/* <a href="/portfolio" className="nav-link px-0 text-white">
      View our portfolio
      <i className="bx bx-right-arrow-circle fs-4 ms-2" />
    </a> */}
  </div>
</section>

  )
}
