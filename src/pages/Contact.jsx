import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [notfication, setNotification] = useState();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification(null);

    try {
      const response = await emailjs.sendForm(
        "service_x0p7qxm",
        "template_rvcihgf",
        form.current
      );
      setNotification({
        type: "success",
        message: "Message sent successfully!",
      });
      form.current.reset();
    } catch (error) {
      setNotification({
        type: "error",
        message: error.text || "Network error. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    emailjs.init("1rD7rvESdpGFoWWTN");
    console.log("EmailJS initialized");
  }, []);

  return (
    <div className="min-h-screen bg-customBlack text-amber-50">
      {/* Hero Section */}
      <section className="relative pt-24 mt-20 pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(120,53,15,0.2)_0%,_rgba(0,0,0,0.8)_100%)] opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-playfair tracking-widest text-amber-100 mb-4">
            Let's Build Something Amazing!
          </h1>
          <p className="text-xl font-sans text-amber-100/80 max-w-2xl">
            I'm currently available for freelance work or full-time positions.
            Reach out and let's discuss how I can help bring your vision to
            life.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-amber-900/10 border border-amber-800/30 rounded-xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-lilita text-amber-100 mb-6 flex items-center">
              <FaPaperPlane className="mr-3 text-amber-200" />
              Send Me a Message
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-amber-100/80 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="w-full bg-amber-900/20 border border-amber-800/40 rounded-lg px-4 py-3 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600/50 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-amber-100/80 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="w-full bg-amber-900/20 border border-amber-800/40 rounded-lg px-4 py-3 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600/50 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-amber-100/80 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  className="w-full bg-amber-900/20 border border-amber-800/40 rounded-lg px-4 py-3 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-600/50 focus:border-transparent"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-amber-700 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center disabled:opacity-50"
              >
                <FaPaperPlane className="mr-2" />
                {isLoading ? "Sending..." : "Send Message"}
              </button>

              {isSuccess && (
                <div className="p-3 bg-green-100/80 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg text-center">
                  Message sent successfully!
                </div>
              )}

              {isError && (
                <div className="p-3 bg-red-100/80 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-lg text-center">
                  Failed to send. Please try again.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-amber-900/10 border border-amber-800/30 rounded-xl p-8">
              <h2 className="text-2xl font-lilita text-amber-100 mb-6">
                Contact Information
              </h2>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-amber-800/30 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-amber-200 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-amber-100/80 font-medium">Email</h3>
                    <a
                      href="mailto:angelnwattah@gmail.com"
                      className="text-amber-100 hover:text-amber-50 transition-colors"
                    >
                      angelnwattah@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-amber-800/30 p-3 rounded-full mr-4">
                    <FaPhone className="text-amber-200 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-amber-100/80 font-medium">Phone</h3>
                    <a
                      href="tel:+2348104352294"
                      className="text-amber-100 hover:text-amber-50 transition-colors"
                    >
                      +234 810 435 2294
                    </a>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="bg-amber-800/30 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-amber-200 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-amber-100/80 font-medium">Location</h3>
                    <p className="text-amber-100">Lagos, Nigeria</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="bg-amber-900/10 border border-amber-800/30 rounded-xl p-8">
              <h2 className="text-2xl font-lilita text-amber-100 mb-6">
                Connect With Me
              </h2>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/nwattah-angela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-amber-800/40 hover:bg-amber-700/60 text-amber-100 px-5 py-3 rounded-lg transition-all"
                >
                  <FaLinkedin className="mr-2" />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/angelapeters1601"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-amber-800/40 hover:bg-amber-700/60 text-amber-100 px-5 py-3 rounded-lg transition-all"
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>

                <a
                  href="https://twitter.com/mavoolumma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-amber-800/40 hover:bg-amber-700/60 text-amber-100 px-5 py-3 rounded-lg transition-all"
                >
                  <FaTwitter className="mr-2" />
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
