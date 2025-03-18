const Output = ({ bill, average }) => {
  const total = Number(bill) + Number((average * bill) / 100);

  return (
    <h2>
      You pay $ {total} ($ {bill} + $ {average} tip)
    </h2>
  );
};

export default Output;
