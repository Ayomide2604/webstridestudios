export default function PortfolioHero() {
  return (
    <section className="container py-5 my-2 my-md-4 my-lg-5">
      <div className="text-center">
        <h1 className="display-4 mb-4">Our Portfolio</h1>
        <p className="fs-lg text-muted pb-lg-3 mb-4">
          Explore our latest projects and see how we've helped Edmonton businesses transform their digital presence. From custom websites to comprehensive digital solutions, we deliver results that make a difference.
        </p>
        <p className="fs-lg text-muted mb-4">
          Each project showcases our commitment to excellence, innovation, and client success. We're proud of the work we do and the impact it has on our clients' businesses.
        </p>
        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
          <a href="#projects" className="btn btn-primary shadow-primary btn-lg">
            View Projects
          </a>
          <a href="/contact" className="btn btn-outline-secondary btn-lg">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
