/**
 * Component for OTP Input field  which Auto-reads the OTP
 * @param {Ref} ref Reference that needs to be passed to the input element
 * @param {Function} otpAutoReadSuccess Function to be called after OTP is successfully read
 * @param {Function} otpAutoReadFailure Function to be called after OTP read is failed
 * @param {number} otpDetectionInterval Duration till which we want to listen for OTP (in seconds)
 * @param {Function} otpAutoReadTimeout Function to be called after OTP detect time is complete
 * @returns An jsx element consisting of input OTP field with auto-read functionality with plain input element
 */

import React, { useEffect, forwardRef } from "react";
import clsx from 'clsx';
import { detectOTPFunctionality } from "./detectOTPFunctionality";

const OTPWithAutoReadPlain = forwardRef(
  (
    {
      otpAutoReadSuccess,
      otpAutoReadFailure,
      otpDetectionInterval,
      otpAutoReadTimeout,
      ...inputProps
    },
    ref
  ) => {
    const inputClassName = clsx("od-text-field medium", inputProps.className);

    useEffect(() => {
      if (!ref || !ref.current) return;

      alert("Listening for OTP");
      console.log(ref);

      // functionality to auto-read the OTP from browser
      detectOTPFunctionality(
        ref.current,
        (otp) => {
          // prop based function
          otpAutoReadSuccess && otpAutoReadSuccess(otp);
        },
        (err) => {
          otpAutoReadFailure && otpAutoReadFailure(err);
        },
        otpDetectionInterval,
        () => {
          // nothing to be executed after timer ends
          otpAutoReadTimeout && otpAutoReadTimeout();
        }
      );
    }, []);

    return <input className={inputClassName} ref={ref} {...inputProps} />;
  }
);

export default OTPWithAutoReadPlain;
