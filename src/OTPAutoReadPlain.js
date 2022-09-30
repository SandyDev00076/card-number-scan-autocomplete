/**
 * Component for OTP Input field  which Auto-reads the OTP
 * @param {Ref} ref Reference that needs to be passed to the input element
 * @param {Function} otpAutoReadSuccess Function to be called after OTP is successfully read
 * @param {Function} otpAutoReadFailure Function to be called after OTP read is failed
 * @param {number} otpDetectionInterval Duration till which we want to listen for OTP (in seconds)
 * @param {Function} otpAutoReadTimeout Function to be called after OTP detect time is complete
 * @returns An jsx element consisting of input OTP field with auto-read functionality with plain input element
 */

import React, { useEffect } from "react";
import clsx from "clsx";
import { detectOTPFunctionality } from "./detectOTPFunctionality";

const OTPWithAutoReadPlain = ({
  otpAutoReadSuccess,
  otpAutoReadFailure,
  otpDetectionInterval,
  otpAutoReadTimeout,
  ...inputProps
}) => {
  const inputClassName = clsx("od-text-field medium", inputProps.className);

  useEffect(() => {
    // functionality to auto-read the OTP from browser
    detectOTPFunctionality(
      (otp) => {
        // prop based function
        alert("success callback called")
        otpAutoReadSuccess && otpAutoReadSuccess(otp);
      },
      (err) => {
        alert("error callback called")
        otpAutoReadFailure && otpAutoReadFailure(err);
      },
      otpDetectionInterval,
      () => {
        otpAutoReadTimeout && otpAutoReadTimeout();
      }
    );
  }, []);

  return (
    <input
      className={inputClassName}
      autoComplete="one-time-code"
      required
      {...inputProps}
    />
  );
};

export default OTPWithAutoReadPlain;
