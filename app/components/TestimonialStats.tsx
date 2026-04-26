export default function TestimonialStats() {
  return (
    <div className="card justify-content-center bg-dark h-100 p-4 p-lg-5">
      <div className="p-2">
        <h3 className="display-4 text-primary mb-1">200+</h3>
        <h2 className="text-light pb-5 mb-2">Clients Already Served</h2>
        <a
          href="#"
          className="d-inline-flex align-items-center rounded-3 text-decoration-none py-3 px-4"
          style={{ backgroundColor: "#3e4265" }}
        >
          <div className="pe-3">
            <div className="fs-xs text-light text-uppercase opaciy-70 mb-2">
              Reviewed on
            </div>
            <img
              src="assets/img/about/clutch-logo.svg"
              width={97}
              alt="Clutch"
            />
          </div>
          <div className="ps-1">
            <div className="text-nowrap mb-2">
              <i className="bx bxs-star text-warning" />
              <i className="bx bxs-star text-warning" />
              <i className="bx bxs-star text-warning" />
              <i className="bx bxs-star text-warning" />
              <i className="bx bxs-star text-warning" />
            </div>
            <div className="text-light opacity-70">49 reviews</div>
          </div>
        </a>
      </div>
    </div>
  )
}
