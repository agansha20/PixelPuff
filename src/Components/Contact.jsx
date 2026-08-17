import "./Contact.css";

import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setStatus("Sending...");

    try {

      // 1. Send order details to YOUR email
      await emailjs.send(
        "service_dt6f4x3",
        "template_ft9t49p",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        "p4Do4TGGfHHQyRNe_"
      );

      // 2. Send thank-you email to CUSTOMER
      await emailjs.send(
        "service_dt6f4x3",
        "template_pg44g2n",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        "p4Do4TGGfHHQyRNe_"
      );

      setStatus(
        "Thank you for your order! 🎁 We received your message. Your customized gift will reach you within the expected time."
      );

      // Clear form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {

      console.log("Email error:", error);

      setStatus(
        "Something went wrong. Please try again."
      );
    }
  };

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

          <p>📧 supportpixelpuff@gmail.com</p>

          <p>🕒 Mon - Sat : 9 AM - 7 PM</p>

        </div>


        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message / Order Details"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

          {status && (
            <p className="status-message">
              {status}
            </p>
          )}

        </form>

      </div>

    </div>
  );
}

export default Contact;