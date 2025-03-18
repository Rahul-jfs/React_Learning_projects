import { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split bill with {selectedFriend.name}</h2>

      <label htmlFor="billvalue">💸Bill Value</label>
      <input
        type="text"
        id="billvalue"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="yourExpense">🧍🏻Your expense</label>
      <input
        type="text"
        id="yourExpense"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label htmlFor="fiendsExpense">👯‍♀️ {selectedFriend.name}'s expense</label>
      <input type="text" id="fiendsExpense" disabled value={paidByFriend} />

      <label htmlFor="bill">👯‍♀️Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
};

export default FormSplitBill;
