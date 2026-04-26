export default function PortfolioProjects() {
  const projects = [
    {
      title: "Edmonton Tech Solutions",
      category: "Web Development",
      description: "Custom corporate website with advanced features and responsive design.",
      image: "assets/img/portfolio/01.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Calgary Retail Co.",
      category: "E-commerce",
      description: "Full-featured online store with payment integration and inventory management.",
      image: "assets/img/portfolio/02.jpg", 
      tags: ["Shopify", "Custom Theme", "API Integration"],
      link: "#"
    },
    {
      title: "Alberta Services",
      category: "Web Development",
      description: "Professional services website with booking system and client portal.",
      image: "assets/img/portfolio/03.jpg",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
      link: "#"
    },
    {
      title: "Mountain View Dental",
      category: "Web Design",
      description: "Modern dental practice website with appointment scheduling.",
      image: "assets/img/portfolio/04.jpg",
      tags: ["WordPress", "Custom Design", "SEO"],
      link: "#"
    },
    {
      title: "Prairie Logistics",
      category: "Web Development",
      description: "Logistics management system with real-time tracking dashboard.",
      image: "assets/img/portfolio/05.jpg",
      tags: ["Vue.js", "Laravel", "MySQL"],
      link: "#"
    },
    {
      title: "Northern Beauty Spa",
      category: "Web Design",
      description: "Elegant spa website with online booking and gallery.",
      image: "assets/img/portfolio/06.jpg",
      tags: ["HTML5", "CSS3", "JavaScript"],
      link: "#"
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
