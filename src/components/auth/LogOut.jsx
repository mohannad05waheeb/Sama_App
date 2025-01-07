import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom"; 
import Login from "./login";
const LogOut = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); 
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const handleConfirmLogout = () => {   
    console.log("Logged out");
    setIsLoginOpen(true);  
  };
  const handleCancel = () => {
    console.log("Logout canceled");
    navigate("/");  
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#000080]">
      <div className="bg-[#001f3f] p-6 rounded-md w-[100%] max-w-md text-center">
        <h2 className="text-white text-2xl font-bold mb-4">{t("Are you sure?")}</h2>
        <p className="text-white opacity-70 mb-6">{t("You are about to log out of your account.")}</p>
        <div className="flex justify-between">
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white py-2 px-4 rounded-md font-bold hover:bg-gray-600"
          >
            {t("Cancel")}
          </button>
          <button
            onClick={handleConfirmLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-md font-bold hover:bg-red-600"
          >
            {t("LogOut")}
          </button>
        </div>
      </div>
      {isLoginOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-20 bg-black bg-opacity-70">
          <div className="p-4 rounded-lg shadow-lg w-80 min-h-[40px] flex justify-center items-center relative">
            <span
              className="absolute top-24 -right-4 text-2xl cursor-pointer"
              onClick={() => setIsLoginOpen(false)}  
            >
              <i className="fas fa-times text-white"></i>
            </span>
            <Login />
          </div>
        </div>
      )}
    </div>
  );
};
export default LogOut;