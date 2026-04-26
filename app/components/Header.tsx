import Image from 'next/image'
import ThemeSwitch from './ThemeSwitch'

export default function Header() {
  return (
    <header className="header navbar navbar-expand-lg bg-light navbar-sticky">
      <div className="container px-3">
        <a href="/" className="navbar-brand pe-3 pe-lg-5 ms-5">
          <Image 
            src="/assets/img/logo/2.svg" 
            width={80} 
            height={80}
            alt="Webstride" 
            style={{transform: 'scale(2.4)'}}
            className="theme-logo d-lg-none"
          />
          <Image 
            src="/assets/img/logo/2.svg" 
            width={80} 
            height={80}
            alt="Webstride" 
            style={{transform: 'scale(2.5)'}}
            className="theme-logo d-none d-lg-block"
          />
        </a>

        <div id="navbarNav" className="offcanvas offcanvas-end">
          <div className="offcanvas-header border-bottom">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3 ms-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="/about" className="nav-link">
                  About
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/services" className="dropdown-item">
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="dropdown-item">
                      SEO Optimization
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="dropdown-item">
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="dropdown-item">
                      Graphics Design
                    </a>
                  </li>
                  <li>
                    <a href="/services" className="dropdown-item">
                      Maintenance and Support
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="/portfolio" className="nav-link">
                  Portfolio
                </a>
              </li>

              <li className="nav-item">
                <a href="/contact" className="nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="offcanvas-header border-top">
            <a href="/contact" className="btn btn-primary w-100">
              Get Started
            </a>
          </div>
        </div>

        {/* Theme Switch */}
        <ThemeSwitch />

        {/* Mobile Toggle */}
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="offcanvas"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Button */}
        <a
          href="/contact"
          className="btn btn-primary btn-sm fs-sm rounded d-none d-lg-inline-flex"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
