// components/LoginPageContent.tsx
import React, { useState } from 'react';
import vonage from '../../lib/verify';

const LoginPageContent = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [requestId, setRequestId] = useState('');

  const handlePhoneVerification = async () => {
    try {
      const response = await vonage.verify.start({
        number: phoneNumber,
        brand: "YourApp" // Replace with your brand name
      });
      setRequestId(response.request_id);
      console.log("Verification request sent:", response);
    } catch (error) {
      console.error("Error sending verification request:", error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const response = await vonage.verify.check({
        request_id: requestId,
        code: verificationCode
      });
      console.log("Verification status:", response);
      // Redirect to the next page upon successful verification
    } catch (error) {
      console.error("Error verifying code:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handlePhoneVerification}>Send Verification Code</button>
      <br />
      <input
        type="text"
        placeholder="Enter verification code"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
      />
      <button onClick={handleVerifyCode}>Verify Code</button>
    </div>
  );
};

export default LoginPageContent;
