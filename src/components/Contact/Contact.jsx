import { motion } from 'framer-motion';
import slider from '../../assets/slider.webp';
import lebana from '../../assets/lebnan.jpg';
import angola from '../../assets/angola.jpg';
import egypt from '../../assets/egypt.svg';
import iraq from '../../assets/iraq.svg';
import syria from '../../assets/syria.png';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'; 
const Contact = () => {
  const { t, i18n } = useTranslation();  
  return (
    <main className="w-full px-4 lg:px-8 py-8 bg-gradient-to-br from-green-100 via-white to-gray-100"> 
      <motion.div
        className="flex justify-center items-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-[#009688] font-extrabold text-4xl lg:text-5xl shadow-lg">
          {t("Contact Us")}
        </h1>
      </motion.div> 
      <motion.div
        className="flex justify-center items-center w-full mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src={slider}
          alt="slider"
          className="w-full lg:w-[70%] rounded-xl shadow-lg transition-transform transform hover:scale-105"
        />
      </motion.div> 
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-[#009688] font-bold text-3xl mb-2">
          {t("Help Center")}
        </h1>
        <p className="text-gray-600 max-w-[80%] mx-auto leading-7">
          {t("Please get in touch, and we will be happy to assist you. Receive prompt customer support by selecting your preferred contact method.")}
        </p>
      </motion.div> 
      <motion.div
        className="space-y-3 mb-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        {[
          { label: t("Support"), value: '96170877067' },
          { label: t('Email'), value: 'support@sama-app.com' },
          { label: t('WhatsApp'), value: '96170877067' },
        ].map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <h1 className="font-bold text-[#009688]">{item.label}:</h1>
            <h1 className="font-semibold text-gray-700 ml-2">{item.value}</h1>
          </div>
        ))}
      </motion.div> 
      <motion.h1
        className="text-center font-bold text-[#009688] text-3xl mb-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        {t("Make Deposit")}
      </motion.h1> 
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {[
          { img: lebana, country: t('Lebanon') },
          { img: angola, country: t('Angola') },
          { img: syria, country: t('SYRIA') },
          { img: egypt, country: t('EGYPT') },
          { img: iraq, country: t('IRAQ') },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center gap-4 bg-[#009688] hover:bg-[#00796b] rounded-full p-4 shadow-md transition-all"
            whileHover={{ scale: 1.05 }}
          >
          <Link to={`/payment-methods/${item.country}`}> 
            <img
              src={item.img}
              alt={item.country}
              className="rounded-full w-12 h-12 shadow-lg"
            />
            <h1 className="text-white font-bold text-lg">{item.country}</h1>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Contact;
