import { Metadata } from 'next';
import Link from 'next/link';
import InteractivePortfolioViewer from '../../components/InteractivePortfolioViewer';

export const metadata: Metadata = {
  title: 'Thrive Physiotherapy - Portfolio | Webstride Studios',
  description: 'Professional physiotherapy practice website with patient-focused design and appointment features.',
};

export default function ThrivePhysiotherapyPage() {
  return (
    <main className="pt-5">
        <div className="container py-5">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/portfolio">Portfolio</Link></li>
              <li className="breadcrumb-item active">Thrive Physiotherapy</li>
            </ol>
          </nav>

          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Thrive Physiotherapy</h1>
              <div className="mb-4">
                <span className="badge bg-primary me-2">Healthcare Website</span>
                <span className="badge bg-success me-2">Patient Portal</span>
                <span className="badge bg-info">Modern UI</span>
              </div>

              <InteractivePortfolioViewer 
                liveSiteUrl="https://thrivehomephysio.ng"
                desktopImage="/assets/img/projects/thrivephysio/home.png"
                mobileImage="/assets/img/projects/thrivephysio/home-mobile.png"
                alt="Thrive Physiotherapy Website"
                title="Thrive Physiotherapy"
              />

              <section className="mb-5">
                <h2 className="h3 mb-3">Project Overview</h2>
                <p className="lead">
                  A modern, patient-focused website for Thrive Physiotherapy, designed to provide comprehensive information about physiotherapy services while facilitating patient engagement.
                </p>
                <p>
                  The website was developed to create a welcoming and professional online presence that reflects the healing nature of physiotherapy services. The design emphasizes accessibility, trust, and ease of use for patients seeking physiotherapy treatment and information.
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
                        <h5 className="h6">Service Information</h5>
                        <p className="text-muted small">Detailed descriptions of physiotherapy treatments and specialties</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                      </div>
                      <div>
                        <h5 className="h6">Patient Resources</h5>
                        <p className="text-muted small">Educational content and resources for current and prospective patients</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                      </div>
                      <div>
                        <h5 className="h6">Contact & Location</h5>
                        <p className="text-muted small">Clear contact information and location details for easy access</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                      </div>
                      <div>
                        <h5 className="h6">Professional Design</h5>
                        <p className="text-muted small">Clean, modern interface that builds trust and credibility</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">Healthcare Website Considerations</h2>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center">
                        <i className="bi bi-shield-check text-primary fs-2 mb-2"></i>
                        <h5 className="h6">HIPAA Compliance</h5>
                        <p className="text-muted small">Designed with patient privacy and data protection in mind</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center">
                        <i className="bi bi-universal-access text-primary fs-2 mb-2"></i>
                        <h5 className="h6">Accessibility</h5>
                        <p className="text-muted small">WCAG compliant design for users with disabilities</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center">
                        <i className="bi bi-phone text-primary fs-2 mb-2"></i>
                        <h5 className="h6">Mobile Access</h5>
                        <p className="text-muted small">Optimized for patients accessing information on mobile devices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">Design Philosophy</h2>
                <div className="alert alert-info">
                  <h5 className="alert-heading">Patient-Centered Approach</h5>
                  <p className="mb-2">
                    The website design prioritizes patient needs and experience through:
                  </p>
                  <ul className="mb-0">
                    <li>Clear navigation to find services and information quickly</li>
                    <li>Calm, healing color palette that reduces anxiety</li>
                    <li>Professional imagery that builds trust in medical expertise</li>
                    <li>Easy-to-read typography for all age groups</li>
                  </ul>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">Technical Implementation</h2>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="h6 text-primary mb-2">
                          <i className="bi bi-lightning me-2"></i>Performance
                        </h5>
                        <p className="text-muted small mb-0">Fast loading times critical for patient engagement and search rankings</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="h6 text-primary mb-2">
                          <i className="bi bi-search me-2"></i>SEO Optimization
                        </h5>
                        <p className="text-muted small mb-0">Optimized for local search to attract patients in the service area</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="h6 text-primary mb-2">
                          <i className="bi bi-globe me-2"></i>Cross-Platform
                        </h5>
                        <p className="text-muted small mb-0">Consistent experience across all devices and browsers</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="card border-0 shadow-sm">
                      <div className="card-body">
                        <h5 className="h6 text-primary mb-2">
                          <i className="bi bi-lock me-2"></i>Secure
                        </h5>
                        <p className="text-muted small mb-0">HTTPS implementation and security best practices</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="text-center mb-5">
                <a href="https://thrivehomephysio.ng" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg me-3">
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
                        Thrive Physiotherapy
                      </li>
                      <li className="mb-2">
                        <strong>Website:</strong><br />
                        <a href="https://thrivehomephysio.ng" target="_blank" rel="noopener noreferrer">
                          thrivehomephysio.ng
                        </a>
                      </li>
                      <li className="mb-2">
                        <strong>Category:</strong><br />
                        Healthcare Website
                      </li>
                      <li className="mb-2">
                        <strong>Year:</strong><br />
                        2024
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="card border-0 shadow mb-4">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Industry Focus</h5>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-hospital text-primary me-2"></i>
                      <span>Healthcare Services</span>
                    </div>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-people text-primary me-2"></i>
                      <span>Patient Care</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="bi bi-heart-pulse text-primary me-2"></i>
                      <span>Physiotherapy</span>
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
