import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    image: "/man1.png",
    title_ar: "تصليح",
    title_en: "Repairing",
    desc_ar: "إصلاحات منزلية بجودة عالية",
    desc_en: "Professional home repairs",
  },
  {
    id: 2,
    image: "/man2.png",
    title_ar: "دهانات",
    title_en: "Painting",
    desc_ar: "ألوان مميزة وتشطيبات فاخرة",
    desc_en: "Premium colors & luxury finishes",
  },
  {
    id: 3,
    image: "/man3.png",
    title_ar: "تنظيف",
    title_en: "Cleaning",
    desc_ar: "تنظيف عميق بمعايير عالمية",
    desc_en: "Deep cleaning to global standards",
  },
];

function ServicesCards() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language;

  return (
    <section className="py-16 px-4  bg-[#D97619]" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
        >
          {t("ourServices")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Image Container with fixed aspect ratio */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title_en}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {lang === "ar" ? service.title_ar : service.title_en}
                </h3>
                <p className="text-gray-600 mb-4">
                  {lang === "ar" ? service.desc_ar : service.desc_en}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesCards;
