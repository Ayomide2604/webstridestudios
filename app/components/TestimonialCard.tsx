interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  avatar: string;
}

export default function TestimonialCard({ quote, author, position, avatar }: TestimonialCardProps) {
  return (
    <figure className="card h-100 position-relative border-0 bg-transparent">
      <blockquote className="card-body p-0 mb-0">
        <p className="fs-lg mb-0">
          {quote}
        </p>
      </blockquote>
      <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-2">
        <img
          src={avatar}
          width={48}
          className="rounded-circle"
          alt={author}
        />
        <div className="ps-3">
          <h5 className="fw-semibold lh-base mb-0">{author}</h5>
          <span className="fs-sm text-muted">
            {position}
          </span>
        </div>
      </figcaption>
    </figure>
  )
}
