export default function ServicesList() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern frameworks. We create responsive, high-performing sites that convert visitors into customers.",
      icon: "bi-code-slash",
      features: [
        "Custom Website Design",
        "Web Application Development",
        "E-commerce Solutions",
        "API Development",
        "Progressive Web Apps"
      ],
      price: "Starting at $2,999"
    },
    {
      title: "UI/UX Design", 
      description: "Beautiful, intuitive interfaces that delight users and drive conversions. We design user-centered experiences that make your brand stand out.",
      icon: "bi-palette",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Wireframing & Prototyping",
        "Brand Identity Design",
        "Design Systems"
      ],
      price: "Starting at $1,999"
    },
    {
      title: "SEO Optimization",
      description: "Dominate search results and attract quality organic traffic. We optimize your website to rank higher and turn Google into your best salesperson.",
      icon: "bi-search",
      features: [
        "On-Page SEO",
        "Technical SEO Audit",
        "Keyword Research",
        "Content Strategy",
        "Local SEO"
      ],
      price: "Starting at $1,499"
    },
    {
      title: "Maintenance and Support",
      description: "Keep your website running smoothly with ongoing maintenance, security updates, and technical support. We ensure your digital presence stays secure and up-to-date.",
      icon: "bi-tools",
      features: [
        "Regular Updates",
        "Security Monitoring",
        "Performance Optimization",
        "Content Updates",
        "24/7 Support"
      ],
      price: "Starting at $299/month"
    },
    {
      title: "Responsive Design",
      description: "Perfect experiences across all devices. Your website will look stunning and work flawlessly on desktop, tablet, and mobile.",
      icon: "bi-phone",
      features: [
        "Mobile-First Design",
        "Cross-Browser Testing",
        "Performance Optimization",
        "Touch-Friendly Interfaces",
        "Adaptive Layouts"
      ],
      price: "Included with Web Development"
    },
    {
      title: "Website Hosting",
      description: "Fast, secure hosting solutions for your website. Reliable performance with 99.9% uptime and expert technical support.",
      icon: "bi-server",
      features: [
        "SSD Storage",
        "SSL Certificate",
        "Daily Backups",
        "CDN Integration",
        "Email Hosting"
      ],
      price: "Starting at $49/month"
    }
  ];

  return (
    <section id="services-list" className="bg-secondary py-5 my-2 my-md-4 my-lg-5">
      <div className="container py-2 py-md-4 py-lg-5">
        <div className="text-center mb-5">
          <h2 className="h1 mb-4">Complete Digital Solutions</h2>
          <p className="fs-lg text-muted">
            From concept to launch and beyond, we provide comprehensive services to help your business thrive online.
          </p>
        </div>
        
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-6">
              <div className="card border-0 shadow-sm h-100 p-4">
                <div className="d-flex align-items-start mb-3">
                  <div className="flex-shrink-0">
                    <div className="bg-primary text-white rounded-circle p-3 me-3">
                      <i className={`bi ${service.icon} fs-4`}></i>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h3 className="h4 mb-2">{service.title}</h3>
                    <p className="text-muted mb-3">{service.description}</p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <h5 className="h6 text-muted mb-2">What's Included:</h5>
                  <ul className="list-unstyled">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="d-flex align-items-center mb-1">
                        <i className="bi bi-check-circle text-success me-2"></i>
                        <span className="small">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="d-flex justify-content-between align-items-center border-top pt-3">
                  <span className="text-primary fw-bold">{service.price}</span>
                  <a href="/contact" className="btn btn-primary btn-sm">
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
