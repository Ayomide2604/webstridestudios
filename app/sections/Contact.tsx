export default function Contact() {
  return (
    <section className="bg-secondary py-5 my-2 my-md-4 my-lg-5">
      <div className="container py-2 py-md-4 py-lg-5">
        <h2 className="h1 text-center pt-1 pt-xl-2 mb-4">Get In Touch</h2>
        <p className="fs-lg text-muted text-center pb-4 mb-2 mb-lg-3">
          Ready to start your project? Let's discuss how we can help your Edmonton business succeed online.
        </p>
        
        <div className="row justify-content-center">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <div className="pe-lg-4">
              <h3 className="h4 mb-4">Contact Information</h3>
              <p className="text-muted mb-4">
                Have questions about your web project? Reach out to us and we'll get back to you as soon as possible.
              </p>
              
              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-envelope text-primary fs-4 me-3 mt-1"></i>
                <div>
                  <h6 className="mb-1">Email</h6>
                  <a href="mailto:contact@webstridestudios.ca" className="nav-link text-body p-0">
                    contact@webstridestudios.ca
                  </a>
                </div>
              </div>
              
              <div className="d-flex align-items-start mb-4">
                <i className="bi bi-telephone text-primary fs-4 me-3 mt-1"></i>
                <div>
                  <h6 className="mb-1">Phone</h6>
                  <a href="tel:+14376855676" className="nav-link text-body p-0">
                    437-685-5676
                  </a>
                </div>
              </div>
              
              <div className="d-flex align-items-start">
                <i className="bi bi-geo-alt text-primary fs-4 me-3 mt-1"></i>
                <div>
                  <h6 className="mb-1">Location</h6>
                  <span className="text-body">Edmonton, Canada</span>
                  <br />
                  <small className="text-muted">Serving businesses nationwide</small>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4 p-lg-5">
                <form className="needs-validation" noValidate>
                  <div className="row g-3 g-sm-4">
                    <div className="col-sm-6">
                      <label htmlFor="name" className="form-label">Name *</label>
                      <input 
                        type="text" 
                        id="name" 
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
                        className="form-control form-control-lg" 
                      />
                    </div>
                    
                    <div className="col-sm-6">
                      <label htmlFor="company" className="form-label">Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        className="form-control form-control-lg" 
                      />
                    </div>
                    
                    <div className="col-12">
                      <label htmlFor="service" className="form-label">Service Interest</label>
                      <select id="service" className="form-select form-select-lg">
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
                        className="form-control form-control-lg" 
                        rows={5} 
                        required
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
    </section>
  )
}
