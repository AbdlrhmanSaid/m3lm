import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaFileContract,
  FaShieldAlt,
  FaUserLock,
  FaExclamationTriangle,
} from "react-icons/fa";

function Terms() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRTL = lang === "ar";

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
    hidden: { y: 20, opacity: 0 },
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
    <div
      className={`min-h-screen bg-gray-50 text-gray-800 ${
        isRTL ? "font-cairo" : "font-poppins"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#D97619] bg-opacity-10 rounded-full mb-4">
            <FaFileContract className="text-[#D97619] text-2xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#D97619] mb-2">
            {t("terms.title")}
          </h1>
          <p className="text-gray-600">{t("terms.lastUpdated")}</p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="bg-white rounded-xl shadow-sm p-6 md:p-8"
        >
          {/* Introduction */}
          <motion.section variants={itemVariants} className="mb-8">
            <p className="text-lg leading-relaxed">{t("terms.introduction")}</p>
          </motion.section>

          {/* Terms Sections */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-xl font-bold text-[#D97619] mb-4 flex items-center gap-2">
              <FaShieldAlt />
              {t("terms.acceptanceTitle")}
            </h2>
            <div className="space-y-3">
              <p>{t("terms.acceptance1")}</p>
              <p>{t("terms.acceptance2")}</p>
            </div>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-xl font-bold text-[#D97619] mb-4 flex items-center gap-2">
              <FaUserLock />
              {t("terms.userResponsibilitiesTitle")}
            </h2>
            <ul className="space-y-3 list-disc pl-5">
              <li>{t("terms.userResponsibility1")}</li>
              <li>{t("terms.userResponsibility2")}</li>
              <li>{t("terms.userResponsibility3")}</li>
              <li>{t("terms.userResponsibility4")}</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-xl font-bold text-[#D97619] mb-4 flex items-center gap-2">
              <FaExclamationTriangle />
              {t("terms.prohibitedTitle")}
            </h2>
            <ul className="space-y-3 list-disc pl-5">
              <li>{t("terms.prohibited1")}</li>
              <li>{t("terms.prohibited2")}</li>
              <li>{t("terms.prohibited3")}</li>
              <li>{t("terms.prohibited4")}</li>
            </ul>
          </motion.section>

          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-xl font-bold text-[#D97619] mb-4">
              {t("terms.modificationsTitle")}
            </h2>
            <p>{t("terms.modificationsContent")}</p>
          </motion.section>

          <motion.section variants={itemVariants}>
            <h2 className="text-xl font-bold text-[#D97619] mb-4">
              {t("terms.contactTitle")}
            </h2>
            <p>{t("terms.contactContent")}</p>
          </motion.section>
        </motion.div>

        {/* Acknowledgment */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p>{t("terms.acknowledgment")}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Terms;
