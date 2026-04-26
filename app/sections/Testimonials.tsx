import TestimonialCard from "../components/TestimonialCard";
import TestimonialStats from "../components/TestimonialStats";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Webstride Studios transformed our online presence completely. Their attention to detail and expertise in web development helped us increase our conversion rates by 40%. The team was professional, responsive, and delivered exactly what we needed.",
      author: "Sarah Johnson",
      position: "CEO at Edmonton Tech Solutions",
      avatar: "assets/img/avatar/05.jpg"
    },
    {
      quote: "Working with Webstride Studios was the best decision we made for our e-commerce platform. They built us a beautiful, fast, and secure online store that has significantly boosted our sales. Highly recommend their services!",
      author: "Michael Chen",
      position: "Owner at Calgary Retail Co.",
      avatar: "assets/img/avatar/06.jpg"
    },
    {
      quote: "The SEO optimization services from Webstride Studios have been game-changing for our business. We went from page 3 to page 1 on Google for our main keywords. Their ongoing support and maintenance have been invaluable.",
      author: "Amanda Roberts",
      position: "Marketing Director at Alberta Services",
      avatar: "assets/img/avatar/01.jpg"
    }
  ];

  return (
    <section className="container pb-5 mb-md-2 mb-xl-4">
      <div className="row pb-lg-2">
        <div className="col-md-5 mb-4 mb-md-0">
          <TestimonialStats />
        </div>
        <div className="col-md-7">
          <div className="card border-0 shadow-sm p-4 p-xxl-5">
            {/* Slider prev/next buttons + Quotation mark */}
            <div className="d-flex justify-content-between pb-4 mb-2">
              <span className="btn btn-icon btn-primary btn-lg shadow-primary pe-none">
                <i className="bx bxs-quote-left" />
              </span>
              <div className="d-flex">
                <button
                  type="button"
                  id="testimonial-prev"
                  className="btn btn-prev btn-icon btn-sm me-2"
                  aria-label="Previous"
                >
                  <i className="bx bx-chevron-left" />
                </button>
                <button
                  type="button"
                  id="testimonial-next"
                  className="btn btn-next btn-icon btn-sm ms-2"
                  aria-label="Next"
                >
                  <i className="bx bx-chevron-right" />
                </button>
              </div>
            </div>
            
            {/* Slider */}
            <div
              className="swiper mx-0 mb-md-n2 mb-xxl-n3"
              data-swiper-options='{
              "spaceBetween": 24,
              "loop": true,
              "pagination": {
                "el": ".swiper-pagination",
                "clickable": true
              },
              "navigation": {
                "prevEl": "#testimonial-prev",
                "nextEl": "#testimonial-next"
              }
            }'
            >
              <div className="swiper-wrapper">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="swiper-slide h-auto" 
                    data-swiper-tab={`#author-${index + 1}`}
                  >
                    <TestimonialCard
                      quote={testimonial.quote}
                      author={testimonial.author}
                      position={testimonial.position}
                      avatar={testimonial.avatar}
                    />
                  </div>
                ))}
              </div>
              {/* Pagination (bullets) */}
              <div className="swiper-pagination position-relative pt-3 mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
