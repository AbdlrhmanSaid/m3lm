import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaTools,
  FaBroom,
  FaPaintRoller,
  FaHome,
  FaGooglePlay,
  FaApple,
  FaArrowRight,
} from "react-icons/fa";
import { useEffect } from "react";

function HeroSection() {
  const { t, i18n } = useTranslation();

  // Icons for home services
  const serviceIcons = [
    { icon: <FaTools className="text-3xl" />, name: "plumbing" },
    { icon: <FaBroom className="text-3xl" />, name: "cleaning" },
    { icon: <FaPaintRoller className="text-3xl" />, name: "painting" },
    { icon: <FaHome className="text-3xl" />, name: "maintenance" },
  ];

  // App store links (can be replaced with actual links when available)
  const appStores = [
    {
      icon: <FaGooglePlay className="text-2xl" />,
      name: "Google Play",
      soon: t("soon"),
    },
    {
      icon: <FaApple className="text-2xl" />,
      name: "App Store",
      soon: t("soon"),
    },
  ];

  useEffect(() => {
    document.dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <section
      className={`bg-white py-20 px-4 relative overflow-hidden ${
        i18n.language === "ar" ? "font-arabic rtl" : "font-english ltr"
      }`}
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#D97619] rounded-full"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-4xl md:text-6xl font-bold text-black mb-6 text-center"
        >
          {t("hero.title")}{" "}
          <motion.span
            className="text-[#D97619] inline-block"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {t("appName")}
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-700 max-w-2xl mx-auto mb-12 text-center"
        >
          {t("hero.subtitle")}
        </motion.p>

        {/* Services icons with animation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5,
              },
            },
          }}
        >
          {serviceIcons.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 md:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow w-36 md:w-44"
              variants={{
                hidden: { y: 30, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              whileHover={{ y: -5 }}
            >
              <div className="text-[#D97619] mb-3">{service.icon}</div>
              <span className="font-medium text-black text-center">
                {t(`services.${service.name}`)}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button with pulse animation */}
        <div className="flex justify-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a
              href="#cta"
              className="bg-[#D97619] hover:bg-[#c56815] text-white font-bold py-3 px-6 md:py-4 md:px-8 rounded-full text-lg shadow-lg transform transition-all duration-300 flex items-center gap-2"
            >
              {t("hero.cta")}
              <FaArrowRight className="inline" />
            </a>
          </motion.div>
        </div>

        {/* App Stores Section */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-lg text-gray-600 mb-4">{t("downloadApp")}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {appStores.map((store, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow w-40 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="text-[#D97619]">{store.icon}</div>
                  <div>
                    <div className="text-xs text-gray-500">{store.name}</div>
                    <div className="text-sm font-medium text-[#D97619]">
                      {store.soon}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Coming soon badge */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: [0, -5, 0],
          }}
          transition={{
            delay: 1.5,
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <span className="inline-block bg-[#D97619] bg-opacity-10 text-white px-6 py-2 rounded-full font-medium">
            {t("comingSoon")}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
