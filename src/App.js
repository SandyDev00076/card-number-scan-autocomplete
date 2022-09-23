import React from "react";

const App = () => {
  return (
    <form>
      <div>
        <label for="nameoncard">Name on Card</label>
        <input
          type="text"
          id="nameoncard"
          name="nameoncard"
          autocomplete="cc-name"
        />
      </div>

      <div>
        <label for="ccnumber">Credit Card Number</label>
        <input
          type="text"
          id="ccnumber"
          name="ccnumber"
          autocomplete="cc-number"
        />
      </div>
      <div>
        <label for="cc-exp-month">Expiration Month</label>
        <input
          type="number"
          id="cc-exp-month"
          name="cc-exp-month"
          autocomplete="cc-exp-month"
        />
      </div>
      <div>
        <label for="cc-exp-year">Expiration Year</label>
        <input
          type="number"
          id="cc-exp-year"
          name="cc-exp-year"
          autocomplete="cc-exp-year"
        />
      </div>
      <div>
        <label for="cvv2">CVV</label>
        <input type="text" id="cvv2" name="cvv2" autocomplete="cc-csc" />
      </div>
      <button>SUBMIT</button>
    </form>
  );
};

export default App;
