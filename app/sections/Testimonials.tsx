import TestimonialCard from "../components/TestimonialCard";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Webstride Studios transformed our online presence completely. Their attention to detail and expertise in web development helped us increase our conversion rates by 40%. The team was professional, responsive, and delivered exactly what we needed.",
      author: "Sarah Johnson",
      position: "CEO at Edmonton Tech Solutions",
      avatar: null
    },
    {
      quote: "Working with Webstride Studios was the best decision we made for our e-commerce platform. They built us a beautiful, fast, and secure online store that has significantly boosted our sales. Highly recommend their services!",
      author: "Michael Chen",
      position: "Owner at Calgary Retail Co.",
      avatar: null

    },
    {
      quote: "The SEO optimization services from Webstride Studios have been game-changing for our business. We went from page 3 to page 1 on Google for our main keywords. Their ongoing support and maintenance have been invaluable.",
      author: "Amanda Roberts",
      position: "Marketing Director at Alberta Services",
      avatar: null
    }
  ];

  return (
    <section className="container py-5 my-2 my-md-4 my-lg-5">
      <div className="text-center mb-5">
        <h2 className="h1 mb-4">What Our Clients Say</h2>
        <p className="fs-lg text-muted">
          Don't just take our word for it - hear from our satisfied clients about their experience working with Webstride Studios.
        </p>
      </div>
      
      <div className="card border-0 shadow-sm p-4 p-xxl-5">
        {/* Slider prev/next buttons */}
        <div className="d-flex justify-content-end pb-4 mb-2">
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
              "spaceBetween": 30,
              "slidesPerView": 1,
              "loop": true,
              "pagination": {
                "el": ".swiper-pagination",
                "clickable": true
              },
              "navigation": {
                "prevEl": "#testimonial-prev",
                "nextEl": "#testimonial-next"
              },
              "breakpoints": {
                "768": {
                  "slidesPerView": 2,
                  "spaceBetween": 60
                }
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
    </section>
  )
}
