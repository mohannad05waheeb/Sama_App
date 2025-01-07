import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const ReferralCode = () => {
  const { t } = useTranslation();
  const [referralCode, setReferralCode] = useState("");
  const [message, setMessage] = useState("");
  const [isCodeValid, setIsCodeValid] = useState(null);
  const handleCodeChange = (e) => {
    setReferralCode(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (referralCode === "EXAMPLE123") { 
      setIsCodeValid(true);
      setMessage(t("valid Code Message"));
    } else {
      setIsCodeValid(false);
      setMessage(t("invalid Code Message"));
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t("Refferal Code")}</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="referralCode" className="block text-lg font-semibold text-gray-800">{t("Enter Referral Code")}</label>
            <input
              type="text"
              id="referralCode"
              value={referralCode}
              onChange={handleCodeChange}
              className="w-full p-3 rounded-md bg-[#001f3f] text-white outline-none"
              placeholder={t("Enter Refferal Code")}
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-yellow-500 text-[#009688] py-2 rounded-md font-bold"
            >
              {t("Check Code Button")}
            </button>
          </div>
        </form>
        {message && (
          <div
            className={`p-4 mt-4 text-center rounded-md ${isCodeValid ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {message}
          </div>
        )}
        <div className="mt-6 text-center">
          <p className="text-gray-700">{t("share Referral Code With You Friends")}</p>
        </div>
      </motion.div>
    </div>
  );
};
export default ReferralCode;