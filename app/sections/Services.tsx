

export default function Services() {
  return (
    <section className="bg-secondary pb-md-2 pb-lg-5">
  <div
    className="d-none d-lg-block"
    style={{ marginTop: "-60px", paddingTop: 60 }}
  />
  <div className="container pb-4 pt-5">
    <h2 className="h1 text-center text-md-start mb-lg-4 pt-1 pt-md-4">
      Our Services
    </h2>
    <div className="row align-items-center pb-5 mb-lg-2">
      <div className="col-md-8 text-center text-md-start">
        <p className="fs-lg text-muted mb-md-0">
          We help Edmonton businesses grow with expert web development, design, and SEO services. Transform your digital presence with solutions that drive real results.
        </p>
      </div>
      <div className="col-md-4 d-flex justify-content-center justify-content-md-end">
        <a href="/services" className="btn btn-outline-primary btn-lg">
          View all services
        </a>
      </div>
    </div>
    <div className="row row-cols-1 row-cols-md-2">
      {/* Web Development */}
      <div className="col py-4 my-2 my-sm-3">
        <a
          href="/services"
          className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 me-xl-2"
        >
          <div className="card-body pt-3">
            <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
              <i className="bi bi-code-slash text-white d-block" style={{fontSize: '24px'}}></i>
            </div>
            <h2 className="h4 d-inline-flex align-items-center">
              Web Development
              <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2" />
            </h2>
            <p className="fs-sm text-body mb-0">
              Custom websites and web applications built with modern frameworks. We create responsive, high-performing sites that convert visitors into customers.
            </p>
          </div>
        </a>
      </div>
      {/* UI/UX Design */}
      <div className="col py-4 my-2 my-sm-3">
        <a
          href="/services"
          className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2"
        >
          <div className="card-body pt-3">
            <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
              <i className="bi bi-palette text-white d-block" style={{fontSize: '24px'}}></i>
            </div>
            <h2 className="h4 d-inline-flex align-items-center">
              UI/UX Design
              <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2" />
            </h2>
            <p className="fs-sm text-body mb-0">
              Beautiful, intuitive interfaces that delight users and drive conversions. We design user-centered experiences that make your brand stand out.
            </p>
          </div>
        </a>
      </div>
      {/* SEO Optimization */}
      <div className="col py-4 my-2 my-sm-3">
        <a
          href="/services"
          className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2"
        >
          <div className="card-body pt-3">
            <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
              <i className="bi bi-search text-white d-block" style={{fontSize: '24px'}}></i>
            </div>
            <h2 className="h4 d-inline-flex align-items-center">
              SEO Optimization
              <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2" />
            </h2>
            <p className="fs-sm text-body mb-0">
              Dominate search results and attract quality organic traffic. We optimize your website to rank higher and turn Google into your best salesperson.
            </p>
          </div>
        </a>
      </div>
      {/* Maintenance and Support */}
      <div className="col py-4 my-2 my-sm-3">
        <a
          href="/services"
          className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2"
        >
          <div className="card-body pt-3">
            <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
              <i className="bi bi-tools text-white d-block" style={{fontSize: '24px'}}></i>
            </div>
            <h2 className="h4 d-inline-flex align-items-center">
              Maintenance and Support
              <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2" />
            </h2>
            <p className="fs-sm text-body mb-0">
              Keep your website running smoothly with ongoing maintenance, security updates, and technical support. We ensure your digital presence stays secure and up-to-date.
            </p>
          </div>
        </a>
      </div>
      {/* Responsive Design */}
      <div className="col py-4 my-2 my-sm-3">
        <a
          href="/services"
          className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2"
        >
          <div className="card-body pt-3">
            <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
              <i className="bi bi-phone text-white d-block" style={{fontSize: '24px'}}></i>
            </div>
            <h2 className="h4 d-inline-flex align-items-center">
              Responsive Design
              <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2" />
            </h2>
            <p className="fs-sm text-body mb-0">
              Perfect experiences across all devices. Your website will look stunning and work flawlessly on desktop, tablet, and mobile.
            </p>
          </div>
        </a>
      </div>
      {/* Website Hosting */}
      <div className="col py-4 my-2 my-sm-3">
        <a
          href="/services"
          className="card card-hover h-100 border-0 shadow-sm text-decoration-none pt-5 px-sm-3 px-md-0 px-lg-3 pb-sm-3 pb-md-0 pb-lg-3 ms-xl-2"
        >
          <div className="card-body pt-3">
            <div className="d-inline-block bg-primary shadow-primary rounded-3 position-absolute top-0 translate-middle-y p-3">
              <i className="bi bi-server text-white d-block" style={{fontSize: '24px'}}></i>
            </div>
            <h2 className="h4 d-inline-flex align-items-center">
              Website Hosting
              <i className="bx bx-right-arrow-circle text-primary fs-3 ms-2" />
            </h2>
            <p className="fs-sm text-body mb-0">
              Fast, secure hosting solutions for your website. Reliable performance with 99.9% uptime and expert technical support.
            </p>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>

  )
}
