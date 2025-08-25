const CurrencySelector = ({ currency, onSelect }) => {
  return (
    <select value={currency} onChange={(e) => onSelect(e.target.value)}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
};

export default CurrencySelector;
