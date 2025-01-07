import { useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useTranslation } from "react-i18next";  
const Profile = () => { 
  const { t } = useTranslation();  
  const profileData = [
    {
      title: t("Name"),  
      content: t("Name"),  
      icon: "https://via.placeholder.com/150",
      field: "name"
    },
    {
      title: t("Orders"),  
      content: t("OnGoing Orders, Recent Orders"),
      icon: "https://via.placeholder.com/150",
      field: "orders"
    },
    {
      title: t("Language"),  
      content: t("Select Your Language here"),
      icon: "https://via.placeholder.com/150",
      field: "language"
    },
    {
      title: t("Settings"), 
      content: t("App Settings, Dark Mode"),
      icon: "https://via.placeholder.com/150",
      field: "settings"
    },
    {
      title: t("Terms & Conditions"), 
      content: t("T&C For Use of platform"),
      icon: "https://via.placeholder.com/150",
      field: "terms"
    },
  ];
  const [profile, setProfile] = useState({
    name: "John Doe",
    orders: "OnGoing Orders, Recent Orders",
    language: "Select Your Language here",
    settings: "App Settings, Dark Mode",
    terms: "T&C For Use of platform",
  }); 
  const [activeField, setActiveField] = useState(""); 
  const openEditPopup = (field) => {
    setActiveField(field);
  };
  const closeEditPopup = () => {
    setActiveField("");
  };
  const handleSaveName = () => {
    setProfile({
      ...profile,
      [activeField]: profile[activeField],
    });
    closeEditPopup();
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{t("Profile")}</h1> {/* ترجمة العنوان */}
            <div className="relative mb-6">
              <img
                src="https://via.placeholder.com/150"
                alt="User"
                className="w-36 h-36 rounded-full mx-auto border-4 border-gray-300"
              />
            </div>
            <div className="space-y-6">
              {profileData.map((item, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-md">
                  <div className="flex items-center space-x-4">
                    <img src={item.icon} alt={item.title} className="w-12 h-12 rounded-full" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{profile[item.field]}</p>
                    </div>
                  </div>
                  <FiEdit
                    className="text-gray-500 cursor-pointer hover:text-gray-700"
                    size={20}
                    onClick={() => openEditPopup(item.field)}
                  />
                </div>
              ))}
            </div>
          </div> 
          {activeField && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{t("Edit")} {activeField}</h3>  
                <input
                  type="text"
                  value={profile[activeField]}
                  onChange={(e) => setProfile({ ...profile, [activeField]: e.target.value })}
                  className="w-full p-2 border rounded-lg mb-4"
                />
                <div className="flex justify-end space-x-4">
                  <button
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                    onClick={closeEditPopup}
                  >
                    {t("Cancel")} 
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                    onClick={handleSaveName}
                  >
                    {t("Save")} 
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};
export default Profile;