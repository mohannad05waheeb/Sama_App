import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';
import Signup from './signup'; 
import ForgetPassword from './forgetPassword';  
import { useTranslation } from "react-i18next";
const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isForgetPasswordOpen, setIsForgetPasswordOpen] = useState(false); 
  const navigate = useNavigate();
  const handlePhoneChange = (value) => {
    setPhone(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!phone) {
      newErrors.phone = 'Phone number is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', { phone, password });
    }
  };
  const toggleSignup = () => {
    setIsSignupOpen(true);
  };
  const toggleForgetPassword = () => {
    setIsForgetPasswordOpen(true);  
  };
  const { t, i18n } = useTranslation();  
  return (
    <div className="min-h-screen flex items-center justify-center">
      {!isSignupOpen && !isForgetPasswordOpen && (   
        <form
          className="bg-[#000080] p-6 rounded-md w-[100%] max-w-md text-center"
          onSubmit={handleSubmit}
        >
          <h2 className="font-bold text-white text-2xl mb-2">{t("Lets You In")}</h2>
          <p className="opacity-70 text-white mb-6">{t("Hey, You Have Been Missed!")}</p>
          <div className="mb-4">
            <PhoneInput
              country={'eg'}
              value={phone}
              onChange={handlePhoneChange}
              inputClass="w-full p-3 rounded-md outline-none"
              buttonClass="bg-orange-500 hover:bg-orange-600"
              dropdownClass="bg-orange-500"
              placeholder="Enter Your Mobile Number"
              excludeCountries='is'
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          <div className="mb-4">
          <label htmlFor="password" className="block text-white font-bold mb-2">
            {t("Password:")}
          </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded-md bg-[#001f3f] text-white outline-none"
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center text-white">
              <input
                type="checkbox"
                className="mr-2 accent-yellow-500"
                />
              {t("Remember me")}
            </label>
            <button
              type="button"
              onClick={toggleForgetPassword}  
              className="text-red-500 hover:underline"
              >
              {t("Forget Password?")} 
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-[#009688] py-2 rounded-md font-bold"
          >
            {t("Sign in")}
          </button>
          <button
            type="button"
            onClick={toggleSignup}
            className="w-full bg-yellow-500 text-[#009688] py-2 rounded-md font-bold mt-4"
          >
            {t("Sign Up")}
          </button>
        </form>
      )}
      {isForgetPasswordOpen && (   
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-70 z-20">
          <ForgetPassword />
        </div>
      )}
      {isSignupOpen && (
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
          <Signup />
        </div>
      )}
    </div>
  );
};
export default Login;