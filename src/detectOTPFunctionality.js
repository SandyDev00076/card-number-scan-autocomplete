/**
 * Modularized function for listening to OTP
 * @param {HTMLElement} inputElement Element which we need to fill after OTP is received
 * @param {Function} onOTPReceiveSuccess Function to be called when OTP has been successfully received
 * @param {Function} onOTPReceiveFail Function to be called when OTP cannot be retrieved
 * @param {number} duration Duration till which we want to listen for OTP (in seconds)
 * @returns An abort controller which you can abort if you want to stop listening for OTP
 */
export async function detectOTPFunctionality(
  onOTPReceiveSuccess,
  onOTPReceiveFail,
  duration,
  afterTimerExpiry
) {
  // if OTP is supported
  if ("OTPCredential" in window) {
    alert("OTP is supported");
    // a variable for abort controller which will be returned
    const ac = new AbortController();

    // check for duration completion
    if (duration && typeof duration === "number") {
      setTimeout(() => {
        ac.abort();
        if (afterTimerExpiry) afterTimerExpiry();
      }, duration * 1000);
    }

    // when DOM has loaded
    
    try {
      alert("Trying to get OTP");
      const otp = await navigator.credentials.get({
        otp: { transport: ["sms"] },
        signal: ac.signal,
      });
      onOTPReceiveSuccess(otp.code);
      ac.abort();
    } catch (err) {
      ac.abort();
      onOTPReceiveFail(err);
    }

    return ac;
  }
}
