import { useParams, useNavigate } from 'react-router-dom';

const PaymentMethodDetails = () => {
  const { methodId } = useParams();
  const navigate = useNavigate();

  const paymentMethodDetails = {
    1: {
      name: 'Binance',
      supportedCurrency: 'BTC, ETH, USDT',
      minDeposit: '$50',
      processingTime: '5 to 20 minutes',
      id: '123456',
      phoneNumber: '+1234567890',
    },
    2: {
      name: 'WishMoney',
      supportedCurrency: 'USD',
      minDeposit: '$20',
      processingTime: '5 to 15 minutes',
      id: '234567',
      phoneNumber: '+9876543210',
    },
    3: {
      name: 'Paypal',
      supportedCurrency: 'USD, EUR',
      minDeposit: '$10',
      processingTime: '1 to 10 minutes',
      id: '345678',
      phoneNumber: '+1928374650',
    },
    4: {
      name: 'Visa',
      supportedCurrency: 'All supported by Visa',
      minDeposit: '$5',
      processingTime: 'Instant',
      id: '456789',
      phoneNumber: '+1230987654',
    },
    5: {
      name: 'WesternUnion',
      supportedCurrency: 'USD',
      minDeposit: '$30',
      processingTime: '20 to 30 minutes',
      id: '567890',
      phoneNumber: '+3216549870',
    },
    6: {
      name: 'Cod',
      supportedCurrency: 'Local currency',
      minDeposit: '$10',
      processingTime: '5 to 20 minutes',
      id: '678901',
      phoneNumber: '+4567891230',
    },
    7: {
      name: 'Fawry',
      supportedCurrency: 'EGP',
      minDeposit: '50 EGP',
      processingTime: '10 to 20 minutes',
      id: '789101',
      phoneNumber: '+201234567890',
    },
    8: {
      name: 'ZainCash',
      supportedCurrency: 'IQD',
      minDeposit: '25,000 IQD',
      processingTime: '5 to 15 minutes',
      id: '890123',
      phoneNumber: '+964123456789',
    },
  };

  const method = paymentMethodDetails[methodId];

  if (!method) {
    return <p className="text-center text-red-500 font-semibold">Payment method not found.</p>;
  }

  const handleCancel = () => {
    navigate(-1); // Navigate back
  };

  const handleDone = () => {
    alert('Transaction completed successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div
        className="max-w-xl w-full mx-4 p-6 bg-white shadow-lg rounded-lg animate-fadeIn"
        style={{ animationDuration: '1s' }}
      >
        <h1 className="text-3xl font-extrabold mb-4 text-purple-600">{method.name}</h1>
        <div className="space-y-2 text-gray-700">
          <p>
            <strong className="text-purple-500">Supported Currency:</strong> {method.supportedCurrency}
          </p>
          <p>
            <strong className="text-purple-500">Minimum Deposit:</strong> {method.minDeposit}
          </p>
          <p>
            <strong className="text-purple-500">Processing Time:</strong> {method.processingTime}
          </p>
          <p>
            <strong className="text-purple-500">ID:</strong> {method.id}
          </p>
          <p>
            <strong className="text-purple-500">Phone Number:</strong> {method.phoneNumber}
          </p>
        </div>
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Enter Value"
            className="w-full p-3 border rounded border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="text"
            placeholder="Sender Name"
            className="w-full p-3 border rounded border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded transition duration-300"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleDone}
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300"
            >
              Done
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentMethodDetails;
