"use client";
import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { contact } from "../services/support.service";
import FooterNav from "../Components/FooterNav";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await contact(formData);
      console.log("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar selectedItem="Contact" />
      <div className="contact-page d-flex flex-column align-items-center">
        <div className="contact-head d-flex flex-column align-items-center ">
          <h1>Contact Us</h1>
          <p className="text-center">
            Reach out to us for any inquiries, feedback, or support. Our team is
            ready to assist you.
          </p>
        </div>

        <div className="contact-details d-flex gap-4 justify-content-center">
          <div className="contact-detail">
            <img src="/assets/location.png"></img>
            <div>
              <h5>ADDRESS</h5>
              <p>191, shiv nagar, tarsa road, kanhan 441401
naturemonk01@gmail.com</p>
             
            </div>
          </div>

          <div className="contact-detail">
            <img src="assets/mail.png"></img>
            <div>
              <h5>MAIL US</h5>
            <p style={{ wordBreak: "break-word" }}>
 naturemonk01@gmail.com
</p>


            </div>
          </div>

          <div className="contact-detail">
            <img src="assets/call.png"></img>
            <div>
              <h5>CALL US</h5>
              <p>+91 8208334548</p>
              
            </div>
          </div>
        </div>

        <div className="contact-main d-flex justify-content-center">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3365.56330996714!2d79.24041947471979!3d21.229131280867506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4cf2c00bab6a7%3A0x6f55f1a474b8f4ea!2sTarsa%20Rd%2C%20Maharashtra%20441401!5e1!3m2!1sen!2sin!4v1764846492616!5m2!1sen!2sin"
              className="iframe"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
           
          </div>
          <div className="contact-form">
            <h2>Get In Touch</h2>
            <form
              className="d-flex flex-column align-items-center"
              onSubmit={handleSubmit}
            >
              <div className="contact-div row gx-0 gap-3">
                <div className="col">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="contact-div row gx-0 gap-3">
                <div className="col">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="website"
                    placeholder="Website"
                    value={formData.website}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="contact-div">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="register">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
       <FooterNav selectedItem="Menu" />
      <Footer />
    </>
  );
};

export default page;
