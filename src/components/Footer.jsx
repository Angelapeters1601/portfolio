import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaFacebook,
  FaPhone,
  FaMapMarkerAlt,
  FaPaintBrush,
  FaCode,
  FaUserTie,
  FaFile,
  FaHome,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-customBlack border-t border-amber-700/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-4xl font-bold font-sevillana tracking-wide text-amber-100">
              Nwattah Angela
            </h2>
            <p className="text-amber-50 font-sans text-lg">
              Developing intuitive digital experiences that balance aesthetic
              appeal with seamless functionality and accessibility.
            </p>

            <div className="flex space-x-4 pt-4">
              {[
                {
                  icon: <FaGithub size={20} />,
                  url: "https://github.com/angelapeters1601",
                  label: "GitHub",
                },
                {
                  icon: <FaLinkedin size={20} />,
                  url: "https://linkedin.com/in/nwattah-angela",
                  label: "LinkedIn",
                },
                {
                  icon: <FaTwitter size={20} />,
                  url: "https://twitter.com/mavoolumma",
                  label: "Twitter",
                },
                {
                  icon: <FaFacebook size={20} />,
                  url: "https://facebook.com/nwattah.angela",
                  label: "Facebook",
                },
                {
                  icon: <FaEnvelope size={20} />,
                  url: "mailto:angelnwattah@gmail.com",
                  label: "Email",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-100 bg-amber-800 hover:bg-amber-800 p-3 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-md"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-lilita text-amber-100 uppercase tracking-wider">
              <FaCode className="inline mr-2" />
              Explore
            </h3>
            <ul className="space-y-4 font-sans text-lg">
              {[
                {
                  icon: <FaHome className="mr-2 text-amber-200" />,
                  text: "Home",
                  url: "/",
                },
                {
                  icon: <FaUserTie className="mr-2 text-amber-200" />,
                  text: "About",
                  url: "/about",
                },
                {
                  icon: <FaFile className="mr-2 text-amber-200" />,
                  text: "Resume",
                  url: "/resume",
                },
                {
                  icon: <FaCode className="mr-2 text-amber-200" />,
                  text: "Projects",
                  url: "/projects",
                },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.url}
                    className="text-amber-50 hover:text-amber-200 flex items-center transition-colors duration-300"
                  >
                    {item.icon} {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-2xl font-lilita text-amber-100 uppercase tracking-wider">
              <FaMapMarkerAlt className="inline mr-2" />
              Contact
            </h3>
            <ul className="space-y-4 font-sans text-lg">
              <li className="flex items-start">
                <FaPhone className="text-amber-200 mt-1 mr-3 flex-shrink-0" />
                <a
                  href="tel:+2348104352294"
                  className="text-amber-50 hover:text-amber-200 transition-colors duration-300"
                >
                  +234 810 435 2294
                </a>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-amber-200 mt-1 mr-3 flex-shrink-0" />
                <a
                  href="mailto:angelnwattah@gmail.com"
                  className="text-amber-50 hover:text-amber-200 transition-colors duration-300"
                >
                  angelnwattah@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-amber-200 mt-1 mr-3 flex-shrink-0" />
                <span className="text-amber-50">Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-amber-700/30 my-12"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-mono text-amber-200 text-sm">
            © {currentYear} Nwattah Angela. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#privacy"
              className="text-amber-200 hover:text-amber-100 font-sans text-sm transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-amber-200 hover:text-amber-100 font-sans text-sm transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="text-amber-200 hover:text-amber-100 font-sans text-sm transition-colors duration-300"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
