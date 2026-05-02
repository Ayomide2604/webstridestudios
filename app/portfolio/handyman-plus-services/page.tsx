import { Metadata } from 'next';
import Link from 'next/link';
import InteractivePortfolioViewer from '../../components/InteractivePortfolioViewer';

export const metadata: Metadata = {
  title: 'Handyman Plus Services - Portfolio | Webstride Studios',
  description: 'Professional handyman services website showcasing 25 years of quality home repairs and maintenance expertise in Edmonton.',
};

export default function HandymanPlusServicesPage() {
  return (
    <main className="pt-5">
        <div className="container py-5">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/portfolio">Portfolio</Link></li>
              <li className="breadcrumb-item active">Handyman Plus Services</li>
            </ol>
          </nav>

          <div className="row">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">Handyman Plus Services</h1>
              <div className="mb-4">
                <span className="badge bg-primary me-2">Service Website</span>
                <span className="badge bg-success me-2">Responsive Design</span>
                <span className="badge bg-info">Lead Generation</span>
              </div>

              <InteractivePortfolioViewer 
                liveSiteUrl="https://www.handymanplusservices.com"
                desktopImage="/assets/img/projects/handymanplus/home.png"
                mobileImage="/assets/img/projects/handymanplus/home-mobile.png"
                alt="Handyman Plus Services Website"
                title="Handyman Plus Services"
              />

              <section className="mb-5">
                <h2 className="h3 mb-3">Project Overview</h2>
                <p className="lead">
                  A comprehensive website for Handyman Plus Services, showcasing their 25 years of expertise in professional home repairs and maintenance throughout Edmonton and surrounding areas.
                </p>
                <p>
                  The website was designed to effectively communicate the company's extensive range of services while making it easy for potential customers to request quotes and contact the team for their home repair needs.
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
                        <p className="text-muted small">Comprehensive display of plumbing, electrical, carpentry, and other handyman services</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                      </div>
                      <div>
                        <h5 className="h6">Emergency Services</h5>
                        <p className="text-muted small">24/7 emergency service availability highlighted for urgent repairs</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <div className="d-flex">
                      <div className="flex-shrink-0">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                      </div>
                      <div>
                        <h5 className="h6">Service Areas</h5>
                        <p className="text-muted small">Clear coverage information for Edmonton, Sherwood Park, St. Albert, and surrounding areas</p>
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
                        <p className="text-muted small">Multiple contact methods including phone, email, and quote request forms</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">Services Highlighted</h2>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="bi bi-wrench text-primary me-2"></i> Plumbing Services</li>
                      <li className="mb-2"><i className="bi bi-brush text-primary me-2"></i> Painting & Repair</li>
                      <li className="mb-2"><i className="bi bi-door-open text-primary me-2"></i> Doors & Carpentry</li>
                      <li className="mb-2"><i className="bi bi-house text-primary me-2"></i> Flooring Installation</li>
                    </ul>
                  </div>
                  <div className="col-md-6 mb-3">
                    <ul className="list-unstyled">
                      <li className="mb-2"><i className="bi bi-lightning text-primary me-2"></i> Electrical & Appliances</li>
                      <li className="mb-2"><i className="bi bi-grid text-primary me-2"></i> Drywall & Repair</li>
                      <li className="mb-2"><i className="bi bi-droplet text-primary me-2"></i> Kitchen & Bathroom</li>
                      <li className="mb-2"><i className="bi bi-window text-primary me-2"></i> Windows & Doors</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-5">
                <h2 className="h3 mb-3">Technical Implementation</h2>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center">
                        <i className="bi bi-phone text-primary fs-2 mb-2"></i>
                        <h5 className="h6">Mobile Responsive</h5>
                        <p className="text-muted small">Fully optimized for all devices</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center">
                        <i className="bi bi-speedometer2 text-primary fs-2 mb-2"></i>
                        <h5 className="h6">Fast Loading</h5>
                        <p className="text-muted small">Optimized for quick page loads</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="card border-0 shadow-sm h-100">
                      <div className="card-body text-center">
                        <i className="bi bi-search text-primary fs-2 mb-2"></i>
                        <h5 className="h6">SEO Optimized</h5>
                        <p className="text-muted small">Built for search visibility</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="text-center mb-5">
                <a href="https://www.handymanplusservices.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg me-3">
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
                        Handyman Plus Services
                      </li>
                      <li className="mb-2">
                        <strong>Website:</strong><br />
                        <a href="https://www.handymanplusservices.com" target="_blank" rel="noopener noreferrer">
                          www.handymanplusservices.com
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
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
    </main>
  );
}
