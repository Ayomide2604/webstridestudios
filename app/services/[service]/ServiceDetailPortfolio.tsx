'use client';

interface ServiceDetailPortfolioProps {
  service: string;
}

export default function ServiceDetailPortfolio({ service }: ServiceDetailPortfolioProps) {
  const getServiceProjects = (serviceSlug: string) => {
    const projects: Record<string, any> = {
      'web-development': [
        {
          title: 'E-commerce Platform',
          description: 'Full-featured online store with advanced filtering and payment processing.',
          image: 'assets/img/portfolio/ecommerce.jpg',
          tags: ['React', 'Node.js', 'Stripe']
        },
        {
          title: 'Corporate Website',
          description: 'Professional business website with content management system.',
          image: 'assets/img/portfolio/corporate.jpg',
          tags: ['Next.js', 'TypeScript', 'PostgreSQL']
        },
        {
          title: 'SaaS Application',
          description: 'Cloud-based software solution with multi-tenant architecture.',
          image: 'assets/img/portfolio/saas.jpg',
          tags: ['React', 'AWS', 'Docker']
        },
        {
          title: 'Mobile App Backend',
          description: 'RESTful API and real-time data synchronization.',
          image: 'assets/img/portfolio/mobile.jpg',
          tags: ['Node.js', 'MongoDB', 'Socket.io']
        }
      ],
      'ui-ux-design': [
        {
          title: 'Banking App Redesign',
          description: 'Complete redesign of mobile banking application with focus on user experience.',
          image: 'assets/img/portfolio/banking.jpg',
          tags: ['UI Design', 'UX Research', 'Prototyping']
        },
        {
          title: 'E-commerce Dashboard',
          description: 'Admin dashboard for managing online store operations.',
          image: 'assets/img/portfolio/dashboard.jpg',
          tags: ['Dashboard Design', 'Data Visualization', 'Figma']
        },
        {
          title: 'Healthcare Portal',
          description: 'Patient portal design for healthcare providers.',
          image: 'assets/img/portfolio/healthcare.jpg',
          tags: ['Healthcare UX', 'Accessibility', 'Mobile First']
        },
        {
          title: 'Social Media App',
          description: 'Social networking application with modern interface.',
          image: 'assets/img/portfolio/social.jpg',
          tags: ['Social Design', 'Mobile UI', 'Interaction Design']
        }
      ],
      'seo-optimization': [
        {
          title: 'Local Business SEO',
          description: 'SEO campaign for local service business achieving top rankings.',
          image: 'assets/img/portfolio/local-seo.jpg',
          tags: ['Local SEO', 'Google My Business', 'Rankings']
        },
        {
          title: 'E-commerce SEO',
          description: 'Comprehensive SEO strategy for online store.',
          image: 'assets/img/portfolio/ecommerce-seo.jpg',
          tags: ['E-commerce SEO', 'Product Optimization', 'Content Strategy']
        },
        {
          title: 'Technical SEO Audit',
          description: 'Complete technical SEO audit and implementation.',
          image: 'assets/img/portfolio/technical-seo.jpg',
          tags: ['Technical SEO', 'Site Speed', 'Schema Markup']
        },
        {
          title: 'Content SEO Strategy',
          description: 'Content-focused SEO strategy for blog and resource pages.',
          image: 'assets/img/portfolio/content-seo.jpg',
          tags: ['Content SEO', 'Keyword Research', 'Link Building']
        }
      ],
      'maintenance-support': [
        {
          title: 'Website Security Update',
          description: 'Complete security overhaul and vulnerability patching.',
          image: 'assets/img/portfolio/security.jpg',
          tags: ['Security', 'WordPress', 'SSL']
        },
        {
          title: 'Performance Optimization',
          description: 'Website speed optimization and performance improvements.',
          image: 'assets/img/portfolio/performance.jpg',
          tags: ['Performance', 'Optimization', 'CDN']
        },
        {
          title: 'Content Management',
          description: 'Ongoing content updates and website management.',
          image: 'assets/img/portfolio/content.jpg',
          tags: ['Content Management', 'Updates', 'Support']
        },
        {
          title: 'Backup & Recovery',
          description: 'Backup system setup and recovery procedures.',
          image: 'assets/img/portfolio/backup.jpg',
          tags: ['Backup', 'Recovery', 'Monitoring']
        }
      ],
      'responsive-design': [
        {
          title: 'Mobile-First Redesign',
          description: 'Complete mobile-first redesign of corporate website.',
          image: 'assets/img/portfolio/mobile-first.jpg',
          tags: ['Mobile First', 'Responsive', 'Performance']
        },
        {
          title: 'Tablet Optimization',
          description: 'Optimized user experience for tablet devices.',
          image: 'assets/img/portfolio/tablet.jpg',
          tags: ['Tablet UX', 'Responsive', 'Touch Interface']
        },
        {
          title: 'Cross-Browser Testing',
          description: 'Comprehensive cross-browser compatibility testing.',
          image: 'assets/img/portfolio/browser.jpg',
          tags: ['Cross-Browser', 'Testing', 'Compatibility']
        },
        {
          title: 'Progressive Enhancement',
          description: 'Progressive enhancement approach for better accessibility.',
          image: 'assets/img/portfolio/progressive.jpg',
          tags: ['Progressive Enhancement', 'Accessibility', 'UX']
        }
      ],
      'website-hosting': [
        {
          title: 'Cloud Migration',
          description: 'Complete migration to cloud hosting infrastructure.',
          image: 'assets/img/portfolio/cloud.jpg',
          tags: ['Cloud Hosting', 'Migration', 'AWS']
        },
        {
          title: 'Performance Hosting',
          description: 'High-performance hosting setup for busy website.',
          image: 'assets/img/portfolio/performance-hosting.jpg',
          tags: ['Performance', 'CDN', 'Caching']
        },
        {
          title: 'E-commerce Hosting',
          description: 'Specialized hosting for e-commerce platform.',
          image: 'assets/img/portfolio/ecommerce-hosting.jpg',
          tags: ['E-commerce', 'SSL', 'Payment Gateway']
        },
        {
          title: 'Managed Hosting',
          description: 'Fully managed hosting solution with support.',
          image: 'assets/img/portfolio/managed.jpg',
          tags: ['Managed Hosting', 'Support', 'Monitoring']
        }
      ]
    };

    return projects[serviceSlug] || projects['web-development'];
  };

  const projects = getServiceProjects(service);

  return (
    <section className="bg-secondary py-5 my-2 my-md-4 my-lg-5">
      <div className="container py-2 py-md-4 py-lg-5">
        <div className="text-center mb-5">
          <h2 className="h1 mb-4">Recent Projects</h2>
          <p className="fs-lg text-muted">
            Explore our latest projects showcasing our expertise in delivering exceptional solutions.
          </p>
        </div>
        
        <div className="row g-4">
          {projects.map((project: any, index: number) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card border-0 shadow-sm h-100 overflow-hidden">
                <div className="position-relative">
                  <img 
                    src={project.image} 
                    className="card-img-top" 
                    alt={project.title}
                    style={{height: "200px", objectFit: "cover"}}
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge bg-primary">Project</span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h3 className="h5 mb-2">{project.title}</h3>
                  <p className="text-muted small mb-3">{project.description}</p>
                  <div className="mb-3">
                    {project.tags.map((tag: string, tagIndex: number) => (
                      <span key={tagIndex} className="badge bg-light text-dark me-1 mb-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3">
                    <a href="/contact" className="btn btn-primary btn-sm">
                      View Project Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
