import { additemurl } from "../../Utils/urls";
import "./AddItems.css";
import { useState } from "react";

const AddItems = ({user, setuser}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

const handleSubmit = async e => {
  e.preventDefault();

  const newItem = { name, price, description };

  const updatedItems = [...(user.items || []), newItem];

  setLoading(true);
  try {
    const res = await fetch(
      additemurl,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user.email,
          items: updatedItems
        })
      }
    );

    if (!res.ok) throw new Error("Patch failed");

    const updatedUser = await res.json();
    setuser(updatedUser);

    setName("");
    setPrice("");
    setDescription("");

  } catch (err) {
    console.error(err);
    alert("Could not add item. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <form className="add-items-form" onSubmit={handleSubmit}>
      <h4>Add New Item</h4>

      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Price (per kg)
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>

      <label>
        Description
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Adding…" : "Add Item"}
      </button>
    </form>
  )
}

export default AddItems;