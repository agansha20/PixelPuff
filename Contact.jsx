import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <h1>Contact Us</h1>

      <p className="subtitle">
        We'd love to hear from you!
      </p>

      <div className="contact-container">

        <div className="contact-info">

          <h2>PixelPuff</h2>

          <p>📍 Chennai, Tamil Nadu</p>

          <p>📞 +91 98765 43210</p>

          <p>📧 support@pixelpuff.com</p>

          <p>🕒 Mon - Sat : 9 AM - 7 PM</p>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
}

export default Contact;