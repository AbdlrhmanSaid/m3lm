import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BiWorld } from "react-icons/bi";

function Header() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.dir = newLang === "ar" ? "rtl" : "ltr";
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full px-6 py-4 flex justify-between items-center bg-white shadow-md sticky top-0 z-50 "
    >
      {/* Logo with animation */}
      <motion.div variants={itemVariants}>
        <Link to="/">
          <motion.img
            src="/logo.svg"
            alt="Logo"
            className="h-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>
      </motion.div>

      {/* Language toggle with animation */}
      <motion.div variants={itemVariants}>
        <motion.button
          onClick={toggleLanguage}
          className="text-sm font-medium text-[#D97619] border border-[#D97619] px-3 py-1 rounded hover:bg-[#D97619] hover:text-white transition"
          whileHover={{ scale: 1.05, boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="flex items-center gap-2">
            <span>{t("language")}</span>
            <span className="text-2xl">
              <BiWorld />
            </span>
          </span>
        </motion.button>
      </motion.div>
    </motion.header>
  );
}

export default Header;
