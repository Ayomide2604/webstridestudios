export default function PortfolioProjects() {
  const projects = [
    {
      title: "Handyman Plus Services",
      category: "Service Website",
      description: "Professional handyman services website showcasing 25 years of quality home repairs and maintenance expertise.",
      image: "assets/img/projects/handymanplus/home.png",
      tags: ["Responsive Design", "Service Showcase", "Contact Forms"],
      link: "/portfolio/handyman-plus-services"
    },
    {
      title: "2Women and a Lady Cleaning",
      category: "Service Website",
      description: "Female-owned cleaning services website with comprehensive service offerings and booking system.",
      image: "assets/img/projects/2women/home.png",
      tags: ["Modern Design", "Service Pages", "Client Testimonials"],
      link: "/portfolio/2women-and-lady-cleaning"
    },
    {
      title: "Thrive Physiotherapy",
      category: "Healthcare Website",
      description: "Professional physiotherapy practice website with patient-focused design and appointment features.",
      image: "assets/img/projects/thrivephysio/home.png",
      tags: ["Healthcare", "Patient Portal", "Modern UI"],
      link: "/portfolio/thrive-physiotherapy"
    }
  ];

  return (
    <section id="projects" className="bg-secondary py-5 my-2 my-md-4 my-lg-5">
      <div className="container py-2 py-md-4 py-lg-5">
        <div className="text-center mb-5">
          <h2 className="h1 mb-4">Featured Projects</h2>
          <p className="fs-lg text-muted">
            A selection of our recent work showcasing our expertise in web development, design, and digital solutions.
          </p>
        </div>
        
        <div className="row g-4">
          {projects.map((project, index) => (
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
                    <span className="badge bg-primary">{project.category}</span>
                  </div>
                </div>
                <div className="card-body p-4">
                  <h3 className="h5 mb-2">{project.title}</h3>
                  <p className="text-muted small mb-3">{project.description}</p>
                  <div className="mb-3">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="badge bg-light text-dark me-1 mb-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="btn btn-primary btn-sm">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <a href="/contact" className="btn btn-outline-primary btn-lg">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
