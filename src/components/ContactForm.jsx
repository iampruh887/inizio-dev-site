import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSflGN9sE_2bnEMfadxxnhPtqOoCqNvkM3bvzeEbEetpbhQFqA/formResponse";

  const INPUT_NAMES = {
    name: "entry.1548877943",
    email: "entry.98171686",
    phone: "entry.506744197",
    company: "entry.733658251",
    message: "entry.1033800333",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = document.createElement("form");
    form.method = "POST";
    form.action = GOOGLE_FORM_URL;
    form.target = "hidden_iframe"; // Prevents page reload

    // Append hidden input fields with Google Form entry IDs
    Object.keys(INPUT_NAMES).forEach((key) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = INPUT_NAMES[key];
      input.value = formData[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);

    setSubmitted(true);
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-form-container">
        <h1>Let's Get in Touch</h1>

        {submitted ? (
          <p className="thank-you-message">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">
                  Phone <span className="optional">(Optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">
                  Company <span className="optional">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group message-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="send-message-btn">
              SEND MESSAGE
            </button>
          </form>
        )}
      </div>

      <div className="contact-info-container">
        <h2>Send A Message, We Will Get Back To You.</h2>

        <div className="contact-info">
          <div className="info-item">
            <span className="icon">✉️</span>
            <span className="text">ecell@iiitg.ac.in</span>
          </div>

          {/*
                    <div className="info-item">
                        <span className="icon">📞</span>
                        <span className="text">+91 8986461540</span>
                    </div>

                    <div className="info-item">
                        <span className="icon">📞</span>
                        <span className="text">+91 XXXXX XXXXX</span>
                    </div> */}
        </div>

        <div className="address-section">
          <h3>Our Address</h3>
          <p>Bongora, Guwahati -781015</p>
          <p>Assam, INDIA</p>
          <p>Phone: 0361 2801084</p>
          <p>Email: registrar@iitg.Ac.In</p>
        </div>
      </div>

      {/* Hidden iframe to prevent redirection */}
      <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
    </div>
  );
};

export default ContactForm;
