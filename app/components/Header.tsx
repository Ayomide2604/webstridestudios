"use client"
import Image from 'next/image'
import ThemeSwitch from './ThemeSwitch'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="header navbar navbar-expand-lg bg-light navbar-sticky ">
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
                <a href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`} aria-current="page">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
                  About
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  href="#"
                  className={`nav-link dropdown-toggle ${pathname.startsWith('/services') ? 'active' : ''}`}
                  data-bs-toggle="dropdown"
                >
                  Services
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/services/web-development" className={`dropdown-item ${pathname === '/services/web-development' ? 'active' : ''}`}>
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a href="/services/ui-ux-design" className={`dropdown-item ${pathname === '/services/ui-ux-design' ? 'active' : ''}`}>
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a href="/services/seo-optimization" className={`dropdown-item ${pathname === '/services/seo-optimization' ? 'active' : ''}`}>
                      SEO Optimization
                    </a>
                  </li>
                  <li>
                    <a href="/services/maintenance-support" className={`dropdown-item ${pathname === '/services/maintenance-support' ? 'active' : ''}`}>
                      Maintenance & Support
                    </a>
                  </li>
                  <li>
                    <a href="/services/responsive-design" className={`dropdown-item ${pathname === '/services/responsive-design' ? 'active' : ''}`}>
                      Responsive Design
                    </a>
                  </li>
                  <li>
                    <a href="/services/website-hosting" className={`dropdown-item ${pathname === '/services/website-hosting' ? 'active' : ''}`}>
                      Website Hosting
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <a href="/portfolio" className={`nav-link ${pathname === '/portfolio' ? 'active' : ''}`}>
                  Portfolio
                </a>
              </li>

              <li className="nav-item">
                <a href="/knowledge-base" className={`nav-link ${pathname === '/knowledge-base' ? 'active' : ''}`}>
                  Knowledge Base
                </a>
              </li>

              <li className="nav-item">
                <a href="/contact" className={`nav-link ${pathname === '/contact' || pathname.startsWith('/contact/') ? 'active' : ''}`}>
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
