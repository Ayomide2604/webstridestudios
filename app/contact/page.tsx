export default function ContactPage() {
  return (
    <div className="container py-5 my-2 my-md-4 my-lg-5">
      <div className="text-center mb-5">
        <h1 className="display-4 mb-4">Contact Us</h1>
        <p className="fs-lg text-muted">
          Ready to start your project? Get in touch with our team and let's discuss how we can help your Edmonton business succeed online.
        </p>
      </div>

      {/* Side-by-Side Layout */}
      <div className="row g-4 g-lg-5">
        {/* Contact Icons - Left Side */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100 p-4">
            <h2 className="h4 mb-4">Get in Touch</h2>
            <p className="text-muted mb-4">
              Choose your preferred way to reach us. We're here to help with your web development needs.
            </p>
            
            <div className="space-y-4">
              <div className="d-flex align-items-start">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: "48px", height: "48px"}}>
                  <i className="bi bi-envelope fs-5"></i>
                </div>
                <div>
                  <h3 className="h6 mb-1">Email</h3>
                  <a href="mailto:info@webstridestudios.ca" className="text-primary text-decoration-none">
                    info@webstridestudios.ca
                  </a>
                  <p className="text-muted small mb-0">We'll respond within 24 hours</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: "48px", height: "48px"}}>
                  <i className="bi bi-telephone fs-5"></i>
                </div>
                <div>
                  <h3 className="h6 mb-1">Phone</h3>
                  <a href="tel:+14376855676" className="text-primary text-decoration-none">
                    437-685-5676
                  </a>
                  <p className="text-muted small mb-0">Mon-Fri 9AM-6PM MST</p>
                </div>
              </div>
              
              <div className="d-flex align-items-start">
                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center me-3 flex-shrink-0" style={{width: "48px", height: "48px"}}>
                  <i className="bi bi-chat-dots fs-5"></i>
                </div>
                <div>
                  <h3 className="h6 mb-1">Live Chat</h3>
                  <a href="#" className="text-primary text-decoration-none">
                    Start Chat
                  </a>
                  <p className="text-muted small mb-0">Available during business hours</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-top">
              <h5 className="h6 mb-3">Why Choose Webstride Studios?</h5>
              <ul className="list-unstyled small">
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Edmonton-based web development experts
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Custom solutions for every business
                </li>
                <li className="d-flex align-items-center mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Ongoing support and maintenance
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form - Right Side */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-lg-5">
              <h2 className="h3 mb-4">Send Us a Message</h2>
              <p className="text-muted mb-4">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
              
              <form 
                action="https://api.web3forms.com/submit" 
                method="POST" 
                className="needs-validation"
                noValidate
              >
                <input type="hidden" name="access_key" value="3ece9aec-1979-4aff-b2bb-e325979a7403" />
                <input type="hidden" name="subject" value="New Contact Form Submission from Webstride Studios" />
                <input type="hidden" name="from_name" value="Webstride Studios Contact Form" />
                <input type="hidden" name="redirect" value={`${typeof window !== 'undefined' ? window.location.origin : ''}/contact/thank-you`} />
                <div className="row g-3 g-sm-4">
                  <div className="col-sm-6">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      className="form-control form-control-lg" 
                      required 
                    />
                    <div className="invalid-feedback">
                      Please enter your name.
                    </div>
                  </div>
                  
                  <div className="col-sm-6">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className="form-control form-control-lg" 
                      required 
                    />
                    <div className="invalid-feedback">
                      Please provide a valid email.
                    </div>
                  </div>
                  
                  <div className="col-sm-6">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      className="form-control form-control-lg" 
                    />
                  </div>
                  
                  <div className="col-sm-6">
                    <label htmlFor="company" className="form-label">Company</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company"
                      className="form-control form-control-lg" 
                    />
                  </div>
                  
                  <div className="col-12">
                    <label htmlFor="service" className="form-label">Service Interest</label>
                    <select id="service" name="service" className="form-select form-select-lg">
                      <option value="">Select a service...</option>
                      <option value="web-development">Web Development</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="seo">SEO Optimization</option>
                      <option value="maintenance">Maintenance & Support</option>
                      <option value="hosting">Website Hosting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">Message *</label>
                    <textarea 
                      id="message" 
                      name="message"
                      className="form-control form-control-lg" 
                      rows={5} 
                      required
                      placeholder="Tell us about your project..."
                    ></textarea>
                    <div className="invalid-feedback">
                      Please enter a message.
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-lg w-100">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
