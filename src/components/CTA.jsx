import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaPhone, FaWhatsapp, FaCalendarAlt } from "react-icons/fa";

function CTASection() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <section
      className="relative py-20 px-4  bg-opacity-10 overflow-hidden"
      id="cta"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-40 h-40 bg-[#D97619] rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#D97619] rounded-full opacity-5 translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Left side - Image */}
            <div className="h-64 md:h-auto">
              <img
                src="/man1.png"
                alt={t("cta.imageAlt")}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Right side - Content */}
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {t("cta.title")}
              </h2>
              <p className="text-gray-600 mb-6">{t("cta.description")}</p>

              {/* <div className="space-y-4">
                <motion.a
                  href="tel:+123456789"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg transition"
                >
                  <FaPhone className="text-[#D97619] text-xl" />
                  <span>+20 123 456 789</span>
                </motion.a>

                <motion.a
                  href="https://wa.me/20123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-lg transition"
                >
                  <FaWhatsapp className="text-xl" />
                  <span>{t("cta.whatsapp")}</span>
                </motion.a>
              </div> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;
