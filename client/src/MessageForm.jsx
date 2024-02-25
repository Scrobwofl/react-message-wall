import { useState } from "react";

export default function MessageForm() {
  const [input, setInput] = useState("");
  const [form, setForm] = useState({
    username: "",
    message: "",
    category: "",
  });

  function handleChange(e) {
    console.log(e);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <>
      <form>
        <input name="username" type="text" onChange={handleChange} id="01" />
        <input name="message" type="text" onChange={handleChange} id="02" />
        <input name="category" type="text" onChange={handleChange} id="03" />
      </form>
      <p>You inputed: {input} </p>
    </>
  );
}
