import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { FaUser } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
const Signup = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!phone) {
      newErrors.phone = 'Phone number is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', { name, phone, password });
    }
  };
  const { t, i18n } = useTranslation();  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="bg-[#000080] p-6 rounded-md w-[100%] max-w-md text-center"
        onSubmit={handleSubmit}
      >
        <h2 className="font-bold text-white text-2xl mb-4">{t("Sign Up")}</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-semibold mb-2">
            {t("Name")}
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-3 text-gray-400" />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 p-3 rounded-md bg-[#001f3f] text-white outline-none"
              placeholder="Enter Your Name"
            />
          </div>
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block font-semibold mb-2 text-white">
            {t("Mobile Number")}
          </label>
          <PhoneInput
            id="phone"
            country={'eg'}
            value={phone}
            onChange={(value) => setPhone(value)}
            inputClass="w-full p-3 rounded-md bg-[#001f3f] text-white outline-none"
            dropdownClass="bg-orange-500"
            placeholder="Enter Your Mobile Number"
            excludeCountries='is'
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white font-semibold mb-2">
            {t("Password")}
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md bg-[#001f3f] text-white outline-none"
            placeholder="Enter Your Password"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-[#009688] py-2 rounded-md font-bold"
        >
          {t("Sign Up")}
        </button>
      </form>
    </div>
  );
};
export default Signup;