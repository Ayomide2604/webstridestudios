
export default function About() {
  return (
    <section className="container pt-5 mt-2 mt-md-4 mt-lg-5">
  <div className="row pt-xl-3">
    <div className="col-md-5 text-center text-md-start pb-5">
      <h1 className="mb-4">Web Development That Drives Results</h1>
      <p className="fs-lg pb-lg-3 mb-4">
        Edmonton's premier web development company delivering custom websites that convert. Our expert team builds powerful digital solutions for businesses across Canada.
      </p>
      <p className="fs-lg pb-lg-3 mb-4">
        We combine cutting-edge technology with strategic design to create websites that elevate your brand and grow your business.
      </p>
      <a href="/contact" className="btn btn-primary shadow-primary btn-lg">
        Start Your Project
      </a>
      
    </div>
    <div className="col-xl-6 col-md-7 offset-xl-1 pb-4 pb-sm-3 pb-lg-0 mb-4 mb-sm-5 mb-lg-0">
      <img
        src="assets/img/about_02.jpg"
        className="rounded-3 shadow-sm"
        alt="Webstride Studios - Edmonton Web Development Company"
      />
    </div>
  </div>
</section>

  )
}
