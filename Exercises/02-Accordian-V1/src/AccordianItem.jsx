import { useState } from "react";

const AccordianItem = ({ num, title, text }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className={`item ${open ? " open" : ""} `} onClick={handleToggle}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{open ? "-" : "+"}</p>
      {open && <div className="content-box">{text}</div>}
    </div>
  );
};
export default AccordianItem;
