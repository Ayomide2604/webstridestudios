export default function ServicesProcess() {
  const processSteps = [
    {
      number: "1",
      title: "Consultation",
      description: "We start with a free consultation to understand your business goals, challenges, and requirements."
    },
    {
      number: "2",
      title: "Strategy", 
      description: "Our team develops a comprehensive strategy tailored to your specific needs and objectives."
    },
    {
      number: "3",
      title: "Implementation",
      description: "We execute the plan with regular updates and collaboration to ensure we're aligned with your vision."
    },
    {
      number: "4",
      title: "Launch & Support",
      description: "After successful launch, we provide ongoing support and optimization to ensure continued success."
    }
  ];

  return (
    <section className="container py-5 my-2 my-md-4 my-lg-5">
      <div className="text-center mb-5">
        <h2 className="h1 mb-4">Our Service Process</h2>
        <p className="fs-lg text-muted">
          We follow a proven methodology to ensure your project is delivered on time, on budget, and exceeds expectations.
        </p>
      </div>
      
      <div className="row g-4">
        {processSteps.map((step, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100 p-4 text-center">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                <span className="h5 mb-0 fw-bold">{step.number}</span>
              </div>
              <h3 className="h5 mb-3">{step.title}</h3>
              <p className="text-muted small mb-0">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
