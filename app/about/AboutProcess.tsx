export default function AboutProcess() {
  const processSteps = [
    {
      number: "1",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and technical requirements to create a comprehensive project plan."
    },
    {
      number: "2", 
      title: "Design & Development",
      description: "Our expert team creates stunning designs and develops robust functionality using modern frameworks and best practices."
    },
    {
      number: "3",
      title: "Testing & Optimization", 
      description: "We rigorously test every aspect of your website to ensure optimal performance, security, and user experience across all devices."
    },
    {
      number: "4",
      title: "Launch & Support",
      description: "We handle the deployment process and provide ongoing support and maintenance to ensure your website continues to perform at its best."
    }
  ];

  return (
    <section className="bg-secondary py-5 my-2 my-md-4 my-lg-5">
      <div className="container py-2 py-md-4 py-lg-5">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <h2 className="h1 text-center mb-5">Our Process</h2>
            <div className="row g-4">
              {processSteps.map((step, index) => (
                <div key={index} className="col-md-6">
                  <div className="d-flex align-items-start">
                    <div className="flex-shrink-0">
                      <div className="btn btn-primary btn-lg rounded-circle p-3 me-3">
                        <span className="h5 mb-0">{step.number}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="h5 mb-2">{step.title}</h3>
                      <p className="text-muted mb-0">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
