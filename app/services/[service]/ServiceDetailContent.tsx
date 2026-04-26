'use client';

interface ServiceDetailContentProps {
  service: string;
}

export default function ServiceDetailContent({ service }: ServiceDetailContentProps) {
  const getServiceData = (serviceSlug: string) => {
    const services: Record<string, any> = {
      'web-development': {
        features: [
          { title: 'Custom Website Design', description: 'Unique, professional designs tailored to your brand and business goals.' },
          { title: 'Web Application Development', description: 'Complex web applications with advanced functionality and database integration.' },
          { title: 'E-commerce Solutions', description: 'Full-featured online stores with payment processing and inventory management.' },
          { title: 'API Development', description: 'Custom APIs and third-party integrations for seamless data flow.' },
          { title: 'Progressive Web Apps', description: 'Modern PWAs that work offline and provide app-like experiences.' }
        ],
        technologies: {
          'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
          'Backend': ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'],
          'Tools & Platforms': ['Git', 'Docker', 'AWS', 'Vercel']
        }
      },
      'ui-ux-design': {
        features: [
          { title: 'User Interface Design', description: 'Beautiful, intuitive interfaces that delight users and drive conversions.' },
          { title: 'User Experience Research', description: 'Data-driven insights to understand user behavior and preferences.' },
          { title: 'Wireframing & Prototyping', description: 'Interactive prototypes to test and validate design concepts.' },
          { title: 'Brand Identity Design', description: 'Cohesive brand experiences across all touchpoints.' },
          { title: 'Design Systems', description: 'Scalable design systems for consistent user experiences.' }
        ],
        technologies: {
          'Design Tools': ['Figma', 'Adobe XD', 'Sketch', 'Framer'],
          'Prototyping': ['InVision', 'ProtoPie', 'Principle', 'Adobe XD'],
          'User Research': ['Hotjar', 'Google Analytics', 'UserTesting', 'Mixpanel']
        }
      },
      'seo-optimization': {
        features: [
          { title: 'On-Page SEO', description: 'Optimization of individual web pages to rank higher and earn more relevant traffic.' },
          { title: 'Technical SEO Audit', description: 'Comprehensive analysis of technical factors affecting search engine visibility.' },
          { title: 'Keyword Research', description: 'Strategic keyword analysis to target high-value search terms.' },
          { title: 'Content Strategy', description: 'Content planning and optimization to improve search rankings.' },
          { title: 'Local SEO', description: 'Optimization for local search results and Google Business Profile.' }
        ],
        technologies: {
          'SEO Tools': ['SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog'],
          'Analytics': ['Google Analytics', 'Google Search Console', 'Adobe Analytics'],
          'Content Tools': ['SurferSEO', 'Clearscope', 'Frase', 'MarketMuse']
        }
      },
      'maintenance-support': {
        features: [
          { title: 'Regular Updates', description: 'Keeping your website updated with the latest security patches and features.' },
          { title: 'Security Monitoring', description: '24/7 monitoring to protect against threats and vulnerabilities.' },
          { title: 'Performance Optimization', description: 'Continuous optimization to ensure fast loading times.' },
          { title: 'Content Updates', description: 'Regular content updates to keep your site fresh and relevant.' },
          { title: '24/7 Support', description: 'Round-the-clock technical support whenever you need it.' }
        ],
        technologies: {
          'Monitoring Tools': ['UptimeRobot', 'Pingdom', 'New Relic', 'Datadog'],
          'Security Tools': ['Wordfence', 'Sucuri', 'Cloudflare', 'SSL Certificates'],
          'Backup Solutions': ['BackupBuddy', 'UpdraftPlus', 'VaultPress', 'CodeGuard']
        }
      },
      'responsive-design': {
        features: [
          { title: 'Mobile-First Design', description: 'Designing for mobile devices first, then scaling up to larger screens.' },
          { title: 'Cross-Browser Testing', description: 'Testing across all major browsers to ensure compatibility.' },
          { title: 'Performance Optimization', description: 'Optimizing for fast loading on all device types.' },
          { title: 'Touch-Friendly Interfaces', description: 'Designing interfaces optimized for touch interactions.' },
          { title: 'Adaptive Layouts', description: 'Flexible layouts that adapt to any screen size.' }
        ],
        technologies: {
          'Responsive Frameworks': ['Bootstrap', 'Tailwind CSS', 'Foundation', 'Materialize'],
          'Testing Tools': ['BrowserStack', 'Sauce Labs', 'CrossBrowserTesting', 'LambdaTest'],
          'Performance Tools': ['Lighthouse', 'PageSpeed Insights', 'GTmetrix', 'WebPageTest']
        }
      },
      'website-hosting': {
        features: [
          { title: 'SSD Storage', description: 'Fast solid-state storage for improved performance and reliability.' },
          { title: 'SSL Certificate', description: 'Free SSL certificates to secure your website and build trust.' },
          { title: 'Daily Backups', description: 'Automated daily backups with easy restoration options.' },
          { title: 'CDN Integration', description: 'Content delivery network for faster content delivery worldwide.' },
          { title: 'Email Hosting', description: 'Professional email hosting with your domain name.' }
        ],
        technologies: {
          'Hosting Platforms': ['AWS', 'DigitalOcean', 'Vultr', 'Linode'],
          'CDN Services': ['Cloudflare', 'AWS CloudFront', 'Fastly', 'Akamai'],
          'Control Panels': ['cPanel', 'Plesk', 'DirectAdmin', 'Virtualmin']
        }
      }
    };

    return services[serviceSlug] || services['web-development'];
  };

  const serviceData = getServiceData(service);

  return (
    <section className="bg-secondary py-5 my-2 my-md-4 my-lg-5">
      <div className="container py-2 py-md-4 py-lg-5">
        <div className="row">
          <div className="col-12">
            <div className="card border-0 shadow-sm p-4">
              <h2 className="h4 mb-4">What's Included</h2>
              <ul className="list-unstyled">
                {serviceData.features.map((feature: any, index: number) => (
                  <li key={index} className="d-flex align-items-start mb-3">
                    <i className="bi bi-check-circle text-success me-3 mt-1"></i>
                    <div>
                      <h5 className="h6 mb-1">{feature.title}</h5>
                      <p className="text-muted small mb-0">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
