import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
      } else {
        setStatusMessage("Error: Unable to submit the form.");
      }
    } catch (error) {
      setStatusMessage(`Error: ${error.message}`);
    }

    // Reset form fields
    setFormData({ name: "", email: "", message: "" });

    // Clear status message after a delay
    setTimeout(() => setStatusMessage(""), 5000);
  };

  return (
    <main>
      <div className="overlay-text">Contact Us</div>
      <div className="contact-container">
        <div className="contact-form-container">
          <h2>Message Us</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
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
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
          {statusMessage && <p className="status-message">{statusMessage}</p>}
        </div>
        <div className="contact-info-container">
          <h1>Reach Us....</h1>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> Email: Richcoenterprise@gmail.com
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> Phone: 0207891224
          </p>
          <p>
            <FontAwesomeIcon icon={faMapMarkerAlt} /> Address: Accra Ghana
          </p>
        </div>
      </div>
    </main>
  );
};

export default Contact;
