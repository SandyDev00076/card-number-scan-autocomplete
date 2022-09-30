import React, { useRef, useState } from "react";
import OTPWithAutoReadPlain from "./OTPAutoReadPlain";
import './OTP.scss';

const OTPComp = () => {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>v9</h1>
      <OTPWithAutoReadPlain
        placeholder="Enter OTP"
        value={otp}
        className="otp-input"
        onChange={(e) => setOtp(e.target.value)}
        otpAutoReadSuccess={(val) => setOtp(val)}
        otpAutoReadFailure={(err) => {
          console.error(err);
          setError(true);
        }}
      />
      <button>Submit</button>
      {error && <h4 style={{ color: red }}>Some error occurred</h4>}
    </form>
  );
};

export default OTPComp;
