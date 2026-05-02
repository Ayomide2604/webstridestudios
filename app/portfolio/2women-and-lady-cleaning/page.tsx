import { Metadata } from 'next';
import Link from 'next/link';
import InteractivePortfolioViewer from '../../components/InteractivePortfolioViewer';

export const metadata: Metadata = {
  title: '2Women and a Lady Cleaning - Portfolio | Webstride Studios',
  description: 'Female-owned cleaning services website with comprehensive service offerings and booking system in Edmonton.',
};

export default function TwoWomenAndALadyCleaningPage() {
  return (
    <main className="pt-5">
        <div className="container py-5">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/portfolio">Portfolio</Link></li>
              <li className="breadcrumb-item active">2Women and a Lady Cleaning</li>
            </ol>
          </nav>

          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">2Women and a Lady Cleaning</h1>
              <div className="mb-4">
                <span className="badge bg-primary me-2">Service Website</span>
                <span className="badge bg-success me-2">Female-Owned Business</span>
                <span className="badge bg-info">Local Edmonton</span>
              </div>

              <InteractivePortfolioViewer 
                liveSiteUrl="https://www.2womenandalady.ca"
                desktopImage="/assets/img/projects/2women/home.png"
                mobileImage="/assets/img/projects/2women/home-mobile.png"
                alt="2Women and a Lady Cleaning Website"
                title="2Women and a Lady Cleaning"
              />

              <section className="mb-5">
                <h2 className="h3 mb-3">Project Overview</h2>
                <p className="lead">
                  A modern, professional website for 2Women and a Lady Cleaning Services, Edmonton's trusted female-owned cleaning company founded in 2023.
                </p>
                <p>
                  The website was designed to reflect the company's commitment to exceptional cleaning services while showcasing their local Edmonton roots and women-led business values. The design emphasizes trust, reliability, and attention to detail that defines their service approach.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">Key Features</h2>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                      </div>
                      <div>
                        <h5 className="h6">Service Showcase</h5>
                        <p className="text-muted small">Comprehensive display of residential, construction, carpet, and biohazard cleaning services</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                      </div>
                      <div>
                        <h5 className="h6">Quote System</h5>
                        <p className="text-muted small">Easy-to-use quote request system for potential clients</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                      </div>
                      <div>
                        <h5 className="h6">Local Focus</h5>
                        <p className="text-muted small">Emphasis on Edmonton and surrounding areas service coverage</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                      </div>
                      <div>
                        <h5 className="h6">Contact Integration</h5>
                        <p className="text-muted small">Multiple contact methods with phone and email prominently displayed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">Services Highlighted</h2>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="h6 text-primary mb-2">
                          <i className="bi bi-house-door me-2"></i>Residential Cleaning
                        </h5>
                        <p className="text-muted small">Professional home cleaning services for Edmonton families, from regular maintenance to deep cleaning.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="h6 text-primary mb-2">
                          <i className="bi bi-tools me-2"></i>Construction Cleaning
                        </h5>
                        <p className="text-muted small">Post-construction and renovation cleanup services to make spaces move-in ready.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="h6 text-primary mb-2">
                          <i className="bi bi-star me-2"></i>Carpet Cleaning
                        </h5>
                        <p className="text-muted small">Deep carpet cleaning services to remove stains, odors, and allergens with professional equipment.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body">
                        <h5 className="h6 text-primary mb-2">
                          <i className="bi bi-shield-check me-2"></i>Bio Hazard Cleaning
                        </h5>
                        <p className="text-muted small">Professional biohazard cleanup services with proper safety protocols and health regulation compliance.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">Design Approach</h2>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center">
                        <i className="bi bi-palette text-primary fs-2 mb-2"></i>
                        <h5 className="h6">Clean & Professional</h5>
                        <p className="text-muted small">Design reflects the cleanliness and professionalism of their services</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center">
                        <i className="bi bi-heart text-primary fs-2 mb-2"></i>
                        <h5 className="h6">Trust Building</h5>
                        <p className="text-muted small">Elements that build confidence in their female-owned, local business</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center">
                        <i className="bi bi-phone text-primary fs-2 mb-2"></i>
                        <h5 className="h6">Mobile First</h5>
                        <p className="text-muted small">Optimized for customers searching for cleaning services on mobile devices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">Client Results</h2>
                <div className="alert alert-success">
                  <h5 className="alert-heading">Success Metrics</h5>
                  <ul className="mb-0">
                    <li>Professional online presence established for new business</li>
                    <li>Clear communication of comprehensive service offerings</li>
                    <li>Easy quote request system generating qualified leads</li>
                    <li>Mobile-optimized design for on-the-go customers</li>
                  </ul>
                </div>
              </section>

              <div className="text-center mb-5">
                <a href="https://www.2womenandalady.ca" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg me-3">
                  Visit Live Site
                </a>
                <Link href="/contact" className="btn btn-outline-primary btn-lg">
                  Start Your Project
                </Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sticky-top" style={{top: '100px'}}>
                <div className="card border-0 shadow mb-4">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Project Details</h5>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <strong>Client:</strong><br />
                        2Women and a Lady Cleaning Services
                      </li>
                      <li className="mb-2">
                        <strong>Website:</strong><br />
                        <a href="https://www.2womenandalady.ca" target="_blank" rel="noopener noreferrer">
                          www.2womenandalady.ca
                        </a>
                      </li>
                      <li className="mb-2">
                        <strong>Category:</strong><br />
                        Service Website
                      </li>
                      <li className="mb-2">
                        <strong>Year:</strong><br />
                        2024
                      </li>
                      <li className="mb-2">
                        <strong>Location:</strong><br />
                        Edmonton, Alberta
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card border-0 shadow mb-4">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Business Type</h5>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-award text-primary me-2"></i>
                      <span>Female-Owned Business</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-geo-alt text-primary me-2"></i>
                      <span>Local Edmonton Company</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-calendar text-primary me-2"></i>
                      <span>Founded in 2023</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
