import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaUserLock,
  FaDatabase,
  FaCookie,
  FaBell,
} from "react-icons/fa";

function Privacy() {
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
            <FaShieldAlt className="text-[#D97619] text-2xl" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#D97619] mb-2">
            {t("privacy.title")}
          </h1>
          <p className="text-gray-600">{t("privacy.lastUpdated")}</p>
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
            <p className="text-lg leading-relaxed">
              {t("privacy.introduction")}
            </p>
          </motion.section>

          {/* Data Collection */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-xl font-bold text-[#D97619] mb-4 flex items-center gap-2">
              <FaDatabase />
              {t("privacy.dataCollectionTitle")}
            </h2>
            <div className="space-y-3">
              <p>{t("privacy.dataCollection1")}</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>{t("privacy.dataCollectionList1")}</li>
                <li>{t("privacy.dataCollectionList2")}</li>
                <li>{t("privacy.dataCollectionList3")}</li>
                <li>{t("privacy.dataCollectionList4")}</li>
              </ul>
            </div>
          </motion.section>

          {/* Data Usage */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-xl font-bold text-[#D97619] mb-4 flex items-center gap-2">
              <FaUserLock />
              {t("privacy.dataUsageTitle")}
            </h2>
            <div className="space-y-3">
              <p>{t("privacy.dataUsage1")}</p>
              <p>{t("privacy.dataUsage2")}</p>
            </div>
          </motion.section>

          {/* Cookies */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-xl font-bold text-[#D97619] mb-4 flex items-center gap-2">
              <FaCookie />
              {t("privacy.cookiesTitle")}
            </h2>
            <div className="space-y-3">
              <p>{t("privacy.cookies1")}</p>
              <p>{t("privacy.cookies2")}</p>
            </div>
          </motion.section>

          {/* Data Security */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-xl font-bold text-[#D97619] mb-4 flex items-center gap-2">
              <FaShieldAlt />
              {t("privacy.securityTitle")}
            </h2>
            <div className="space-y-3">
              <p>{t("privacy.security1")}</p>
              <p>{t("privacy.security2")}</p>
            </div>
          </motion.section>

          {/* Changes */}
          <motion.section variants={itemVariants} className="mb-8">
            <h2 className="text-xl font-bold text-[#D97619] mb-4 flex items-center gap-2">
              <FaBell />
              {t("privacy.changesTitle")}
            </h2>
            <p>{t("privacy.changesContent")}</p>
          </motion.section>

          {/* Contact */}
          <motion.section variants={itemVariants}>
            <h2 className="text-xl font-bold text-[#D97619] mb-4">
              {t("privacy.contactTitle")}
            </h2>
            <p>{t("privacy.contactContent")}</p>
          </motion.section>
        </motion.div>

        {/* Consent */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <p>{t("privacy.consent")}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Privacy;
