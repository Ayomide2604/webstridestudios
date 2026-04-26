
export default function Features() {
  return (
    <section className="container py-5 my-2 my-md-4 my-lg-5">
  <h2 className="h1 text-center pt-1 pt-xl-2 mb-4">Why Choose Us?</h2>
  <p className="fs-lg text-muted text-center pb-4 mb-2 mb-lg-3">
    We deliver exceptional web experiences that drive results for Edmonton businesses. Our proven approach ensures your success online.
  </p>
  <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4 pb-xl-3">
    <div className="col text-center border-end">
      <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
        <i className="bi bi-lightning-charge text-primary" style={{fontSize: '24px'}}></i>
      </div>
      <h3 className="h5 mb-2 mb-lg-0">
        Fast turnaround times
      </h3>
    </div>
    <div className="col text-center border-end">
      <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
        <i className="bi bi-shield-check text-primary" style={{fontSize: '24px'}}></i>
      </div>
      <h3 className="h5 mb-2 mb-lg-0">SEO optimized websites</h3>
    </div>
    <div className="col text-center border-end">
      <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
        <i className="bi bi-phone text-primary" style={{fontSize: '24px'}}></i>
      </div>
      <h3 className="h5 mb-2 mb-lg-0">Mobile-first design</h3>
    </div>
    <div className="col text-center">
      <div className="card d-table border-0 rounded-circle shadow-sm p-3 mx-auto mb-4">
        <i className="bi bi-headset text-primary" style={{fontSize: '24px'}}></i>
      </div>
      <h3 className="h5 mb-2 mb-lg-0">Ongoing support &amp; maintenance</h3>
    </div>
  </div>
</section>

  )
}
