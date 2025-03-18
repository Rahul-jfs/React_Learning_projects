const AccordianItem = ({ num, title, curOpen, onOpen, children }) => {
  const isOpen = num === curOpen;

  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };

  return (
    <div className={`item ${isOpen ? " open" : ""} `} onClick={handleToggle}>
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};
export default AccordianItem;
