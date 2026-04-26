export default function AboutHero() {
  return (
    <section className="container py-5 my-2 my-md-4 my-lg-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-4 mb-4">About Webstride Studios</h1>
          <p className="fs-lg text-muted pb-lg-3 mb-4">
            We are a dedicated team of passionate web developers, UI/UX designers, and digital marketing experts helping businesses of every size — from new startups to established companies — launch their digital projects with our cutting-edge solutions.
          </p>
          <p className="fs-lg text-muted mb-4">
            From our Edmonton headquarters, we serve clients across Canada with custom web development, stunning design, and results-driven SEO strategies. Our expert team combines technical excellence with creative vision to deliver websites that not only look amazing but drive measurable business growth.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <a href="/contact" className="btn btn-primary shadow-primary btn-lg">
              Start Your Project
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src="assets/img/about_02.jpg"
            className="rounded-3 shadow-sm w-100"
            alt="Webstride Studios Team"
          />
        </div>
      </div>
    </section>
  )
}
