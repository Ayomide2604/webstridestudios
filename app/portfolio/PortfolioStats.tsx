export default function PortfolioStats() {
  const stats = [
    {
      number: "150+",
      label: "Projects Completed"
    },
    {
      number: "98%",
      label: "Client Satisfaction"
    },
    {
      number: "5+",
      label: "Years Experience"
    },
    {
      number: "24/7",
      label: "Support Available"
    }
  ];

  return (
    <section className="container py-5 my-2 my-md-4 my-lg-5">
      <div className="row g-4">
        {stats.map((stat, index) => (
          <div key={index} className="col-6 col-md-3 text-center">
            <h3 className="display-4 text-primary mb-2">{stat.number}</h3>
            <p className="fw-medium text-muted mb-0">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
