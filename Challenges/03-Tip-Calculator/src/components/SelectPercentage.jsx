const SelectPercentage = ({ children, tip, setTip }) => {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => setTip(e.target.value)}>
        <option value="dissatisfied">Dissatisfied (0%)</option>
        <option value="okay">It was okay (5%)</option>
        <option value="good">It was good (10%)</option>
        <option value="amazing">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
};

export default SelectPercentage;
