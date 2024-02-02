import React from 'react';

const Rules = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020713] text-black py-10 pb-16">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-[90%]">
        <h2 className="text-2xl font-bold mb-4">Investment Rules</h2>

        <ul className="list-disc pl-4">
          <li className="mb-2">Only invest what you can afford to lose.</li>
          <li className="mb-2">Diversify your investments for risk management.</li>
          <li className="mb-2">Stay informed about market trends.</li>
          <li className="mb-2">Review your investment portfolio regularly.</li>
        </ul>

        <p className="mt-4">
          Please carefully read and understand our terms and conditions before making any investment.
        </p>
      </div>
    </div>
  );
};

export default Rules;
