import React from "react";
import ReactQR from "react-qr-code";

const QRCodeLogin: React.FC<{ email: string }> = ({ email }) => {
  const qrCodeData = `https://your-app.com/auth?email=${email}`;

  return (
    <div className="mt-8 text-center">
      <p className="text-gray-500 mb-4">Scan this QR code to log in:</p>
      <ReactQR value={qrCodeData} size={256} />
      <p className="text-center text-sm text-gray-500 mt-4">
        After scanning the QR code with your mobile app, you will be logged in.
      </p>
    </div>
  );
};

export default QRCodeLogin;
