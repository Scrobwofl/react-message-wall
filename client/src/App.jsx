import { Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./Category";

export default function App() {
  return (
  <Routes>
    <Route path="/" element={<MessageForm />} />;
    <Route path="/messages" element={<Messages />} />;
    <Route path="/category" element={<Category />} />;
  </Routes>
}
