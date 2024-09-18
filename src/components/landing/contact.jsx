import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "react-bootstrap";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  useEffect(() => {
    gsap.fromTo(
      ".contact-sa",
      {
        y: 100, // Start position below the view
        opacity: 0, // Initially hidden
      },
      {
        y: 0, // Final position (smoothly moving up)
        opacity: 1, // Fully visible
        duration: 1.5, // Duration of the animation (adjustable for smoothness)
        ease: "power3.out", // Smooth easing function
        scrollTrigger: {
          trigger: ".contact-sa", // Container to trigger the animation
          start: "top 80%", // Start when the top of the section hits 80% of the viewport
          end: "bottom center", // Ends when bottom hits the center of the viewport
          scrub: false, // Immediate animation when scrolled into view
          markers: false, // Set to true if you need to visualize the scroll trigger points
          toggleActions: "play none none reverse", // Play when in view, reverse when out
        },
      }
    );
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace these with your EmailJS details
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const userID = "YOUR_USER_ID";

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error("FAILED...", err);
      });
  };

  return (
    <section className="contact-sa section-padding pt-5  pb-5">
      <div className="container">
        <div className="box">
          <div className="row">
            <div className="col-lg-4">
              <div className="info">
                <div className="sec-head">
                  <h4>
                    Success is a team play, right?{" "}
                    <span className="sub-color inline">
                      Let’s work together!
                    </span>
                  </h4>
                </div>
                <div className="mt-50 md-mb80">
                  <h6>+068 5681 96 96</h6>
                  <span className="d-block sub-color fz-14 mt-10">
                    Call us for urgent
                  </span>
                  <a
                    href="/contact"
                    className="butn butn-md butn-bord butn-rounded mt-50"
                  >
                    <div className="d-flex align-items-center">
                      <span>Get Direction</span>
                      <span className="icon invert ml-10">
                        <img
                          src="../common/imgs/icons/arrow-top-right.svg"
                          alt=""
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1">
              <div className="contact-form">
                {submitted ? (
                  <h4>Thank you! Your message has been sent.</h4>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="controls row">
                      <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <label htmlFor="form_name">
                            Full Name <span className="star">*</span>
                          </label>
                          <input
                            id="form_name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <label htmlFor="form_email">
                            Email Address <span className="star">*</span>
                          </label>
                          <input
                            id="form_email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your email address"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <label htmlFor="form_subject">
                            Subject <span className="star">*</span>
                          </label>
                          <input
                            id="form_subject"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group mb-30">
                          <label htmlFor="form_budget">
                            Your Budget{" "}
                            <span className="opt sub-color">(Optional)</span>
                          </label>
                          <input
                            id="form_budget"
                            type="text"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            placeholder="A range of budget for project"
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <label htmlFor="form_message">Message</label>
                          <textarea
                            id="form_message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message here..."
                            rows="4"
                            required
                          ></textarea>
                        </div>
                        <div className="mt-60">
                          <Button
                            type="submit"
                            className="btn btn-md border-white rounded-5 text-white hover:border-white hover:bg-white hover:text-black"
                          >
                            <span className="text">Send Your Message</span>
                            <span className="icon invert ml-10">
                              <img
                                src="../common/imgs/icons/arrow-top-right.svg"
                                alt=""
                              />
                            </span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
