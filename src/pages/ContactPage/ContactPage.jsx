import { useState } from "react";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaLinkedin,
} from "react-icons/fa";

import PageBanner from "../../components/PageBanner/PageBanner";
import contactData from "../../data/contactData";

import "./ContactPage.css";

const ContactPage = () => {
  const {
    pageTitle,
    bannerImage,
    intro,
    contactInfo,
    form,
    map,
  } = contactData;

  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailSubject = encodeURIComponent(
      formData.subject || `Website Inquiry - ${formData.company}`
    );

    const emailBody = encodeURIComponent(
`Company Name:
${formData.company}

Name:
${formData.name}

Email:
${formData.email}

Phone:
${formData.phone}

Subject:
${formData.subject}

Message:
${formData.message}`
    );

    window.location.href =
      `mailto:${contactInfo.email}?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <>
      <PageBanner
        title={pageTitle}
        breadcrumb="Home / Contact Us"
        bannerImage={bannerImage}
      />

      <section className="contact-page">

        {/* Intro */}

        <div className="contact-intro">

          <h2>{intro.title}</h2>

          <p>{intro.subtitle}</p>

        </div>

        {/* Contact Section */}

        <div className="contact-container">

          {/* Contact Form */}

          <div className="contact-form-card">

            <h3>Send Us a Message</h3>

            <form onSubmit={handleSubmit}>

              <div className="form-grid">

                <input
                  type="text"
                  name="company"
                  placeholder={form.companyPlaceholder}
                  value={formData.company}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="name"
                  placeholder={form.namePlaceholder}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder={form.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="phone"
                  placeholder={form.phonePlaceholder}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>

              <input
                type="text"
                name="subject"
                placeholder={form.subjectPlaceholder}
                className="full-width"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <textarea
                rows="6"
                name="message"
                placeholder={form.messagePlaceholder}
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit">
                {form.buttonText}
              </button>

            </form>

          </div>

          {/* Contact Details */}

          <div className="contact-details-card">

            <h3>Contact Information</h3>

            <div className="contact-item">

              <FaPhoneAlt className="contact-icon" />

              <div>

                {contactInfo.phoneNumbers.map((phone, index) => (
                  <p key={index}>{phone}</p>
                ))}

              </div>

            </div>

            <div className="contact-item">

              <FaEnvelope className="contact-icon" />

              <a href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>

            </div>

            <div className="contact-item">

              <FaClock className="contact-icon" />

              <p>{contactInfo.workingHours}</p>

            </div>

            <div className="contact-item">

              <FaMapMarkerAlt className="contact-icon" />

              <div>

                <strong>{contactInfo.address.title}</strong>

                <p>{contactInfo.address.line1}</p>

                <p>{contactInfo.address.line2}</p>

                <p>{contactInfo.address.line3}</p>

                <p>{contactInfo.address.city}</p>

              </div>

            </div>

            <div className="contact-item">

              <FaLinkedin className="contact-icon" />

              <a
                href={contactInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                Visit our LinkedIn
              </a>

            </div>

          </div>

        </div>

        {/* Google Map */}

        <div className="map-section">

          <iframe
            title="GPTI Location"
            src={map.embedUrl}
            loading="lazy"
            allowFullScreen
          />

        </div>

      </section>
    </>
  );
};

export default ContactPage;