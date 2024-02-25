import { useState } from "react";

export default function MessageForm() {
  const [form, setForm] = useState({
    username: "",
    message: "",
    category: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:8080/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setForm({
          username: "",
          message: "",
          category: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        name="message"
        type="text"
        onChange={handleChange}
        placeholder="Message"
      />
      <select name="category" onChange={handleChange}>
        <option value="">Select category</option>
        <option value="general">General</option>
        <option value="nonsense">Nonsense</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
