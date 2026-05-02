interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  avatar?: string;
}

export default function TestimonialCard({ quote, author, position, avatar }: TestimonialCardProps) {
  const defaultAvatar = "assets/img/avatar.png";
  const avatarSrc = avatar || defaultAvatar;

  return (
    <figure className="card h-100 position-relative border shadow-sm">
      <blockquote className="card-body p-4 mb-0">
        <p className="fs-lg mb-0">
          {quote}
        </p>
      </blockquote>
      <figcaption className="card-footer border-0 d-flex align-items-center w-100 pb-3 pt-0">
        <div className="ms-4">
          <img
            src={avatarSrc}
            width={48}
            className="rounded-circle"
            alt={author}
          />
        </div>
        <div className="ps-4">
          <h5 className="fw-semibold lh-base mb-0">{author}</h5>
          <span className="fs-sm text-muted">
            {position}
          </span>
        </div>
      </figcaption>
    </figure>
  )
}
