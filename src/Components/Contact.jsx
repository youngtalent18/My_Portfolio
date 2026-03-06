import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_4rur9ho",
        "template_56n7r4h",
        form.current,
        "j4ngV6Kni98vsbQg2"
      )
      .then(() => {
        toast.success("Message sent successfully!", {
          position: "top-center",
          duration: 4000,
        });

        e.target.reset();
      })
      .catch(() => {
        toast.error("Connection failed...", {id: "failed"});
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="contact-form">
      <form onSubmit={sendEmail} ref={form} className="form-container">
        <h2>Contact Me</h2>

        <div className="form-group">
          <label>Full Name</label>
          <input name="your_name" type="text" placeholder="Enter your full name" required />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input name="user_phone" type="tel" placeholder="Enter your phone number" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input name="your_email" type="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" placeholder="Write your message..." rows="5"></textarea>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? <span className="loader"></span> : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;