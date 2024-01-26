// RoundedBoxes.js
import React from "react";

const QuckMenu = () => {
  return (
    <div className="flex gap-3 p-2 justify-center items-center">
         {/* Home */}
         <div className="text-center">
          <div className="rounded-full p-2 bg-blue-500 text-white inline-block">
            <i className="fas fa-home text-xl"></i>
          </div>
          <p className="text-xl font-semibold mb-2 text-white">Home</p>
        </div>

        {/* Telegram */}
        <div className="text-center">
          <div className="rounded-full p-2 bg-teal-500 text-white inline-block">
            <i className="fas fa-paper-plane text-xl"></i>
          </div>
          <p className="text-xl font-semibold mb-2 text-white">Telegram</p>
        </div>

        {/* WhatsApp */}
        <div className="text-center">
          <div className="rounded-full p-2 bg-green-500 text-white inline-block">
            <i className="fab fa-whatsapp text-xl"></i>
          </div>
          <p className="text-xl font-semibold mb-2 text-white">WhatsApp</p>
        </div>

        {/* Service */}
        <div className="text-center">
          <div className="rounded-full p-2 bg-orange-500 text-white inline-block">
            <i className="fas fa-cogs text-xl"></i>
          </div>
          <p className="text-xl font-semibold mb-2 text-white">Service</p>
        </div>

        {/* Team */}
        <div className="text-center">
          <div className="rounded-full p-2 bg-purple-500 text-white inline-block">
            <i className="fas fa-users text-xl"></i>
          </div>
          <p className="text-xl font-semibold mb-2 text-white">Team</p>
        </div>
    </div>
  );
};

export default QuckMenu;
