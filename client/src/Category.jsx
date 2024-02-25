import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Category() {
  const { category } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/messages/category/${category}`)
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error(error));
  }, [category]);

  return (
    <div>
      <h1>{category}</h1>
      {messages.map((message) => (
        <div key={message.id}>
          <h2>{message.username}</h2>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
}
