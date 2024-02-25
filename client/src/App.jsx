import { Route, Routes } from "react-router-dom";
import "./App.css";
import Category from "./Category";
import MessageForm from "./MessageForm";
import Home from "./Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/messageform" element={<MessageForm />} />
      <Route path="/category/:category" element={<Category />} />
    </Routes>
  );
}
