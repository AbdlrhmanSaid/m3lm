import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebook />, url: "https://facebook.com" },
    { icon: <FaTwitter />, url: "https://twitter.com" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaLinkedin />, url: "https://linkedin.com" },
  ];

  const footerLinks = [
    { title_ar: "الرئيسية", title_en: "Home", path: "/" },
    { title_ar: "الخدمات", title_en: "Services", path: "#services" },
    { title_ar: "شروط الاستخدام", title_en: "Terms of Use", path: "/terms" },
    {
      title_ar: "سياسة الخصوصية",
      title_en: "Privacy Policy",
      path: "/privacy",
    },
  ];

  return (
    <footer className="bg-gray-50 border-t mt-20 pt-12 pb-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold text-[#D97619]">M3lm</h3>
            <p className="text-gray-600">
              {lang === "ar"
                ? "حلول منزلية متكاملة بجودة عالية واحترافية"
                : "Integrated home solutions with high quality and professionalism"}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="text-gray-500 hover:text-[#D97619] text-lg"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              {lang === "ar" ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-600 hover:text-[#D97619] transition"
                  >
                    {lang === "ar" ? link.title_ar : link.title_en}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              {lang === "ar" ? "تواصل معنا" : "Contact Us"}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaPhone className="text-[#D97619] mt-1" />
                <span className="text-gray-600">+20 123 456 789</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-[#D97619] mt-1" />
                <span className="text-gray-600">info@m3lm.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#D97619] mt-1" />
                <span className="text-gray-600">
                  {lang === "ar" ? "القاهرة، مصر" : "Cairo, Egypt"}
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              {lang === "ar" ? "النشرة البريدية" : "Newsletter"}
            </h4>
            <p className="text-gray-600 mb-4">
              {lang === "ar"
                ? "اشترك ليصلك كل جديد عن خدماتنا وعروضنا"
                : "Subscribe to get updates on our services and offers"}
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder={lang === "ar" ? "بريدك الإلكتروني" : "Your email"}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D97619] focus:border-transparent"
                required
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#D97619] text-white px-4 py-2 rounded-lg"
              >
                {lang === "ar" ? "اشتراك" : "Subscribe"}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t pt-6 flex flex-col md:flex-row justify-center items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            © {currentYear} M3lm.{" "}
            {lang === "ar" ? "جميع الحقوق محفوظة" : "All rights reserved"}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
