"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterSignupForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("https://inputhaven.com/api/v1/submit", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") return <p className="text-light fs-sm">Thank you! Your submission has been received.</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="_form_id" value="a0945188cffaf629ebbea08b8716a7ba" />
      
      <label htmlFor="subscr-email" className="form-label text-light">
        Subscribe to our newsletter
      </label>
      <div className="input-group">
        <input
          type="email"
          id="subscr-email"
          name="email"
          className="form-control rounded-start ps-5"
          placeholder="Your email"
          required
        />
        <i className="bx bx-envelope fs-lg text-muted position-absolute top-50 start-0 translate-middle-y ms-3 zindex-5" />
        <button 
          type="submit" 
          className="btn btn-primary"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Subscribe"}
        </button>
      </div>
      
      {status === "error" && (
        <p className="text-danger fs-sm mt-2">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
