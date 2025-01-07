import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ChangePinCode = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [currentPin, setCurrentPin] = useState("");
  const [newPin, setNewPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const [error, setError] = useState("");
  const handleSave = () => { 
    if (newPin !== confirmPin) {
      setError("The new PIN does not match the confirmation PIN.");
      return;
    }
    if (newPin.length < 4) {
      setError("The PIN must be at least 4 digits.");
      return;
    }
    setError("");
    console.log("PIN changed successfully");    
    navigate("/");  
  };
  const handleCancel = () => {
    navigate("/");  
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#000080]">
      <div className="bg-[#001f3f] p-6 rounded-md w-[100%] max-w-md text-center">
        <h2 className="text-white text-2xl font-bold mb-4">{t("Change PIN Code")}</h2>
        <p className="text-white opacity-70 mb-6">
          {t("Please enter your current and new PIN code.")}
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="space-y-4">
          <input
            type="password"
            placeholder="Current PIN"
            value={currentPin}
            onChange={(e) => setCurrentPin(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="New PIN"
            value={newPin}
            onChange={(e) => setNewPin(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm New PIN"
            value={confirmPin}
            onChange={(e) => setConfirmPin(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-white py-2 px-4 rounded-md font-bold hover:bg-gray-600"
          >
            {t("Cancel")}
          </button>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-2 px-4 rounded-md font-bold hover:bg-green-600"
          >
            {t("Save")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePinCode;
