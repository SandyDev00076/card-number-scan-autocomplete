import React from "react";

const App = () => {
  function onCardNumberChange(val) {
    console.log(val);
  }

  return (
    <form>
      <div>
        <label htmlFor="nameoncard">Name on Card</label>
        <input
          type="text"
          id="nameoncard"
          name="nameoncard"
          autoComplete="cc-name"
        />
      </div>

      <div>
        <label htmlFor="ccnumber">Credit Card Number</label>
        <input
          type="text"
          id="ccnumber"
          name="ccnumber"
          autoComplete="cc-number"
          onChange={(e) => onCardNumberChange(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cc-exp-month">Expiration Month</label>
        <input
          type="number"
          id="cc-exp-month"
          name="cc-exp-month"
          autoComplete="cc-exp-month"
        />
      </div>
      <div>
        <label htmlFor="cc-exp-year">Expiration Year</label>
        <input
          type="number"
          id="cc-exp-year"
          name="cc-exp-year"
          autoComplete="cc-exp-year"
        />
      </div>
      <div>
        <label htmlFor="cvv2">CVV</label>
        <input type="text" id="cvv2" name="cvv2" autoComplete="cc-csc" />
      </div>
      <button>SUBMIT</button>
    </form>
  );
};

export default App;
