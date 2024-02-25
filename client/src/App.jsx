import { Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./Category";
import MessageForm from "./MessageForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MessageForm />} />
      <Route path="/category/:category" element={<Category />} />
    </Routes>
  );
}
