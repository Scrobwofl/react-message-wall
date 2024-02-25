import { useEffect, useState } from "react";

export default function Messages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/messages`)
      .then((response) => response.json())
      .then((data) => setMessages(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {messages.map((message) => (
        <div key={message.id}>
          <h2>{message.username}</h2>
          <p>{message.message}</p>
        </div>
      ))}
    </div>
  );
}
