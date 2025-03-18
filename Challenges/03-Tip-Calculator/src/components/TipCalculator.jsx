import { useState } from "react";
import BillInput from "./BillInput";
import Output from "./Output";
import Reset from "./Reset";
import SelectPercentage from "./SelectPercentage";

const TipCalculator = () => {
  const values = { dissatisfied: 0, okay: 5, good: 10, amazing: 20 };

  const [bill, setBill] = useState(0);
  const [yourTip, setYourTip] = useState("dissatisfied");
  const [friendTip, setFriendTip] = useState("dissatisfied");

  const average = (values[yourTip] + values[friendTip]) / 2;

  const handleReset = () => {
    console.log("reset called");
    setBill("");
    setYourTip("dissatisfied");
    setFriendTip("dissatisfied");
  };

  return (
    <div>
      <BillInput bill={bill} setBill={setBill} />
      <SelectPercentage tip={yourTip} setTip={setYourTip}>
        <p>How did you like the service?</p>
      </SelectPercentage>
      <SelectPercentage tip={friendTip} setTip={setFriendTip}>
        <p>How did your friend like the service?</p>
      </SelectPercentage>
      {bill > 0 && (
        <div>
          <Output bill={bill} average={average} />
          <Reset onReset={handleReset} />
        </div>
      )}
    </div>
  );
};

export default TipCalculator;
