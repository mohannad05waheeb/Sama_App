import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useTranslation } from "react-i18next";
const ForgetPassword = () => {
  const [phone, setPhone] = useState(''); 
  const { t, i18n } = useTranslation();  
  return (
    <div className="min-h-screen flex items-center justify-center"> 
      <form className="bg-[#000080] p-6 rounded-md w-[100%] max-w-md text-center">
        <h2 className="font-bold text-white text-2xl mb-4">{t("Forget Password?")}</h2>        
        <label htmlFor="phone" className="block font-semibold mb-2 text-white">
          {t("Mobile Number")}
        </label>
        <PhoneInput
          id="phone"
          country={'eg'}
          value={phone}  
          onChange={(value) => setPhone(value)}  
          inputClass="w-full p-3 rounded-md bg-[#001f3f] outline-none"
          dropdownClass="bg-orange-500"
          placeholder="Enter Your Mobile Number"
        />
        <button className='bg-yellow-500 text-[#009688] font-bold w-full mt-2 p-2 rounded-md'>
          {t("Send OPT")}
        </button>
      </form>
    </div>
  );
};
export default ForgetPassword;