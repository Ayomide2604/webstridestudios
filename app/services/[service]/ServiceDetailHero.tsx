'use client';

interface ServiceDetailHeroProps {
  service: string;
}

export default function ServiceDetailHero({ service }: ServiceDetailHeroProps) {
  const getServiceData = (serviceSlug: string) => {
    const services: Record<string, any> = {
      'web-development': {
        title: 'Web Development',
        description: 'Custom websites and web applications built with modern frameworks. We create responsive, high-performing sites that convert visitors into customers and drive measurable business growth.',
        detailedDescription: 'From simple brochure sites to complex web applications, our expert team delivers cutting-edge solutions using the latest technologies. We focus on performance, security, and user experience to ensure your digital presence stands out.',
        image: 'assets/img/services/web-development.jpg'
      },
      'ui-ux-design': {
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces that delight users and drive conversions. We design user-centered experiences that make your brand stand out.',
        detailedDescription: 'Our design process combines creativity with data-driven insights to create interfaces that not only look stunning but also provide exceptional user experiences.',
        image: 'assets/img/services/ui-ux-design.jpg'
      },
      'seo-optimization': {
        title: 'SEO Optimization',
        description: 'Dominate search results and attract quality organic traffic. We optimize your website to rank higher and turn Google into your best salesperson.',
        detailedDescription: 'Our comprehensive SEO strategies help your business achieve higher rankings, increased visibility, and sustainable growth in search engine results.',
        image: 'assets/img/services/seo-optimization.jpg'
      },
      'maintenance-support': {
        title: 'Maintenance & Support',
        description: 'Keep your website running smoothly with ongoing maintenance, security updates, and technical support. We ensure your digital presence stays secure and up-to-date.',
        detailedDescription: 'Our maintenance services ensure your website remains secure, fast, and functional, allowing you to focus on your business while we handle the technical details.',
        image: 'assets/img/services/maintenance-support.jpg'
      },
      'responsive-design': {
        title: 'Responsive Design',
        description: 'Perfect experiences across all devices. Your website will look stunning and work flawlessly on desktop, tablet, and mobile.',
        detailedDescription: 'We create adaptive designs that provide optimal viewing experiences across all devices, ensuring your audience can access your content anywhere, anytime.',
        image: 'assets/img/services/responsive-design.jpg'
      },
      'website-hosting': {
        title: 'Website Hosting',
        description: 'Fast, secure hosting solutions for your website. Reliable performance with 99.9% uptime and expert technical support.',
        detailedDescription: 'Our hosting solutions provide the speed, security, and reliability your website needs to perform at its best, with expert support whenever you need it.',
        image: 'assets/img/services/website-hosting.jpg'
      }
    };

    return services[serviceSlug] || services['web-development'];
  };

  const serviceData = getServiceData(service);

  return (
    <section className="container py-5 my-2 my-md-4 my-lg-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-4 mb-4">{serviceData.title}</h1>
          <p className="fs-lg text-muted pb-lg-3 mb-4">
            {serviceData.description}
          </p>
          <p className="fs-lg text-muted mb-4">
            {serviceData.detailedDescription}
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3">
            <a href="/contact" className="btn btn-primary shadow-primary btn-lg">
              Get Started
            </a>
            <a href="/services" className="btn btn-outline-secondary btn-lg">
              View All Services
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <img
            src={serviceData.image}
            className="rounded-3 shadow-sm w-100"
            alt={`${serviceData.title} Service`}
          />
        </div>
      </div>
    </section>
  );
}
