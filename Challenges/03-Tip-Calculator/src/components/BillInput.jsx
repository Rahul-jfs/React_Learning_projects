const BillInput = ({ bill, setBill }) => {
  return (
    <div>
      <p>
        How much was the bill?
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </p>
    </div>
  );
};

export default BillInput;
