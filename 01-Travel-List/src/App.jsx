import "./App.css";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Status from "./components/Status";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (item) => {
    console.log("handle", item);
    setItems((items) => [...items, item]);
  };

  const handleDelete = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleToggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleClearItem = () => {
    const deleteAllConfirmed = confirm(
      "Are you sure you want to delete all the items?"
    );
    if (deleteAllConfirmed) {
      setItems([]);
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form addItem={handleAddItem} />
      <PackingList
        items={items}
        deleteItem={handleDelete}
        onToggleItem={handleToggleItem}
        clearItem={handleClearItem}
      />
      <Status items={items} />
    </div>
  );
}

export default App;
