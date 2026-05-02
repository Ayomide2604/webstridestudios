'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <div className="page-header bg-secondary py-5">
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-3">404</h1>
          <p className="fs-lg text-muted mb-0">
            Oops! The page you're looking for seems to have vanished into the digital void.
          </p>
        </div>
      </div>

      <section className="container py-5 my-2 my-md-4 my-lg-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-sm p-5 text-center">
              {/* 404 Icon */}
              <div className="mb-4">
                <div 
                  className="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10"
                  style={{ width: '120px', height: '120px' }}
                >
                  <i className="bi bi-exclamation-triangle text-primary fs-1"></i>
                </div>
              </div>

              {/* Error Message */}
              <h2 className="h3 mb-3">Page Not Found</h2>
              <p className="fs-lg text-muted mb-4">
                We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
              </p>

              {/* Helpful Actions */}
              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 p-4 text-center">
                    <div className="text-primary mb-3">
                      <i className="bi bi-house fs-2"></i>
                    </div>
                    <h5 className="h6 mb-2">Go Home</h5>
                    <p className="text-muted small mb-0">
                      Return to our homepage and explore our services
                    </p>
                    <Link href="/" className="btn btn-primary">
                      Home Page
                    </Link>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card border-0 shadow-sm h-100 p-4 text-center">
                    <div className="text-primary mb-3">
                      <i className="bi bi-grid-3x3-gap fs-2"></i>
                    </div>
                    <h5 className="h6 mb-2">Browse Portfolio</h5>
                    <p className="text-muted small mb-0">
                      Check out our recent web development projects
                    </p>
                    <Link href="/portfolio" className="btn btn-primary">
                      View Portfolio
                    </Link>
                  </div>
                </div>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100 p-4 text-center">
                    <div className="text-primary mb-3">
                      <i className="bi bi-code-slash fs-2"></i>
                    </div>
                    <h5 className="h6 mb-2">Web Development</h5>
                    <p className="text-muted small mb-0">
                      Professional custom website development
                    </p>
                    <Link href="/services/web-development" className="btn btn-outline-primary btn-sm">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100 p-4 text-center">
                    <div className="text-primary mb-3">
                      <i className="bi bi-palette fs-2"></i>
                    </div>
                    <h5 className="h6 mb-2">UI/UX Design</h5>
                    <p className="text-muted small mb-0">
                      Beautiful and functional design solutions
                    </p>
                    <Link href="/services/ui-ux-design" className="btn btn-outline-primary btn-sm">
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100 p-4 text-center">
                    <div className="text-primary mb-3">
                      <i className="bi bi-search fs-2"></i>
                    </div>
                    <h5 className="h6 mb-2">SEO Optimization</h5>
                    <p className="text-muted small mb-0">
                      Boost your online visibility and rankings
                    </p>
                    <Link href="/services/seo-optimization" className="btn btn-outline-primary btn-sm">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>

              
              {/* Contact Support */}
              <div className="text-center mt-4">
                <p className="text-muted mb-3">
                  Still can't find what you're looking for? We're here to help!
                </p>
                <div className="d-flex justify-content-center gap-2">
                  <Link href="/contact" className="btn btn-outline-primary">
                    <i className="bi bi-envelope me-2"></i>
                    Contact Support
                  </Link>
                  <a 
                    href="tel:437-685-5676" 
                    className="btn btn-outline-primary"
                  >
                    <i className="bi bi-telephone me-2"></i>
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
