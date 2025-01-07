import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Login from "./auth/login";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const languageMenuRef = useRef(null);
  const menuRef = useRef(null);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("ar");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const toggleLanguageMenu = () => {
    setLanguageMenuOpen(!languageMenuOpen);
  };
  const handleClickOutside = (event) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target) &&
      languageMenuRef.current && !languageMenuRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
      setLanguageMenuOpen(false);
    }
  };
  useEffect(() => {
    if (isMenuOpen || languageMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, languageMenuOpen]);
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setLanguageMenuOpen(false);
  };
  const toggleLoginPopup = () => {
    setIsLoginOpen(!isLoginOpen);
  };
  return (
    <header className="w-full h-[65px] bg-[#009688] text-white p-5">
      <nav className="flex justify-between">
        <div className="flex gap-4">
          <span className="text-2xl cursor-pointer" onClick={toggleMenu}>
            <i className="fas fa-bars"></i>
          </span>
          <button
            className="font-bold uppercase mb-4"
            onClick={() => window.location.reload()}
          >
            Sama App
          </button>
          <h2>
            {t("Hello")} <br />
            <span className="font-bold">Bader Sr</span>
          </h2>
        </div>
        <div>
          <div className="flex gap-4">
            <span className="text-2xl cursor-pointer" onClick={toggleLoginPopup}>
              <i className="fas fa-user-circle"></i>
            </span>
            <button
              onClick={toggleLanguageMenu}
              className="text-xl mt-1"
            >
              {language === "ar" ? "Arabic" : "English"}
            </button>
            {languageMenuOpen && (
              <div
                ref={languageMenuRef}
                className="absolute top-[50px] right-0 bg-white shadow-lg rounded-lg p-4 w-40 z-10 text-black"
              >
                <div
                  className="cursor-pointer py-1 px-2 hover:bg-gray-200"
                  onClick={() => handleLanguageChange("ar")}
                >
                  Arabic
                </div>
                <div
                  className="cursor-pointer py-1 px-2 hover:bg-gray-200"
                  onClick={() => handleLanguageChange("en")}
                >
                  English
                </div>
                <div className="cursor-pointer py-1 px-2 hover:bg-gray-200">
                  French
                </div>
                <div className="cursor-pointer py-1 px-2 hover:bg-gray-200">
                  Etc etc
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div
        ref={menuRef}
        className={`text-[#009688] fixed top-0 left-0 h-full w-80 bg-white text-white p-5 flex flex-col transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 999 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="font-bold uppercase text-[#009688]">Sama App</h1>
          <span
            className="text-2xl cursor-pointer text-black"
            onClick={toggleMenu}
          >
            <i className="fas fa-times"></i>
          </span>
        </div>
        <div className="flex gap-4 text-[#009688]">
          <h2 className="font-bold">Bader Sr</h2>
          <span className="font-bold">96170660339</span>
        </div>
        <div className="uppercase font-bold mt-4 bg-green-500 text-black p-1 rounded-md">
          {t("Admin")}
        </div>
        <div className="flex justify-between items-center mt-4 border-b border-gray-100 pb-2">      
        </div>
        <div className="mt-4 pb-4 text-[#009688]">
          <Link to="/profile" onClick={() => {setIsMenuOpen(false)}}>
            <h1 className="font-bold mb-4 border-b border-gray-100 pb-2">{t("Profile")}</h1>
          </Link>
          <Link to="/settings" onClick={() => {setIsMenuOpen(false)}}>
            <h1 className="font-bold mb-4 border-b border-gray-100 pb-2">{t("Settings")}</h1>
          </Link>
          <Link to="/changepincode" onClick={() => {setIsMenuOpen(false)}}>
            <h1 className="font-bold mb-4 border-b border-gray-100 pb-2">{t("Change PIN Code")}</h1>
          </Link>
          <Link to="/contact" onClick={() => {setIsMenuOpen(false)}}>
            <h1 className="font-bold mb-4 border-b border-gray-100 pb-2">{t("Contact Us")}</h1>
          </Link>
          <Link to="/refferalcode" onClick={() => {setIsMenuOpen(false)}}>
            <h1 className="font-bold mb-4 border-b border-gray-100 pb-2">{t("Refferal Code")}</h1>
          </Link>
          <Link to="/favourites" onClick={() => {setIsMenuOpen(false)}}>
            <h1 className="font-bold mb-4 border-b border-gray-100 pb-2">{t("Favourites")}</h1>
          </Link>
          <Link to="/voucherredeem" onClick={() => {setIsMenuOpen(false)}}>
            <h1 className="font-bold mb-4 border-b border-gray-100 pb-2">{t("Voucher Reedem")}</h1>
          </Link>
          <Link to="/logout" onClick={() => {setIsMenuOpen(false)}}>
            <h1 className="font-bold mb-4 border-b border-gray-100 pb-2">{t("LogOut")}</h1>
          </Link>
        </div>
      </div>
      {isLoginOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-20 bg-black bg-opacity-70">
          <div className="p-4 rounded-lg shadow-lg w-80 min-h-[40px] flex justify-center items-center bg-transparent relative">
            <span
              className="absolute top-28 -right-4 text-2xl cursor-pointer z-30"
              onClick={() => setIsLoginOpen(false)}
            >
              <i className="fas fa-times "></i>
            </span>
            <Login setIsLoginOpen={setIsLoginOpen} />
          </div>
        </div>
      )}
    </header>
  );
};
export default Navbar;