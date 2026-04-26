export default function ServicesHero() {
  return (
    <section className="container py-5 my-2 my-md-4 my-lg-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-4 mb-4">Our Services</h1>
          <p className="fs-lg text-muted pb-lg-3 mb-4">
            We help Edmonton businesses grow with expert web development, design, and SEO services. Transform your digital presence with solutions that drive real results and measurable business growth.
          </p>
          <p className="fs-lg text-muted mb-4">
            From custom websites to comprehensive digital marketing strategies, our expert team delivers cutting-edge solutions tailored to your unique business needs. Let us help you dominate your online presence.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <a href="#services-list" className="btn btn-primary shadow-primary btn-lg">
              Explore Services
            </a>
            <a href="/contact" className="btn btn-outline-secondary btn-lg">
              Get Free Consultation
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src="assets/img/services_01.jpg"
            className="rounded-3 shadow-sm w-100"
            alt="Web Development Services"
          />
        </div>
      </div>
    </section>
  )
}
