import { useState } from "react";
import AccordianItem from "./AccordianItem";

const Accordian = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordianItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          key={i + 1}
          num={i + 1}
          title={faq.title}
        >
          {faq.text}
        </AccordianItem>
      ))}
      <AccordianItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        key={10}
        num={10}
        title="Test"
      >
        <p>Allows React developers to : </p>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Lorem ipsum dolor sit amet consectetur.</li>
        </ul>
      </AccordianItem>
    </div>
  );
};
export default Accordian;
