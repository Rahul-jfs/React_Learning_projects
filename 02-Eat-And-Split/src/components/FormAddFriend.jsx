import { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ onAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const id = crypto.randomUUID();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    const newFriend = { name, image: `${image}?u=${id}`, balance: 0, id };
    onAddFriend(newFriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="friendName">👯‍♀️Friend Name</label>
      <input
        type="text"
        id="friendName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="friendImg">🖼️Image URL</label>
      <input
        type="text"
        id="friendImg"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
};

export default FormAddFriend;
