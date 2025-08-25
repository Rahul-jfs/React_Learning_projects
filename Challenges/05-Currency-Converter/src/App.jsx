import { useEffect, useState } from "react";
import CurrencySelector from "./CurrencySelector";

const App = () => {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState("");

  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setResult(amount);
    } else {
      async function calCurr() {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
        );
        const data = await res.json();
        setResult(data.rates[toCurrency]);
      }
      calCurr();
    }
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <CurrencySelector
        currency={fromCurrency}
        onSelect={(cur) => setFromCurrency(cur)}
      />
      <CurrencySelector
        currency={toCurrency}
        onSelect={(cur) => setToCurrency(cur)}
      />
      {result && (
        <div>
          Result: {result} {toCurrency}
        </div>
      )}
    </div>
  );
};

export default App;
