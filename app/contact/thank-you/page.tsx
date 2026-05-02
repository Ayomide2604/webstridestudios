'use client';

import { useEffect } from 'react';

export default function ThankYouPage() {
  useEffect(() => {
    // Add animation classes on mount
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.animate-fade-in');
      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add('animate-fade-in-active');
        }, index * 100);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container py-5 my-2 my-md-4 my-lg-5">
      <div className="text-center">
        {/* Animated Success Icon */}
        <div className="mb-4 animate-fade-in">
          <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center animate-scale-in" style={{width: "100px", height: "100px"}}>
            <i className="bi bi-check-lg fs-1 animate-bounce-in"></i>
          </div>
        </div>

        {/* Animated Title */}
        <div className="animate-fade-in">
          <h1 className="display-3 mb-4 fw-bold">Thank You! 🎉</h1>
        </div>

        {/* Animated Message */}
        <div className="animate-fade-in mb-5">
          <p className="fs-5 text-muted mb-3">
            Your message has been successfully sent to our team.
          </p>
          <p className="fs-5 text-muted mb-4">
            We typically respond within 24 hours during business days. Keep an eye on your inbox for a message from <strong>info@webstridestudios.ca</strong>.
          </p>
          <div className="bg-light rounded-3 p-4 mb-4 animate-slide-up">
            <h5 className="h6 text-primary mb-2">What happens next?</h5>
            <ul className="list-unstyled text-start small">
              <li className="d-flex align-items-center mb-2">
                <i className="bi bi-check-circle text-success me-2"></i>
                <span>We'll review your project requirements</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bi bi-check-circle text-success me-2"></i>
                <span>We'll prepare a personalized response</span>
              </li>
              <li className="d-flex align-items-center mb-2">
                <i className="bi bi-check-circle text-success me-2"></i>
                <span>We'll reach out to discuss your project</span>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-check-circle text-success me-2"></i>
                <span>We'll provide a detailed proposal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Animated Buttons */}
        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center animate-fade-in">
          <a href="/" className="btn btn-primary btn-lg px-4 animate-hover-lift">
            <i className="bi bi-house me-2"></i>
            Back to Home
          </a>
          <a href="/portfolio" className="btn btn-outline-primary btn-lg px-4 animate-hover-lift">
            <i className="bi bi-briefcase me-2"></i>
            View Our Work
          </a>
          <a href="/contact" className="btn btn-outline-secondary btn-lg px-4 animate-hover-lift">
            <i className="bi bi-envelope me-2"></i>
            Send Another Message
          </a>
        </div>

        {/* Additional Info */}
        <div className="mt-5 animate-fade-in">
          <p className="small text-muted">
            Need immediate assistance? Call us at <a href="tel:+14376855676" className="text-primary text-decoration-none">437-685-5676</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .animate-fade-in {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .animate-fade-in-active {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out;
        }
        
        .animate-bounce-in {
          animation: bounceIn 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out;
        }
        
        .animate-hover-lift {
          transition: all 0.3s ease;
        }
        
        .animate-hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes bounceIn {
          0% {
            transform: scale(0.3);
            opacity: 0;
          }
          50% {
            transform: scale(1.05);
          }
          70% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
