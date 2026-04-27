'use client';

interface ServiceDetailProcessProps {
  service: string;
}

export default function ServiceDetailProcess({ service }: ServiceDetailProcessProps) {
  const getServiceProcess = (serviceSlug: string) => {
    const processes: Record<string, any> = {
      'web-development': [
        { step: 1, title: 'Discovery', description: 'We start by understanding your business goals, target audience, and technical requirements.' },
        { step: 2, title: 'Planning', description: 'Our team creates detailed project plans with timelines and technical specifications.' },
        { step: 3, title: 'Development', description: 'We build your solution using modern frameworks and best practices.' },
        { step: 4, title: 'Testing', description: 'We rigorously test every aspect to ensure optimal performance and user experience.' },
        { step: 5, title: 'Launch', description: 'We handle deployment and provide ongoing support to ensure continued success.' }
      ],
      'ui-ux-design': [
        { step: 1, title: 'Research', description: 'We conduct user research and competitive analysis to understand your market.' },
        { step: 2, title: 'Strategy', description: 'We develop a design strategy based on research insights and business goals.' },
        { step: 3, title: 'Design', description: 'We create wireframes, mockups, and prototypes to visualize the solution.' },
        { step: 4, title: 'Testing', description: 'We conduct usability testing to validate design decisions.' },
        { step: 5, title: 'Implementation', description: 'We work with developers to ensure design is implemented correctly.' }
      ],
      'seo-optimization': [
        { step: 1, title: 'Audit', description: 'We perform a comprehensive SEO audit to identify opportunities and issues.' },
        { step: 2, title: 'Strategy', description: 'We develop a customized SEO strategy based on audit findings.' },
        { step: 3, title: 'Implementation', description: 'We implement on-page, technical, and content optimizations.' },
        { step: 4, title: 'Monitoring', description: 'We monitor rankings and performance to track progress.' },
        { step: 5, title: 'Optimization', description: 'We continuously optimize based on data and algorithm updates.' }
      ],
      'maintenance-support': [
        { step: 1, title: 'Assessment', description: 'We assess your current website infrastructure and identify needs.' },
        { step: 2, title: 'Planning', description: 'We create a maintenance plan tailored to your requirements.' },
        { step: 3, title: 'Setup', description: 'We set up monitoring, backups, and security measures.' },
        { step: 4, title: 'Maintenance', description: 'We perform regular updates and optimizations.' },
        { step: 5, title: 'Support', description: 'We provide ongoing support and troubleshooting.' }
      ],
      'responsive-design': [
        { step: 1, title: 'Analysis', description: 'We analyze current design and identify responsive issues.' },
        { step: 2, title: 'Strategy', description: 'We develop a responsive design strategy for all target devices.' },
        { step: 3, title: 'Design', description: 'We create responsive layouts and breakpoints.' },
        { step: 4, title: 'Testing', description: 'We test across all devices and browsers.' },
        { step: 5, title: 'Optimization', description: 'We optimize performance and user experience.' }
      ],
      'website-hosting': [
        { step: 1, title: 'Assessment', description: 'We assess your hosting needs and requirements.' },
        { step: 2, title: 'Setup', description: 'We configure hosting environment and security settings.' },
        { step: 3, title: 'Migration', description: 'We migrate your website with minimal downtime.' },
        { step: 4, title: 'Optimization', description: 'We optimize server configuration for performance.' },
        { step: 5, title: 'Support', description: 'We provide ongoing hosting support and maintenance.' }
      ]
    };

    return processes[serviceSlug] || processes['web-development'];
  };

  const processSteps = getServiceProcess(service);

  return (
    <section className="container py-5 my-2 my-md-4 my-lg-5">
      <div className="text-center mb-5">
        <h2 className="h1 mb-4">Our Process</h2>
        <p className="fs-lg text-muted">
          We follow a proven methodology to ensure your project is delivered on time, on budget, and exceeds expectations.
        </p>
      </div>
      
      <div className="row g-4">
        {processSteps.map((step: any, index: number) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card border-0 shadow-sm h-100 p-4 text-center d-inline-flex align-items-center justify-content-center">
              <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                <span className="h5 mb-0 fw-bold">{step.step}</span>
              </div>
              <h3 className="h5 mb-3">{step.title}</h3>
              <p className="text-muted small mb-0">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
