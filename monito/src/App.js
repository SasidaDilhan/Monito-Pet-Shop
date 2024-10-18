import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import OnePet from "./components/OnePet";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/one-pet" element={<OnePet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
