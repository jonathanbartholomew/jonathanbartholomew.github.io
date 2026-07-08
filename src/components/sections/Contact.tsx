// src/components/sections/Contact.tsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useMagnetic from "@/hooks/useMagnetic";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(
    null
  );

  const linkedinRef = useMagnetic<HTMLAnchorElement>();
  const githubRef = useMagnetic<HTMLAnchorElement>();
  const daedabyteRef = useMagnetic<HTMLAnchorElement>();
  const emailRef = useMagnetic<HTMLAnchorElement>();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "service_uraad3r",
        "template_1bz8svj",
        formRef.current!,
        "xVJMXKQYMwWPN-ruQ"
      );
      setStatus({
        success: true,
        message: "Message sent. I'll get back to you soon.",
      });
      formRef.current?.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      setStatus({
        success: false,
        message: "Something went wrong sending that. Try the email link instead.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-info">
        <h2 className="contact-headline">
          Let's build
          <br />
          <em>something.</em>
        </h2>
        <div className="contact-links">
          <a
            href="mailto:jonathan.bartholomew92@gmail.com"
            className="contact-link"
            ref={emailRef}
          >
            <span className="arrow-icon">&rarr;</span> Email
          </a>
          <a
            href="https://linkedin.com/in/jonathan-bartholomew-7130a2b1"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
            ref={linkedinRef}
          >
            <span className="arrow-icon">&rarr;</span> LinkedIn
          </a>
          <a
            href="https://github.com/jonathanbartholomew"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
            ref={githubRef}
          >
            <span className="arrow-icon">&rarr;</span> GitHub
          </a>
          <a
            href="https://daedabyte.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
            ref={daedabyteRef}
          >
            <span className="arrow-icon">&rarr;</span> Daedabyte
          </a>
        </div>
      </div>

      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <div className="contact-form-row">
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
        </div>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows={4} required></textarea>

        <button type="submit" className="contact-submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send message"}
        </button>

        {status && (
          <p
            className={`contact-status ${status.success ? "success" : "error"}`}
            role={status.success ? "status" : "alert"}
            aria-live={status.success ? "polite" : "assertive"}
          >
            {status.message}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
