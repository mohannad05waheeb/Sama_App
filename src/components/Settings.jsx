import { motion } from "framer-motion";
import { FiEdit, FiBell, FiMoon, FiLock, FiGlobe, FiUser } from "react-icons/fi";
import { useTranslation } from "react-i18next";
const Settings = () => {
  const { t } = useTranslation();
  const settingsOptions = [
    { id: 1, title: t("Profile"), icon: <FiUser />, description: t("Manage your profile settings.") },
    { id: 2, title: t("Notifications"), icon: <FiBell />, description: t("Customize notification preferences.") },
    { id: 3, title: t("theme"), icon: <FiMoon />, description: t("Switch between light and dark mode.") },
    { id: 4, title: t("privacy"), icon: <FiLock />, description: t("Review privacy policies and settings.") },
    { id: 5, title: t("Language"), icon: <FiGlobe />, description: t("Change the app language") },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t("Settings")}</h1>
        <div className="space-y-4">
          {settingsOptions.map((option) => (
            <motion.div
              key={option.id}
              className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: option.id * 0.2 }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-[#009688] text-white rounded-full text-xl">
                  {option.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{option.title}</h3>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </div>
              </div>
              <FiEdit className="text-gray-400 hover:text-gray-600 transition duration-300 cursor-pointer" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
export default Settings;