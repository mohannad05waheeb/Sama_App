import { Link, useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
const PaymentMethods = () => {
  const { country } = useParams();
  const paymentMethods = {
    لبنان: [
      { id: 1, name: 'Binance', image: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png' },
      { id: 2, name: 'WishMoney', image: 'https://via.placeholder.com/150?text=WishMoney' }
    ],
    أنغولا: [
      { id: 3, name: 'Paypal', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
      { id: 4, name: 'Visa', image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png' }
    ],
    سوريا: [
      { id: 5, name: 'WesternUnion', image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Western_Union_logo.svg' },
      { id: 6, name: 'Cod', image: 'https://via.placeholder.com/150?text=Cash+on+Delivery' }
    ],
    مصر: [
      { id: 7, name: 'Fawry', image: 'https://seeklogo.com/images/F/fawry-logo-3582E7ED50-seeklogo.com.png' },
      { id: 8, name: 'Visa', image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png' }
    ],
    العراق: [
      { id: 9, name: 'ZainCash', image: 'https://zaincash.iq/assets/images/zaincash-logo-en.png' },
      { id: 10, name: 'Paypal', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' }
    ],
  };
  const { t } = useTranslation();
  const methods = paymentMethods[country];
  return (
    <main className="w-full px-4 py-8 bg-gradient-to-br from-green-100 via-white to-gray-100">
      <h1 className="text-[#009688] font-extrabold text-4xl text-center mb-6">
        {t('Payment Methods For')} {t(country)}
      </h1>
      {methods ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {methods.map((method) => (
            <li
              key={method.id}
              className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg"
            >
              <img
                src={method.image}
                alt={method.name}
                className="w-12 h-12 object-contain"
              />
              <Link
                to={`/payment-method/${method.id}`}
                className="font-bold text-gray-700 hover:underline"
              >
                {t(method.name)}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">
          {t("No payment methods available for this country.")}
        </p>
      )}
    </main>
  );
};
export default PaymentMethods;
