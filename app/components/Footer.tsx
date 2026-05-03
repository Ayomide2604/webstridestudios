import NewsletterSignupForm from "./NewsletterSignupForm";

export default function Footer() {
  return (
    <footer className="footer bg-dark pt-5 pb-4 pb-lg-5" data-bs-theme="dark">
      <div className="container pt-lg-4">
        <div className="row pb-5">
          <div className="col-lg-4 col-md-6">
            <div className="navbar-brand text-white p-0 me-0 mb-3 mb-lg-4">
              {/* <img src="/assets/img/logo.svg" width={47} alt="Webstride Studios" /> */}
              Webstride Studios
            </div>
            <p className="fs-sm text-light opacity-70 pb-lg-3 mb-4">
              Based in Edmonton, serving businesses nationwide with custom websites that convert. We combine technical expertise with creative vision to deliver websites that drive measurable results.
            </p>
            <NewsletterSignupForm />
          </div>
          <div className="col-xl-6 col-lg-7 col-md-5 offset-xl-2 offset-md-1 pt-4 pt-md-1 pt-lg-0">
            <div id="footer-links" className="row">
              <div className="col-lg-4">
                <h6 className="mb-2">
                  <a
                    href="#useful-links"
                    className="d-block text-white dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                    Quick Links
                  </a>
                </h6>
                <div
                  id="useful-links"
                  className="collapse d-lg-block"
                  data-bs-parent="#footer-links"
                >
                  <ul className="nav flex-column pb-lg-1 mb-lg-3">
                    <li className="nav-item">
                      <a
                        href="/"
                        className="nav-link d-inline-block px-0 pt-1 pb-2 text-light"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/portfolio"
                        className="nav-link d-inline-block px-0 pt-1 pb-2 text-light"
                      >
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/blog"
                        className="nav-link d-inline-block px-0 pt-1 pb-2 text-light"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/services"
                        className="nav-link d-inline-block px-0 pt-1 pb-2 text-light"
                      >
                        Services
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="/about"
                        className="nav-link d-inline-block px-0 pt-1 pb-2 text-light"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                                  </div>
              </div>
              <div className="col-xl-4 col-lg-3">
                <h6 className="mb-2">
                  <a
                    href="#social-links"
                    className="d-block text-white dropdown-toggle d-lg-none py-2"
                    data-bs-toggle="collapse"
                  >
                    Follow Me
                  </a>
                </h6>
                <div
                  id="social-links"
                  className="collapse d-lg-block"
                  data-bs-parent="#footer-links"
                >
                  <ul className="nav flex-column mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        href="https://www.facebook.com/share/1CRJEtVcrm/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link d-inline-block px-0 pt-1 pb-2 text-light d-flex align-items-center"
                      >
                        <i className="bi bi-facebook text-white me-2"></i>
                        Facebook
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://wa.me/14376855676"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link d-inline-block px-0 pt-1 pb-2 text-light d-flex align-items-center"
                      >
                        <i className="bi bi-whatsapp text-white me-2"></i>
                        WhatsApp
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="https://www.instagram.com/webstridestudiosca"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link d-inline-block px-0 pt-1 pb-2 text-light d-flex align-items-center"
                      >
                        <i className="bi bi-instagram text-white me-2"></i>
                        Instagram
                      </a>
                    </li>
                                      </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-5 pt-2 pt-lg-0">
                <h6 className="mb-2 text-white">Contact</h6>
                <ul className="nav flex-column mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a href="mailto:info@webstridestudios.ca" className="nav-link d-inline-block px-0 pt-1 pb-2 text-light d-flex align-items-center">
                      <i className="bi bi-envelope text-white me-2"></i>
                      info@webstridestudios.ca
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="tel:+14376855676" className="nav-link d-inline-block px-0 pt-1 pb-2 text-light d-flex align-items-center">
                      <i className="bi bi-telephone text-white me-2"></i>
                      437-685-5676
                    </a>
                  </li>
                                  </ul>
              </div>
            </div>
          </div>
        </div>
        <p className="nav d-block fs-xs text-center text-md-start pb-2 pb-lg-0 mb-0">
          <span className="text-light opacity-50">
            © {new Date().getFullYear()} Webstride Studios. All rights reserved.
          </span>
        </p>
      </div>
    </footer>
  );
}
