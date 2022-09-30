import React, { useRef, useState } from "react";
import OTPWithAutoReadPlain from "./OTPAutoReadPlain";

const OTPComp = () => {
  const otpRef = useRef(null);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <OTPWithAutoReadPlain
        placeholder="Enter OTP"
        ref={otpRef}
        value={otp}
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
